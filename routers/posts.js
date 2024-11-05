const express = require("express")
const router = express.Router()
const postController = require("../controller/postController.js")

router.get("/", postController.index)
   
router.get("/:slug", postController.show)

router.post("/", postController.store)

module.exports= router