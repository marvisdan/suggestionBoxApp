'use strict';


routeAppControllers.controller('HomeController', ['$scope','suggestions', function($scope, suggestions, localStorageService){

  $scope.helloWorld = " Hello AngularJS! ";


  $scope.posts = suggestions.posts;

  
  $scope.addSuggestion= function(){

    //si c'est vide ne pas envoyer
    if(!$scope.title || $scope.title ===""){
      return;
    }
    // ajouter des suggestions posts dans suggestions.js
    $scope.posts.push({
        title: $scope.title,
        upvotes: 0,
    });

    //apres l'envoi
    $scope.title ='';
  };
  $scope.upVote = function(post){

  post.upvotes +=1;
};



}]);
