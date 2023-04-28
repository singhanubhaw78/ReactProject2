import React from 'react';

import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Headers from './Components/Headers';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Videos from './Components/Videos';
import Upload from './Components/Upload';
import Login from './Components/Login';
import Signup from './Components/Signup';
function App() {
  return (
    <Router>
      <Headers/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/videos' element={<Videos/>}/>
        <Route path='/upload' element={<Upload/>} />
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
