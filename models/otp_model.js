import mongoose from "mongoose";

const OTPSchema = new mongoose.Schema({
    phoneNumber:{
        type:Number,
        unique:true,
        required:true,
    },

    otp:{
        type: Number,
    }
});

export const OTPModel = mongoose.model("otp",OTPSchema);