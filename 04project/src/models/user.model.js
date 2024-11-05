import mongoose, {Schema} from 'mongoose'
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true, //if you want any field searchable in an optimized way
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, //cloudinary url
      required: true,
    },
    coverImage: {
      type: String,
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId, //array of object ids referencing video model
        ref: "Video",
      },
    ],
    password: {
      type: String, //password in database should be encrypted
      required: [true, "Password is required"], //evry true field can have a short message
    },
    refreshToken: {
      type: String, //token used to manage session refreshes
    },
  },
  {
    timestamp: true,// a note that tells date we created and date we last updated
  }
);


//middleware func runs before saving a user
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); //It checks if the password field is modified,
  this.password = bcrypt.hash(this.password, 10); //and if it is, it hashes the password using bcrypt
  next();
})//as these functions take time


//This method compares a given password to the stored hashed password to verify user authentication.
userSchema.methods.isPasswordCorrect = async function(password){
  return await bcrypt.compare(password, this.password)
}
//jwt is bearer token


//Generates a JWT token (access token) with the user’s unique details. 
//This token will be used to identify the user in authenticated routes
userSchema.methods.generateAccessToken = function(){
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullName: this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}


//Generates a JWT refresh token with the user’s id to manage user sessions without requiring re-authentication.
userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};


export const User = mongoose.model("User", userSchema)