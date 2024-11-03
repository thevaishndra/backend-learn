import mongoose, {Schema} from 'mongoose'

const userSchema = new Schema({
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
  fullname: {
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
        type: Schema.Types.ObjectId,
        ref: "Video"
    }
  ],
  password: {
    type: String,//password in database should be encrypted
    required: [true, 'Password is required']//evry true field can have a short message
  },
  refreshToken: {
    type: String,
  },
  },
  {
    timestamp: true
  }
);

export const User = mongoose.model("User", userSchema)