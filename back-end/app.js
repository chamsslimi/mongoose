const express=require('express');
const connectDB=require('./config/connection')
const app=express();

connectDB();
//middelware
app.use(express.json())

app.use('/api/products',require('./routes/product'));





const port=5000;
app.listen(port,()=>console.log(`server is runnig on port ${port}`));