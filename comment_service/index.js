const express = require('express')
const { randomBytes } = require('crypto')
const cors = require('cors');
const { default: axios } = require('axios');
const app = express()

// parse  data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());
app.use(cors())

const commentbyId = {}
console.log(commentbyId)

app.get('/posts/:id/comment', (req, res) => {
    res.send(commentbyId[req.params.id] || [])
})

app.post('/posts/:id/comment', async (req, res) => {
    const commentid = randomBytes(4).toString('hex')
    const { content } = req.body
    const comments = commentbyId[req.params.id] || [];
    comments.push({ id: commentid, content: content })
    commentbyId[req.params.id] = comments

    await axios.post('http://localhost:4005/events', {
        type: "CommentCreated",
        data: {
            id: commentbyId,
            content,
            postId: req.params.id
        }

    })
    res.status(201).send(comments)

})

app.post('/events', (req, res) => {
    console.log("Event:", req.body.type)
})

app.listen(4001, (req, res) => {
    console.log(" comment service server is running 4001")
})
