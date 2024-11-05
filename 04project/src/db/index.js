import mongoose from 'mongoose';
import { DB_NAME } from "../constants.js";

const connectDB = async () => {//database cconnection that may take some time to connect
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) 
        console.log(`\n MongoDB connected !!  DB HOST : ${connectionInstance.connection.host}`);//if connection is successful
    } catch(error){
        console.log("MONGODB connection FAILED", error);
        process.exit(1)//terminate node process with error code 1 ie unsuccessful execution
    }
}

export default connectDB