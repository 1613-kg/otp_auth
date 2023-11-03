import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    profilePicute:{
        type:String,
    },
    phoneNumber:{
        type:Number,
        unique:true,
        required:true,
    },
    followers:{
        type:[{ type : mongoose.Schema.Types.ObjectId, ref: 'users' }],
    },
    following:{
        type:[{ type : mongoose.Schema.Types.ObjectId, ref: 'users' }],
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
})

export const User = mongoose.model("users",userSchema);