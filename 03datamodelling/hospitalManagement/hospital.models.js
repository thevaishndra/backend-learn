import mongoose from 'mongoose'

const hospitalSchema = new mongoose.Schema({}, {timeestamps : true})

export const hospital = mongoose.model("Hospital", hospitalSchema);