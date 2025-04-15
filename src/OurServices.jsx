import { useState } from "react";
import { FaPalette, FaCode, FaMobileAlt } from "react-icons/fa";
import { useTheme } from './ThemeContext'; // Import the useTheme hook

const OurServices = () => {
  const [expanded, setExpanded] = useState({
    uxui: false,
    webdev: false,
    mobile: false,
  });

  const { theme } = useTheme(); // Access the current theme state

  // Function to toggle expansion of each section
  const toggleExpand = (section) => {
    setExpanded((prev) => ({
      ...prev,
      [section]: !prev[section], // Toggle only the clicked section
    }));
  };

  return (
    <div className={`w-full min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-600"} overflow-hidden flex flex-col items-center py-10`} id="ourservice">
      {/* Section Title */}
      <div className="flex justify-center mb-10 mt-12">
        <span className={`text-5xl font-extrabold font-['Sen'] mr-2 ${theme === "dark" ? "text-white" : "text-indigo-900"}`}>Our </span>
        <span className="text-red-600 text-5xl font-extrabold font-['Sen']">Services</span>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-16">
        {/* UX/UI Design */}
        <div
          className={`relative w-96 h-auto p-6 rounded-3xl shadow-xl ring-1 ring-slate-900/5 hover:scale-115 hover:shadow-xl transition-all ${theme === "dark" ? "bg-gray-800" : "bg-white"} ${
            expanded.uxui ? "max-h-[600px]" : "max-h-[400px]"
          }`}
        >
          {/* Icon */}
          <div className="flex justify-center">
            <FaPalette className="text-blue-400 text-4xl mb-4" />
          </div>

          {/* Title */}
          <h2 className={`text-3xl font-extrabold text-center ${theme === "dark" ? "text-white" : "text-indigo-900"}`}>UX/UI Design</h2>

          {/* Short Description */}
          <p className={`text-lg font-light text-center mt-4 ${theme === "dark" ? "text-white" : "text-gray-600"}`}>
            I create intuitive and visually appealing designs that enhance user experience and engagement.
          </p>

          {/* Expandable Section */}
          <div
            className={`overflow-hidden transition-all duration-500 ${expanded.uxui ? "max-h-[200px] mt-4" : "max-h-0"}`}
          >
            <p className={`text-lg font-light text-center max-h-[200px] overflow-y-auto ${theme === "dark" ? "text-white" : "text-gray-600"}`}>
              Good UX/UI design ensures that users can navigate applications effortlessly, reducing friction and increasing satisfaction.
              A well-designed interface improves accessibility, making the application more user-friendly for people of all backgrounds.
              Through research and prototyping, I craft designs that balance aesthetics with functionality, ensuring users stay engaged.
            </p>
          </div>

          {/* Read More Button */}
          <div className="flex justify-center mt-6">
            <button
              className="w-52 h-12 bg-indigo-600 text-white text-xl font-extrabold rounded-2xl shadow-md hover:bg-indigo-700 transition-all"
              onClick={() => toggleExpand("uxui")}
            >
              {expanded.uxui ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>

        {/* Web Development */}
        <div
          className={`relative w-96 h-auto p-6 rounded-3xl shadow-xl ring-1 ring-slate-900/5  hover:scale-115 hover:shadow-xl transition-all ${theme === "dark" ? "bg-gray-800" : "bg-white"} ${
            expanded.webdev ? "max-h-[600px]" : "max-h-[400px]"
          }`}
        >
          {/* Icon */}
          <div className="flex justify-center">
            <FaCode className="text-green-400 text-4xl mb-4" />
          </div>

          {/* Title */}
          <h2 className={`text-3xl font-extrabold text-center ${theme === "dark" ? "text-white" : "text-indigo-900"}`}>Web Development</h2>

          {/* Short Description */}
          <p className={`text-lg font-light text-center mt-4 ${theme === "dark" ? "text-white" : "text-gray-600"}`}>
            I develop responsive and high-performance websites that are optimized for user engagement and accessibility.
          </p>

          {/* Expandable Section */}
          <div
            className={`overflow-hidden transition-all duration-500 ${expanded.webdev ? "max-h-[200px] mt-4" : "max-h-0"}`}
          >
            <p className={`text-lg font-light text-center max-h-[200px] overflow-y-auto ${theme === "dark" ? "text-white" : "text-gray-600"}`}>
              Modern web development requires a deep understanding of both frontend and backend technologies to create seamless user experiences.
              I specialize in React, Tailwind CSS, and JavaScript to build fast, scalable, and visually appealing websites.
              From interactive UI components to secure database integration, I ensure websites function efficiently while maintaining a sleek look.
            </p>
          </div>

          {/* Read More Button */}
          <div className="flex justify-center mt-6">
            <button
              className="w-52 h-12 bg-indigo-600 text-white text-xl font-extrabold rounded-2xl shadow-md hover:bg-indigo-700 transition-all"
              onClick={() => toggleExpand("webdev")}
            >
              {expanded.webdev ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>

        {/* Mobile Application Development */}
        <div
          className={`relative w-96 h-auto p-6 rounded-3xl shadow-xl ring-1 ring-slate-900/5  hover:scale-115 hover:shadow-xl transition-all ${theme === "dark" ? "bg-gray-800" : "bg-white"} ${
            expanded.mobile ? "max-h-[600px]" : "max-h-[400px]"
          }`}
        >
          {/* Icon */}
          <div className="flex justify-center">
            <FaMobileAlt className="text-yellow-400 text-4xl mb-4" />
          </div>

          {/* Title */}
          <h2 className={`text-3xl font-extrabold text-center ${theme === "dark" ? "text-white" : "text-indigo-900"}`}>Mob App Devp't</h2>

          {/* Short Description */}
          <p className={`text-lg font-light text-center mt-4 ${theme === "dark" ? "text-white" : "text-gray-600"}`}>
            I create mobile applications that provide seamless experiences across different devices and platforms.
          </p>

          {/* Expandable Section */}
          <div
            className={`overflow-hidden transition-all duration-500 ${expanded.mobile ? "max-h-[200px] mt-4" : "max-h-0"}`}
          >
            <p className={`text-lg font-light text-center max-h-[200px] overflow-y-auto ${theme === "dark" ? "text-white" : "text-gray-600"}`}>
              Mobile app development involves optimizing applications for performance, security, and seamless user experience.
              I develop cross-platform apps using React Native and Flutter, ensuring they work efficiently on both iOS and Android devices.
              From intuitive UI layouts to backend API integration, I build mobile apps that are user-friendly, responsive, and scalable.
            </p>
          </div>

          {/* Read More Button */}
          <div className="flex justify-center mt-6">
            <button
              className="w-52 h-12 bg-indigo-600 text-white text-xl font-extrabold rounded-2xl shadow-md hover:bg-indigo-700 transition-all"
              onClick={() => toggleExpand("mobile")}
            >
              {expanded.mobile ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
