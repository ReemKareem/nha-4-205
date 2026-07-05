const mongoose = require('mongoose');

// Schema for tracking user weight and progress
const ProgressSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    weight: { 
        type: Number, 
        required: true 
    },
    bodyFat: { 
        type: Number, 
        default: null 
    },
    date: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Progress', ProgressSchema);