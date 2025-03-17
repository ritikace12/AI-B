require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const aiRoutes = require("./routes/ai");

const app = express();

// Middleware
app.use(express.json());
const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:5173", "https://mark-one.netlify.app"], // Allow both local and deployed frontend
    credentials: true, // Allow cookies (if needed)
  })
);


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/chat", aiRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


