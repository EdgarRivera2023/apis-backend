require('dotenv').config();
const express = require('express');
const db = require('./config/db'); // <-- ADD THIS LINE

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: "Welcome to the Apis Backend!" });
});

app.listen(PORT, async () => {
  try {
    // Test the database connection
    await db.query('SELECT NOW()'); // <-- ADD THIS LINE
    console.log('✅ Database connection successful');
  } catch (error) {
    console.error('❌ Database connection failed', error);
  }
  console.log(`✅ Server is running on port ${PORT}`);
});