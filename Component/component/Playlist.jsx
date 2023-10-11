import React, { useEffect, useState } from "react";
import{AiOutlinePlus} from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { login } from "../features/url";

function Playlists() {
    const dispatch=useDispatch


    const [display,setDisplay]=useState(false);
    const[playlist,setPlaylist]=useState({playlist:""});
    const[playlists,setPlaylists]=useState([]);
    const[data,setData]=useState([]);
    const[name,setName]=useState([]);
    const[playlistcontainer,setPlaylistContainer]=useState(true);
    const getData= async ()=>{
        let resp = await fetch("http://localhost:5000/Music/getMusic")
        let result = await resp.json();
        setData(result);
    };
    useEffect(()=>{
    },[playlistcontainer])

    const displayplaylist=()=>{
        setPlaylistContainer(true)
    }
    useEffect(()=>{
        getData();
    });

    const handleDisplay=()=>{
        setDisplay(true)
    }
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setPlaylist({...playlist,[name]:value})
        console.log(playlist);
    };
    const handleremove = ()=>{
        setDisplay(false);
    };
    const createplaylist = async ()=>{
        let headers={
            method:"POST",
            body: JSON.stringify(playlist),
            headers:{
                "content-type":"application/json",
            },
        };
        let resp=await fetch(
            "http://localhost:5000/Playlist/createPlaylist",
            headers
        );
        let result=await resp.json();
        console.log(result);
        setDisplay(false);
    };
    const getPlaylist=async()=>{
        let resp=await fetch(
            "http://localhost:5000/Playlist/getPlaylist",);
            let result=await resp.json();
            setPlaylists(result);
    };
    useEffect(()=>{
        getPlaylist();
    },[playlists]);
    const handleplaylist=(playlist)=>{
        console.log(playlist);
        setName(playlist);
        setPlaylistContainer(false)
    };
    const removeplaylist=(song)=>{
        const reqObj={...song,playlist:""}
         fetch('http://localhost:5000/Music/removePlaylist/${song,_id}',{
            method:'PUT',
            body:JSON.stringify(reqObj),
            headers:{
                'content-type':'application/json; charset=UTF=8',
            },
         })
         .then((Response)=>Response.json())
         .then((json)=>console.log(json));
    }
    return(
        <>
        <div className="playlist-container">
            <div id={display ? "create-playlist":"remove-playlist"}>
                <p onClick={handleremove} className="close-btn">close</p>
                <input type="text" name="playlist" id="playlist-input" onChange={handleChange} />
                <button className="create-btn" onClick={createplaylist}>Create</button>
            </div>
            <p className="create" onClick={handleDisplay}><AiOutlinePlus/>Create Playlist</p>
            <div className={playlistcontainer ? "playlists":"remove-playlist"}>
                {playlists.map((playlist)=>{
                    return (
                        <div className="playlist-container"
                    )
                })}
            </div>
            
        </div>

        </>
    );
}
export default Playlists;  