//Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose connection
const mongoDB = '';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1/my_database';
mongoose.connect(
	mongoUri,
	{ useNewUrlParser: true },
	{ server: { socketOptions: { keepAlive: 1 } } }
);

module.exports = mongoose