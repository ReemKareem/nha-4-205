const mongoose = require('mongoose');

// Schema specifying user data requirements
const UserSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        trim: true
    },
    email: { 
        type: String, 
        required: true, 
        unique: true,
        trim: true,
        lowercase: true
    },
    password: { 
        type: String, 
        required: true 
    },
    
    // Body data requested for dashboard tracking
    height: { 
        type: Number, 
        default: 0 
    },
    weight: { 
        type: Number, 
        default: 0 
    },
    goal: { 
        type: String, 
        enum: ['bulk', 'cut', 'maintain'], 
        default: 'maintain' 
    },
    calories: { 
        type: Number, 
        default: 0 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('User', UserSchema);