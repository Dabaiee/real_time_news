const express = require('express');
const path = require('path');

const index = require('./routes/index');
const news = require('./routes/news');

const app = express();

app.set('views', path.join(__dirname, '../client/build/'));
app.set('view engine', 'jade');
app.use('/static', express.static(path.join(__dirname, '../client/build/static/')));

app.use(express.static(path.join(__dirname, 'public')));

app.all('*', function(req, res ,next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});

app.use('/', index);
app.use('/news', news);

//error handler
app.use(function(req, res, next) {
  	res.status(404);
});

module.exports = app;
