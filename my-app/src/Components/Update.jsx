import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import {useParams } from 'react-router-dom'

function Update() {

    const {bookid} =useParams()
    console.log("id:",bookid);  
   
    const [book,setBook]=useState([])

    console.log("val",book);

    useEffect(()=>{
      axios.get(`http://localhost:5000/items/${bookid}`).then((res)=>console.log(res.data))
    },[])

    console.log("Book state :",book);

const [input,setInput]=useState({
    Name:"",
    Description:"",
    Author:"",
    Year:""
})




    const handlechange = (e) =>{
      console.log(e.target.value);
      setInput({...input,[e.target.name]:e.target.value})
    };

    console.log(input);

    const submit = (sub) =>{

      sub.preventDefault();
      axios.put(`http://localhost:5000/updatebook/${bookid}`,input)
    //   navigate("/home")
    
      };
   
  return (

    <div>
        <Form className='form' onSubmit={submit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Book Name</Form.Label>
        <Form.Control type="text" placeholder={book.Name} name="Name" value={input.Name} onChange={handlechange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder={book.Description} name="Description" value={input.Description} onChange={handlechange} />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder={book.Author} name="Author" value={input.Author} onChange={handlechange} />
      </Form.Group>


      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Year</Form.Label>
        <Form.Control type="text" placeholder={book.Year} name="Year" value={input.Year} onChange={handlechange}/>
      </Form.Group>

      <Button variant="primary" type="submit">Update</Button>
    </Form> 
    </div>
  )
}

export default Update