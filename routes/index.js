var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express',
  name: 'bea'});
});


//Whenever there is a request for the home page, perform function, takes a request, sends a response back.
//So when request home page--> send a response, so render the index page and create some javascript variables.





module.exports = router;
