const express = require("express")
const app = express()

const HOST = process.env.HOST
const PORT = process.env.PORT

app.listen(PORT, (req, res) => {
    console.log(`Server is running at ${HOST}:${PORT}`);
})

const posts = require("./db.js")
app.get("/", (req, res) => {
    //res.send("Siamo all'Index")

    res.status(200).json({
        data: posts,
    })
})

app.get("/:slug", (req, res) => {
    //console.log(req.params.slug);

    let post = posts.find(post => post.slug === (req.params.slug))
    console.log(post);
    if (!post) {
        return res.status(404).json({
            error: `404! Not found!`
        })
    }

    res.json({
        data: post
    })
})