const express = require("express")

const path = require("path")

const app = express()

app.use(express.static("public"))

app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname,"view/index.html"))
})
app.get("/home/register",(req,res)=>{
    res.sendFile(path.join(__dirname,"view/register.html"))
})
app.get("/home/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"view/login.html"))
})

app.listen(3030,()=>{
    console.log("server abierto")
})