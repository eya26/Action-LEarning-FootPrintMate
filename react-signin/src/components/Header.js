import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <>
      <Navbar style={{ backgroundColor: '#17594A' }}>
        <Container>
          <Navbar.Brand href="#home" style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>FootprintMate</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home" style={{ fontSize: '18px', fontWeight: 'bold', color: 'white' }}>Home</Nav.Link>
            <Nav.Link href="login" style={{ fontSize: '18px', fontWeight: 'bold', color: 'white' }}>Login</Nav.Link>
            <Nav.Link href="Quiz" style={{ fontSize: '18px', fontWeight: 'bold', color: 'white' }}>Quiz</Nav.Link>
            <Nav.Link href="calculator" style={{ fontSize: '18px', fontWeight: 'bold', color: 'white' }}>Calculator</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
