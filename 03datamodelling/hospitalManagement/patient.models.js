import mongoose from 'mongoose'

const patientSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    address : {
        type : String,
        required : true,
    },
    diagnosedWith : {
        type : String,
        required : true,
    },
}, {timestamps : true})

export const patient = mongoose.model("Patient", patientSchema)