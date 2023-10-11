import React, { useState } from "react";
function Upload() {
    const [title,setTitel]=useState('');
    const [description,setDescription]=useState('');
    const [artist,setArtist] = useState('');
    const [coveralbum,setCoverAlbum] = useState('');
    const [audio,setAudio] = useState('');
    return(
        <>
        <div className="upload-conatiner">
            <h2>Upload Song</h2>
            <label id="upload-label">Title</label>
            <input type="text"  
            id="upload-input"
             name="title" 
             onChange={(e)=>setTitel(e.target.value)} />

            <label id="upload-label">Description</label>
            <input type="text" 
            id="upload-input" 
            name="description" 
            onChange={(e)=>setDescription(e.target.value)} />

            <label id="upload-label">Artist</label>
            <input type="text" 
            id="upload-input" 
            name="artist" 
            onChange={(e)=>setArtist(e.target.value)} />

            <label id="upload-label">Cover Album</label>
            <input type="text" 
            id="upload-input" 
            name="coverAlbum"
            onChange={(e)=>setCoverAlbum(e.target.value)} />

            <label id="upload-label">Audio File</label>
            <input type="file" 
            name="" id="upload-file" 
            accept="audio/*" 
            onChange={(e)=>setAudio(e.target.files[0])} />
            
            <button id="upload-btn">Submit</button>

        </div>
        </>
    )
}
export default Upload;