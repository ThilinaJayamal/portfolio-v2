import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about", offset: -80 },
    { name: "Education", to: "education", offset: -80 },
    { name: "Skills", to: "skills", offset: -80 },
    { name: "Projects", to: "projects", offset: -80 },
    { name: "Contact", to: "contact", offset: -80 },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Navbar Container */}
      <div className="max-w-2xl mx-4 sm:mx-auto mt-5 px-6 h-[60px] flex items-center justify-between 
                      bg-blue-200/10 backdrop-blur-md border border-white/20 shadow-md rounded-full">

        {/* Logo */}
        <Link to="home" smooth={true} duration={500}>
          <h1 className="text-2xl font-bold text-white cursor-pointer">TJ</h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white/70">
          {navItems.map(({ name, to, offset }) => (
            <li key={name} className="cursor-pointer hover:text-white">
              <Link activeClass="active" spy={true} to={to} smooth={true} duration={500} offset={offset || 0}>
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mx-4 mt-1 px-6 py-4 space-y-4 text-white/70 text-lg 
                  bg-white/10 backdrop-blur-md rounded-3xl">
          {navItems.map(({ name, to, offset }) => (
            <Link
              key={name}
              to={to}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={offset || 0}
              className="block cursor-pointer hover:text-white"
              onClick={() => setIsOpen(false)} // close menu on click
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
