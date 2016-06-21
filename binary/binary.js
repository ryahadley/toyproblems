var app = angular.module('binaryApp', []);
  app.controller('binaryCtrl', function($scope) {

$scope.binary = function (N) {
  if (N > 3000000000) {
    return alert('Number too big');
  }
	var test = N;
  var bi = [];
  //set the binary table of exponetionally increasing from 1
  for (var t = 30; t >= 0; t--) {
  	bi.push(Math.pow(2, t));
  }
  console.log(bi);
  //store 1 and 0's to create binary number
  var binaryArr = [];
  for (var i = 0; i < bi.length; i++) {
  	if (test >= bi[i]) {
    	binaryArr.push(1);
      test = test - bi[i];
    }
    else {
    	binaryArr.push(0);
    }
	}
  var x = 0;
  while(binaryArr[x] !== 1) {
    delete binaryArr[x];
    x++;
  }
  binaryArr = binaryArr.join('');

  //show user the binary number
  console.log(binaryArr);
  alert(binaryArr);

  //counts for a series of zero's, if number is a 1 puts count back at 0
  var count = 0;
  var countArr = [];
  for (var r = 0; r < binaryArr.length; r++) {
  	if (binaryArr.charAt(r) === '0') {
    	count++;
    }
    else {
    	countArr.push(count);
      count = 0;
    }
  }
  console.log(countArr);
  var largest = 0;
	for (g = 0; g < countArr.length; g++){
    if (countArr[g] > largest) {
        largest = countArr[g];
    }
}
  N = largest;
  console.log(N);

   return $scope.n = N;
  }

});
