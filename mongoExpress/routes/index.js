var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');

router.post('/polls', function(req, res, next) {
  var poll = new Poll(req.body);
  poll.save(function(err, comment){
    if(err){ return next(err); }
    res.json(comment);
  });
});

router.get('/polls', function(req, res, next) {
  Comment.find(function(err, polls){
    if(err){ return next(err); }
    res.json(polls);
  });
});

module.exports = router;
