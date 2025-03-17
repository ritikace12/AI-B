import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const features = [
  { title: "Text Generation", description: "Create poems, code, scripts, music, emails, and more." },
  { title: "Natural Language Understanding", description: "Engage in meaningful, human-like conversations." },
  { title: "Knowledge Base", description: "Trained on a vast dataset but has a knowledge cutoff of 2023." },
  { title: "Reasoning & Problem-Solving", description: "Analyze and solve complex queries." },
  { title: "Multilingual Support", description: "Communicate in multiple languages." },
  { title: "Code Generation & Understanding", description: "Write and debug code in various programming languages." },
  { title: "Summarization", description: "Condense large amounts of text into clear summaries." },
  { title: "Question Answering", description: "Provide detailed answers across multiple domains." },
];

const FeaturesPage = () => {
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
        System Capabilities
      </motion.h1>

      <p className="text-yellow-400 text-lg text-center mt-2 drop-shadow-lg max-w-lg">
        Designed to assist, evolve, and enhance your digital experience.
      </p>

      {/* Feature List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 z-10 max-w-5xl">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-black bg-opacity-80 p-6 rounded-lg shadow-lg border border-yellow-500 hover:shadow-yellow-500 transition-all transform hover:scale-105"
          >
            <h3 className="text-xl font-bold text-red-400">{feature.title}</h3>
            <p className="text-gray-300 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Back to Home Button */}
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

export default FeaturesPage;




