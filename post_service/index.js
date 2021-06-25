const express = require('express')
const { randomBytes } = require('crypto')
const cors=require('cors')

const app = express()

// parse  data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());
app.use(cors())
const posts = {}
const commentbyId = {}

app.get('/posts', (req, res) => {
    res.send(posts)
})
app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body

    posts[id] = {
        id, title
    };
    res.status(201).send(posts)
})


app.get('/posts/:id/comment', (req, res) => {
    res.send(commentbyId)
})

app.post('/posts/:id/comment', (req, res) => {
    const commentid = randomBytes(4).toString('hex')
    const { content } = req.body
    const comments = commentbyId[req.params.id] || [];
    comments.push({ id: commentid, content })
    commentbyId[req.params.id] = comments
    res.status(201).send(comments)

})

app.listen(4000, (req, res) => {
    console.log(" post service server is running")
})


