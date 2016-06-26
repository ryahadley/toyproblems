// MATH METHODS
var app = angular.module('mathApp', []);
  app.controller('mathCtrl', function($scope) {


$scope.square = function (arr) {
  $scope.finalsqaure = '';

  var newArr = arr.split(',').map(Number);


  var finalsqaure = [];
  for(var i = 0; i < newArr.length; i++) {
    finalsqaure.push(newArr[i] * newArr[i]);
  }
  console.log(finalsqaure);
  return $scope.finalsqaure = finalsqaure;
}

$scope.cube = function (arr) {
  $scope.finalcube = '';

  var newArr = arr.split(',').map(Number);

  var finalcube = [];
  for(var i = 0; i < newArr.length; i++) {
    finalcube.push(newArr[i] * newArr[i] * newArr[i]);
  }
  return $scope.finalcube = finalcube;
}

$scope.sum = function (arr) {
  $scope.finalsum = '';

  var newArr = arr.split(',').map(Number);

  var finalsum = 0;
  for(var i = 0; i < newArr.length; i++) {
    finalsum += newArr[i];
  }
  return $scope.finalsum = finalsum;
}

$scope.average = function (arr) {
  $scope.finalaverage = '';

  var newArr = arr.split(',').map(Number);

  var finalaverage = 0;
  for(var i = 0; i < newArr.length; i++) {
    finalaverage += newArr[i];
  }
  return $scope.finalaverage = finalaverage / newArr.length;
}

$scope.even = function (arr) {
  $scope.finalevens = '';

  var newArr = arr.split(',').map(Number);

  var finalevens = [];
  for(var i = 0; i < newArr.length; i++) {
    if(newArr[i] % 2 === 0) {
      finalevens.push(newArr[i]);
    }
  }
  return $scope.finalevens = finalevens;
}

$scope.odd = function (arr) {
  $scope.finalodds = '';

  var newArr = arr.split(',').map(Number);

  var finalodds = [];
  for(var i = 0; i < newArr.length; i++) {
    if(newArr[i] % 2 !== 0) {
      finalodds.push(newArr[i]);
    }
  }
  return $scope.finalodds = finalodds;
}

});
