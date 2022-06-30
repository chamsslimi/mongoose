import React,{useEffect} from 'react'
import {getProducts} from '../redux/actions/productActions'
import {useSelector} from 'react-redux'
import ProductCard from './ProductCard'
import {useDispatch} from 'react-redux'

function Products() {
 const products=useSelector(state=>state.ProductReducer.products)   
 const dispatch=useDispatch();

    useEffect(()=>{
    dispatch(getProducts())
    },[])
    return (<div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",margin:"auto"}}>
         {
         products.map(elt=><ProductCard elt={elt} />)
        } 
        </div>
    )
}

export default Products