import {GET_PRODUCTS} from '../types/productTypes'
import axios from 'axios'


export const getProducts=()=>async(dispatch)=>{

    try {
       let res =await axios.get('/api/products/allproducts')
       console.log(res.data);
       dispatch({type:GET_PRODUCTS,payload:res.data.products}) 
    } catch (error) {
        console.log(error);
    }
} 

export const addProduct=(formData)=>async(dispatch)=>{
    try {
      await axios.post('/api/products/addproduct',formData)
       
       dispatch(getProducts()) 
    } catch (error) {
        console.log(error);
    }
} 

export const deleteProduct=(id)=>async(dispatch)=>{
    try {
      await axios.delete(`/api/products/deleteproduct/${id}`);
      
       dispatch(getProducts()) 
    } catch (error) {
        console.log(error);
    }
} 

export const EditProduct=(id,newProduct)=>async(dispatch)=>{
    try {
      await axios.put(`/api/products/updateproduct/${id}`,newProduct);
      
       dispatch(getProducts()) 
    } catch (error) {
        console.log(error);
    }
} 