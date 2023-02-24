const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
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

const UserModel=mongoose.model("user",userSchema)
module.exports={
    UserModel
}

    // "name":"",
    // "pass":"",
    // "email":"",
    // "avtar":"",
    // "age":"",
    // "gender":""


