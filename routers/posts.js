const posts = require("../db.js")

const index = app.get("/", (req, res) => {
    //res.send("Siamo all'Index")

    res.status(200).json({
        data: posts,
    })
})

const show = app.get("/:slug", (req, res) => {
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

module.exports = {
    index,
    show
}