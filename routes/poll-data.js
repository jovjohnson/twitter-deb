var express = require('express');
var router = express.Router();
// var request = require('request');
var pollster = require('pollster')


router.get('/', function(req, res) {
  pollster.charts({topic: '2016-president'}, function(response){
    res.send(response);
  });
})

module.exports = router;
