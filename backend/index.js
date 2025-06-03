// backend/index.js
const express = require('express');
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
