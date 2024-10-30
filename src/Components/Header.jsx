import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <>
    <Navbar className="bg-info">
        <Container>
          <Navbar.Brand href="#home"className='fw-bolder'style={{color:"darkblue"}}>
            <img
              alt=""
              src="https://cheaptripdesk.com/images/airticket/r3.png"
              width="30"
              height="30"
              className="d-inline-block align-top fs-1"
            />{' '}
            DISCOUNT CALCULATOR
          </Navbar.Brand>
        </Container>
        
      </Navbar>


      
    </>
  )
}

export default Header
