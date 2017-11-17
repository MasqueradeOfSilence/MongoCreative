angular.module('poll', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http){
    //$scope.test = 'Hello world!';

    $scope.polls = [];

    $scope.getAll = function() {
      return $http.get('/polls').success(function(data){
        angular.copy(data, $scope.polls);
      });
    };
    $scope.getAll();

    $scope.create = function(poll) {
      console.log("create poll");
      console.log(poll);
      return $http.post('/polls', poll).success(function(data){
        console.log("in function passed in");
        $scope.polls.push(data);
      });
    };

    $scope.addPoll = function() {
      if($scope.question === '') { return; }
      console.log("adding poll");
      console.log($scope.question);
      var newobject = {question:$scope.question, c1:$scope.c1, v1:0, c2:$scope.c2, v2:0, c3:$scope.c3, v3:0, c4:$scope.c4, v4:0, c5:$scope.c5, v5:0};
      $scope.create(newobject);
      $scope.question = '';
    };

    $scope.upvote1 = function(poll) {
	console.log("calling upvote1 method");
	console.log("Poll ID is: " + poll._id);
      return $http.put('/polls/' + poll._id + '/upvote1')
      .success(function(data){
        console.log("upvote worked");
        poll.v1 += 1;
      });
    };

    $scope.incrementUpvotes1 = function(poll) {
	console.log("incrementing upvotes for 1");
      $scope.upvote1(poll);
    };

    $scope.upvote2 = function(poll) {
      return $http.put('/polls/' + poll._id + '/upvote2')
      .success(function(data){
        console.log("upvote worked");
        poll.v2 += 1;
      });
    };

    $scope.incrementUpvotes2 = function(poll) {
      $scope.upvote2(poll);
    };

    $scope.upvote3 = function(poll) {
      return $http.put('/polls/' + poll._id + '/upvote3')
      .success(function(data){
        console.log("upvote worked");
        poll.v3 += 1;
      });
    };

    $scope.incrementUpvotes3 = function(poll) {
      $scope.upvote3(poll);
    };

    $scope.upvote4 = function(poll) {
      return $http.put('/polls/' + poll._id + '/upvote4')
      .success(function(data){
        console.log("upvote worked");
        poll.v4 += 1;
      });
    };

    $scope.incrementUpvotes4 = function(poll) {
      $scope.upvote4(poll);
    };

    $scope.upvote5 = function(poll) {
      return $http.put('/polls/' + poll._id + '/upvote5')
      .success(function(data){
        console.log("upvote worked");
        poll.v5 += 1;
      });
    };

    $scope.incrementUpvotes5 = function(poll) {
      $scope.upvote5(poll);
    };

    /*
    $scope.addComment = function() {
    $scope.comments.push({title:$scope.formContent,upvotes:0});
    $scope.formContent='';
  };*/


  /*
  $scope.incrementUpvotes = function(comment) {
  comment.upvotes += 1;
};*/

}
]);
