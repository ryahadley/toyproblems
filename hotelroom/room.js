function hotelRoom() {
	var divided = [];
	var roomsDivisors = [];
  var addedRD = [];
  var room = 1;

	for(var i = 100; i >= 1; i--) {
  	for (var j = 1; j <= 50; j++) {
    	if (Number.isInteger(i / j)) {
    	divided.push([(i / j), j]);
      }
    }
  }

  for (var r = 0; r < divided.length; r++) {
  	if(divided[r][0] + divided[r][1] > 100) {
    	divided.splice(r, 1);
    }
    else if (divided[r][0] + divided[r][1] < 100) {
    	addedRD.push(divided[r][0] + divided[r][1]);
    }
  }



  console.log(divided);
  console.log(addedRD);
}

hotelRoom();
