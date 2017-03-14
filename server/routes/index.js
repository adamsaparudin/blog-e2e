var express = require('express');
var router = express.Router();

let auth = require('../helper/auth')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/blog', function(req, res, next) {
  res.render('blog')
})

router.get('/auth', auth)

module.exports = router;
