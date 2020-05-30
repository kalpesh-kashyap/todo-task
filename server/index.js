require('dotenv').config({path: __dirname + '/.env'});
const http = require('http');
const express = require('express');

const app = express();
const port = process.env.PORT || 8000;

const server = http.createServer(app);

require('./express')(app);
require('./routes')(app);

server.listen(port, () => {
    console.log(`App is running on ${port}`)
})

