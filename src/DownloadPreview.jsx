import React from 'react';
import { useTheme } from './ThemeContext';  // Import the useTheme hook

const DownloadPreview = ({ project, onDownload, onClose }) => {
  const { theme } = useTheme();  // Get theme from context

  return (
    <div className={`fixed inset-0 flex justify-center items-center z-10 ${theme === 'dark' ? 'bg-black bg-opacity-70' : 'bg-white bg-opacity-50'}`}>
      <div className={`bg-gradient-to-t ${theme === 'dark' ? 'from-indigo-900 text-white' : 'from-indigo-300 text-indigo-900'} p-8 rounded-lg shadow-lg max-w-lg w-full`}>
        <h2 className={`text-3xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-indigo-900'}`}>{project.title}</h2>
        <img
          src={`http://localhost:7000${project.image}`}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>{project.description}</p>
        <div className="mt-4 flex space-x-4">
          <button
            onClick={() => onDownload(project)}
            className={`${theme === 'dark' ? 'bg-indigo-700 hover:bg-indigo-800' : 'bg-indigo-600 hover:bg-indigo-700'} text-white px-4 py-2 rounded`}
          >
            Download
          </button>
          <button
            onClick={onClose}
            className={`${theme === 'dark' ? 'bg-red-700 hover:bg-red-800' : 'bg-red-500 hover:bg-red-700'} text-white px-4 py-2 rounded`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadPreview;
