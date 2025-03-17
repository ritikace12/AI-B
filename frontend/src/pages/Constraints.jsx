import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const constraints = [
  { title: "Text-Only Interaction", description: "Currently supports only text-based conversations." },
  { title: "Limited Knowledge Base", description: "Trained on data up to October 2023, no real-time updates." },
  { title: "No Chat History", description: "Does not store past conversations for privacy and security." },
];

const upcomingFeatures = [
  { title: "Text-to-Speech (TTS)", description: "Hear responses in a dynamic AI-generated voice." },
  { title: "Speech-to-Text (STT)", description: "Speak directly to the chatbot with voice recognition." },
  { title: "Voice Customization", description: "Choose between male and female AI voices." },
  { title: "Chat History", description: "Save and review past conversations for better continuity." },
  { title: "Enhanced Real-Time Updates", description: "Access real-time news, weather, and trending topics." },
  { title: "Personalized AI", description: "Custom-tailored responses based on user preferences." },
];

const ConstraintsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-black text-white overflow-hidden px-4 sm:px-8">
      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-br from-red-800 via-black to-yellow-500 opacity-90 blur-3xl"
      />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="z-10 text-4xl font-extrabold text-red-500 drop-shadow-md mt-12 text-center"
      >
        Constraints & Future Upgrades
      </motion.h1>

      <p className="text-yellow-400 text-lg text-center mt-2 drop-shadow-lg max-w-lg">
        The current limitations and what’s coming next in <span className="text-red-500 font-bold">MARK-II</span>.
      </p>

      {/* Current Constraints */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 z-10 max-w-5xl">
        {constraints.map((constraint, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-black bg-opacity-80 p-6 rounded-lg shadow-lg border border-red-600 hover:shadow-red-600 transition-all transform hover:scale-105"
          >
            <h3 className="text-xl font-bold text-red-500">{constraint.title}</h3>
            <p className="text-gray-300 mt-2">{constraint.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Future Upgrades */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="z-10 text-2xl font-bold text-red-500 drop-shadow-md mt-10"
      >
        Coming Soon in MARK-II
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 z-10 max-w-5xl">
        {upcomingFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-black bg-opacity-80 p-6 rounded-lg shadow-lg border border-yellow-500 hover:shadow-yellow-500 transition-all transform hover:scale-105"
          >
            <h3 className="text-xl font-bold text-yellow-400">{feature.title}</h3>
            <p className="text-gray-300 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Back Button */}
      <div className="mt-8 mb-12 z-10">
        <button
          onClick={() => navigate("/chatbot")}
          className="px-6 py-3 text-lg font-bold text-white bg-red-600 rounded-lg shadow-lg 
                    hover:bg-yellow-500 transition-all transform hover:scale-110"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ConstraintsPage;





