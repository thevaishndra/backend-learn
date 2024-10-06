import mongoose from 'mongoose'

const patientSchema = new mongoose.Schema({}, {timestamps : true})

export const patient = mongoose.model("Patient", patientSchema)