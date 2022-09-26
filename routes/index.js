var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome To My Site!' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Welcome To My Site!' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'My Skills' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'My Projects' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
