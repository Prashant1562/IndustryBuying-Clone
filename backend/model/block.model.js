const mongoose = require("mongoose")

const BlockSchema = mongoose.Schema({
    name:String,
    pass:String,
    email:String,
    avatar:String,
    age:Number,
    number:Number,
    gender: "male" | "female" | "other"
},{
    versionKey:false,
    timestamps:true
})

const BlockModel=mongoose.model("block",BlockSchema)
module.exports={
    BlockModel
}

    // "name":"",
    // "pass":"",
    // "email":"",
    // "avtar":"",
    // "age":"",
    // "gender":""


