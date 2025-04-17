import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext"; // Import the useTheme hook
import MyImage from './assets/photo_2025-04-11_19-24-09.png';
import { TypeAnimation } from "react-type-animation";
import { Menu, X, Moon, Sun } from "lucide-react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Home = ({ user }) => {
  const { theme, toggleTheme } = useTheme(); // Access theme and toggle function

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`relative overflow-hidden w-full min-h-screen font-light px-4 sm:px-8 md:px-16 lg:px-5 pt-5 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-t from-indigo-300 text-gray-600"
      }`}
      id="home"
    >
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-600"
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <div className="text-2xl font-extrabold hidden md:block">Portfolio</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 lg:space-x-20 font-extrabold">
            <a href="#home" className={`hover:text-gray-950 ${
          theme === "dark" ?"hover:text-yellow-600" : "hover:text-gray-950"
        }`}>
              Home
            </a>
            <a href="#aboutme" className={`hover:text-gray-950 ${
          theme === "dark" ?"hover:text-yellow-600" : "hover:text-gray-950"
        }`}>
              About Me
            </a>
            <a href="#ourservice" className={`hover:text-gray-950 ${
          theme === "dark" ?"hover:text-yellow-600" : "hover:text-gray-950"
        }`}>
              My Services
            </a>
            <a href="#ourproject" className={`hover:text-gray-950 ${
          theme === "dark" ?"hover:text-yellow-600" : "hover:text-gray-950"
        }`}>
              My Project
            </a>
            <a href="#contactus" className={`hover:text-gray-950 ${
          theme === "dark" ?"hover:text-yellow-600" : "hover:text-gray-950"
        }`}>
              Contact
            </a>
          </div>
              {/* Display user's id if logged in */}
    {user && (
      <div className={`font-bold hover:text-gray-950 ${
        theme === "dark" ?"hover:text-yellow-600" : "hover:text-gray-950"
      }`}>
        Welcome User-{user.id}
      </div>
    )}
          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme} // Use the global toggleTheme function
            className="ml-4 p-2 rounded-full transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden ${isOpen ? "block" : "hidden"} bg-transparent py-4 mt-2 text-center rounded-b-3xl`}
        >
          <a
            href="#home"
            className={`block py-2 ${
              theme === "dark" ?"hover:text-yellow-600" : "hover:text-gray-950"
            } font-extrabold`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#aboutme"
            className={`block py-2 ${
              theme === "dark" ?"hover:text-yellow-600" : "hover:text-gray-950"
            } font-extrabold`}
            onClick={() => setIsOpen(false)}
          >
            About Me
          </a>
          <a
            href="#ourservice"
            className={`block py-2 ${
              theme === "dark" ?"hover:text-yellow-600" : "hover:text-gray-950"
            } font-extrabold`}
            onClick={() => setIsOpen(false)}
          >
            My Services
          </a>
          <a
            href="#ourproject"
            className={`block py-2 ${
              theme === "dark" ?"hover:text-yellow-600" : "hover:text-gray-950"
            } font-extrabold`}
            onClick={() => setIsOpen(false)}
          >
            My Project
          </a>
          <a
            href="#contactus"
            className={`block py-2 ${
              theme === "dark" ?"hover:text-yellow-600" : "hover:text-gray-950"
            } font-extrabold`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </nav>
{/* Main Content Wrapper - responsive layout */}
<div className="relative w-full min-h-screen flex flex-col items-center lg:block">

  {/* Top Left Text */}
  <div className="w-full md:w-1/2 text-left py-10 md:py-16 px-4 sm:px-10 lg:absolute lg:top-1/3 lg:left-0">
    <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Hello it’s me</h2>
    <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">Mikias Eyayaw</h1>
    <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
      And I am a{" "}
      <span className="text-2xl sm:text-3xl text-red-600 font-bold">
        <TypeAnimation
          sequence={[
            "Software Engineer",
            1000,
            "UX/UI Designer",
            1000,
            "Web Developer",
            1000,
            "Mobile App Developer...",
            1000,
          ]}
          repeat={Infinity}
        />
      </span>
    </h2>
  </div>

  {/* Right Side Text - Only on large screens */}
  <div className={`hidden lg:flex flex-col gap-5 rounded-lg shadow-xl ring-1 ring-slate-900/5 absolute bottom-0 m-auto right-0 h-fit w-1/3 top-1/6 ${
    theme === "dark" ? "text-white" : "bg-white text-gray-600 "
  }`}>
    <p className="text-lg sm:text-2xl p-5">
      As a Software Engineer, I design and develop efficient, scalable software
      solutions. I thrive on solving problems and delivering user-friendly applications
      through continuous learning and collaboration.
    </p>
  </div>

  {/* Image - stays visible and responsive */}
  <img
    src={MyImage}
    alt="myImage"
    className="h-[500px] sm:h-[600px] object-cover mx-auto z-10 mt-10 lg:absolute lg:bottom-0 lg:right-0 lg:left-0"
  />

  <div className="-z-10 hidden lg:block absolute -bottom-1/4 w-145 h-145 bg-indigo-900 rounded-full right-0 left-0 mx-auto" />

  <div className="w-full lg:w-auto absolute bottom-10 flex justify-center lg:justify-start px-4 z-10">
    <div className="relative w-52 h-16 transform hover:scale-105 duration-300">
      <div className="absolute inset-0 bg-indigo-600 rounded-2xl shadow-lg border border-black" />
      <div className="absolute inset-0 bg-indigo-600 rounded-2xl border border-black blur-lg" />
      <button className="absolute inset-0 flex items-center justify-center text-white text-2xl sm:text-3xl font-extrabold">
        <a href="https://my-portfolio-backend2.onrender.com/myCv.doc" download>Download CV</a>
      </button>
    </div>
  </div>

</div>

    </div>
  );
};

export default Home;
