import React from 'react';
import { FaLaptopCode, FaTools, FaCodeBranch,FaGithub, FaFigma, FaTerminal, FaEnvelope } from 'react-icons/fa';
import MyImage from './assets/photo_2025-04-11_19-24-09.png';
import { useTheme } from './ThemeContext';

const Seemore = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const textColor = isDark ? "text-white" : "text-gray-700";
  const bgColor = isDark ? "bg-gray-900" : "bg-white";
  const headingColor = isDark ? "text-white" : "text-indigo-900";
  const cardBg = isDark ? "bg-gray-800" : "bg-gray-100";
  const borderColor = isDark ? "border-gray-600" : "border-gray-300";

  const skills = [
    { name: 'JavaScript', level: 70 },
    { name: 'Java', level: 75 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 50 },
    { name: 'MongoDB', level: 70 },
    { name: 'TailwindCSS', level: 90 },
    { name: 'Git', level: 90 },
  ];

  return (
    <div className={`w-full min-h-screen ${bgColor} ${textColor} px-6 py-10`}>
      {/* Name Header */}
      <div className="flex justify-start items-center gap-3 mb-10">
        <h1 className={`text-5xl font-extrabold font-['Sen'] ${headingColor}`}>Mikias</h1>
        <h1 className="text-5xl font-extrabold font-['Sen'] text-red-600">Eyayaw</h1>
      </div>

      {/* Profile Picture */}
      <div className="relative flex justify-center mb-12">
        <img
          data-layer="photo"
          className="w-48 h-48 object-cover rounded-full border-4 border-indigo-400 shadow-lg z-10"
          src={MyImage}
          alt="Profile"
        />
        <div className="hidden lg:block absolute w-[250px] h-[250px] bg-gradient-to-t from-indigo-400 to-transparent rounded-full blur-3xl -z-10" />
      </div>

      {/* About Me */}
      <div className={`max-w-4xl mx-auto ${cardBg} p-8 rounded-2xl shadow-lg border ${borderColor} mb-12`}>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          As a Software Engineer, I design and develop efficient, scalable software solutions. I thrive on solving problems and delivering user-friendly applications through continuous learning and collaboration.
          I work with languages like JavaScript, Python, and Java to build scalable systems. I enjoy writing clean code, debugging, optimizing performance, and collaborating with cross-functional teams.
          I’m passionate about staying updated with emerging technologies and creating innovative solutions that have real-world impact.
        </p>
      </div>

      {/* Skills with Progress Bars */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="space-y-6">
          {skills.map(skill => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm font-medium mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full h-3 bg-gray-300 dark:bg-gray-700 rounded-full">
                <div
                  className="h-3 rounded-full bg-indigo-500 transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tools & Technologies with Icons */}
      <div className={`max-w-4xl mx-auto ${cardBg} p-8 rounded-2xl shadow-lg border ${borderColor} mb-12`}>
        <h2 className="text-3xl font-bold mb-4">Tools & Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-lg">
          <div className="flex items-center gap-3">
            <FaTerminal></FaTerminal>
            <span>VS Code</span>
          </div>
          <div className="flex items-center gap-3">
            <FaGithub></FaGithub>
            <span>GitHub</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope></FaEnvelope>
            <span>Postman</span>
          </div>
          <div className="flex items-center gap-3">
            <FaLaptopCode />
            <span>DevTools</span>
          </div>
          <div className="flex items-center gap-3">
            <FaFigma></FaFigma>
            <span>Figma</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seemore;
