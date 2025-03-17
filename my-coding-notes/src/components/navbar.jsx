// Navbar.jsx
import React from 'react';
import '../App.css';

const Navbar = () => {
  return (
    <nav className=' p-5 bg-gray-800 text-white position-sticky top-0'>
      <ul className='flex space-x-5'>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
