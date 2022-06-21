const Product=require('../models/Product')
exports.addProduct=async(req,res)=>{
    const {name,price,quantity,disponibility}=req.body;
    try {
        //check product exists
        const found=await Product.findOne({name})
        if (found){
            return res.status(400).send('product already exists')
        }
       const product=new Product({
        name,price,quantity,disponibility
       }) ;
       await product.save();
       res.status(201).send({msg:'product added',product});
    } catch (error) {
        res.status(500).send('server error');
    }
}
exports.getAllProducts=async(req,res)=>{
    try {
       const  product=await Product.find();
       res.status(200).send({msg:'all products',product});
    } catch (error) {
        res.status(500).send('server error'); 
        
    }
    }
exports.deleteProduct=async(req,res)=>{
    const {id}=req.params
    try {
        const  product=await Product.findByIdAndDelete(id);
        res.status(200).send({msg:'product deleted',product});
    } catch (error) {
        res.status(500).send('server error'); 
       
    }
}
exports.updateProduct=async(req,res)=>{
    const {id}=req.params
    try {
      const updateproduct= await Product.findByIdAndUpdate(id,
        {$set:{...req.body}} ,{new:true}) 
      res.status(200).send({msg:'product Updated',updateproduct});
    } catch (error) {
        res.status(500).send('server error');
    }  
}
exports.getOneProduct=async(req,res)=>{
    const {id}=req.params
    try {
      
       const  product=await Product.findById(id);
       res.status(200).send({msg:'product',product});
    } catch (error) {
        res.status(500).send('server error'); 
        
    }
    }    