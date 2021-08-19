const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


const port = 3001;

//mongoDB connect
var mongoose = require('mongoose');
require('dotenv').config()
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(res => console.log('CONNECTED TO DATABASE !!'))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}))

var indexApi = require('./routes/indexRoutes');
var ticketApi = require('./routes/ticketRoutes');
app.use('/', indexApi);
app.use('/tickets', ticketApi)

app.listen(port, () => {
    console.log('server is running on port: ', port);
});

module.exports = app;