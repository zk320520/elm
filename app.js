const pkg = require('./package');
const config = require('./config/db');
const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(config.mongodb);
mongoose.Promise = global.Promise;

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));

app.listen(port, () => {
	console.log(`${pkg.name} listening on port ${port}`);
});

module.exports = app;