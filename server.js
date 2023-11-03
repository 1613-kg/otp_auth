import {app} from "./app.js"
import { ConnectDB } from "./database/data.js";


//connecting to database
ConnectDB();


app.listen(4000,()=>{
    console.log("Server is working");
})