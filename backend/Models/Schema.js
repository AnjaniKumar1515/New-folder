const mongoose = require("mongoose")
const Schema = mongoose.Schema

const kalviumSchema = new Schema({
    course:{
        type: String, 
        required: true
    }, 
    courseID:{
        type: Number, 
        required: true
    }, 
    cohort:{
        type:Number, 
        required:true
    }, 
    college:{
        type:String,
        required:true
    },
    semester:{
        type: String,
        required:true
    },
    averageRating:{
        type:Number,
        required:true
    },
    studentsVoted:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('Kalvium', kalviumSchema)  