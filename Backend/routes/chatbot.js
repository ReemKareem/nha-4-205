const express = require('express');
const router = express.Router();

router.post('/ask', (req, res) => {
    // الكود عشان يشتغل من غير مشاكل اتصال
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
        reply = "A great starting routine is 3 days of full-body strength training and 2 days of light cardio (like walking or jogging) per week.";
    } else if (userMessage.includes('bmi')) {
        reply = "To calculate your BMI, divide your weight in kilograms by your height in meters squared. Normal BMI is between 18.5 and 24.9!";
    } else if (userMessage.includes('hello') || userMessage.includes('hi')) {
        reply = "Hello! Welcome to Elevate Fit. How can I assist you with your fitness goals today?";
    }

    return res.json({ reply });
});

module.exports = router;