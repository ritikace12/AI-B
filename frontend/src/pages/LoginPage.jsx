import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/api/auth/login", { email, password });
      toast.success("Login successful!");
      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-r from-red-700 via-black to-yellow-600 opacity-80 blur-3xl"
      />

      {/* Glowing Login Box */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="z-10 bg-opacity-95 bg-gray-950 p-8 rounded-lg shadow-2xl border-2 border-yellow-500 w-96"
      >
        <h2 className="text-3xl font-extrabold text-center text-yellow-400 mb-6 ">LOGIN</h2>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-yellow-400" />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-3 pl-10 rounded bg-gray-900 text-white border border-red-500 focus:ring-2 focus:ring-yellow-400"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-yellow-400" />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-3 pl-10 rounded bg-gray-900 text-white border border-red-500 focus:ring-2 focus:ring-yellow-400"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit" 
            className="w-full bg-red-600 p-3 rounded-lg text-white font-bold transition-all hover:bg-yellow-500 shadow-lg shadow-red-500/50"
          >
            Access J.A.R.V.I.S.
          </motion.button>
        </form>
        
        <p className="text-center mt-4 text-gray-300">
          Don't have an account? 
          <Link to="/signup" className="text-yellow-400 hover:underline ml-1">Sign Up</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;


