import React, { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";

import Aboutus from "./Aboutus.jsx";
import OurServices from "./OurServices.jsx";
import OurProjects from "./OurProjects.jsx";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import Seemore from "./Seemore.jsx";
import { ThemeProvider } from "./ThemeContext.jsx";
import Test from "./Test.jsx";

// Helper component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Your App component
const App = () => {
  const [user, setUser] = useState(null); // 👈 Authenticated user state

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home user={user} /> {/* 👈 Pass user to Home if needed */}
                <Aboutus />
                <OurServices />
                <OurProjects onSignIn={setUser} /> {/* 👈 Pass onSignIn */}
                <Contact />
              </>
            }
          />
          <Route path="/Seemore" element={<Seemore />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

// Render your app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
