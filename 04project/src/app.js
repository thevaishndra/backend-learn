import express from 'express';
import cors from 'cors';//enables  cross origin resource sharing - allowing server to respond to requests from different origins
import cookieParser from "cookie-parser";//Parses cookies attached to the client requests, making them available in req.cookies

const app = express();

//cors middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN, //Specifies which origin(s) are allowed to make requests - here it's environment variables
    credentials: true, //allows cookies and authorization headers to be sent with cross-origin requests
  })
);

app.use(express.json({limit:"16kb"}))//to prevent excessively large requests
app.use(express.urlencoded({extended: true, limit: "16kb"}))//allows parsing of nested objects and restricted size
app.use(express.static("public"))//making files in that folder accessible at the root level
app.use(cookieParser());//allowing the server to read cookies sent by the client in each request and access them via req.cookies


//routes import
import userRouter from './routes/user.routes.js'

//routes declared
app.use("/api/v1/users", userRouter)

// http://localhost:8000/users/register/login
export {app}