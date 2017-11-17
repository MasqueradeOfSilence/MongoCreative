var mongoose = require('mongoose');
var PollSchema = new mongoose.Schema({
  question: String,
  c1: {type: Number, default: 0},
  v1: {type: Number, default: 0},
  c2: {type: Number, default: 0},
  v2: {type: Number, default: 0},
  c3: {type: Number, default: 0},
  v3: {type: Number, default: 0},
  c4: {type: Number, default: 0},
  v4: {type: Number, default: 0},
  c5: {type: Number, default: 0},
  v5: {type: Number, default: 0}
});

PollSchema.methods.upvote = function(cb) {
  this.v1 += 1;
  this.save(cb);
};

mongoose.model('Poll', PollSchema);
