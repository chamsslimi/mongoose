import React from 'react'
import {useDispatch} from 'react-redux'
import {Card,Button,ListGroup} from 'react-bootstrap'
import {deleteProduct} from '../redux/actions/productActions'
import Edit from './Edit';

function ProductCard({elt}) {
    const dispatch=useDispatch();
    const handelDelete=()=>{
        if(window.confirm('Are you sure?')) {
            dispatch(deleteProduct(elt._id));
        }
    };
  return (
    <div>
        <Card style={{ width: '18rem' }}>
  <Card.Header>Name:{elt.name}</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Price:{elt.price} </ListGroup.Item>
    <ListGroup.Item>Quantity:{elt.quantity}  </ListGroup.Item>
    <ListGroup.Item> Disponibility:{elt.disponibility} </ListGroup.Item>
    <ListGroup.Item> <Button variant='danger' onClick={handelDelete}>Delete</Button>
    <Edit elt={elt}/>

     </ListGroup.Item>
  </ListGroup>
</Card>
       </div>
  )
}

export default ProductCard;