import { User } from "../models/user_model.js";
import { sendCookie } from "../utils/features.js"
import ErrorHandler from "../middlewares/error.js"
import { generateOTP } from "../middlewares/generate_otp.js";
import { OTPModel } from "../models/otp_model.js";
import { sendOTP } from "../middlewares/send_otp.js";

export const registerUser = async (req, res, next) => {
    try {
        const { firstName, lastName, email, phoneNumber, profilePicture, followers, following } = req.body;

        let user = await User.findOne({ email, phoneNumber });

        if (user) return next(new ErrorHandler("User already exists", 400));

        user = await User.create({
            firstName,
            lastName,
            email,
            phoneNumber,
            followers,
            following,
            profilePicture,
        });

        sendCookie(user, res, 201, "Registered succesfully");
    } catch (error) {
        next(error);
    }
}


export const loginUser = async (req, res, next) => {
    try {
        const { phoneNumber } = req.body;

        const otp = generateOTP();
        let OTP = await OTPModel.findOne({ phoneNumber });
         
        // if already number exists then regenrate otp and update database
        if (OTP) {
            OTP.otp = otp;
            await OTP.save();
        }
         // if already number doesnt exists then generate otp and create new database
        else {
            OTP = await OTPModel.create({
                phoneNumber,
                otp,
            })
        }
        await sendOTP({
            message: `Your otp is ${otp}`,
            phoneNumber,
        }, next);

        await res.status(201).json({
            succes:true,
            message:`Your otp is ${otp}`,
        });
    } catch (error) {
        next(error);
    }
}
