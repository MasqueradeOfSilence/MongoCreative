var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');

router.post('/polls', function(req, res, next) {
  console.log("In post function");
  var poll = new Poll(req.body);
  poll.save(function(err, poll){
    if(err){ return next(err); }
    res.json(poll);
  });
});

router.get('/polls', function(req, res, next) {
  Poll.find(function(err, polls){
    if(err){ return next(err); }
    res.json(polls);
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.param('poll', function(req, res, next, id) {
  var query = Poll.findById(id);
  query.exec(function (err, poll){
    if (err) { return next(err); }
    if (!poll) { return next(new Error("can't find poll")); }
    req.poll = poll;
    return next();
  });
});

router.get('/polls/:poll', function(req, res) {
  res.json(req.poll);
});

router.put('/polls/:poll/upvote1', function(req, res, next) {
	console.log("in upvote1 in index.js");
  req.poll.upvote1(function(err, poll){
    if (err) { return next(err); }
    res.json(poll);
  });
});

router.put('/polls/:poll/upvote2', function(req, res, next) {
  req.poll.upvote2(function(err, poll){
    if (err) { return next(err); }
    res.json(poll);
  });
});

router.put('/polls/:poll/upvote3', function(req, res, next) {
  req.poll.upvote3(function(err, poll){
    if (err) { return next(err); }
    res.json(poll);
  });
});

router.put('/polls/:poll/upvote4', function(req, res, next) {
  req.poll.upvote4(function(err, poll){
    if (err) { return next(err); }
    res.json(poll);
  });
});

router.put('/polls/:poll/upvote5', function(req, res, next) {
  req.poll.upvote5(function(err, poll){
    if (err) { return next(err); }
    res.json(poll);
  });
});

module.exports = router;
