import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import { useState } from 'react';
import Video from './Pages/Video/Video';

function App() {
  const [menu, setMenu] = useState(true)
  return (
    <div className="App">
      <Navbar setMenu={setMenu}/>
      <Routes>
        <Route path='/' element={<Home menu={menu} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />}/>
      </Routes>      
    </div>
  );
}

export default App;
