const express= require("express")
const app= express()

const HOST= process.env.HOST
const PORT= process.env.PORT

app.listen(PORT, (req, res) =>{
    console.log(`Server is running at ${HOST}:${PORT}`);
})

app.get("/", (req, res) =>{
    res.send("Siamo all'Index")
})