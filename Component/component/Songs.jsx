import React, { useEffect, useState } from "react";
import {useDispatch} from 'react-redux';
import { login } from "../features/url";
import {CgPlayListAdd} from 'react-icons/cg';
function Songs() {
    const dispatch=useDispatch();
    const [data,setData] =useState([]);

    const getData = async()=>{
        let resp=await fetch("http://localhost:5000/Music/getMusic");
        let result=await resp.json();
        setData(result);
    };
    useEffect(()=>{
        getData();
    },[]);

    return(
        <>
        <div className="song-container">
            <h3 className="song">Songs</h3>
            {Data.map((song)=>{
                return (
                    <div className="song-box" onClick={()=> dispatch(login({urlling:song.url}))}>
                        <div className="song-row">
                            <img src={songimage} alt="fdsfs" className="song-imgg" />
                            <div className="song-name">
                                <p>{song.title}</p>
                                <p>{song.artist}</p>
                            </div>
                        </div>
                        <div className="p-icons">
                            <i>CgPlaylistAdd</i>
                        </div>
                    </div>
                );
            })}

        </div>

        </>
    );
}
export default Songs;