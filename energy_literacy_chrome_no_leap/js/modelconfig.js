var model = {
	"powerPlant":	0,
	"transLine":	1,
	"endUser":		2,
	"lamp0":			3,
	"lamp1":			4,
	"lamp2":			5,
};


function loadModelConfig() {
}

function createModelConfig() {
	$("body").append($("<div>").attr({"id":"model-config-dialog"}));
	$("#model-config-dialog").css({
		"position": "absolute",
		"top": 10,
		"left": 40,
		"width": 200,
		"height": 200
	});
}
