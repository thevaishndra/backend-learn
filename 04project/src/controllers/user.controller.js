import { asyncHandler } from '../utils//asyncHandler.js'
import {ApiError} from '../utils/ApiError.js' 
import {User} from '../models/user.model.js';
import {uploadCloudinary} from '../utils/cloudinary.js'

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "ok",
  });
  //remove password and refresh token field from response
  //check for user creation
  //return res

  //get user details from frontend--------------------------
  const { fullname, username, email, password } = req.body;
  console.log("email: ", email);

  //validation - not empty---------------------------------------------
  if (
    [fullname, username, email, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  } //production level codes mainly have separate files for validation

  // if(fullname == ""){
  //     throw new ApiError(400, "fullname is required");
  // } //beginner's way to check each and everything one by one for validation

  //check if user already exists: username, email-----------------------------
  const existedUser = User.findOne({
    $or: [{ username }, { email }],
  });
  if (existedUser) {
    throw new ApiError(409, "User with this email or username already exists");
  }

  //check for images, check for avatar--------------------------------
  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }

  //upload them to cloudinary, check avatar-------------------------------------
  const avatar = await uploadCloudinary(avatarLocalPath);
  const coverImage = await uploadCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, "Avatar file is required");
  }

  //create user object - create entry in db-----------------------------
  const user = await User.create({
    fullname,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase()
  })
})

export {registerUser}