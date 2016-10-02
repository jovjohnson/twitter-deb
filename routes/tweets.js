var express = require('express');
var router = express.Router();

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.TOKEN_KEY,
  access_token_secret: process.env.TOKEN_SECRET
});

/* GET users listing. */
router.get('/clinton', function(req, res, next) {
//clinton
  var stream = client.stream('statuses/filter', {track: 'Clinton'});
  // var tweets = [];
  var mention = 0;
  stream.on('data', function(tweet) {
    tweets.push(tweet.text);
    mention += 1;
    console.log(mention)
    if(tweets.length === 10) {
      res.send(tweets);
    }
  });
});
//trump
router.get('/trump', function(req, res, next) {
  var stream = client.stream('statuses/filter', {track: 'Trump'});
  // var tweets = [];
  var mention = 0;
  stream.on('data', function(tweet) {
    tweets.push(tweet.text);
    mention += 1;
    console.log(mention)
    if(tweets.length === 10) {
      res.send(tweets);
    }
  });
});

module.exports = router;
