import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import Login_img from '../Login_img';
import { NavLink, useNavigate } from 'react-router-dom';
import { loginUser } from '../actions/userActions';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionStorage.getItem('currentUser')) {
      navigate('/');
    }
  }, [navigate]);

  function login() {
    debugger
    const user = {
      email: email,
      password: password
    };
    dispatch(loginUser(user, navigate));
  }
  
  

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-center align-items-center gap-3">
          <div style={{ width: '447px' }}>
            <h3 className="text-center col-lg-6" style={{ fontSize: '35px', marginBottom: '20px' }}>
              Sign In
            </h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </Form.Group>
              <div style={{ display: 'grid', placeItems: 'center' }}>
                <Button
                  variant="primary"
                  className="mb-3 col-lg-6"
                  onClick={login}
                  style={{ background: 'rgb(67, 185, 127)' }}
                  type="button" // Use "button" type to prevent form submission
                >
                  Submit
                </Button>
              </div>
            </Form>
            <p className="mt-3">
              Create an account <span> <NavLink to="/">Sign Up</NavLink></span> {' '}
            </p>
          </div>
          <Login_img />
        </section>
      </div>
    </>
  );
};

export default Login;
