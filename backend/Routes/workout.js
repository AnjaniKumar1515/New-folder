const express = require("express")
const router = express.Router()


router.get("/",(req, res)=>{
   res.json({msg:"Get all the workout routes"})
})
 
//Get a single workout 
router.get("/:id",(req, res)=>{
    res.json({msg:"Get a single workout routes"})
 })

 //Post a new workout

 router.post('/',(req,res)=>{
    res.json({msg:"POST  workout routes"})
 })


module.exports = router