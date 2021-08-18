const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const port = 3001;

//mongoDB connect
var mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
});
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var indexApi = require('./routes/indexRoutes');
var ticketApi = require('./routes/ticketRoutes');
app.use('/', indexApi);
app.use('/tickets', ticketApi)

app.listen(port, () => {
    console.log('server is running on port: ', port);
});

module.exports = app;