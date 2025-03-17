const express = require("express");
const bcrypt = require("bcrypt.js");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

const router = express.Router();

// Register a new user
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ error: "❌ All fields are required!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: "✅ User registered successfully!" });
  } catch (error) {
    console.error("🔥 Registration Error:", error);
    res.status(500).json({ error: "⚠️ Internal Server Error" });
  }
});

// Login User
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "❌ Invalid credentials!" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ error: "❌ Invalid credentials!" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, user: { username: user.username, email: user.email } });
  } catch (error) {
    console.error("🔥 Login Error:", error);
    res.status(500).json({ error: "⚠️ Internal Server Error" });
  }
});

module.exports = router;
