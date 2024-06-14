import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex justify-end gap-14'>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/menu">Menu</Link>
        </nav>
    );
};

export default Navbar;
