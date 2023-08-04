const express = require("express")

const path = require("path")

const app = express()

app.use(express.static("public"))

const port=process.env.PORT||3030

app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname,"view/index.html"))
})
app.get("/home/register",(req,res)=>{
    res.sendFile(path.join(__dirname,"view/register.html"))
})
app.get("/home/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"view/login.html"))
})

app.listen(port,()=>{
    console.log(`Servidor corriendo en ${port}`)
})


