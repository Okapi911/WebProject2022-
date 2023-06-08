var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var flash = require('express-flash');
var session = require('express-session');
var db=require('./database');
 
var app = express();
 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
 
app.use(session({ 
    secret: '643976fagd',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 50000 }
}))
 
app.use(flash());
 
/* GET home page. */
app.get('/formulaire', function(req, res, next) {
  res.render('/api/form', { title: '/api/form' });
});
 
app.post('/api/form', function(req, res, next) {
  var name = req.body.name;
  var age = req.body.age;
  var adress = req.body.adress;
  var job = req.body.job;
 
  var sql = `INSERT INTO renseignements (Username, Age, Adress, Job) VALUES ("${name}", "${age}", "${adress}", "${job}")`;
  db.query(sql, function(err, result) {
    if (err) throw err;
    console.log('record inserted');
    req.flash('success', 'Data added successfully!');
    res.redirect('/');
  });
});
 
// catch error 404
app.use(function(req, res, next) {
  next(createError(404));
});
 
// should allow to detect errors and render error page
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
 
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
 
// port set to 3000, the usual hosting port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
 
module.exports = app;