import React from 'react'
import { Menu, X } from "lucide-react";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='w-full text-gray-600 font-light px-4 sm:px-8 md:px-16 lg:px-24'>   {/* Navbar */}
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-extrabold hidden md:block text-indigo-900">Portfolio</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 lg:space-x-20 font-extrabold">
          <a href="home" className="hover:text-gray-950">Home</a>
          <a href="aboutme" className="hover:text-gray-950">About Me</a>
          <a href="#ourservice" className="hover:text-gray-950">Our Services</a>
          <a href="#ourproject" className="hover:text-gray-950">Our Project</a>
          <a href="#contactus" className="hover:text-gray-950">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} className="text-indigo-900" /> : <Menu size={28} className="text-indigo-900" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-white py-4 mt-2 text-center rounded-b-3xl`}>
        <a href="#home" className="block py-2 hover:text-indigo-950 font-extrabold" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#aboutme" className="block py-2 hover:text-indigo-950 font-extrabold" onClick={() => setIsOpen(false)}>About Me</a>
        <a href="#ourservice" className="block py-2 hover:text-indigo-950 font-extrabold" onClick={() => setIsOpen(false)}>Our Services</a>
        <a href="#ourproject" className="block py-2 hover:text-indigo-950 font-extrabold" onClick={() => setIsOpen(false)}>Our Project</a>
        <a href="#contactus" className="block py-2 hover:hover:text-indigo-950 font-extrabold" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
    </div>
  );
}

export default Navbar