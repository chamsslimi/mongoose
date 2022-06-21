const express=require('express');
const Product = require('../models/Product');
const { getOneProduct, addProduct, getAllProducts, deleteProduct, updateProduct } = require('../controllers/contactController');
const router=express.Router();

// router.get('/test',(req,res)=>{
//     res.send('this is test')
// })
//add new product
router.post('/addproduct',addProduct)
// get all products
router.get('/allproducts',getAllProducts)
//delete product
router.delete('/deleteproduct/:id',deleteProduct)
//update product
router.put('/updateproduct/:id',updateProduct)
//getOne product
router.get('/getOneproduct/:id',getOneProduct)
module.exports=router;