const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

const router = express.Router();

// 🟢 Register a new user
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

// 🟢 Login Route
router.post("/login", async (req, res) => {
  try {
    console.log("📥 Login API Called with Data:", req.body);

    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "❌ Email and password are required!" });
    }

    // Find user in DB
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "❌ User not found!" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "❌ Incorrect password!" });
    }

    // Generate JWT Token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    console.log("✅ Login Successful:", email);
    res.status(200).json({ message: "✅ Login successful!", token });

  } catch (error) {
    console.error("🔥 Login Error:", error);
    res.status(500).json({ error: "⚠️ Internal Server Error", details: error.message });
  }
});

module.exports = router;

