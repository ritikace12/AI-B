import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [showContent, setShowContent] = useState(false);
  const [text, setText] = useState("");
  const message = "THE SYSTEM IS ONLINE";

  useEffect(() => {
    setText(""); // Reset text at the start

    // Simulating a loading effect
    setTimeout(() => {
      setShowContent(true);
    }, 2000);

    let i = 0;
    const interval = setInterval(() => {
      if (i < message.length) {
        setText(message.slice(0, i + 1)); // Always take a valid substring
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-black overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-br from-red-700 via-black to-yellow-600 opacity-90 blur-3xl"
      />

      {/* Loading Animation */}
      {!showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
          className="text-neonBlue text-xl sm:text-2xl md:text-3xl font-bold text-center"
        >
          Booting System...
        </motion.div>
      )}

      {/* Hero Section */}
      {showContent && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center text-white max-w-3xl px-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neonBlue drop-shadow-md animate-glow">
            {text}
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-gray-300 max-w-xl mx-auto">
            Connecting intelligence, technology, and you. <br />
            Ready to enter the grid?
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/chatbot"
              className="px-6 py-3 text-base sm:text-lg font-bold text-white bg-red-600 rounded-lg shadow-lg 
                        hover:bg-yellow-500 transition-all transform hover:scale-110 animate-glitch"
            >
              Launch MARK-I
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default HomePage;







