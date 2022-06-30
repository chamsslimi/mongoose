import React ,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux';
import {addProduct} from '../redux/actions/productActions'
import {useNavigate} from 'react-router-dom'

function AddEditProduct() {
  const navigate=useNavigate();
  const [product,setproduct]=useState({name:"",price:"",quantity:"",disponibility:""})
  const dispatch=useDispatch();
  const handelchange=(e)=>{
    setproduct({...product,[e.target.name]:e.target.value})
  }
const handelAdd=(e)=>{e.preventDefault()
dispatch(addProduct(product))
navigate('/products')
}

  return (
    
        <Form style={{width:"50%",margin:"auto"}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>name</Form.Label>
    <Form.Control type="text" placeholder="Enter product name" name='name' onChange={handelchange} />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>price</Form.Label>
    <Form.Control type="number" placeholder="" name='price' onChange={handelchange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>quantity</Form.Label>
    <Form.Control type="number" placeholder="how much you want?" name='quantity' onChange={handelchange} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
   
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>disponibility</Form.Label>
    <Form.Control type="text" placeholder="write yes or no" name='disponibility' onChange={handelchange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    
  </Form.Group>

  <Button variant="primary" type="submit" onClick={handelAdd}>
   Add
  </Button>
</Form>
    
  )
}

export default AddEditProduct;