var express = require('express');
var router = express.Router();

var Twitter = require('twitter');




/* GET users listing. */
router.get('/', function(req, res, next) {
  var client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.TOKEN_KEY,
    access_token_secret: process.env.TOKEN_SECRET
  });
  var stream = client.stream('statuses/filter', {track: 'DNC'});
  var tweets = [];
  stream.on('data', function(tweet) {
    tweets.push(tweet.text);
    if(tweets.length === 10) {
      res.send(tweets);
    }
  });
});

module.exports = router;
