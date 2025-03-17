import { useState } from "react";
import { FaPaperPlane, FaCopy } from "react-icons/fa";
import axios from "axios";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Navbar from "../components/Navbar";

const ChatBot = ({ setIsLoggedIn }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("https://mark-i.onrender.com/api/chat/", { message: input });
      setMessages((prev) => [...prev, { sender: "bot", text: res.data.response }]);
    } catch (error) {
      console.error("❌ AI Response Error:", error);
      alert("AI response failed! Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar setIsLoggedIn={setIsLoggedIn} />

      {/* Background Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-red-700 via-black to-yellow-600 opacity-90" />

      {/* Chat Container */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white py-24 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-[92%] md:w-[60%] p-6 bg-black/80 border border-red-600 rounded-xl shadow-2xl flex flex-col h-[75vh] backdrop-blur-lg justify-between mt-12">
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <motion.div
                  className={`relative max-w-[85%] sm:max-w-[70%] md:max-w-[60%] p-4 rounded-lg text-lg whitespace-pre-wrap shadow-lg transition-all duration-300 border-2 ${
                    msg.sender === "user"
                      ? "border-red-500 bg-black text-white"
                      : "border-yellow-500 bg-black text-white"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        return !inline ? (
                          <SyntaxHighlighter style={dark} language="javascript" PreTag="div" {...props}>
                            {String(children).replace(/\n$/, "")}
                          </SyntaxHighlighter>
                        ) : (
                          <code className="bg-gray-800 text-yellow-400 p-1 rounded" {...props}>
                            {children}
                          </code>
                        );
                      },
                    }}
                  >
                    {msg.text}
                  </ReactMarkdown>
                  {msg.sender === "bot" && (
                    <button
                      className="absolute top-2 right-2 p-1 bg-black/50 rounded-md text-gray-400 hover:text-white"
                      onClick={() => navigator.clipboard.writeText(msg.text)}
                    >
                      <FaCopy />
                    </button>
                  )}
                </motion.div>
              </div>
            ))}
            {loading && <div className="text-center text-red-500 animate-pulse">Processing...</div>}
          </div>

          <div className="mt-6 flex w-full bg-black/70 border border-red-500 rounded-lg p-2 items-center">
  <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    className="flex-1 p-3 sm:p-4 rounded-l-lg bg-transparent text-white focus:ring-2 focus:ring-red-500 placeholder-gray-400 w-full"
    placeholder="Type your message..."
  />
  <motion.button
    onClick={sendMessage}
    whileHover={{ scale: 1.1 }}
    className="bg-red-600 p-3 sm:px-6 hover:bg-yellow-500 transition-all text-black rounded-r-lg"
  >
    <FaPaperPlane />
  </motion.button>
</div>

        </div>
      </motion.div>
    </>
  );
};

export default ChatBot;























