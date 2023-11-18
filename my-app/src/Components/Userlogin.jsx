import React, { useState } from 'react';
import {MDBBtn,MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBInput, MDBCheckbox}
from 'mdb-react-ui-kit';
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';


function Userlogin  () {


  const nav=useNavigate()
  
  
  const [Email,setEmail]=useState("")
  const [Password,setPassword]=useState("")
  
  console.log(Email);

  const onLogin=async()=>{


    try {
      const config={
        headers:{
          "Content-type":"application/json"
        },
      }
  

      const data=await axios.post("http://localhost:5000/login",{Email,Password},config)
      console.log(data.data);

      localStorage.setItem('userinfo',JSON.stringify(data.data));
      console.log(data.data);
    
  

     } catch (error) {
      
      console.log("Login Failed",error);
      
    }
  }
   
  
  
  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Login</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg"  onChange={(e)=>setEmail(e.target.value)}/>
              <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"    onChange={(e)=>setPassword(e.target.value)}/>

              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

              <Link to={'/home'}>
                <MDBBtn size='lg' onClick={onLogin}>
                Login
              </MDBBtn></Link>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default  Userlogin;