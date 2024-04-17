import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';

import '../App.css';

export default function Header() {
  return (
    <>
    <Navbar bg="light" data-bs-theme="light">
        <Container className='centerdiv'>
          <Navbar.Brand href="#home"><Image src='./images/insta.jpg' className='imgheader'></Image></Navbar.Brand>
          <Nav className="me-auto navcenter">
            <Link to="" className='navlink'>Login</Link>
            <Link to="home" className='navlink'>Home</Link>
            {/* <Link to="explore" className='navlink'>Explore</Link> */}
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}
