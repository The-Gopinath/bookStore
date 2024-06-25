const express=require('express')
const app=express()
const router = require("./Routes/bookRoutes.js")
const cors=require('cors')

app.use(cors())
//   {
//      origin:"http://localhost:5000",
//      methods:['GET','POST','PUT','DELETE'],
//      allowedHeaders:['Content-Type']
//    }*/

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/books",router)

app.listen(5000,()=>{
    console.log("server is listening...")
})