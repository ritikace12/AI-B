import { useState } from "react";
import { motion } from "framer-motion";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");

    // Simulate bot response (replace this with an actual API call)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Processing your request...", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      {/* Header */}
      <div className="p-4 bg-red-700 text-center font-bold text-xl">
        AI Chatbot
      </div>

      {/* Chat Messages Section */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`max-w-xs px-4 py-2 rounded-lg ${
              msg.sender === "user"
                ? "bg-red-600 self-end text-right"
                : "bg-gray-800 self-start text-left"
            }`}
          >
            {msg.text}
          </motion.div>
        ))}
      </div>

      {/* Chat Input Section */}
      <div className="p-3 bg-gray-900 flex items-center w-full rounded-t-lg">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 p-3 bg-transparent text-white outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-yellow-500 transition-all"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
























