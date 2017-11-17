angular.module('poll', [])
.controller('MainCtrl', [
  '$scope',
  function($scope){
    //$scope.test = 'Hello world!';

    $scope.polls = [
      {question:'Question with two choices?', c1:'yes', v1:5, c2:'no', v2:10, c3:'', v3:0, c4:'', v4:0, c5:'', v5:0},
      {question:'Question with five choices?', c1:'yes', v1:0, c2:'no', v2:0, c3:'maybe', v3:0, c4:'???', v4:0, c5:'eh', v5:0}
    ];


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
