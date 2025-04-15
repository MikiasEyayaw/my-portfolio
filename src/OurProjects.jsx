import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard'; 
import LoadingCards from './LoadingCards'; 
import ProjectModal from './ProjectModal';
import ProjectDetails from './ProjectDetails';
import DownloadPreview from './DownloadPreview';  
import { useTheme } from './ThemeContext';  // Import the useTheme hook for dark mode

const OurProjects = ({ onSignIn }) => {
  const [projects, setProjects] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectToDownload, setProjectToDownload] = useState(null);
  
  const { theme } = useTheme();  // Get theme (dark or light) from context
  const loadingProjects=[{id:1,title:"loading projects..."},{id:2,title:"loading projects..."},{id:3,title:"loading projects..."},{id:4,title:"loading projects..."},{id:5,title:"loading projects..."},{id:6,title:"loading projects..."},];
  // Fetch project data from the backend when the component mounts
  useEffect(() => {
    fetch('http://localhost:7000/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error('Error fetching projects:', err));
  }, []);

  const handleSignIn = (user) => {
    setIsAuthenticated(true);
    setIsModalOpen(false);
    onSignIn(user); // ✅ Pass user back to Main.jsx
  };

  const handleSignUp = () => {
    setIsAuthenticated(true);
    setIsModalOpen(false);
  };

  const handleDownload = (project) => {
    if (isAuthenticated) {
      const link = document.createElement('a');
      link.href = `${project.downloadLink}`; 
      link.download = project.title + '.zip'; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsPreviewOpen(false); 
    } else {
      setIsModalOpen(true); 
    }
  };

  const handlePreviewOpen = (project) => {
    setProjectToDownload(project);
    setIsPreviewOpen(true); 
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false); 
    setProjectToDownload(null); 
  };

  return (
    <div className={`w-full min-h-screen relative ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-600'} overflow-hidden`} id="ourproject">
      <div className={` text-center text-indigo-900 font-extrabold text-5xl mt-18 ${theme === 'dark' ? 'text-white' : 'text-indigo-900'}`}>
        Our <span className="text-red-600">Projects</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 mr-10 ml-10">
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onDownloadClick={handlePreviewOpen}
              onProjectClick={() => setSelectedProject(project)}
              theme={theme} // Pass theme to ProjectCard
            />
          ))
        ) : (
          loadingProjects.map((project) => (
            <LoadingCards
              key={project.id}
              project={project}
              theme={theme} // Pass theme to ProjectCard
            />
          ))// Optional loading message
)}
      </div>

      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          theme={theme} // Pass theme to ProjectDetails
        />
      )}

      {isModalOpen && (
        <ProjectModal
          onSignIn={handleSignIn}
          onSignUp={handleSignUp}
          onClose={() => setIsModalOpen(false)}
          theme={theme} // Pass theme to ProjectModal
        />
      )}

      {isPreviewOpen && (
        <DownloadPreview
          project={projectToDownload}
          onDownload={handleDownload}
          onClose={handleClosePreview}
          theme={theme} // Pass theme to DownloadPreview
        />
      )}
    </div>
  );
};

export default OurProjects;
