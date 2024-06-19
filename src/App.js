import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Menu from './pages/Menu';
import About from './pages/About';


const App = () => {
    return (
        <div>
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
};

export default App;
