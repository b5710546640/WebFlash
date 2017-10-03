var timer;


function findNextPage(){
	var filename = location.href.split('/')[ location.href.split('/').length - 1 ];
	var temp_arr = filename.split('_');
	var prefix_arr = temp_arr[0].split('-');
	var subfix_arr = temp_arr[1].split('.');
	var timer_arr = subfix_arr[1].split('?');
	var curr_index = parseInt(subfix_arr[0]);
	var curr_source = parseInt(prefix_arr[0]);
	console.log(subfix_arr[1]);
	console.log(curr_index);
	console.log(curr_source);
	if(curr_index==3){
		timer = timer_arr[curr_index]*1000;
		return '../../lightSelection.html';
	}
	timer = timer_arr[curr_index]*1000;
	curr_source++;
	curr_index++;
	let p = '0'+curr_source;
	return (p+'-'+prefix_arr[1]+'_'+curr_index+'.'+subfix_arr[1]);
}

function findPreviousPage(){
	var filename = location.href.split('/')[ location.href.split('/').length - 1 ];
	var temp_arr = filename.split('_');
	var prefix_arr = temp_arr[0].split('-');
	var subfix_arr = temp_arr[1].split('.');
	var timer_arr = subfix_arr[1].split('?');
	var curr_index = parseInt(subfix_arr[0]);
	var curr_source = parseInt(prefix_arr[0]);
	console.log(subfix_arr[1]);
	console.log(curr_index);
	console.log(curr_source);
	if(curr_index==1){
		timer = timer_arr[curr_index]*1000;
		return '../../lightSelection.html';
	}
	timer = timer_arr[curr_index]*1000;
	curr_source--;
	curr_index--;
	let p = '0'+curr_source;
	return (p+'-'+prefix_arr[1]+'_'+curr_index+'.'+subfix_arr[1]);
}



//Leap controller
var leapEnable = false;
var leapCnt = 0;
var nextPage = findNextPage();
var previousPage = findPreviousPage();
console.log('n'+nextPage);
console.log('p'+previousPage);
//register the Leapmotion handler function
if (external.AddListenerForLeapMotion)
	external.AddListenerForLeapMotion(LeapHandler);

function LeapHandler(fh) {

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
				if (z<0.6) {
		 			if (Math.abs(velX)>=Math.abs(velY)) {
		 				if (Math.abs(velX)>800) {
		 					if (velX>0) {
		 						console.log('LEFT'+velX);
		            // if(previousPage!='none')
		            window.location.href = previousPage;

		 					} else {
		 					console.log('RIGHT');
		            window.location.href = nextPage;

		 					}
		 				}
		 			}  else {
 				if (Math.abs(velY)>500) {
 					if (velY>0) {
 				// 	window.location.href = '03-5_Factory.html';
 					} else {
 					// 	window.location.href = '../../06_Lamp.html';
 					}
 				}
 			}
 		}
 	}
 }



setTimeout(function(){ window.location.href = nextPage; }, timer);
