var debug=0;            // increasing level of debug output
var numSwipes=0;        // total count of swipes seen
var numSwipesLeft=0;
var numSwipesRight=0;
var numTaps=0;

var controller = new Leap.Controller({enableGestures: true});

controller.on('connect', function() {
	console.log("leapmotion:sucessful connection");
	// foundLeap(); // let the user know we found it
});

controller.on('deviceConnected', function() {
	console.log("leapmotion:leap device has been connected");
});

controller.on('deviceDisconnected', function() {
	console.log("leapmotion:device disconnect");
});

// the gesture callback occurs on gesture detection by the leap controller,
// from here you decide which gestures that you want to handle
controller.on('gesture', function (gesture) {
		if (gesture.type == 'swipe') {
			handleSwipe(gesture);
		}
		if (gesture.type == 'screenTap') {
			handleTap(gesture);
		}

});

// this is where start using the leap (if one is detected)
controller.connect();

// this function is called when we want to handle a swipe gesture,
// we are just going to keep a few counts of what was detected
function handleSwipe(swipe) {
	if (swipe.state == 'stop') {
		if (debug>0) console.log("found a swipe, " + numSwipes);
		numSwipes++;

		// the swipe object will tell us which direction the swipe was in
		if (swipe.direction[0] > 0) {
			window.history.back();
			numSwipesRight++;
		} else {
			window.location.href = '../../06_Lamp.html';
			console.log('back');
			numSwipesLeft++;
		}
	}

	// update the webpage with out current count data
	// refreshCounts();
}

// taps (poke at the screen) seem a little more difficult to detect correctly,
// i am regularly either missing the tap or getting both a swipe and a tap detection
// (but at least it is doing something)
function handleTap(tap) {
		if (debug>0) console.log("found a tap, " + numTaps);
		numTaps++;

	// update the webpage with out current count data
	// refreshCounts();

}

	setTimeout(function(){ window.location.href = '../../selectsource.html'; }, 15000);
