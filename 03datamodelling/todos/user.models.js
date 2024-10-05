import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password is required"], //custom messages
    },
  },
  { timestamps: true }
); //there are two timestamps  -> createdAt & updatedAt thats why there is s in last

export const User = mongoose.model("User", userSchema); // The User in database will be stored as users -> plural and lowcase
