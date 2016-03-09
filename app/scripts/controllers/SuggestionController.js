'use strict';

routeAppControllers.controller('SuggestionController', [
  '$scope',
  '$routeParams',
  'suggestions',
  function($scope, $routeParams, suggestions,localStorageService) {

    // Pour conserver les données lors de l'actualisation de la page
  

    // $scope.post = suggestions.posts[$routeParams.id];
    $scope.post = suggestions.posts.filter(function(a) {
      return (a.id == $routeParams.id);
    })[0];

    $scope.addComment = function() {

      var comment = $scope.comment;

      $scope.post.comments.push({
      body: comment,
      upvotes: 0
      });
    };

    $scope.upvoteComment = function(comment) {
      $scope.post.comments.upvotes += 1;
    };

  }]);
//Status API Training Shop Blog About Pricing
