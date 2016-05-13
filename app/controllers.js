var spiritBombControllers = angular.module('spiritBombControllers', [])

.controller('mainCtrl', function($scope){
  $scope.opponentValue = 3200;





})

.controller('commentsCtrl', function($scope){


   $scope.comments = [];

    $scope.postComment = function(){
    //once the submit button is clicked
    //Take the text (ng-model) of whatever is in the comment box
    $scope.comments.push($scope.inputText)
    //Push the comment in to the comments array
    $scope.inputText = '';
    //For each comment in the comments array, display on the page
  }

})