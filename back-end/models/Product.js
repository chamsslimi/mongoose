const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const productSchema= new Schema({
    name:{
        type:String,required:true
    },
    price:Number,
    quantity:{
        type:Number,
        required:true},
    disponibility:String,
})
module.exports= mongoose.model('Product',productSchema)