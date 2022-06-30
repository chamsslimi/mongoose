import React from 'react'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div style={{width:"40%",paddingTop:"50px",
    display:"flex",justifyContent:"space-around",margin:"auto"}}>
       <Link to="/products"> <Button variant="info"> products</Button></Link>
        <Link to="/AddEditproduct"><Button variant="info"> Add product</Button></Link>
    </div>
  )
}

export default Home;
