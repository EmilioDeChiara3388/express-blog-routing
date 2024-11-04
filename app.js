const express = require("express")
const app = express()
const postController = require("./routers/posts.js")

const HOST = process.env.HOST
const PORT = process.env.PORT

app.listen(PORT, (req, res) => {
    console.log(`Server is running at ${HOST}:${PORT}`);
})

//const posts = require("./db.js")
app.get("/", postController.index)
   
app.get("/:slug", postController.show)