const express = require('express');
const router = express.Router();
const Ticket = require('../models/ticketModel');

// GET TICKETS
router.get('/', (req, res) => {
    Ticket.find().sort({
        status: 1,
        updated_date: 1
    }).exec((err, data) => {
        if (err) {
            return res.send({
                error: {
                    message: err.message,
                }
            });
        }
        res.status(200).send(data);
    })
})

//GET USERS BY ID 
router.get('/:_id', (req, res) => {
    Ticket.findById(req.params._id).exec((err, data) => {
        if (err) {
            return res.send({
                error: {
                    message: err.message,
                }
            });
        }
        res.status(200).send(data);
    })
})

// CREATE TICKET
router.post('/create', (req, res) => {
    const ticket = new Ticket(req.body);
    ticket.save((err, data) => {
        if (err) {
            return res.send({
                error: {
                    message: err.message,
                }
            });
        }
        res.status(200).send({
            success: {
                message: "Created Ticket successfully"
            }
        })
    })
})

// UPDATE TICKET
router.put('/update/:_id', (req, res) => {
    Ticket.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
        if (err) {
            return res.send({
                error: {
                    message: err.message,
                }
            });
        }
        res.status(200).send({
            success: {
                message: "Updated Ticket successfully"
            }
        })
    })
})

module.exports = router;