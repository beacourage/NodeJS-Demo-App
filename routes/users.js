var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/users', function(req, res) {
  res.render('users', { title: 'my first demo app',
    name: 'bea'});
});

module.exports = router;



