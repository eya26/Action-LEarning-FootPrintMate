import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  const user = useSelector(state => state.loginUserReducer.currentUser);
  return (
    <>
      <Navbar style={{ backgroundColor: '#17594A' }}>
        <Container>
          <Navbar.Brand href="home" style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>FootprintMate</Navbar.Brand>
          <Nav className="me-auto">
          {user ? (
            <>
              <Nav.Link href="home" style={{ fontSize: '18px', fontWeight: 'bold', color: 'white' }}>Home</Nav.Link>
              <Nav.Link href="Quiz" style={{ fontSize: '18px', fontWeight: 'bold', color: 'white' }}>Quiz</Nav.Link>
              <Nav.Link href="calculator" style={{ fontSize: '18px', fontWeight: 'bold', color: 'white' }}>Calculator</Nav.Link>
              <Navbar.Text style={{ fontSize: '18px', fontWeight: 'bold', color: 'white' }}>Hello, {user.name}</Navbar.Text>
              </>
          ) : (
            <>
              <Nav.Link href="home" style={{ fontSize: '18px', fontWeight: 'bold', color: 'white' }}>Home</Nav.Link>
              <Nav.Link href="login" style={{ fontSize: '18px', fontWeight: 'bold', color: 'white' }}>Login</Nav.Link>
            </>
          )}
        </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
