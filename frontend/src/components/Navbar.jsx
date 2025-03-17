import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ setIsLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/", { replace: true });
    window.location.reload();
  };

  return (
    <motion.nav
      onMouseEnter={!isMobile ? () => setIsVisible(true) : undefined}
      onMouseLeave={!isMobile ? () => setIsVisible(false) : undefined}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible || isMobile ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-11 left-1/2 transform -translate-x-1/2 w-[88%] md:w-[59%] bg-black/90 backdrop-blur-md text-white py-3 px-8 z-40 border border-yellow-500 rounded-lg shadow-md"
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          className="text-xl font-extrabold tracking-[0.2em] text-yellow-500 font-mono uppercase"
          whileHover={!isMobile ? { scale: 1.05, color: "#ffcc00" } : {}}
          transition={{ duration: 0.2 }}
        >
          MARK-I
        </motion.h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-base font-medium">
          {["Home", "Features", "Constraints"].map((item, index) => (
            <motion.div
              key={index}
              whileHover={!isMobile ? { scale: 1.1, color: "#ffcc00" } : {}}
              transition={{ duration: 0.2 }}
            >
              <Link to={`/${item.toLowerCase()}`} className="hover:text-yellow-400 transition">
                {item}
              </Link>
            </motion.div>
          ))}
          <motion.button
            onClick={handleLogout}
            whileHover={!isMobile ? { scale: 1.1, color: "#ff4f4f" } : {}}
            transition={{ duration: 0.2 }}
            className="focus:outline-none hover:text-red-500 transition"
          >
            Logout
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden bg-black text-yellow-500 text-xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          className="md:hidden flex flex-col space-y-2 mt-3 p-2 bg-black text-yellow-400 border border-yellow-500 rounded-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {["Home", "Features", "Constraints"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase()}`}
              className="block text-center text-lg py-2 text-yellow-400 hover:text-yellow-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="block text-center text-lg py-2 text-red-500 hover:text-red-700 transition"
          >
            Logout
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;


















