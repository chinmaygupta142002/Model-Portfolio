import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 2000); // duration of the animation in milliseconds

    return () => clearTimeout(timer); // cleanup timer on component unmount
  }, []);

  return (
    <div className={`navbar bg-base-100 flex flex-col items-center ${isAnimating ? 'animate-pulse' : ''}`}>
      <div className="text-center mt-4">
        <Link to='/'>
          <p className="text-4xl md:text-6xl font-bold">ANNA MCCLEAN</p>
          <p className="text-lg md:text-xl font-medium mt-2">Model</p>
        </Link>
      </div>
      <div className="mt-4">
        <button
          className="block md:hidden text-2xl"
          onClick={toggleMenu}
        >
          ☰
        </button>
        <ul className={`menu menu-horizontal text-xl px-1 ${isOpen ? 'block' : 'hidden'} md:flex`}>
          <li className="mx-2"><Link to='/about'>About</Link></li>
          <li className="mx-2"><Link to='/contact'>Contact</Link></li>
          <li className="mx-2"><Link to='/'>Portfolio</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;



