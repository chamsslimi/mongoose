import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {EditProduct} from '../redux/actions/productActions'
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom'
function Edit({elt}) {

  const [show, setShow] = useState(false);
  const [name, setname] = useState(elt.name);
  const [price, setprice] = useState(elt.price);
  const [quantity, setquantity] = useState(elt.quantity);
  const [disponibility, setdisponibility] = useState(elt.disponibility);
  const dispatch=useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(EditProduct(elt._id, {name,price,quantity,disponibility }));
    handleClose()
  };
  return (
    <>
      <Button variant="info" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
              value={name}
              onChange={e=>{setname(e.target.value)}}
                type="text"
                
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
              value={price}
              onChange={e=>{setprice(e.target.value)}}
                type="number"
                
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
              value={quantity}
              onChange={e=>{setquantity(e.target.value)}}
                type="number"
                
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Disponibility</Form.Label>
              <Form.Control
              value={disponibility}
              onChange={e=>{setdisponibility(e.target.value)}}
                type="text"
                
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edit;