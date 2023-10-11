import React, { useRef, useState } from "react";
import {useSelector} from "react-redux";
export default function Audioplayer(){
    const[play,setPlay]=useState(true);
    const audioRef=useRef(null);

    const audioplay=()=>{
        audioRef.current.play();
        setPlay(false);
    };
    const audiopause=()=>{
        audioRef.current.pause();
        setPlay(true);
    };
    const user = useSelector((state)=>state.user.value);
    return (
        <>
        <div className="audioplayer-container">
            <div className="song-details">
                <img src={songimage} alt="" className="song-imgg" />
                <div className="name-autor">
                    <p className="song-name-player">{user.songname}</p>
                    <p className="song-name-player">{user.songartist}</p>
                </div>
            </div>
            <div className="audio-control">
                <div>
                    <MdOutlineskipPrevious/>
                </div>
                <div className="audio-t" style={{display:"none"}}>
                    <audio src={user.urllink} controls ref={audioref}></audio>
                </div>
                <div style={{display:play ? "block": "none"}} onClick={audioplay}>
                    <BsPlayFill/>
                </div>
                <div style={{display:play ? "none": "block" }} onClick={audiopause}>
                    <BsPauseFill/>
                </div>
                <div>
                    <MdOutlineSkipNext/>
                </div>
            </div>
        </div>
        </>
    );
}