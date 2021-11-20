//1.import express
const express=require('express')
//2.init express
const app=express()
//3.create your endponts
//app.get('/',(req,res)=>
//{res.send("welcome express")})

//5.get html file
//app.get('/',(req,res)=>{
//  res.sendFile(__dirname+"/public/")
//})

app.use(express.static(__dirname + "/public"))




//4.run server
const port = process.env.PORT || 7000
app.listen(port,err=>{
err?console.log(err):console.log(`the server is running on port http://localhost:${port}`)
})
