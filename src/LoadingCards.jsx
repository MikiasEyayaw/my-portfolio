import React from 'react';
import { useTheme } from './ThemeContext';  // Import the useTheme hook

const LoadingCards = ({project}) => {
  const { theme } = useTheme();  // Get theme from context
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 mr-10 ml-10 mb-5" >
        <div className={`bg-gradient-to-t ${theme === 'dark' ? 'from-indigo-900 text-white' : 'from-indigo-300 text-indigo-900'} pb-6 rounded-3xl shadow-xl ring-1 ring-slate-900/5 hover:shadow-lg transform transition-transform duration-300 hover:scale-105 relative group min-h-54 min-w-105`}>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h3 className={`mt-2 text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}>{project.title}</h3>
      </div>
      </div>
    </div>
  );
};

export default LoadingCards;
