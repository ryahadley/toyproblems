// TODO
function square(arr) {
  var final = [];
  for(var i = 0; i < arr.length; i++) {
    final.push(arr[i] * arr[i]);
  }
  return final;
}

function cube(arr) {
  var final = [];
  for(var i = 0; i < arr.length; i++) {
    final.push(arr[i] * arr[i] * arr[i]);
  }
  return final;
}

function sum(arr) {
  var final = 0;
  for(var i = 0; i < arr.length; i++) {
    final += arr[i];
  }
  return final;
}

function average(arr) {
  var final = 0;
  for(var i = 0; i < arr.length; i++) {
    final += arr[i];
  }
  return final / arr.length;
}

function even(arr) {
  var final = [];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      final.push(arr[i]);
    }
  }
  return final;
}

function odd(arr) {
  var final = [];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 !== 0) {
      final.push(arr[i]);
    }
  }
  return final;
}
