const posts= require("../db.js")

const index= (req, res) => {
    //res.send("Siamo all'Index")
    
    //console.log(title);
    
    posts.forEach(post => {
        let { title, slug, content, image, tags } = post
        let markup = `
        <li> 
        ${title}
        <p>${content}</p>
        </li>`
        res.send(markup)
    })
    
    
}

const show= (req, res) => {

    const post = posts.find(post => post.slug === (req.params.slug))
    console.log(post);
    if (!post) {
        return res.status(404).json({
            error: `404! Not found!`
        })
    }

    res.json({
        data: post
    })
}

module.exports = {
    index,
    show
}