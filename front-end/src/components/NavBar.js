import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'
function NavBar() {
  return (
    <Navbar bg="info" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/'>Home</Nav.Link>
      <Nav.Link as={Link} to= '/products'>Products</Nav.Link>
      <Nav.Link as={Link} to='/AddEditproduct'>Add Product</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar;