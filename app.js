const express = require("express")
const app = express()
const postRouter = require("./routers/posts.js")

const HOST = process.env.HOST
const PORT = process.env.PORT

app.listen(PORT, (req, res) => {
    console.log(`Server is running at ${HOST}:${PORT}`);
})

app.use("/post", postRouter)
