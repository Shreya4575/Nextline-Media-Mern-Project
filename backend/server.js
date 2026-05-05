const express = require("express");
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Route (VERY IMPORTANT)
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Keep server alive
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});