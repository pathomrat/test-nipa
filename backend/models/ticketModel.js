const mongoose = require('mongoose');

// Schema
const ticketModel = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    status: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    updated_date: {
        type: Date,
        default: Date.now
    },
    created_date: {
        type: Date,
    }
})

// Model
const ticket = mongoose.model('ticket', ticketModel);
module.exports = ticket;