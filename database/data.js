import mongoose from "mongoose";

export const ConnectDB = ()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName:"zsocial",
    }).then(()=>console.log("DB Connected")).catch((e)=>console.log(e));
}