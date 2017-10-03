var timer;
var nextPage;
var previousPage;


function findNearPage(){
	var filename = location.href.split('/')[ location.href.split('/').length - 1 ];
  console.log(filename=='index.html');
	if(filename=='index.html'){
    nextPage = 'energy_literacy_chrome_no_leap/selectsource.html';
    previousPage = 'none';
  }else if(filename=='lightSelection.html'){
    previousPage = 'energy_literacy_chrome_no_leap/selectsource.html';
    nextPage = '../index.html';
  }
}

//Leap controller
var leapEnable = false;
var leapCnt = 0;
findNearPage();
//register the Leapmotion handler function

console.log('Swipe file');
if (external.AddListenerForLeapMotion)
	external.AddListenerForLeapMotion(LeapHandler);

	function LeapPointerDraw(hands) {
	if (!leapEnable) {
		$("#suggestion").hide();
		$("#leap-pointer").hide();
		return;
	}
	$("#leap-pointer").show();
	var leapPointer = $("#leap-pointer");
	//var leapPointerCircle = $("#leap-pointer svg circle")
	if (hands.length>0) {
		var x = hands[0][0],
				y = hands[0][1],
				z = hands[0][2];
		$("#leap-pointer").css({"left": x*window.innerWidth-100, "top": (1-y)*window.innerHeight-100});
		if (z<=0.6) {
			$("#leap-pointer svg circle").attr({
					"r": (80*(1-z)).toString(),
					"fill": "green"
			});
		} else {
			$("#leap-pointer svg circle").attr({
					"r": (80*(1-z)).toString(),
					"fill": "grey"
			});
		}
		$("#suggestion").show();
	} else {
		$("#leap-pointer svg circle").attr({
				"r": "0",
				"fill": "grey"
		});
		$("#suggestion").hide();
	}
}

function LeapHandler(fh) {
	//$("#leap-info pre").text("fingers: " + JSON.stringify(fh.fingers, null, " "));
	//$("#leap-info pre").text("gesture: " + JSON.stringify(fh.gesture, null, " "));
	// $("#leap-info pre").text("hands: " + JSON.stringify(fh.hands, null, " "));
	//
	LeapPointerDraw(fh.hands);

	// if (leapEnable) {
		// console.log(currentPage);
	//
	// 	//check fingers appear
	// 	if (fh.fingers.length>0) {
	// 		if (typeof curPage.noTimeout !== "undefined") {
	// 			//PageTransitions.nextPage({"animation": 58, "showPage": curPage.linkPages.right});
	// 			PageTransitions.nextPage({"animation": 1, "showPage": curPage.linkPages.right});
	// 			return;
	// 		}
	// 	}

		LeapHandChangePage(fh.hands);
		//LeapGestureChangePage(fh.gesture, curPage);
	//
	// }
}

 function LeapHandChangePage(hands) {
 	if (hands.length>0) {
 		var z = hands[0][2],
 				velX = hands[0][3],
 				velY = hands[0][4];
        console.log(nextPage);
        console.log(previousPage);
 		if (z<0.6) {
 			if (Math.abs(velX)>=Math.abs(velY)) {
 				if (Math.abs(velX)>800) {
 					if (velX>0) {
 						console.log('LEFT'+velX);
            if(previousPage!='none')
            window.location.href = previousPage;

 					} else {
 					console.log('RIGHT');
            window.location.href = nextPage;

 					}
 				}
 			} else {
 				if (Math.abs(velY)>500) {
 					if (velY>0) {

 					} else {

 					}
 				}
 			}
 		}
 	}
 }
