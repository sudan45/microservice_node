const express = require('express');
const cors = require('cors');
const axios = require('axios')

const app = express();
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());
app.use(cors());

const posts = {};

const handleevent = (type, data) => {
  if (type === 'PostCreated') {
    const { id, title } = data;

    posts[id] = { id, title, comments: [] };
  }

  if (type === 'CommentCreated') {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    post.comments.push({ id, content, status });
  }

  if (type === 'CommentUpdated') {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    const comment = post.comments.find(comment => {
      return comment.id === id;
    });

    comment.status = status;
    comment.content = content;
  }
}

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;

  handleevent(type, data)

  res.send({});
});

app.listen(4002, async () => {
  console.log('Listening on 4002');
  const res = await axios.get('http://localhost:4005/events')

  for (let event of res.data) {
    console.log("processing the event of ", event.type)
    handleevent(event.type, event.data)
  }
});
