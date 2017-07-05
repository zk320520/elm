const pkg = require('./package');
const config = require('./config/db');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./router/index');

mongoose.connect(config.mongodb);
mongoose.Promise = global.Promise;

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));

// API服务器
app.use('/api', router);

app.use(function (req, res, next) {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

app.listen(port, () => {
	console.log(`${pkg.name} listening on port ${port}`);
});

module.exports = app;