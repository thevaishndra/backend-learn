import dotenv from 'dotenv'
import connectDB from './db/index.js';
import {app} from './app.js'

dotenv.config({
    path:'./.env'//loading variables from aspecified path
})
//as early as possible in your application, import and configure dotenv



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("Mongo db connection failed!!!", err);
})









// import mongoose from 'mongoose';
// import { DB_NAME } from './constants';
// require('dotenv').config({path:'./env'})//instead of writing this we did like above

/*import express from 'express';
const app = express();
//database is in another continent - saying to always remember, we hve to add async and try catch
(async() => {//iify
    try {
        mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);//database connect approach 1
        app.on("error", (error) => {
            console.log("Error:", error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR:", error)
        throw err
    }
})()*/
