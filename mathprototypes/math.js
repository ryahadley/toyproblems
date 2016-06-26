// MATH METHODS
var app = angular.module('mathApp', []);
  app.controller('mathCtrl', function($scope) {


$scope.square = function (arr) {
  var finalsqaure = [];
  for(var i = 0; i < arr.length; i++) {
    final.push(arr[i] * arr[i]);
  }
  return $scope.finalsqaure = finalsqaure;
}

$scope.cube = function (arr) {
  var finalcube = [];
  for(var i = 0; i < arr.length; i++) {
    final.push(arr[i] * arr[i] * arr[i]);
  }
  return $scope.finalcube = finalcube;
}

$scope.sum = function (arr) {
  var finalsum = 0;
  for(var i = 0; i < arr.length; i++) {
    final += arr[i];
  }
  return $scope.finalsum = finalsum;
}

$scope.average = function (arr) {
  var finalaverage = 0;
  for(var i = 0; i < arr.length; i++) {
    final += arr[i];
  }
  return $scope.finalaverage = finalaverage / arr.length;
}

$scope.even = function (arr) {
  var finalevens = [];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      final.push(arr[i]);
    }
  }
  return $scope.finalevens = finalevens;
}

$scope.odd = function (arr) {
  var finalodds = [];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 !== 0) {
      final.push(arr[i]);
    }
  }
  return $scope.finalodds = finalodds;
}

});
