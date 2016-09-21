var spiritBombControllers = angular.module('spiritBombControllers', [])

.controller('paymentsCtrl', function($scope) {

    $scope.stripeCallback = function (code, result) {
      if(result.error) {
        window.alert('Payment error:' + result.error.message);
      }
      else {
        window.alert('Payment successful!' + result.id);
      }
    }
  })

.controller('mainCtrl', function($scope, $http){
  $scope.opponentValue = 3200;
  $scope.opponentValueCopy = 3200;
  $scope.amountRaised = 0;
  $scope.contribution;

  $scope.raiseHands = function(contribution){
    $scope.amountRaised = $scope.amountRaised + contribution;

    if($scope.contribution > $scope.opponentValue * .27){
      alert("Vegeta raised his hands");
      $scope.contribution= '';
    }
    else if($scope.contribution > $scope.opponentValue * .23){
      alert("Gohan contributed to the Spirit Bomb");
      $scope.contribution= '';
    }
     else if($scope.contribution > $scope.opponentValue * .20){
      alert("Gohan and Trunks chipped in!");
      $scope.contribution= '';
    }
    else if($scope.contribution > $scope.opponentValue * .15){
      alert("Piccolo and Krillin raise the roof.");
      $scope.contribution= '';
    }
    else if($scope.contribution > $scope.opponentValue * .10){
      alert("Roshi and Yamcha are with it. Hands Raised.");
      $scope.contribution= '';
    }
    else if($scope.contribution >= $scope.opponentValue * .05){
      alert("Let's do it! People of Earth raised their hands");
      $scope.contribution= '';
    }

    if($scope.amountRaised >= $scope.opponentValue){
      alert("You have raised: $" + $scope.amountRaised + ". Goku launched the SpiritBomb!");
      $scope.contribution = '';
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
        alert("Please sign-in to post")
      })
 

    $scope.comments.push($scope.inputText)

    $scope.inputText = '';

  }

  $scope.deleteComment = function($index){
    $scope.comments.splice($index, 1)
  }

  $scope.postUser = function(){
    var newUser = {
      firstName: $scope.firstname,
      lastName: $scope.lastname,
      email: $scope.eMail,
      password: $scope.pw

    }

    console.log(newUser);

    $http.post('/signup', newUser)

       .success(function(data, status, headers, config){
        console.log("Success!!");
      })

      .error(function(data, status) {
        alert("Error signing up");
      })

      $scope.firstname = '';
      $scope.lastname = '';
      $scope.eMail = '';
      $scope.pw = '';
  }

  $scope.checkUser = function(){
    
    var aUser = {
      email: $scope.inputEmail,
      password: $scope.inputPW
    }

    $http.post('/signin', aUser)

    .success(function(data, status, headers, config){
        var token = data;
        console.log(token);
    })

      .error(function(data, status) {
        console.log("Error signing in")
      })
  }


})