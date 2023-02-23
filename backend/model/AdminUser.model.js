const mongoose = require("mongoose")

const AdminuserSchema = mongoose.Schema({
    name:String,
    pass:String,
    email:String,
    avatar:String,
    age:Number,
    gender: "male" | "female" | "other"
},{
    versionKey:false
})

const AdminUserModel=mongoose.model("Admin",AdminuserSchema)
module.exports={
    AdminUserModel
}

    // "name":"",
    // "pass":"",
    // "email":"",
    // "avtar":"",
    // "age":"",
    // "gender":""