import mongoose from 'mongoose'

const hospitalSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    addressLine1 : {
        type : String,
        requireed : true,
    },
    addressLine2 : {
        type : String,
    },
    city : {
        type : String,
        required : true,
    },
    pincode : {
        type : String,//international countries take alphabets with numbers
        required : true,
    },
    specializedIn : [
        {
            type : String
        }
    ]
}, {timeestamps : true})

export const hospital = mongoose.model("Hospital", hospitalSchema);