const express = require('express');
const router = express.Router();
const Progress = require('../models/Progress');
const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ message: "Access denied. No token provided." });
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch {
        res.status(401).json({ message: "Invalid token." });
    }
};

// POST /api/progress — Add new weight log (Protected)
router.post('/', authMiddleware, async (req, res) => {
    try {
        const { weight, bodyFat } = req.body;

        // Validation to ensure weight is provided
        if (!weight) {
            return res.status(400).json({ error: "Weight field is required" });
        }

        const newProgress = new Progress({
            userId: req.userId, // Automatically taken from the decoded token
            weight,
            bodyFat
        });
        await newProgress.save();

        res.status(201).json({ message: "Weight logged successfully", data: newProgress });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /api/progress/history — Fetch all logs for charts (Protected)
router.get('/history', authMiddleware, async (req, res) => {
    try {
        // Fetch user records sorted from oldest to newest
        const history = await Progress.find({ userId: req.userId }).sort({ date: 1 });
        res.json(history);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
