var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res) {
    res.render('about', { title: 'my first demo app',
        name: 'bea'});
});

module.exports = router;
