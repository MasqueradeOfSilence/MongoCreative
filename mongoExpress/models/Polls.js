var mongoose = require('mongoose');
var PollSchema = new mongoose.Schema({
  question: String,
  c1: String,
  v1: {type: Number, default: 0},
  c2: String,
  v2: {type: Number, default: 0},
  c3: String,
  v3: {type: Number, default: 0},
  c4: String,
  v4: {type: Number, default: 0},
  c5: String,
  v5: {type: Number, default: 0},
});

PollSchema.methods.upvote1 = function(cb) {
  this.v1 += 1;
  this.save(cb);
};

PollSchema.methods.upvote2 = function(cb) {
  this.v2 += 1;
  this.save(cb);
};

PollSchema.methods.upvote3 = function(cb) {
  this.v3 += 1;
  this.save(cb);
};

PollSchema.methods.upvote4 = function(cb) {
  this.v4 += 1;
  this.save(cb);
};

PollSchema.methods.upvote5 = function(cb) {
  this.v5 += 1;
  this.save(cb);
};

mongoose.model('Poll', PollSchema);
