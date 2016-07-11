var spiritBombControllers = angular.module('spiritBombControllers', [])

.controller('mainCtrl', function($scope, $http){
  $scope.opponentValue = 3200;
  $scope.opponentValueCopy = 3200;
  $scope.amountRaised = 0;
  $scope.contribution;

  $scope.raiseHands = function(input){
    $scope.amountRaised = $scope.amountRaised + input;


    if($scope.amountRaised >= $scope.opponentValue){
      raisedValue = $scope.amountRaised;
      alert("You have raised: $" + raisedValue + ". Goku launched the SpiritBomb!");
      $scope.contribution='';
      return;
    }
    if($scope.contribution > $scope.opponentValue * .27){
      alert("Vegeta raised his hands");
      $scope.contribution='';
      return;
    }
    if($scope.contribution > $scope.opponentValue * .23 && $scope.contribution < $scope.opponentValue * .27){
      alert("Gohan contributed to the Spirit Bomb");
      $scope.contribution='';
      return;
    }


  }

})

.controller('commentsCtrl', function($scope, $http){

   $scope.comments = [];

    $scope.postComment = function(){

      var comment = {message: $scope.inputText}


      $http.post('/comment', comment)

      // $http({
      //   method: 'POST',
      //   url: 'comment',
      //   data: comment,
      //   headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      // })

      .success(function(data, status, headers, config){
        console.log("Success!!");
      })

      .error(function(data, status) {
        console.log("Stupid serialization difference..")
        console.log(data)
        console.log(comment)
      })
 

    $scope.comments.push($scope.inputText)

    $scope.inputText = '';

  }

  $scope.deleteComment = function($index){
    $scope.comments.splice($index, 1)
  }

})