const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const { router: authRouter } = require('./routes/auth');
app.use('/api/auth', authRouter);
app.use('/api/progress', require('./routes/progress'));
app.use('/api/contact', require('./routes/messages'));

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
app.listen(PORT, () => {
    console.log(`Server is running successfully on port ${PORT} 🚀`);
});