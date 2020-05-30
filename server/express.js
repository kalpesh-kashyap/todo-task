const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = (app) => {
    mongoose.Promise = require('bluebird');

    mongoose.connect(process.env.mongo_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });
    mongoose.connection.on('error', function (err) {
        console.error(`MongoDB connection error: ${err}`);
        process.exit(-1);
    });
    mongoose.connection.on('connected', function (data) {
        console.log('Database connected')
    });
    app.use(cors());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
}