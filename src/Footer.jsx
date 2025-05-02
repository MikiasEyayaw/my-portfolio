import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useTheme } from './ThemeContext'; // Import useTheme hook to handle dark mode

const Footer = () => {
  const { theme } = useTheme(); // Get the theme value (light or dark)

  return (
    <div
      className={`w-full border-t border-black p-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gradient-to-b from-indigo-300 text-gray-600'}`}
    >
      <div className='flex'>
        <div className='flex-1'>
          <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-indigo-900'}`}>
            Mikias Eyayaw
          </h3>
          <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
            Software Engineer. As a Software Engineer, I design and develop efficient, scalable software solutions.
          </p>
        </div>
      </div>

      <div className={`border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center`}>
        <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>&copy; {new Date().getFullYear()}</p>
        <div className='flex space-x-4 md:my-0'>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={theme === 'dark' ? 'text-gray-400 hover:text-blue-500' : 'text-gray-600 hover:text-blue-700'}
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/mikiase-eyayaw-36b354329"
            target="_blank"
            rel="noopener noreferrer"
            className={theme === 'dark' ? 'text-gray-400 hover:text-blue-500' : 'text-gray-600 hover:text-blue-700'}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/mike_y1733/"
            target="_blank"
            rel="noopener noreferrer"
            className={theme === 'dark' ? 'text-gray-400 hover:text-pink-500' : 'text-gray-600 hover:text-pink-700'}
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={theme === 'dark' ? 'text-gray-400 hover:text-gray-500' : 'text-gray-600 hover:text-gray-700'}
          >
            <FaGithub />
          </a>
        </div>
        <div>
          <a
            href='https://www.termsfeed.com/blog/terms-conditions-url/'
            className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
          >
            Privacy
          </a>
          <a
            href='https://www.termsfeed.com/blog/terms-conditions-url/'
            className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
          >
            Terms of Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
