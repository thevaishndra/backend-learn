import mongoose from 'mongoose'

const medicalRecordSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagnosedWith: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    bloodGroup: {
      enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"], //enum means choices
      required : true,
    },
    gender : {
        type : String,
        enum : ["M", "F", "O"],
        required : true,
    },
    admittedIn : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Hospital',
    },
  },
  { timestamps: true }
);

export const medicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema)