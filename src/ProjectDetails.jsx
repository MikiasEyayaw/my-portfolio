import React from 'react';
import { useTheme } from './ThemeContext';  // Import the useTheme hook

const ProjectDetails = ({ project, onClose }) => {
  const { theme } = useTheme();  // Get theme from context

  return (
    <div className={`fixed inset-0 flex justify-center items-center ${theme === 'dark' ? 'bg-black bg-opacity-70' : 'bg-black bg-opacity-50'}`}>
      <div className={`bg-white ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} p-8 rounded-lg shadow-lg max-w-lg w-full`}>
        <h2 className={`text-3xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{project.title}</h2>
        <img
          src={`http://localhost:7000${project.image}`}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>{project.description}</p>
        <button
          onClick={onClose}
          className={`${theme === 'dark' ? 'bg-red-700 hover:bg-red-800' : 'bg-red-500 hover:bg-red-700'} mt-4 text-white px-4 py-2 rounded`}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
