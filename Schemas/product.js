import mongoose from "mongoose";

const {Schema} = mongoose

const productSchema= new Schema({
    name:{
        type: String,
        required: [true, 'Name is required'],
    },
    quantity:{
        type: Number,
        required: [true, 'quantity is required']

    },
    price:{
        type:Number,
        required: [true, 'price is required']
    }
})

export const Product = mongoose.model('Product', productSchema);


