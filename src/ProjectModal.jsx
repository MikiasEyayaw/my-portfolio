import React, { useState } from "react";
import { useTheme } from './ThemeContext';

const ProjectModal = ({ onSignIn, onSignUp, onClose, onBack }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [thirdParty, setThirdParty] = useState(""); 
  const { theme } = useTheme();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const clearForm = () => {
    setEmail("");
    setPassword("");
    setError("");
    setSuccessMessage("");
  };

  const fetchProfile = async () => {
    const token = localStorage.getItem("token");
  
    if (!token) {
      console.error("No token found. Please sign in.");
      setError("No token found. Please sign in.");
      return;
    }
  
    try {
      const response = await fetch("https://my-portfolio-backend2.onrender.com/api/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch profile data.");
      }
  
      const data = await response.json();
      console.log("Profile Data:", data);
      onSignIn(data.user); // Pass the user data to the parent component
    } catch (error) {
      console.error("Error fetching profile data:", error.message);
      setError("Failed to fetch profile data. Please try again.");
      throw error; // Rethrow the error to handle it in `handleSignIn`
    }
  };
  const handleSignIn = async () => {
  if (!email.trim() || !password.trim()) {
    setError("Please fill in all fields.");
    return;
  }
  if (!validateEmail(email)) {
    setError("Invalid email format.");
    return;
  }
  if (password.length < 6) {
    setError("Password must be at least 6 characters long.");
    return;
  }

  try {
    setError(""); // Clear any previous errors
    console.log("Sending sign-in request...");

    const response = await fetch("https://my-portfolio-backend2.onrender.com/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    console.log("Response Status:", response.status);

    const data = await response.json();
    console.log("Response Data:", data);

    if (!response.ok) {
      setError(data.message || "Login failed.");
      return;
    }

    // Save the token and fetch profile data
    localStorage.setItem("token", data.token); // Save the token
    console.log("Token saved to localStorage:", data.token);

    const user = await fetchProfile(); // Fetch the profile data

    if (user) {
      setSuccessMessage("Sign-in successful!"); // Set success message after fetching profile
      setTimeout(() => {
        setSuccessMessage("");
        onClose(); // Close the modal
      }, 3000);
    }
  } catch (err) {
    console.error("Error during sign-in:", err.message);
    setError("Invalid credentials or error occurred. Please try again.");
  }
};

  const handleSignUp = async () => {
    if (!email.trim() || !password.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Invalid email format.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      setError("");
      const response = await fetch("https://my-portfolio-backend2.onrender.com/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Signup failed.");
        return;
      }

      setSuccessMessage("Account created successfully!");
      setTimeout(() => {
        setSuccessMessage("");
        onSignUp(); // Notify parent
      }, 1000);
    } catch (err) {
      setError("An error occurred while creating the account. Please try again.");
    }
  };
  return (
    <div className={`fixed inset-0 ${theme === 'dark' ? 'bg-gray-900 bg-opacity-80' : 'bg-white bg-opacity-50'} flex justify-center items-center z-50`}>
      <div className={`bg-gradient-to-r ${theme === 'dark' ? 'from-gray-700 to-black' : 'from-blue-500 to-purple-500'} rounded-[26px] m-4 p-2 relative`}>
        <div className={`border-[20px] border-transparent rounded-[20px] ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg p-8 sm:p-10 md:p-10 lg:p-12 relative`}>
          <h1 className={`text-5xl font-bold text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-900'}`}>{isSignUp ? "Sign Up" : "Sign In"}</h1>

          <form className="space-y-4 mt-6" onSubmit={(e) => e.preventDefault()}>
            {error && <p className="text-red-500 text-center">{error}</p>}
            {successMessage && <p className="text-green-500 text-center font-bold">{successMessage}</p>}

            <div>
              <label className={`block text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>Email</label>
              <input
                type="email"
                className={`border ${theme === 'dark' ? 'dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700' : 'border-gray-300'} p-3 shadow-md rounded-lg w-full focus:scale-105 ease-in-out duration-300`}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className={`block text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>Password</label>
              <input
                type="password"
                className={`border ${theme === 'dark' ? 'dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700' : 'border-gray-300'} p-3 shadow-md rounded-lg w-full focus:scale-105 ease-in-out duration-300`}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="button"
              className={`w-full bg-gradient-to-r ${theme === 'dark' ? 'from-gray-600 to-gray-900' : 'from-blue-500 to-purple-500'} shadow-lg mt-4 p-3 text-white rounded-lg hover:scale-105 transition duration-300 ease-in-out`}
              onClick={isSignUp ? handleSignUp : handleSignIn}
              disabled={successMessage}
            >
              {isSignUp ? "SIGN UP" : "SIGN IN"}
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-gray-500">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
              <button
                className={`text-blue-400 ml-1 hover:underline ${theme === 'dark' ? 'hover:text-blue-300' : 'hover:text-blue-500'}`}
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  clearForm();
                }}
                disabled={successMessage}
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </button>
            </p>
          </div>

          <div className="flex justify-center mt-6 space-x-3">
            <button onClick={() => setThirdParty("Google")} className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg">
              <img className="w-7" src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/" alt="Google" />
            </button>
            <button onClick={() => setThirdParty("LinkedIn")} className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg">
              <img className="w-7" src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/" alt="LinkedIn" />
            </button>
            <button onClick={() => setThirdParty("GitHub")} className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg">
              <img className="w-7 filter dark:invert" src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/" alt="GitHub" />
            </button>
          </div>

          <div className="text-gray-500 text-center mt-4 text-sm">
            <p>
              By signing in, you agree to our
              <a className={`text-blue-400 hover:underline ml-1 ${theme === 'dark' ? 'hover:text-blue-300' : 'hover:text-blue-500'}`} href="#">Terms</a> and
              <a className={`text-blue-400 hover:underline ml-1 ${theme === 'dark' ? 'hover:text-blue-300' : 'hover:text-blue-500'}`} href="#">Privacy Policy</a>.
            </p>
          </div>

          <div className="absolute top-4 right-4 flex space-x-2">
            <button onClick={onBack} className={`text-2xl ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>&larr;</button>
            <button onClick={onClose} className={`text-2xl ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>&times;</button>
          </div>
        </div>
      </div>

      {thirdParty && (
        <div className="fixed inset-0 bg-white bg-opacity-60 flex justify-center items-center z-50">
          <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md`}>
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800 dark:text-gray-200">
              {thirdParty} {isSignUp ? "Sign Up" : "Sign In"}
            </h2>

            {error && <p className="text-red-500 text-center">{error}</p>}
            {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

            <input
              type="email"
              placeholder="Email"
              className="w-full mb-3 p-3 border rounded-lg dark:bg-indigo-700 dark:text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 p-3 border rounded-lg dark:bg-indigo-700 dark:text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex justify-between">
              <button
                onClick={isSignUp ? handleSignUp : handleSignIn}
                disabled={successMessage}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
               {isSignUp ? "SIGN UP" : "SIGN IN"} {thirdParty}
              </button>

              <button
                onClick={() => {
                  setThirdParty("");
                  setError("");
                  setEmail("");
                  setPassword("");
                }}
                className="text-gray-600 hover:text-red-500 font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectModal;
