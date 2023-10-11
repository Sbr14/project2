import React from 'react';
import './style.css';
import Navbar from './component/Navbar';
import Upload from './component/Upload';
import Login from './component/Login';
import Signup from './component/Signup';
import Home from './component/Home';
import Playlists from './component/Playlist';
import Songs from './component/Songs';
import { BrowserRouter  as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <div className="App">
    <Router>

     <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/songs" element={<Songs/>} />
      <Route path="/upload" element={<Upload/>} />
      <Route path="/playlist" element={<Playlists/>} />
      <Route path="/register" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
    


    </Routes>
    </Router>

  </div>
  </>
    
);
}

export default App;
