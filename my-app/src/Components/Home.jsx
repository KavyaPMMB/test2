import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Card, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {

  
      const [books,setbooks]=useState([])

  
      useEffect(()=>{
        axios.get("http://localhost:5000/items").then((res)=>setbooks(res.data))
        console.log(books);
      },[books])

      

      const Delete=(_id) =>{
        axios.delete(`http://localhost:5000/deletebook/${_id}`);
      }

  return (

<div style={{display:"flex",marginLeft:"20px"}}>

  {books.map((i)=>{
    return(
      <div>

<Card
 style={{ width: '18rem',marginRight:"20px",height:"800px" ,marginTop:"20px"}}>
      <Card.Img variant="top" src={i.Image} style={{height:"350px"}}/>
      <Card.Body>
        <Card.Title style={{color:"red"}}>{i.Name}</Card.Title>
        <Card.Text>
         {i.Description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>



      </div>
    )
  })}
    {/* <Table style={{border:"2px solid red" }}>
    <thead>
      <tr>
        <th>#</th>
        <th>Book Name</th>
        <th>Description</th>
        <th>Author</th>
        <th>Year</th>
      </tr>
    </thead>

{books.map((i)=>
{
  return(
    
    <tbody>
      <tr>
        
        <td>{i.Name}</td>
        <td>{i.Description}</td>
        <td>{i.Author}</td>
        <td>{i.Year}</td>
        
    {/* //</tr> to={`/Editbook/${i._id}`}> */}

        {/* <Link to={`/Bookdetails/${i._id}`}>  <td><Button variant='success'>View</Button></td></Link>
        <Link  to={`/update/${i._id}`}> <td><Button variant='Primary'>Edit</Button></td></Link>
       <td><Button variant='danger' onClick={(i)=>Delete(i._id)}>Delete</Button></td> */}
      {/* </tr>

    </tbody>
    )}

)}
  </Table> */} 

  {/* <div className='text-center'>
    <Link to={'/addbooks'}>
<Button variant='primary' className='center' >Add Books</Button>
</Link>
</div> */}
</div>
  
);


}

export default Home