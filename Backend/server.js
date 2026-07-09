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
// Chatbot Route Direct Configuration
app.post('/api/chatbot/ask', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ reply: "Please type a message!" });
    }

    const userMessage = message.toLowerCase();
    let reply = "I'm your Elevate Fit assistant. I can help you with diets, exercises, or BMI!";

    if (userMessage.includes('diet') || userMessage.includes('food') || userMessage.includes('eat')) {
        reply = "For a healthy diet, focus on high-protein foods, plenty of vegetables, and complex carbs like oats. Avoid sugar and processed foods!";
    } else if (userMessage.includes('exercise') || userMessage.includes('workout') || userMessage.includes('gym') || userMessage.includes('health')) {
        reply = "A great starting routine is 3 days of full-body strength training and 2 days of light cardio per week.";
    } else if (userMessage.includes('bmi')) {
        reply = "To calculate your BMI, divide your weight in kilograms by your height in meters squared. Normal BMI is between 18.5 and 24.9!";
    } else if (userMessage.includes('hello') || userMessage.includes('hi')) {
        reply = "Hello! Welcome to Elevate Fit. How can I assist you with your fitness goals today?";
    }

    return res.json({ reply });
});

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
