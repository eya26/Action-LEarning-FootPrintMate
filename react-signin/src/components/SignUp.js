
import React, { useState } from 'react'
import axios from "axios";
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import Sign_img from '../Sign_img'
import { NavLink } from "react-router-dom";


const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [date_of_birth, setDob] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);

    const url = "http://localhost:8000/api/signup"
    const submit = () => {
        axios.post(url, {
            name,
            email,
            date_of_birth,
            password
        }).then(console.log("done"))
            .catch((e) => console.log(e))
        setIsSubmit(true)
    }

    return (
        <>
            <div className="container mt-3" >
                <section className='d-flex justify-content-center align-items-center gap-3'>
                    <div style={{ width: "447px" }}>
                        <h3 className='text-center col-lg-6' style={{ fontSize: "35px", marginBottom: "20px", color: "#17594A" }}>
                            Sign Up
                        </h3>
                        <Form>

                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                <Form.Control type="text" name='name' value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email" />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                <Form.Control onChange={e => setDob(e.target.value)} value={date_of_birth} name='date' type="date" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                            </Form.Group>
                            <div style={{ display: 'grid', placeItems: 'center' }}>
                                <Button variant="primary" className='mb-3 col-lg-6' onClick={submit} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                    Submit
                                </Button>
                            </div>


                        </Form>
                        <p className='mt-3'>Already Have an Account ?  <span> <NavLink to="/login">Login</NavLink></span>  </p>
                    </div >
                    <Sign_img />
                </section>

            </div>
        </>
    )
}

export default SignUp;