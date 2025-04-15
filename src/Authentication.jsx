// src/components/Authentication.js
import React from 'react';

const Authentication = ({ onSignIn, onSignUp }) => {
  return (
    <div>
      {/* Render sign-in or sign-up forms */}
      <button onClick={onSignIn} className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
        Sign In
      </button>
      <button onClick={onSignUp} className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded">
        Sign Up
      </button>
    </div>
  );
};

export default Authentication;
