import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import "../Styles/Card.css"

function Shoppingcart() {

    const [cart,setCart]=useState([])

    const {bookid} =useParams()
    useEffect(()=>{
      axios.get(`http://localhost:5000/items/${bookid}`).then((res)=>setCart(res.data))
      //console.log(cart);
    },[cart])


  return (
    <div  className='cardstyle'>
        {cart.map((i)=>{
            return(

                <Card style={{ width: '20rem',border:'1px solid red',marginLeft:'20px',marginTop:'30px' }}>
      
      <Card.Body>
        <Card.Title>{i.Name}</Card.Title>
        <Card.Text>{i.Description}</Card.Text>
        <Card.Text>{i.Author}</Card.Text>
        <Card.Text>{i.Year}</Card.Text>
      <Link to="/detailpage"> 
        <Button variant="primary">Add to Cart</Button>
        </Link>
      </Card.Body>
    </Card>
       ) })}
    
    </div>
  );
}

export default Shoppingcart;