import React from 'react';
import { useState } from "react";
import { FaPalette } from "react-icons/fa";
import { useTheme } from './ThemeContext'; // Import the useTheme hook for dark mode

const Contact = () => {
  const [expanded, setExpanded] = useState(false);
  const { theme } = useTheme(); // Get the theme value (light or dark)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the page from refreshing on form submit

    const { firstName, lastName, email, message } = formData;

    if (!firstName || !lastName || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("https://my-portfolio-backend2.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Thank you for contacting me. I will get back to you soon!");
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        });
      } else {
        alert(`Error: ${data.error || "Something went wrong."}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again later.");
    }
  };

  return (
    <div
      className={`w-full min-h-screen relative ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-600'} overflow-hidden`}
      id="contactus"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32">
          <div className={`mx-auto max-w-xl lg:mx-0 lg:max-w-lg ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}>
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width="200"
                    height="200"
                    x="100%"
                    y="-1"
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none"></path>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth="0" fill="white"></rect>
                <svg x="100%" y="-1" className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth="0"></path>
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth="0"
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                ></rect>
              </svg>
            </div>
            <div className={`text-center text-indigo-900 font-extrabold text-5xl mt-15 ${theme === 'dark' ? 'text-white' : 'text-indigo-900'}`}>
              Contact <span className="text-red-600">Me</span>
            </div>
            <p className={`mt-6 text-lg leading-8 ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}>
              Feel free to reach out to us for any inquiries or assistance. i am here to help!
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    ></path>
                  </svg>
                </dt>
                <dd>
                  <a className={`${theme === 'dark' ? 'text-white' : 'text-gray-600'} hover:text-gray-900`} href="mailto:contact@yourcompany.com">
                    mikiaseyayaw123@gmail.com
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                    ></path>
                  </svg>
                </dt>
                <dd className={`${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}>kebele 11, Bahir Dar, Ethiopia</dd>
              </div>
            </dl>
          </div>
        </div>

        <form className="px-6 pb-14 pt-10 mt-20 rounded-3xl shadow-xl ring-1 ring-slate-900/5" onSubmit={handleSubmit}>
          <div className="lg:mr-0 lg:max-w-lg ">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 ">
              <div>
                <label htmlFor="first-name" className={`block text-sm font-semibold leading-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}0`}>
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    autoComplete="given-name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'}`}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="last-name" className={`block text-sm font-semibold leading-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}0`}>
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    autoComplete="family-name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'}`}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className={`block text-sm font-semibold leading-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}0`}>
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'}`}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className={`block text-sm font-semibold leading-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}0`}>
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'}`}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="w-max rounded-2xl border-2 border-[#0057ff] bg-indigo-600 px-5 py-1.5 text-sm font-semibold text-white transition-colors duration-150 ease-in-out hover:border-blue-400 hover:bg-indigo-800"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
