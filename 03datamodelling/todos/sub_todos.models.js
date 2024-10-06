import mongoose from 'mongoose'

const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", //write the same name that we wrote while making model
    },
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", subTodoSchema);