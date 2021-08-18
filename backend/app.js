const express = require('express');

const app = express();

const port = 3001;

var indexApi = require('./routes/indexRoutes');
var ticketApi = require('./routes/ticketRoutes');
app.use('/', indexApi);
app.use('/tickets', ticketApi)

app.listen(port, () => {
    console.log('server is running on port: ', port);
});

module.exports = app;