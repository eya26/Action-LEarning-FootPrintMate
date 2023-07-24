
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import Sign_img from '../Sign_img'
import { NavLink } from "react-router-dom";


const Home = () => {


    const [inpval,setInpval] = useState({
        name:"",
        email:"",
        date:"",
        password:""
    })

    const[data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e)=>{
        //console.log(e.target.value);

    
        const {value,name} = e.target;
        //console.log(value,name);

        setInpval(()=>{
            return {
                ...inpval,
                [name]:value
            }
        })

    }
    const addData = (e) => {
        e.preventDefault();
      
        const { name, email, date, password } = inpval;
      
        if (name === "") {
          alert("name field is required");
        } else if (email === "") {
          alert("email field is required");
        } else if (!email.includes("@")) {
          alert("Please enter a valid email address");
        } else if (date === "") {
          alert("Date field is required");
        } else if (password === "") {
          alert("Password field is required");
        } else if (password.length < 5) {
          alert("Password length should be greater than 5");
        } else {
          console.log("Form submitted successfully!");
         

          localStorage.setItem("useryoutube", JSON.stringify([...data,inpval]));

        }
      };
      



  return (
    <> 
        <div className= "container mt-3" >
            <section className='d-flex justify-content-center align-items-center gap-3'>
                <div  style={{ width: "447px"}}>
                <h3 className='text-center col-lg-6' style={{ fontSize: "35px", marginBottom: "20px" }}>
        Sign Up
      </h3>
                    <Form>
                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        
                        <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter your name" />
                        
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        
                        <Form.Control type="email" name='email' onChange={getdata}  placeholder="Enter email" />
                        
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        
                        <Form.Control   onChange={getdata}  name='date' type="date"  />
                        
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            
                            <Form.Control type="password"  name='password'  onChange={getdata}  placeholder="Password" />
                        </Form.Group>
                        <div style={{ display: 'grid', placeItems: 'center' }}>
                        <Button variant="primary" className='mb-3 col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
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

export default Home