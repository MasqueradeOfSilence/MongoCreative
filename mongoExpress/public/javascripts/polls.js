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
      var newobject = {question:$scope.question, c1:$scope.c1, v1:$scope.v1, c2:$scope.c2, v2:$scope.v2, c3:$scope.c3, v3:$scope.v3, c4:$scope.c4, v4:$scope.v4, c5:$scope.c5, v5:$scope.v5};
      $scope.create(newobject);
      $scope.question = '';
    };

    $scope.upvote = function(poll) {
      return $http.put('/polls/' + poll._id + '/upvote')
      .success(function(data){
        console.log("upvote worked");
        poll.v1 += 1;
      });
    };

    $scope.incrementUpvotes = function(poll) {
      $scope.upvote(poll);
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
