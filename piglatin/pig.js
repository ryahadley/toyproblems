var app = angular.module('pigApp', []);
  app.controller('pigCtrl', function($scope) {

$scope.pigLatin = function (text) {
  var p = text.split(" ");
  var newSentence = [];
  for (var i = 0; i < p.length; i++) {
    var ay = p[i].slice(0, 1) + "ay";
    var word = p[i].slice(1, p[i].length) + ay;
    newSentence.push(word);
  }
  var lower = newSentence.join(" ");
  lower = lower.toLowerCase();
  var first = lower.charAt(0).toUpperCase();
  var last = lower.slice(1);
  var final = first + last;
  console.log(final);
  $scope.final = final;
  console.log(text);
  $scope.text = text;
}

});
