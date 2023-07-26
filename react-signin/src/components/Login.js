import React , { useState } from 'react';
import Form from 'react-bootstrap/Form'
import axios from 'axios';
import { Button } from 'react-bootstrap'
import Login_img from '../Login_img';
import { NavLink } from "react-router-dom";


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login() {
      const user = { email, password };
    
      axios.post('http://localhost:8000/api/signin', user)
        .then(response => {
          const token = response.data.token;
          sessionStorage.setItem('currentUser', token);
          console.log("right credentials")
        })
        .catch(error => {
          console.error(error);
        });
    }
    
    






  return (
    <>
    <div className= "container mt-3" >
            <section className='d-flex justify-content-center align-items-center gap-3'>
                <div  style={{ width: "447px"}}>
                <h3 className='text-center col-lg-6' style={{ fontSize: "35px", marginBottom: "20px" }}>
        Sign In
      </h3>
                    <Form>
                        
                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        
                        <Form.Control type="email" name='email' value={email} onChange={e=>setEmail(e.target.value)}  placeholder="Enter email" />
                        
                        </Form.Group>
                      

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            
                            <Form.Control type="password"  name='password' value={password} onChange={e=>setPassword(e.target.value)}  placeholder="Password" />
                        </Form.Group>
                        <div style={{ display: 'grid', placeItems: 'center' }}>
                        <Button variant="primary" className='mb-3 col-lg-6' onClick={login} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                            Submit
                        </Button>
                        </div>

                        
                    </Form>
                    <p className='mt-3'>Cre te an account  <span> <NavLink to="/">Sign Up</NavLink></span>  </p>
                    </div >
                <Login_img />        
            </section>

        </div>
    </>
  )
}

export default Login