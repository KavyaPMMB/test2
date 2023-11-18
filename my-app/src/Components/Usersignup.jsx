import React, { useState } from 'react';
import {MDBBtn,MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBCardImage,MDBInput,MDBIcon} from 'mdb-react-ui-kit';
import { useNavigate} from 'react-router-dom'
import axios from'axios'
import { Alert } from 'react-bootstrap';



function Usersignup() {

const nav=useNavigate()

const [Name,setName]=useState("")
const [Email,setEmail]=useState("")
const [Password,setPassword]=useState("")

// console.log(Name);


const onRegistration=async()=>{

  try{
    
const config={
  headers:{
    "Content-type":"application/json"
  },
}

const values=await axios.post("http://localhost:5000/signup",{Name,Email,Password},config)
console.log(values.data);
localStorage.setItem('user',JSON.stringify(values.data))
nav("/userlogin")

  }catch(error){
    console.log("couldn't signup",error);
    alert("User Already Exist")
  }

}


  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <h1>Sign up</h1>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='form1' type='text' className='w-100' onChange={(e)=>setName(e.target.value)}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' id='form2' type='email' onChange={(e)=>setEmail(e.target.value)}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password' onChange={(e)=>setPassword(e.target.value)}/>
              </div>

              <MDBBtn className='mb-4' size='lg' onClick={onRegistration}>Register</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Usersignup;