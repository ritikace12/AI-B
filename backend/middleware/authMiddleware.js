const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  let token = req.header("Authorization");

  if (!token) return res.status(401).json({ error: "❌ Access Denied" });

  try {
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length); // Remove "Bearer " prefix
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: "❌ Invalid Token" });
  }
};

module.exports = authMiddleware;

