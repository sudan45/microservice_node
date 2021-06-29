const express = require('express')
const { randomBytes } = require('crypto')
const cors=require('cors')
const app = express()

// parse  data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());
app.use(cors())

const commentbyId = {}
console.log(commentbyId)

app.get('/posts/:id/comment', (req, res) => {
    res.send(commentbyId[req.params.id]|| [])
})

app.post('/posts/:id/comment', (req, res) => {
    const commentid = randomBytes(4).toString('hex')
    const { content } = req.body
    const comments = commentbyId[req.params.id] || [];
    comments.push({ id: commentid, content:content })
    commentbyId[req.params.id] = comments
    res.status(201).send(comments)

})

app.listen(4001, (req, res) => {
    console.log(" comment service server is running")
})
