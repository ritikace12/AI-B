import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://mark-i.onrender.com/api/auth/register", { username, email, password });
      toast.success("Signup successful! Please log in.");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed!");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black relative overflow-hidden">
      {/* Background Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-black to-red-600 opacity-50 blur-2xl"
      />
      
      <div className="flex flex-grow justify-center items-center">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="z-10 bg-opacity-90 bg-gray-950 p-8 rounded-lg shadow-2xl border border-yellow-500 w-96"
        >
          <h2 className="text-3xl font-extrabold text-center text-yellow-400 mb-6">Sign Up</h2>
          
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-yellow-400" />
              <input 
                type="text" 
                placeholder="Username" 
                className="w-full p-3 pl-10 rounded bg-gray-900 text-white border border-red-500 focus:ring-2 focus:ring-yellow-400"
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
              />
            </div>
            
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit" 
              className="w-full bg-red-600 p-3 rounded-lg text-white font-bold transition-all hover:bg-yellow-500 shadow-lg shadow-red-500/50"
            >
              Register with J.A.R.V.I.S.
            </motion.button>
          </form>
          
          <p className="text-center mt-4 text-gray-300">
            Already have an account? 
            <Link to="/" className="text-yellow-400 hover:underline ml-1">Login</Link>
          </p>
        </motion.div>
      </div>
      
    </div>
  );
};

export default SignupPage;

