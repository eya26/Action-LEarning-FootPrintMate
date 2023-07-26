import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  const user = useSelector(state => state.loginUserReducer.currentUser);

  console.log('User:', user);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="home">FootprintMate</Navbar.Brand>
        <Nav className="me-auto">
          {user ? (
            <>
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="Quiz">Quiz</Nav.Link>
              <Nav.Link href="calculator">Calculator</Nav.Link>
              <Navbar.Text>Hello, {user.name}</Navbar.Text>
            </>
          ) : (
            <>
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="login">Login</Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
