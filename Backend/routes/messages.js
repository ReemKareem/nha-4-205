const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// POST /api/contact - Receive and save a new contact message
router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Check if any field is empty
        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newMessage = new Message({ name, email, message });
        await newMessage.save();

        res.status(201).json({ 
            message: "Message sent successfully", 
            data: newMessage 
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;