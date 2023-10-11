import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
function Home() {
    const [login,setLogin]=useState(false)

    useEffect(()=>{
        if(localStorage.getItem('auth')){
            setLogin(true)
        }
    })

    return(
        <>
        <div className="home-container">
            <h1 id="heading">Juke Stream</h1>
            <p id="note">Listen to your favorite songs</p>
            <div id="home-btn">
                <Link to="/login"><button id="home-login-stream">Login</button></Link>
                <Link to="#"><button id="home-login-stream">Stream</button></Link>
            </div>
        </div>
        
        </>
    )
 }
 
 export default Home;
