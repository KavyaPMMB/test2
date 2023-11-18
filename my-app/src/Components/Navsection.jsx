import React, { useState } from 'react'
import { MDBBtn, MDBCollapse, MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler } from 'mdb-react-ui-kit'
import '../Styles/Navsection.css'


function Navsection() {

        const [showBasic, setShowBasic] = useState(false);

  return (
    <div>
        <MDBNavbar expand='lg' className='loginhead'>
       
      <MDBContainer >
        <MDBNavbarBrand href='/home' className='loginsub'>HOME</MDBNavbarBrand>


        {/* <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler> */}

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem className='loginmain'>
              <MDBNavbarLink className='loginsub'   href='/adminlogin'>
                AdminLogin
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='loginmain'>
              <MDBNavbarLink className='loginsub'   href='/userlogin'>
                UserLogin
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem >
              <MDBNavbarLink className='loginsub'  href='/usersignup'>
                UserSignUp
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

    </div>
  )
}

export default Navsection