import fast2sms from "fast-two-sms";


export const sendOTP = async({message,phoneNumber},next)=>{
    try {
        const resp =  await fast2sms.sendMessage({
          authorization: process.env.FAST2SMS,
          message,
          numbers: [phoneNumber],
        });

        console.log(resp)
        // .then(()=>console.log(`OTP sent to ${phoneNumber}`));
        
      } catch (error) {
        next(error);
      }
};