import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';

import '../App.css';

export default function Loginpage() {
  return (
    <>
  <div className='maincontainer'>
    <Card className='carddata'>
    <Card.Img variant="top" className='img' src="./images/instagram_logo.png"  />
    <Card.Body >
    <Form>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Phone number, username, or email" className='inputbox'/>
    
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" className='inputbox'/>
      </Form.Group>
     
      <Button type="submit" className='loginbutton'>
            Log in      </Button>
    </Form>

      
    <div className="line-container">
      <hr className="line" />
      <span className="text">OR</span>
      <hr className="line" />
    </div>
     

    
      <Card.Text className='facebooktext'>
      <Card.Img variant="top" src="./images/facebook_logo.png" className='facebooklogo' />&nbsp;
      Log in with Facebook 
      </Card.Text>
      <Card.Text className='forgottext'>
        Forgot password?
      </Card.Text>
    </Card.Body>
    
    
  </Card >


  <div className='partcontainer1'>
    <Card className='cardcontainer'>
      <div>Don't have an account? <a href= "#" style={{color: 'blue'}}>sign up</a></div>
    </Card>
  </div>


    <div className='partcontainer1'>
    <Card className='appcontainer'>
    <div>Get the app.</div>
    </Card>
    </div>


    <div className='partcontainer2'>
    <Card className='appcontainerimg'>
    <div><Image variant="top" className='imgapp' src="./images/googleplay.png" />&nbsp;&nbsp;
    <Image variant="top" className='imgapp'  src="./images/microsoft.png" /></div>
    </Card>
    </div>
  
  </div>
  </>

  )
}
