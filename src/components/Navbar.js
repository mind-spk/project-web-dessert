import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex  gap-14  text-[#D7D6D6] mr-10 text-3xl font-judson font-bold absolute  right-16 p-10  '>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About me</Link>
            <Link to="/login">Login</Link>
        </nav>
    );
};

export default Navbar;
