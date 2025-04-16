import React from 'react';
import { useTheme } from './ThemeContext';  // Import the useTheme hook

const ProjectCard = ({ project, onProjectClick, onDownloadClick }) => {
  const { theme } = useTheme();  // Get theme from context
  return (
    <div className={`bg-gradient-to-t ${theme === 'dark' ? 'from-indigo-900 text-white' : 'from-indigo-300 text-indigo-900'} pb-6 rounded-lg shadow-xl ring-1 ring-slate-900/5 hover:shadow-lg transform transition-transform duration-300 hover:scale-105 relative group min-h-54`}>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h3 className={`mt-2 text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}>{project.title}</h3>
        <p className={`mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
      </div>

      <div
        className="absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-15 cursor-pointer"
        onClick={() => onDownloadClick(project)} // Open preview when the image is clicked
      >
        <img
          src={`https://my-portfolio-backend2.onrender.com${project.image}`} // Correct path with /public prefix (project.image should not have /public already)
          alt={project.title}
          className="w-full h-full object-cover rounded-lg shadow-xl ring-1 ring-slate-900/5"
          
        />
      </div>
    </div>
  );
};

export default ProjectCard;
