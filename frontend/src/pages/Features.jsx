import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const features = [
  { title: "Answer Questions", description: "Get instant answers on science, tech, arts, and beyond." },
  { title: "Guidance on Tasks", description: "Plan, organize, and execute tasks efficiently with AI-powered suggestions." },
  { title: "Learning & Education", description: "Master concepts, get study tips, and ace your assignments." },
  { title: "Communication Aid", description: "Draft emails, messages, and improve your communication." },
  { title: "Entertainment", description: "Movie, book, and game recommendations based on your interests." },
  { title: "Personal Growth", description: "Productivity hacks, self-care tips, and motivation boosters." },
  { title: "Accessibility Aid", description: "Text-to-speech, reminders, and simplified task assistance." },
  { title: "Local Information", description: "Find nearby restaurants, stores, and attractions instantly." },
  { title: "Weather Updates", description: "Get real-time weather updates tailored to your location." },
  { title: "Internet Research", description: "Fast, precise searches for news, articles, and research material." },
  { title: "Multi-Lingual Support", description: "Translate words and phrases across multiple languages." },
  { title: "News & Updates", description: "Stay up-to-date with the latest global and tech news." },
];

const FeaturesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-black text-white overflow-hidden">

      {/* Animated Background - Iron Man Theme */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-br from-red-800 via-black to-yellow-500 opacity-90 blur-3xl"
      />

      {/* Glitchy Heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="z-10 text-5xl font-extrabold text-red-500 drop-shadow-md mt-12"
      >
        System Capabilities
      </motion.h1>

      {/* Improved Visibility for Second Line */}
      <p className="text-yellow-400 text-lg text-center mt-2 drop-shadow-lg">
        Designed to assist, evolve, and enhance your digital experience.
      </p>

      {/* Feature List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 z-10 px-8 max-w-5xl">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg border border-yellow-500 hover:shadow-yellow-500 transition-all transform hover:scale-105"
          >
            <h3 className="text-xl font-bold text-red-400">{feature.title}</h3>
            <p className="text-gray-300 mt-2">{feature.description}</p>
          </motion.div>
        ))}
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

export default FeaturesPage;


