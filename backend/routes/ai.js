const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const router = express.Router();
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error("❌ GEMINI_API_KEY is missing in .env file");
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

router.post("/", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "❌ Message is required!" });
  }

  try {
    console.log("🧠 Sending request to Gemini:", message);

    const result = await model.generateContent(message);
    const botReply = result.response?.text() || "🤖 No response from AI.";

    console.log("✅ AI Response:", botReply);
    res.json({ response: botReply });
  } catch (error) {
    console.error("🔥 AI Chat Error:", error);
    res.status(500).json({
      error: "⚠️ AI API request failed",
      details: error.message,
    });
  }
});

module.exports = router;







