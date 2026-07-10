const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Routes
const { router: authRouter } = require('./routes/auth');
app.use('/api/auth', authRouter);
app.use('/api/progress', require('./routes/progress'));
app.use('/api/contact', require('./routes/messages'));
app.use('/api/chatbot', require('./routes/chatbot'));

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB Atlas Successfully! 🟢"))
    .catch((err) => console.error("Database connection error 🔴:", err));

// Root Endpoint
app.get('/', (req, res) => {
    res.json({ message: "Welcome to ELEVATE FIT API! 🚀" });
});


// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running successfully on port ${PORT} 🚀`);
});
