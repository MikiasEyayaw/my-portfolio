import { useState } from 'react';
import MyImage from './assets/photo_2025-04-11_19-23-17.png';
import { useNavigate } from "react-router-dom";
import { useTheme } from './ThemeContext'; // Import the useTheme hook

function Aboutus() {
  const navigate = useNavigate();
  const { theme } = useTheme(); // Access theme state from context

  const handleClick = () => {
    navigate("/Seemore"); // Navigate to the Seemore page
  };

  return (
    <div className={`w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-24 gap-12 ${
      theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-600"
    }`} id="aboutme">
      {/* Profile Image (Left on larger screens) */}
      <div className="flex justify-center md:justify-start">
        <img 
          className="md:w-[400px] md:h-[400px] lg:object-cover lg:h-[650px]"
          src={MyImage} 
          alt="Profile"
        />
      </div>

      {/* Text Content (Right on larger screens) */}
      <div className="text-center md:text-left">
        {/* "About Me" Heading */}
        <h2 className={`text-4xl md:text-5xl font-extrabold font-['Sen'] ${theme === "dark" ? "text-white" : "text-indigo-900"}`}>
          About <span className="text-red-600">Me</span>
        </h2>

        {/* Job Title */}
        <h3 className={`text-2xl md:text-3xl font-extrabold mt-4 ${theme === "dark" ? "text-white" : "text-indigo-900"}`}>
          Software Engineer
        </h3>

        {/* Description */}
        <p className={`text-lg md:text-2xl font-light mt-4 max-w-3xl ${theme === "dark" ? "text-white" : "text-gray-600"}`}>
          As a Software Engineer, I design and develop efficient, scalable software solutions. I thrive on solving problems and delivering user-friendly applications through continuous learning and collaboration.
        </p>

        {/* "See More" Button */}
        <div className="mt-6 flex justify-center md:justify-start">
          <button 
            onClick={handleClick} 
            className="relative w-52 h-16 bg-indigo-600 rounded-2xl shadow-lg border border-black text-white text-2xl md:text-3xl font-extrabold transform hover:scale-105 duration-300"
          >
            See more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
