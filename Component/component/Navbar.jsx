import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import {FaHome} from "react-icons/fa";
import {FiMusic} from "react-icons/fi";
import {IoMdCloudUpload} from "react-icons/io";
import {TbPlaylist} from "react-icons/tb";
function Navbar() {
    const[login,setLogin]=useState(false)
    useEffect(()=>{
        if(localStorage.getItem('auth')){
            setLogin(true)
        }
    },[login])
    const logouthandler=()=>{
        localStorage.removeItem('auth')
        window.location.reload()
    }
    
        return(
            <>
            <nav className="nav-bar">
                <h3 className="logo">JukeStream</h3>
                <ul className="nav-lists">
                    <Link to="/" className="home">
                        <li className="list"><span id="icons"><FaHome/></span>Home</li>
                    </Link>
                <Link to="/songs" className="songs">
                    <li className="list"><span id="icons"><FiMusic/></span>Songs</li>
                </Link>
                <Link to="/upload" className="upload">
                    <li className="list"><span id="icons"><IoMdCloudUpload/></span>Upload</li>
                </Link>
                <Link to="/playlists" className="playlists">
                    <li className="list"><span id="icons"><TbPlaylist/></span>Playlists</li>
                </Link>
                <Link to="/login" className="login">
                    <li>Login</li>
                </Link>
                <Link to="/register" className="signup">
                    <li>Signup</li>
                </Link>
                </ul>
            </nav>
            </>
        )
    }
export default Navbar;