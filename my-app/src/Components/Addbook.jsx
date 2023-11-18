import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'

function Addbook() {

    //const nav=useNavigate()

const [Name,setName]=useState("")
const [Description,setDescription]=useState("")
const [Author,setAuthor]=useState("")
const [Year,setYear]=useState("")
const [Image,setImge]=useState("")


console.log(Name);


const onSubmit=async()=>{

  try{
const config={
  headers:{
    "Content-type":"application/json"
  },
}

const data=await axios.post("http://localhost:5000/book",{Name,Description,Author,Year},config)
console.log(data.data);
//nav("/login")

  }catch(error){
    console.log("Books data not available",error);
  }

}




  return (
    <div>

<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Book Name" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Book Description" onChange={(e)=>setDescription(e.target.value)} />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Book Description" onChange={(e)=>setAuthor(e.target.value)} />
      </Form.Group>


      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Year</Form.Label>
        <Form.Control type="text" placeholder="Book Description" onChange={(e)=>setYear(e.target.value)}/>
      </Form.Group>

    
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Enter Image URL" onChange={(e)=>setImge(e.target.value)}/>
      </Form.Group>

    
      <Link to="/home">
      <Button variant="primary" type="submit" onClick={onSubmit}>
        Add
      </Button>
      </Link>
    </Form>
    </div>
  )
}

export default Addbook