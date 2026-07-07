const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// --- Middleware to protect routes and verify JWT Token ---
const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) return res.status(401).json({ message: "Access denied. Token is missing." });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid or expired token." });
    }
};

// 1. Register a new user: POST /api/auth/register
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Input Validation
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields (name, email, password) are required." });
        }

        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "Email is already registered." });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User({ name, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: "Account created successfully." });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 2. User Login: POST /api/auth/login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Input Validation
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid login credentials." });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid login credentials." });

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.json({
            token,
            user: { id: user._id, name: user.name, email: user.email }
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 3. Get User Profile: GET /api/auth/profile (Protected)
router.get('/profile', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password');
        if (!user) return res.status(404).json({ message: "User not found." });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 4. Update Profile Body Data and Goals: PUT /api/auth/profile (Protected)
router.put('/profile', authMiddleware, async (req, res) => {
    try {
        const { height, weight, goal, calories } = req.body;

        const user = await User.findById(req.userId);
        if (!user) return res.status(404).json({ message: "User not found." });

        if (height) user.height = height;
        if (weight) user.weight = weight;
        if (goal) user.goal = goal;
        if (calories) user.calories = calories;

        await user.save();
        res.json({ message: "Profile updated successfully.", user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = { router, authMiddleware };
