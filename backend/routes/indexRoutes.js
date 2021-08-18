const express = require('express');
const router = express.Router();

// GET TICKETS
router.get('/', (req, res, next) => {
    return res.status(200).send('API IS WORKING!');
})

module.exports = router;