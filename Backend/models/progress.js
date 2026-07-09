const mongoose = require('mongoose');

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
    bmi: {                  
        type: Number, 
        default: null 
    },
    activity: {            
        type: String,
        default: ""
    },
    notes: {               
        type: String,
        default: ""
    },
    date: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Progress', ProgressSchema);