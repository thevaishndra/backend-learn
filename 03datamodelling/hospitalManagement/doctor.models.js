import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    salary : {
        type : String,
        required : true,
    },
    qualification : {
        type : String,
        required : true,
    },
    experienceInYears : {
        type : Number,
        default : 0,
    },
    worksInHospitals : {
        
    }
}, { timestamps: true });

export const doctor = mongoose.model("Doctor", doctorSchema);
