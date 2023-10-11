import React, { useEffect,useState } from "react";
import {BiLogInCircle} from 'react-icons/bi';
import {Link, useNavigate} from 'react-router-dom';
function Login() {
    const navigate=useNavigate();
    const [LoginUser,setLoginUser]=useState({email:"", password:""});
    const[error,setError]=useState('')

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setLoginUser({...LoginUser,[name]:value})

    }
    const handleSubmit=(e)=>{
       e.preventdefault()
       setError(validator(LoginUser));
   };
   
   const validate=(values) =>{
    const error ={};
   
        if (!values.email){
            error.email ="Email is required"
        }
        else if (!values.password){
            error.password ="password is required"
        }
        
        else
         {
            addLoginUser(loginuser);
        }
        return error;
    };
    const addLoginUser =async (loginuser) =>{
        let header ={
            method:"POST",
            body:JSON.stringify(loginuser),
            Headers: {
                "content-type":"application/json",
            },
        };
        let resp = await fetch("http://localhost:5000/user/login",headers);
        let result = await resp.json();
        console.log(result)

        if (result.status ==="sucess") {
            alert("Login sucess");
            navigate("/");
            localStorage.setItem("auth",true);
            window.location.reload();
            console.log(result.msg);
        } else if (result.status === "notfound") {
            alert("user not found!");
        } else if (result.msg === "invalid password") {
            alert("password incorrect!");
            console.log(error);
        }
    };
    
    return(
            <>
            <div className="login-container">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h3 className="login-h3">login</h3>
                        <label>
                            <span>{error.email}</span>
                            <input type="text" placeholder="Email" name="email" onChange={{handleChange}} />
                        </label>
                        <label>
                            <span>{error.password}</span>
                            <input type="text" placeholder="Password" name="password" onChange={handleChange} />
                        </label>
                    
                        <button className="login-submit">Submit <span><BiLogInCircle/></span></button>
                            <p className="login-p"> forget password?</p>
                            <Link to="/register">Register</Link>    
                    </form>
                 </div>
            </>
        )
    }
export default Login;