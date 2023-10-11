import React,{useEffect,useState} from "react";
import {Link} from 'react-router-dom';
import validator from "validator";
import { useNavigate } from "react-router-dom";
function Signup() {
    const navigate=useNavigate();
    const initialvalues={name:"",email:"",password:""}
    const [formvalues,setFormValues]=useState(initialvalues)
    const[formErrors,setFormErrors]=useState({})

    const handleChange =(e)=> {
        const {name, value} =e.target;
        setFormValues({...formvalues,[name]: value});
    }
    const handleSubmit = (e)=> {
        e.preventDefault()
        setFormErrors(validate(formvalues));
    }
    const validate= (values)=> {
        const errors ={}
        if (!values.name) {
            errors.name ="Name is required!";
        }
        if (!values.email) {
            errors.email ="Email is required!";
        }
         else if (!validator.isEmail(values.email)) {
            errors.email="Email invalid"
        }
        if (!values.password) {
            errors.password ="Password is required!";
        } 
         else if (!validator.isStrongPassword(values.password)) {
            errors.password="Password is invalid"
        }
        else {
            AddUser(formvalues)
        }
        return errors;
    }
    const AddUser = async (formvalues) => {
        let headers = {
            method: "POST",
            body: JSON.stringify(formvalues),
            headers:{
                'content-type': 'application/json'
            }
        }
        let resp= await fetch("http://localhost:5000/user/register", headers)
        let result = await resp.json()
        if(result.status=== "failure"){
            alert("Already register please login")
            setFormValues(initialvalues)
            navigate('/login')
        }
        else{
            alert("Successfully")
            setFormValues(initialvalues)
            navigate('/login')
        }
    }
    
     return(
            <>
            <div className="register-container">
                <div className="register-box">
                    <form className="register-form" onSubmit={handleSubmit}>
                        <h3 className="register-h3">Register</h3>
                        <input type="text" placeholder="Full Name"
                        className="register-inputs" name="name"
                        value={formvalues.name}
                        onChange={handleChange} />
                        <input type="email" placeholder="Email"
                        className="register-inputs" name="email"
                        value={formvalues.email}
                        onChange={handleChange} />
                        <input type="text" placeholder="Password"
                        className="register-inputs" name="password"
                        value={formvalues.password}
                        onChange={handleChange} />
                        <button type="submit" id="register-submit-btn">Submit</button>
                        <div className="register-login">
                            <Link to="/login"><p>login</p></Link>
                        </div> 
                    </form>
                </div>
            </div>
            </>

        )
    }
    export default Signup;
