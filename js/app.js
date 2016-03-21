var App = angular.module('App', []);

App.controller('Ctrl',

function Ctrl($scope, game) {
  $scope.game = game;
});

App.factory('game', function () {
    var Names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];

    return new Game(Names);
});

App.directive('mgCard', function () {

  return {
    restrict: 'E',
    template: '<div class="container">' +
                '<div class="card" ng-class="{flipped: tile.flipped}">' +
                  '<img class="front" ng-src="img/back.png">' +
                  '<img class="back" ng-src="img/{{tile.title}}.png">' +
                '</div>' +
              '</div>',
    scope: {
      tile: '='
    }
  }
});