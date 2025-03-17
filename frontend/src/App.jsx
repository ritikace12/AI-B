import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/Features";
import ChatBot from "./pages/ChatBot";
import About from "./pages/About";
import Contact from "./pages/Contact";

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("token"); 
  return isAuthenticated ? element : <Navigate to="/" />;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* Protected Routes */}
          <Route path="/home" element={<ProtectedRoute element={<HomePage />} />} />
          <Route path="/chatbot" element={<ProtectedRoute element={<ChatBot setIsLoggedIn={setIsLoggedIn} />} />} />

          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




