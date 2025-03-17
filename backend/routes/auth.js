const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

const router = express.Router();

// Register a new user
router.post("/register", async (req, res) => {
  try {
    console.log("📥 Register API Called with Data:", req.body);

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      console.log("⚠️ Missing Fields:", { username, email, password });
      return res.status(400).json({ error: "❌ All fields are required!" });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("⚠️ Email Already Exists:", email);
      return res.status(400).json({ error: "⚠️ Email already registered!" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save new user
    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();

    console.log("✅ User Registered:", newUser);
    res.status(201).json({ message: "✅ User registered successfully!" });

  } catch (error) {
    console.error("🔥 Registration Error:", error);
    res.status(500).json({ error: "⚠️ Internal Server Error", details: error.message });
  }
});


module.exports = router;
