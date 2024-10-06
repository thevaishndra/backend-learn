import mongoose from 'mongoose'

const orderItemSchema = new mongoose.Schema({
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product",
    },
    quantity : {
        type : Number,
        required : true,
    },

})

const addressSchema = new mongoose.Schema({
    country : {
        type : String,
        required : true,
    },
    city : {
        type : String,
        required : true,
    },
    pincode : {
        type : Number,
        required : true,
    },
})

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItems: {
      type: [orderItemSchema], //individual products should also have a schema, which product? how many?
    }, //we can also do like take array then inside make objectand write schema without creating a new one
    address: {
      type: [addressSchema],
    },
    status : {
        type : String,
        enum : ["DELIVERED", "PENDING", "CANCELLED"],//enum means choices
        default : "Pending",
    }
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema)