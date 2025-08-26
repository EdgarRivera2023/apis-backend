// --- Apis Backend Entry Point ---

// 1. Load environment variables from .env file
require('dotenv').config();

// 2. Import the Express library
const express = require('express');

// ... (the rest of the file is the same) ...
const app = express();

// 3. Define the port using an environment variable, with a fallback to 3000
const PORT = process.env.PORT || 3000;

// 4. Define a basic route for the root URL
// When someone visits our server's main address, this will run
app.get('/', (req, res) => {
  res.json({ message: "Welcome to the Apis Backend!" });
});

// 5. Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});