const express = require("express")
require("dotenv").config()
const app = express()
const mongoose = require("mongoose")
const Kalvium = require("./Models/Schema")


app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//Routes 
app.get("/api/workout",  (req, res)=>{
    res.json({msg:"This is a get request"})
})

app.post("./api/workout", async (req, res)=>{
    const{course} = req.body
    try{
        const kalvium = await Kalvium.create({course})
        res.status(200).json(kalvium)
    } catch(error) {
        res.status(404).json({mssg:"ERRORRRRRR"})

    }

    res.json({mssg:"This is a post request"})
})



mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Server is running")
    })
    
}).catch(()=>{
    console.log("Error connecting to db")
})
