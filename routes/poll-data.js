var express = require('express');
var router = express.Router();
// var request = require('request');
var pollster = require('pollster')


router.get('/', function(req, res) {
  pollster.charts({topic: '2016-president'}, function(response){
    res.send(response[53].estimates);
    console.log(response[53].estimates);
  });
});

router.get('/state', function(req, res) {
  pollster.charts({state: 'MA'}, function(resp){
    console.log(resp);
    res.send(resp);
  });
});

module.exports = router;
