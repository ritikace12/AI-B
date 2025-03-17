import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = ({ setIsLoggedIn }) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/", { replace: true });
    window.location.reload();
  };

  return (
    <motion.nav
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-7 left-1/2 transform -translate-x-1/2 w-[65%] bg-black/90 backdrop-blur-md text-white py-3 px-6 z-50 border border-yellow-500 rounded-lg shadow-md"
    >
      <div className="flex justify-between items-center">
        {/* U.L.T.R.O.N. Logo - Smaller & Padded */}
        <motion.h1
          className="text-xl font-extrabold tracking-[0.2em] text-yellow-500 font-mono uppercase px-4 py-1rounded-lg"
          whileHover={{ scale: 1.05, color: "#ffcc00" }}
          transition={{ duration: 0.2 }}
        >
          MARK-I
        </motion.h1>

        <div className="hidden md:flex space-x-6 text-base font-medium">
          {["Home", "Features", "About"].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, color: "#ffcc00" }}
              transition={{ duration: 0.2 }}
            >
              <Link to={`/${item.toLowerCase()}`} className="hover:text-yellow-400 transition">
                {item}
              </Link>
            </motion.div>
          ))}
          <motion.button
            onClick={handleLogout}
            whileHover={{ scale: 1.1, color: "#ff4f4f" }}
            transition={{ duration: 0.2 }}
            className="focus:outline-none hover:text-red-500 transition"
          >
            Logout
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;












