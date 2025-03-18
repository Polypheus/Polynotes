// Navbar.jsx
import React from 'react';
import '../App.css';

const Navbar = () => {
  return (
    <nav className='p-5 bg-gray-800 position-sticky top-0'>
      <ul className='grid justify-items-end gap-1 h-30  text-white'>
        <li className=' h-60 w-50 bg-gray-900'><a href="/Home" className='flex h-full w-full justify-center items-center text-4xl'>Home</a></li>
        <li  className=' h-60 w-50 bg-gray-900'><a href="/about" className='flex h-full w-full justify-center items-center text-4xl'>About</a></li>
        <li  className=' h-60 w-50 bg-gray-900'><a href="/contact" className='flex h-full w-full justify-center items-center text-4xl'>Contacts</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
