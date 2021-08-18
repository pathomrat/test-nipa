const express = require('express');

const app = express();

const port = 3001;

app.route('').get((req, res) => {
    res.send('Hello from Node.js RESTful API');
});

app.listen(port, () => {
    console.log('server is running on port: ', port);
});