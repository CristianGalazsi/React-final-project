import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import BookNow from './pages/booknow';
import Signin from './pages/signin';
import Artists from './pages/artists';
import Signup from './pages/signup';


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/booknow' element={<BookNow />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/artists' element={<Artists />} />
                <Route path='/signup' element={<Signup/>}/>
            </Routes>


        </Router>
    );
}

export default App;