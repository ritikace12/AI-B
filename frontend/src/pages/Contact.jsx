import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
      <div className="flex-1 p-10 text-center">
        <h1 className="text-4xl font-bold text-neonBlue">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-300">Reach out to us at <span className="text-neonBlue">support@chatbotapp.com</span></p>
      </div>
       {/* Back to Home Button with Fixed Spacing */}
       <div className="mt-8 mb-12">
        <button
          onClick={() => navigate("/chatbot")}
          className="px-6 py-3 text-lg font-bold text-white bg-red-600 rounded-lg shadow-lg 
                    hover:bg-yellow-500 transition-all transform hover:scale-110 animate-glitch"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Contact;
