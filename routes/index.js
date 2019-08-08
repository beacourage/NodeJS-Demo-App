// import React from "react";
// ReactDOM.render(element, document.getElementById('root'));
//

var express = require('express');
var router = express.Router();
var dataa = require('../data.json');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'my first demo app',
  name: 'bea',
    sd: dataa
  });
});


//So when user requests home page--> perform function and send a response, so render the index page and create some javascript variables.
//Between the curly braces is where you define js variables.

module.exports = router;


//user requests index page in app.js, go to indexrouter, where it says render the index page