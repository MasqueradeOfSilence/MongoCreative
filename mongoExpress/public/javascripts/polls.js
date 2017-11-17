angular.module('poll', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http){
    //$scope.test = 'Hello world!';

    $scope.polls = [
      {question:'Question with two choices?', c1:'yes', v1:5, c2:'no', v2:10, c3:'', v3:0, c4:'', v4:0, c5:'', v5:0},
      {question:'Question with five choices?', c1:'yes', v1:0, c2:'no', v2:0, c3:'maybe', v3:0, c4:'???', v4:0, c5:'eh', v5:0}
    ];

    $scope.getAll = function() {
      return $http.get('/polls').success(function(data){
        angular.copy(data, $scope.polls);
      });
    };
    $scope.getAll();

    $scope.create = function(poll) {
    return $http.post('/polls', poll).success(function(data){
      $scope.polls.push(data);
    });
      };

    $scope.addPoll = function() {
      if($scope.question === '') { return; }
      var newobject = {question:$scope.question, c1:'yes', v1:5, c2:'no', v2:10, c3:'', v3:0, c4:'', v4:0, c5:'', v5:0};
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
