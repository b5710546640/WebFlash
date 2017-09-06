(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(5).p("AAAIhIAAxB");
	this.shape.setTransform(-1340.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(5).p("AAAIhIAAxB");
	this.shape_1.setTransform(-1172.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(5).p("AAAIhIAAxB");
	this.shape_2.setTransform(-1005.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#333333").ss(5).p("AAAIhIAAxB");
	this.shape_3.setTransform(-837.7,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(5).p("AAAIhIAAxB");
	this.shape_4.setTransform(-670.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#333333").ss(5).p("ECP/AIhIAAxBEBBcAIhIAAxBEBboAIhIAAxBEB1zAIhIAAxBEgnRAIhIAAxBAtFIhIAAxBANFIhIAAxBEAnRAIhIAAxBEhBcAIhIAAxBEiP+AIhIAAxBEh1yAIhIAAxBEhbnAIhIAAxB");
	this.shape_5.setTransform(418.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1342.8,-57,2685.7,114);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#676767").s().p("EiV/AIhIAAxBMEr/AAAIAARBg");
	this.shape.setTransform(960,668.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("EiV/AJ7IAAz1MEr/AAAIAAT1g");
	this.shape_1.setTransform(960,672.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,608.8,1920,127);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#676767").s().p("AgaA5QAOgnAAgSQAAgRgOgnQgIgXAPAAQAUAAAOAXQAPAYAAAgQAAAhgPAYQgOAXgUAAQgPAAAIgXg");
	this.shape.setTransform(14,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#676767").s().p("AgOA5QgPgYAAghQAAggAPgYQAOgXAUAAQAPAAgJAXQgNAnAAARQAAASANAnQAJAXgPAAQgUAAgOgXg");
	this.shape_1.setTransform(-14,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#676767").s().p("AA5AbQgngOgSAAQgRAAgnAOQgXAIAAgPQAAgUAXgOQAYgPAgAAQAhAAAYAPQAXAOAAAUQAAAKgKAAQgFAAgIgDg");
	this.shape_2.setTransform(0,-14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#676767").s().p("Ag4APQgXgOAAgUQAAgPAXAJQAnANARAAQASAAAngNQAXgJAAAPQAAAUgXAOQgYAPghAAQggAAgYgPg");
	this.shape_3.setTransform(0,14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#969696","#797979","#202020","#231F20"],[0,0.263,0.827,1],-3,5.2,3,-5.2).s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9A9593").s().p("AiUCUQg9g9AAhXQAAhWA9g+QA+g9BWAAQBXAAA9A9QA+A+AABWQAABXg+A9Qg9A+hXAAQhWAAg+g+g");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#B0B1B1","#676767"],[0,1],-22.9,0,23,0).s().p("AiiCjQhDhDAAhgQAAheBDhEQBEhDBeAAQBgAABDBDQBDBEAABeQAABghDBDQhDBDhgAAQheAAhEhDg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#414142").s().p("Aj3D4QhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBoAACPQAACRhmBnQhnBmiRAAQiQAAhnhmg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-35,70,70);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A1A1A").s().p("EiV/AJ7IAAz1MEr/AAAIAAT1g");
	this.shape.setTransform(960,724.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("EiV/AGfIAAs9MEr/AAAIAAM9g");
	this.shape_1.setTransform(960,759.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,660.7,1920,140);


(lib.สายพานswf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(540.2,663.3);

	this.instance_1 = new lib.Symbol6("synched",0);
	this.instance_1.parent = this;

	this.instance_2 = new lib.Symbol5("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1872.3,752.8);

	this.instance_3 = new lib.Symbol5("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1569,752.8);

	this.instance_4 = new lib.Symbol5("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(1265.8,752.8);

	this.instance_5 = new lib.Symbol5("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(962.5,752.8);

	this.instance_6 = new lib.Symbol5("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(659.3,752.8);

	this.instance_7 = new lib.Symbol5("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(356,752.8);

	this.instance_8 = new lib.Symbol5("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(52.8,752.8);

	this.instance_9 = new lib.Symbol4("synched",0);
	this.instance_9.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(5).p("AAAIhIAAxB");
	this.shape.setTransform(-299.6,663.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(5).p("AAAIhIAAxB");
	this.shape_1.setTransform(-132.1,663.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(5).p("AAAIhIAAxB");
	this.shape_2.setTransform(35.5,663.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#333333").ss(5).p("AAAIhIAAxB");
	this.shape_3.setTransform(203,663.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(5).p("AAAIhIAAxB");
	this.shape_4.setTransform(370.6,663.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#333333").ss(5).p("EBboAIhIAAxBEB1zAIhIAAxBECP/AIhIAAxBAtFIhIAAxBANFIhIAAxBEAnRAIhIAAxBEBBcAIhIAAxBEh1yAIhIAAxBEhbnAIhIAAxBEhBcAIhIAAxBEgnRAIhIAAxBEiP+AIhIAAxB");
	this.shape_5.setTransform(1459.6,663.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:0,x:52.8,scaleX:1,scaleY:1,y:752.8}},{t:this.instance_7,p:{rotation:0,scaleX:1,scaleY:1,y:752.8}},{t:this.instance_6,p:{rotation:0,scaleX:1,scaleY:1,x:659.3,y:752.8}},{t:this.instance_5,p:{rotation:0,scaleX:1,scaleY:1,y:752.8}},{t:this.instance_4,p:{rotation:0,scaleX:1,scaleY:1,x:1265.8,y:752.8}},{t:this.instance_3,p:{rotation:0,scaleX:1,scaleY:1,y:752.8}},{t:this.instance_2,p:{rotation:0,scaleX:1,scaleY:1,x:1872.3,y:752.8}},{t:this.instance_1},{t:this.instance,p:{x:540.2}}]}).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:6,x:52.7,scaleX:1,scaleY:1,y:752.8}},{t:this.instance_7,p:{rotation:6,scaleX:1,scaleY:1,y:752.8}},{t:this.instance_6,p:{rotation:6,scaleX:1,scaleY:1,x:659.3,y:752.8}},{t:this.instance_5,p:{rotation:6,scaleX:1,scaleY:1,y:752.8}},{t:this.instance_4,p:{rotation:6,scaleX:1,scaleY:1,x:1265.8,y:752.8}},{t:this.instance_3,p:{rotation:6,scaleX:1,scaleY:1,y:752.8}},{t:this.instance_2,p:{rotation:6,scaleX:1,scaleY:1,x:1872.3,y:752.8}},{t:this.instance_1},{t:this.instance,p:{x:548.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:12.1,x:52.7,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_7,p:{rotation:12.1,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_6,p:{rotation:12.1,scaleX:0.999,scaleY:0.999,x:659.3,y:752.8}},{t:this.instance_5,p:{rotation:12.1,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_4,p:{rotation:12.1,scaleX:0.999,scaleY:0.999,x:1265.8,y:752.8}},{t:this.instance_3,p:{rotation:12.1,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_2,p:{rotation:12.1,scaleX:0.999,scaleY:0.999,x:1872.3,y:752.8}},{t:this.instance_1},{t:this.instance,p:{x:557.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:18.3,x:52.7,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_7,p:{rotation:18.3,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_6,p:{rotation:18.3,scaleX:0.999,scaleY:0.999,x:659.3,y:752.8}},{t:this.instance_5,p:{rotation:18.3,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_4,p:{rotation:18.3,scaleX:0.999,scaleY:0.999,x:1265.8,y:752.8}},{t:this.instance_3,p:{rotation:18.3,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_2,p:{rotation:18.3,scaleX:0.999,scaleY:0.999,x:1872.3,y:752.8}},{t:this.instance_1},{t:this.instance,p:{x:565.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:24.3,x:52.7,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_7,p:{rotation:24.3,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_6,p:{rotation:24.3,scaleX:0.999,scaleY:0.999,x:659.3,y:752.8}},{t:this.instance_5,p:{rotation:24.3,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_4,p:{rotation:24.3,scaleX:0.999,scaleY:0.999,x:1265.8,y:752.8}},{t:this.instance_3,p:{rotation:24.3,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_2,p:{rotation:24.3,scaleX:0.999,scaleY:0.999,x:1872.3,y:752.8}},{t:this.instance_1},{t:this.instance,p:{x:574.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:30.6,x:52.7,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_7,p:{rotation:30.6,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_6,p:{rotation:30.6,scaleX:0.999,scaleY:0.999,x:659.3,y:752.8}},{t:this.instance_5,p:{rotation:30.6,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_4,p:{rotation:30.6,scaleX:0.999,scaleY:0.999,x:1265.8,y:752.8}},{t:this.instance_3,p:{rotation:30.6,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_2,p:{rotation:30.6,scaleX:0.999,scaleY:0.999,x:1872.3,y:752.8}},{t:this.instance_1},{t:this.instance,p:{x:582.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:36.6,x:52.7,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_7,p:{rotation:36.6,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_6,p:{rotation:36.6,scaleX:0.998,scaleY:0.998,x:659.3,y:752.8}},{t:this.instance_5,p:{rotation:36.6,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_4,p:{rotation:36.6,scaleX:0.998,scaleY:0.998,x:1265.8,y:752.8}},{t:this.instance_3,p:{rotation:36.6,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_2,p:{rotation:36.6,scaleX:0.998,scaleY:0.998,x:1872.3,y:752.8}},{t:this.instance_1},{t:this.instance,p:{x:591.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:42.6,x:52.7,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_7,p:{rotation:42.6,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_6,p:{rotation:42.6,scaleX:0.998,scaleY:0.998,x:659.2,y:752.8}},{t:this.instance_5,p:{rotation:42.6,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_4,p:{rotation:42.6,scaleX:0.998,scaleY:0.998,x:1265.8,y:752.8}},{t:this.instance_3,p:{rotation:42.6,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_2,p:{rotation:42.6,scaleX:0.998,scaleY:0.998,x:1872.3,y:752.8}},{t:this.instance_1},{t:this.instance,p:{x:599.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:48.9,x:52.7,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_7,p:{rotation:48.9,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_6,p:{rotation:48.9,scaleX:0.998,scaleY:0.998,x:659.2,y:752.8}},{t:this.instance_5,p:{rotation:48.9,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_4,p:{rotation:48.9,scaleX:0.998,scaleY:0.998,x:1265.8,y:752.8}},{t:this.instance_3,p:{rotation:48.9,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_2,p:{rotation:48.9,scaleX:0.998,scaleY:0.998,x:1872.3,y:752.8}},{t:this.instance_1},{t:this.instance,p:{x:608.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:54.9,x:52.7,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_7,p:{rotation:54.9,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_6,p:{rotation:54.9,scaleX:0.998,scaleY:0.998,x:659.2,y:752.8}},{t:this.instance_5,p:{rotation:54.9,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_4,p:{rotation:54.9,scaleX:0.998,scaleY:0.998,x:1265.8,y:752.8}},{t:this.instance_3,p:{rotation:54.9,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_2,p:{rotation:54.9,scaleX:0.998,scaleY:0.998,x:1872.3,y:752.8}},{t:this.instance_1},{t:this.instance,p:{x:616.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:61.1,x:52.7,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_7,p:{rotation:61.1,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_6,p:{rotation:61.1,scaleX:0.999,scaleY:0.999,x:659.2,y:752.8}},{t:this.instance_5,p:{rotation:61.1,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_4,p:{rotation:61.1,scaleX:0.999,scaleY:0.999,x:1265.7,y:752.8}},{t:this.instance_3,p:{rotation:61.1,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_2,p:{rotation:61.1,scaleX:0.999,scaleY:0.999,x:1872.3,y:752.8}},{t:this.instance_1},{t:this.instance,p:{x:625.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:67.2,x:52.7,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_7,p:{rotation:67.2,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_6,p:{rotation:67.2,scaleX:0.999,scaleY:0.999,x:659.2,y:752.8}},{t:this.instance_5,p:{rotation:67.2,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_4,p:{rotation:67.2,scaleX:0.999,scaleY:0.999,x:1265.7,y:752.8}},{t:this.instance_3,p:{rotation:67.2,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_2,p:{rotation:67.2,scaleX:0.999,scaleY:0.999,x:1872.3,y:752.8}},{t:this.instance_1},{t:this.instance,p:{x:633.5}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:73.2,x:52.7,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_7,p:{rotation:73.2,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_6,p:{rotation:73.2,scaleX:0.999,scaleY:0.999,x:659.2,y:752.8}},{t:this.instance_5,p:{rotation:73.2,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_4,p:{rotation:73.2,scaleX:0.999,scaleY:0.999,x:1265.7,y:752.8}},{t:this.instance_3,p:{rotation:73.2,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_2,p:{rotation:73.2,scaleX:0.999,scaleY:0.999,x:1872.2,y:752.8}},{t:this.instance_1},{t:this.instance,p:{x:642}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:79.4,x:52.7,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_7,p:{rotation:79.4,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_6,p:{rotation:79.4,scaleX:0.999,scaleY:0.999,x:659.2,y:752.8}},{t:this.instance_5,p:{rotation:79.4,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_4,p:{rotation:79.4,scaleX:0.999,scaleY:0.999,x:1265.7,y:752.8}},{t:this.instance_3,p:{rotation:79.4,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_2,p:{rotation:79.4,scaleX:0.999,scaleY:0.999,x:1872.2,y:752.8}},{t:this.instance_1},{t:this.instance,p:{x:650.5}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:85.5,x:52.7,scaleX:1,scaleY:1,y:752.8}},{t:this.instance_7,p:{rotation:85.5,scaleX:1,scaleY:1,y:752.8}},{t:this.instance_6,p:{rotation:85.5,scaleX:1,scaleY:1,x:659.2,y:752.8}},{t:this.instance_5,p:{rotation:85.5,scaleX:1,scaleY:1,y:752.8}},{t:this.instance_4,p:{rotation:85.5,scaleX:1,scaleY:1,x:1265.7,y:752.8}},{t:this.instance_3,p:{rotation:85.5,scaleX:1,scaleY:1,y:752.8}},{t:this.instance_2,p:{rotation:85.5,scaleX:1,scaleY:1,x:1872.2,y:752.8}},{t:this.instance_1},{t:this.instance,p:{x:659}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:91.5,x:52.7,scaleX:1,scaleY:1,y:752.8}},{t:this.instance_7,p:{rotation:91.5,scaleX:1,scaleY:1,y:752.8}},{t:this.instance_6,p:{rotation:91.5,scaleX:1,scaleY:1,x:659.2,y:752.8}},{t:this.instance_5,p:{rotation:91.5,scaleX:1,scaleY:1,y:752.8}},{t:this.instance_4,p:{rotation:91.5,scaleX:1,scaleY:1,x:1265.7,y:752.8}},{t:this.instance_3,p:{rotation:91.5,scaleX:1,scaleY:1,y:752.8}},{t:this.instance_2,p:{rotation:91.5,scaleX:1,scaleY:1,x:1872.2,y:752.8}},{t:this.instance_1},{t:this.instance,p:{x:667.5}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:97.5,x:52.7,scaleX:1,scaleY:1,y:752.7}},{t:this.instance_7,p:{rotation:97.5,scaleX:1,scaleY:1,y:752.8}},{t:this.instance_6,p:{rotation:97.5,scaleX:1,scaleY:1,x:659.2,y:752.8}},{t:this.instance_5,p:{rotation:97.5,scaleX:1,scaleY:1,y:752.8}},{t:this.instance_4,p:{rotation:97.5,scaleX:1,scaleY:1,x:1265.7,y:752.8}},{t:this.instance_3,p:{rotation:97.5,scaleX:1,scaleY:1,y:752.8}},{t:this.instance_2,p:{rotation:97.5,scaleX:1,scaleY:1,x:1872.2,y:752.8}},{t:this.instance_1},{t:this.instance,p:{x:676}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:103.6,x:52.7,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_7,p:{rotation:103.6,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_6,p:{rotation:103.6,scaleX:0.999,scaleY:0.999,x:659.2,y:752.8}},{t:this.instance_5,p:{rotation:103.6,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_4,p:{rotation:103.6,scaleX:0.999,scaleY:0.999,x:1265.7,y:752.8}},{t:this.instance_3,p:{rotation:103.6,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_2,p:{rotation:103.6,scaleX:0.999,scaleY:0.999,x:1872.2,y:752.8}},{t:this.instance_1},{t:this.instance,p:{x:684.4}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:109.8,x:52.7,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_7,p:{rotation:109.8,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_6,p:{rotation:109.8,scaleX:0.999,scaleY:0.999,x:659.2,y:752.8}},{t:this.instance_5,p:{rotation:109.8,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_4,p:{rotation:109.8,scaleX:0.999,scaleY:0.999,x:1265.7,y:752.8}},{t:this.instance_3,p:{rotation:109.8,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_2,p:{rotation:109.8,scaleX:0.999,scaleY:0.999,x:1872.2,y:752.8}},{t:this.instance_1},{t:this.instance,p:{x:692.9}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:115.8,x:52.7,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_7,p:{rotation:115.8,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_6,p:{rotation:115.8,scaleX:0.999,scaleY:0.999,x:659.2,y:752.8}},{t:this.instance_5,p:{rotation:115.8,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_4,p:{rotation:115.8,scaleX:0.999,scaleY:0.999,x:1265.7,y:752.8}},{t:this.instance_3,p:{rotation:115.8,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_2,p:{rotation:115.8,scaleX:0.999,scaleY:0.999,x:1872.2,y:752.8}},{t:this.instance_1},{t:this.instance,p:{x:701.4}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:122.1,x:52.7,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_7,p:{rotation:122.1,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_6,p:{rotation:122.1,scaleX:0.999,scaleY:0.999,x:659.2,y:752.8}},{t:this.instance_5,p:{rotation:122.1,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_4,p:{rotation:122.1,scaleX:0.999,scaleY:0.999,x:1265.7,y:752.8}},{t:this.instance_3,p:{rotation:122.1,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_2,p:{rotation:122.1,scaleX:0.999,scaleY:0.999,x:1872.2,y:752.8}},{t:this.instance_1},{t:this.instance,p:{x:709.9}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:128.1,x:52.7,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_7,p:{rotation:128.1,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_6,p:{rotation:128.1,scaleX:0.998,scaleY:0.998,x:659.2,y:752.8}},{t:this.instance_5,p:{rotation:128.1,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_4,p:{rotation:128.1,scaleX:0.998,scaleY:0.998,x:1265.7,y:752.8}},{t:this.instance_3,p:{rotation:128.1,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_2,p:{rotation:128.1,scaleX:0.998,scaleY:0.998,x:1872.2,y:752.8}},{t:this.instance_1},{t:this.instance,p:{x:718.4}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:134.2,x:52.7,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_7,p:{rotation:134.2,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_6,p:{rotation:134.2,scaleX:0.998,scaleY:0.998,x:659.2,y:752.7}},{t:this.instance_5,p:{rotation:134.2,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_4,p:{rotation:134.2,scaleX:0.998,scaleY:0.998,x:1265.7,y:752.8}},{t:this.instance_3,p:{rotation:134.2,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_2,p:{rotation:134.2,scaleX:0.998,scaleY:0.998,x:1872.2,y:752.8}},{t:this.instance_1},{t:this.instance,p:{x:726.9}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:140.4,x:52.7,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_7,p:{rotation:140.4,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_6,p:{rotation:140.4,scaleX:0.998,scaleY:0.998,x:659.2,y:752.7}},{t:this.instance_5,p:{rotation:140.4,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_4,p:{rotation:140.4,scaleX:0.998,scaleY:0.998,x:1265.7,y:752.8}},{t:this.instance_3,p:{rotation:140.4,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_2,p:{rotation:140.4,scaleX:0.998,scaleY:0.998,x:1872.2,y:752.8}},{t:this.instance_1},{t:this.instance,p:{x:735.3}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:146.4,x:52.7,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_7,p:{rotation:146.4,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_6,p:{rotation:146.4,scaleX:0.998,scaleY:0.998,x:659.2,y:752.7}},{t:this.instance_5,p:{rotation:146.4,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_4,p:{rotation:146.4,scaleX:0.998,scaleY:0.998,x:1265.7,y:752.8}},{t:this.instance_3,p:{rotation:146.4,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_2,p:{rotation:146.4,scaleX:0.998,scaleY:0.998,x:1872.2,y:752.8}},{t:this.instance_1},{t:this.instance,p:{x:743.8}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:152.7,x:52.7,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_7,p:{rotation:152.7,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_6,p:{rotation:152.7,scaleX:0.999,scaleY:0.999,x:659.2,y:752.7}},{t:this.instance_5,p:{rotation:152.7,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_4,p:{rotation:152.7,scaleX:0.999,scaleY:0.999,x:1265.7,y:752.7}},{t:this.instance_3,p:{rotation:152.7,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_2,p:{rotation:152.7,scaleX:0.999,scaleY:0.999,x:1872.2,y:752.8}},{t:this.instance_1},{t:this.instance,p:{x:752.3}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:158.7,x:52.7,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_7,p:{rotation:158.7,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_6,p:{rotation:158.7,scaleX:0.999,scaleY:0.999,x:659.2,y:752.7}},{t:this.instance_5,p:{rotation:158.7,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_4,p:{rotation:158.7,scaleX:0.999,scaleY:0.999,x:1265.7,y:752.7}},{t:this.instance_3,p:{rotation:158.7,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_2,p:{rotation:158.7,scaleX:0.999,scaleY:0.999,x:1872.2,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:760.8}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:164.7,x:52.7,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_7,p:{rotation:164.7,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_6,p:{rotation:164.7,scaleX:0.999,scaleY:0.999,x:659.2,y:752.7}},{t:this.instance_5,p:{rotation:164.7,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_4,p:{rotation:164.7,scaleX:0.999,scaleY:0.999,x:1265.7,y:752.7}},{t:this.instance_3,p:{rotation:164.7,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_2,p:{rotation:164.7,scaleX:0.999,scaleY:0.999,x:1872.2,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:769.3}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:171,x:52.7,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_7,p:{rotation:171,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_6,p:{rotation:171,scaleX:0.999,scaleY:0.999,x:659.2,y:752.7}},{t:this.instance_5,p:{rotation:171,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_4,p:{rotation:171,scaleX:0.999,scaleY:0.999,x:1265.7,y:752.7}},{t:this.instance_3,p:{rotation:171,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_2,p:{rotation:171,scaleX:0.999,scaleY:0.999,x:1872.2,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:777.8}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:177,x:52.7,scaleX:1,scaleY:1,y:752.7}},{t:this.instance_7,p:{rotation:177,scaleX:1,scaleY:1,y:752.7}},{t:this.instance_6,p:{rotation:177,scaleX:1,scaleY:1,x:659.2,y:752.7}},{t:this.instance_5,p:{rotation:177,scaleX:1,scaleY:1,y:752.7}},{t:this.instance_4,p:{rotation:177,scaleX:1,scaleY:1,x:1265.7,y:752.7}},{t:this.instance_3,p:{rotation:177,scaleX:1,scaleY:1,y:752.7}},{t:this.instance_2,p:{rotation:177,scaleX:1,scaleY:1,x:1872.2,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:786.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:-177,x:52.7,scaleX:1,scaleY:1,y:752.7}},{t:this.instance_7,p:{rotation:-177,scaleX:1,scaleY:1,y:752.7}},{t:this.instance_6,p:{rotation:-177,scaleX:1,scaleY:1,x:659.2,y:752.7}},{t:this.instance_5,p:{rotation:-177,scaleX:1,scaleY:1,y:752.7}},{t:this.instance_4,p:{rotation:-177,scaleX:1,scaleY:1,x:1265.7,y:752.7}},{t:this.instance_3,p:{rotation:-177,scaleX:1,scaleY:1,y:752.7}},{t:this.instance_2,p:{rotation:-177,scaleX:1,scaleY:1,x:1872.2,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:794.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:-171,x:52.8,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_7,p:{rotation:-171,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_6,p:{rotation:-171,scaleX:0.999,scaleY:0.999,x:659.2,y:752.7}},{t:this.instance_5,p:{rotation:-171,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_4,p:{rotation:-171,scaleX:0.999,scaleY:0.999,x:1265.7,y:752.7}},{t:this.instance_3,p:{rotation:-171,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_2,p:{rotation:-171,scaleX:0.999,scaleY:0.999,x:1872.2,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:803.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:-164.7,x:52.8,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_7,p:{rotation:-164.7,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_6,p:{rotation:-164.7,scaleX:0.999,scaleY:0.999,x:659.2,y:752.7}},{t:this.instance_5,p:{rotation:-164.7,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_4,p:{rotation:-164.7,scaleX:0.999,scaleY:0.999,x:1265.7,y:752.7}},{t:this.instance_3,p:{rotation:-164.7,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_2,p:{rotation:-164.7,scaleX:0.999,scaleY:0.999,x:1872.2,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:811.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:-158.7,x:52.8,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_7,p:{rotation:-158.7,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_6,p:{rotation:-158.7,scaleX:0.999,scaleY:0.999,x:659.2,y:752.7}},{t:this.instance_5,p:{rotation:-158.7,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_4,p:{rotation:-158.7,scaleX:0.999,scaleY:0.999,x:1265.7,y:752.7}},{t:this.instance_3,p:{rotation:-158.7,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_2,p:{rotation:-158.7,scaleX:0.999,scaleY:0.999,x:1872.2,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:820.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:-152.7,x:52.8,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_7,p:{rotation:-152.7,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_6,p:{rotation:-152.7,scaleX:0.999,scaleY:0.999,x:659.2,y:752.7}},{t:this.instance_5,p:{rotation:-152.7,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_4,p:{rotation:-152.7,scaleX:0.999,scaleY:0.999,x:1265.7,y:752.7}},{t:this.instance_3,p:{rotation:-152.7,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_2,p:{rotation:-152.7,scaleX:0.999,scaleY:0.999,x:1872.2,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:828.7}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:-146.4,x:52.8,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_7,p:{rotation:-146.4,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_6,p:{rotation:-146.4,scaleX:0.998,scaleY:0.998,x:659.2,y:752.7}},{t:this.instance_5,p:{rotation:-146.4,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_4,p:{rotation:-146.4,scaleX:0.998,scaleY:0.998,x:1265.7,y:752.7}},{t:this.instance_3,p:{rotation:-146.4,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_2,p:{rotation:-146.4,scaleX:0.998,scaleY:0.998,x:1872.2,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:837.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:-140.4,x:52.8,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_7,p:{rotation:-140.4,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_6,p:{rotation:-140.4,scaleX:0.998,scaleY:0.998,x:659.2,y:752.7}},{t:this.instance_5,p:{rotation:-140.4,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_4,p:{rotation:-140.4,scaleX:0.998,scaleY:0.998,x:1265.7,y:752.7}},{t:this.instance_3,p:{rotation:-140.4,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_2,p:{rotation:-140.4,scaleX:0.998,scaleY:0.998,x:1872.2,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:845.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:-134.2,x:52.8,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_7,p:{rotation:-134.2,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_6,p:{rotation:-134.2,scaleX:0.998,scaleY:0.998,x:659.3,y:752.7}},{t:this.instance_5,p:{rotation:-134.2,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_4,p:{rotation:-134.2,scaleX:0.998,scaleY:0.998,x:1265.7,y:752.7}},{t:this.instance_3,p:{rotation:-134.2,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_2,p:{rotation:-134.2,scaleX:0.998,scaleY:0.998,x:1872.2,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:854.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:-128.1,x:52.8,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_7,p:{rotation:-128.1,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_6,p:{rotation:-128.1,scaleX:0.998,scaleY:0.998,x:659.3,y:752.7}},{t:this.instance_5,p:{rotation:-128.1,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_4,p:{rotation:-128.1,scaleX:0.998,scaleY:0.998,x:1265.7,y:752.7}},{t:this.instance_3,p:{rotation:-128.1,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_2,p:{rotation:-128.1,scaleX:0.998,scaleY:0.998,x:1872.2,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:862.6}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:-122.1,x:52.8,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_7,p:{rotation:-122.1,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_6,p:{rotation:-122.1,scaleX:0.999,scaleY:0.999,x:659.3,y:752.7}},{t:this.instance_5,p:{rotation:-122.1,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_4,p:{rotation:-122.1,scaleX:0.999,scaleY:0.999,x:1265.7,y:752.7}},{t:this.instance_3,p:{rotation:-122.1,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_2,p:{rotation:-122.1,scaleX:0.999,scaleY:0.999,x:1872.2,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:871.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:-115.8,x:52.8,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_7,p:{rotation:-115.8,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_6,p:{rotation:-115.8,scaleX:0.999,scaleY:0.999,x:659.3,y:752.7}},{t:this.instance_5,p:{rotation:-115.8,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_4,p:{rotation:-115.8,scaleX:0.999,scaleY:0.999,x:1265.8,y:752.7}},{t:this.instance_3,p:{rotation:-115.8,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_2,p:{rotation:-115.8,scaleX:0.999,scaleY:0.999,x:1872.2,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:879.5}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:-109.8,x:52.8,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_7,p:{rotation:-109.8,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_6,p:{rotation:-109.8,scaleX:0.999,scaleY:0.999,x:659.3,y:752.7}},{t:this.instance_5,p:{rotation:-109.8,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_4,p:{rotation:-109.8,scaleX:0.999,scaleY:0.999,x:1265.8,y:752.7}},{t:this.instance_3,p:{rotation:-109.8,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_2,p:{rotation:-109.8,scaleX:0.999,scaleY:0.999,x:1872.3,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:888}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:-103.6,x:52.8,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_7,p:{rotation:-103.6,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_6,p:{rotation:-103.6,scaleX:0.999,scaleY:0.999,x:659.3,y:752.7}},{t:this.instance_5,p:{rotation:-103.6,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_4,p:{rotation:-103.6,scaleX:0.999,scaleY:0.999,x:1265.8,y:752.7}},{t:this.instance_3,p:{rotation:-103.6,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_2,p:{rotation:-103.6,scaleX:0.999,scaleY:0.999,x:1872.3,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:896.5}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:-97.5,x:52.8,scaleX:1,scaleY:1,y:752.7}},{t:this.instance_7,p:{rotation:-97.5,scaleX:1,scaleY:1,y:752.7}},{t:this.instance_6,p:{rotation:-97.5,scaleX:1,scaleY:1,x:659.3,y:752.7}},{t:this.instance_5,p:{rotation:-97.5,scaleX:1,scaleY:1,y:752.7}},{t:this.instance_4,p:{rotation:-97.5,scaleX:1,scaleY:1,x:1265.8,y:752.7}},{t:this.instance_3,p:{rotation:-97.5,scaleX:1,scaleY:1,y:752.7}},{t:this.instance_2,p:{rotation:-97.5,scaleX:1,scaleY:1,x:1872.3,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:905}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:-91.5,x:52.8,scaleX:1,scaleY:1,y:752.7}},{t:this.instance_7,p:{rotation:-91.5,scaleX:1,scaleY:1,y:752.7}},{t:this.instance_6,p:{rotation:-91.5,scaleX:1,scaleY:1,x:659.3,y:752.7}},{t:this.instance_5,p:{rotation:-91.5,scaleX:1,scaleY:1,y:752.7}},{t:this.instance_4,p:{rotation:-91.5,scaleX:1,scaleY:1,x:1265.8,y:752.7}},{t:this.instance_3,p:{rotation:-91.5,scaleX:1,scaleY:1,y:752.7}},{t:this.instance_2,p:{rotation:-91.5,scaleX:1,scaleY:1,x:1872.3,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:913.5}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:-85.5,x:52.8,scaleX:1,scaleY:1,y:752.8}},{t:this.instance_7,p:{rotation:-85.5,scaleX:1,scaleY:1,y:752.7}},{t:this.instance_6,p:{rotation:-85.5,scaleX:1,scaleY:1,x:659.3,y:752.7}},{t:this.instance_5,p:{rotation:-85.5,scaleX:1,scaleY:1,y:752.7}},{t:this.instance_4,p:{rotation:-85.5,scaleX:1,scaleY:1,x:1265.8,y:752.7}},{t:this.instance_3,p:{rotation:-85.5,scaleX:1,scaleY:1,y:752.7}},{t:this.instance_2,p:{rotation:-85.5,scaleX:1,scaleY:1,x:1872.3,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:922}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:-79.4,x:52.8,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_7,p:{rotation:-79.4,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_6,p:{rotation:-79.4,scaleX:0.999,scaleY:0.999,x:659.3,y:752.7}},{t:this.instance_5,p:{rotation:-79.4,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_4,p:{rotation:-79.4,scaleX:0.999,scaleY:0.999,x:1265.8,y:752.7}},{t:this.instance_3,p:{rotation:-79.4,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_2,p:{rotation:-79.4,scaleX:0.999,scaleY:0.999,x:1872.3,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:930.4}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:-73.2,x:52.8,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_7,p:{rotation:-73.2,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_6,p:{rotation:-73.2,scaleX:0.999,scaleY:0.999,x:659.3,y:752.7}},{t:this.instance_5,p:{rotation:-73.2,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_4,p:{rotation:-73.2,scaleX:0.999,scaleY:0.999,x:1265.8,y:752.7}},{t:this.instance_3,p:{rotation:-73.2,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_2,p:{rotation:-73.2,scaleX:0.999,scaleY:0.999,x:1872.3,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:938.9}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:-67.2,x:52.8,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_7,p:{rotation:-67.2,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_6,p:{rotation:-67.2,scaleX:0.999,scaleY:0.999,x:659.3,y:752.8}},{t:this.instance_5,p:{rotation:-67.2,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_4,p:{rotation:-67.2,scaleX:0.999,scaleY:0.999,x:1265.8,y:752.7}},{t:this.instance_3,p:{rotation:-67.2,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_2,p:{rotation:-67.2,scaleX:0.999,scaleY:0.999,x:1872.3,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:947.4}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:-61.1,x:52.8,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_7,p:{rotation:-61.1,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_6,p:{rotation:-61.1,scaleX:0.999,scaleY:0.999,x:659.3,y:752.7}},{t:this.instance_5,p:{rotation:-61.1,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_4,p:{rotation:-61.1,scaleX:0.999,scaleY:0.999,x:1265.8,y:752.7}},{t:this.instance_3,p:{rotation:-61.1,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_2,p:{rotation:-61.1,scaleX:0.999,scaleY:0.999,x:1872.3,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:955.9}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:-54.9,x:52.8,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_7,p:{rotation:-54.9,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_6,p:{rotation:-54.9,scaleX:0.998,scaleY:0.998,x:659.3,y:752.7}},{t:this.instance_5,p:{rotation:-54.9,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_4,p:{rotation:-54.9,scaleX:0.998,scaleY:0.998,x:1265.8,y:752.7}},{t:this.instance_3,p:{rotation:-54.9,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_2,p:{rotation:-54.9,scaleX:0.998,scaleY:0.998,x:1872.3,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:964.4}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:-48.9,x:52.8,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_7,p:{rotation:-48.9,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_6,p:{rotation:-48.9,scaleX:0.998,scaleY:0.998,x:659.3,y:752.7}},{t:this.instance_5,p:{rotation:-48.9,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_4,p:{rotation:-48.9,scaleX:0.998,scaleY:0.998,x:1265.8,y:752.7}},{t:this.instance_3,p:{rotation:-48.9,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_2,p:{rotation:-48.9,scaleX:0.998,scaleY:0.998,x:1872.3,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:972.9}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:-42.6,x:52.8,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_7,p:{rotation:-42.6,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_6,p:{rotation:-42.6,scaleX:0.998,scaleY:0.998,x:659.3,y:752.8}},{t:this.instance_5,p:{rotation:-42.6,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_4,p:{rotation:-42.6,scaleX:0.998,scaleY:0.998,x:1265.8,y:752.7}},{t:this.instance_3,p:{rotation:-42.6,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_2,p:{rotation:-42.6,scaleX:0.998,scaleY:0.998,x:1872.3,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:981.3}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:-36.6,x:52.8,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_7,p:{rotation:-36.6,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_6,p:{rotation:-36.6,scaleX:0.998,scaleY:0.998,x:659.3,y:752.8}},{t:this.instance_5,p:{rotation:-36.6,scaleX:0.998,scaleY:0.998,y:752.8}},{t:this.instance_4,p:{rotation:-36.6,scaleX:0.998,scaleY:0.998,x:1265.8,y:752.7}},{t:this.instance_3,p:{rotation:-36.6,scaleX:0.998,scaleY:0.998,y:752.7}},{t:this.instance_2,p:{rotation:-36.6,scaleX:0.998,scaleY:0.998,x:1872.3,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:989.8}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:-30.6,x:52.8,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_7,p:{rotation:-30.6,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_6,p:{rotation:-30.6,scaleX:0.999,scaleY:0.999,x:659.3,y:752.8}},{t:this.instance_5,p:{rotation:-30.6,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_4,p:{rotation:-30.6,scaleX:0.999,scaleY:0.999,x:1265.8,y:752.8}},{t:this.instance_3,p:{rotation:-30.6,scaleX:0.999,scaleY:0.999,y:752.7}},{t:this.instance_2,p:{rotation:-30.6,scaleX:0.999,scaleY:0.999,x:1872.3,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:998.3}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:-24.3,x:52.8,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_7,p:{rotation:-24.3,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_6,p:{rotation:-24.3,scaleX:0.999,scaleY:0.999,x:659.3,y:752.8}},{t:this.instance_5,p:{rotation:-24.3,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_4,p:{rotation:-24.3,scaleX:0.999,scaleY:0.999,x:1265.8,y:752.8}},{t:this.instance_3,p:{rotation:-24.3,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_2,p:{rotation:-24.3,scaleX:0.999,scaleY:0.999,x:1872.3,y:752.7}},{t:this.instance_1},{t:this.instance,p:{x:1006.8}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:-18.3,x:52.8,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_7,p:{rotation:-18.3,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_6,p:{rotation:-18.3,scaleX:0.999,scaleY:0.999,x:659.3,y:752.8}},{t:this.instance_5,p:{rotation:-18.3,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_4,p:{rotation:-18.3,scaleX:0.999,scaleY:0.999,x:1265.8,y:752.8}},{t:this.instance_3,p:{rotation:-18.3,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_2,p:{rotation:-18.3,scaleX:0.999,scaleY:0.999,x:1872.3,y:752.8}},{t:this.instance_1},{t:this.instance,p:{x:1015.3}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:-12.1,x:52.8,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_7,p:{rotation:-12.1,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_6,p:{rotation:-12.1,scaleX:0.999,scaleY:0.999,x:659.3,y:752.8}},{t:this.instance_5,p:{rotation:-12.1,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_4,p:{rotation:-12.1,scaleX:0.999,scaleY:0.999,x:1265.8,y:752.8}},{t:this.instance_3,p:{rotation:-12.1,scaleX:0.999,scaleY:0.999,y:752.8}},{t:this.instance_2,p:{rotation:-12.1,scaleX:0.999,scaleY:0.999,x:1872.3,y:752.8}},{t:this.instance_1},{t:this.instance,p:{x:1023.8}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:-6,x:52.8,scaleX:1,scaleY:1,y:752.8}},{t:this.instance_7,p:{rotation:-6,scaleX:1,scaleY:1,y:752.8}},{t:this.instance_6,p:{rotation:-6,scaleX:1,scaleY:1,x:659.3,y:752.8}},{t:this.instance_5,p:{rotation:-6,scaleX:1,scaleY:1,y:752.8}},{t:this.instance_4,p:{rotation:-6,scaleX:1,scaleY:1,x:1265.8,y:752.8}},{t:this.instance_3,p:{rotation:-6,scaleX:1,scaleY:1,y:752.8}},{t:this.instance_2,p:{rotation:-6,scaleX:1,scaleY:1,x:1872.3,y:752.8}},{t:this.instance_1},{t:this.instance,p:{x:1032.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{rotation:0,x:52.8,scaleX:1,scaleY:1,y:752.8}},{t:this.instance_7,p:{rotation:0,scaleX:1,scaleY:1,y:752.8}},{t:this.instance_6,p:{rotation:0,scaleX:1,scaleY:1,x:659.3,y:752.8}},{t:this.instance_5,p:{rotation:0,scaleX:1,scaleY:1,y:752.8}},{t:this.instance_4,p:{rotation:0,scaleX:1,scaleY:1,x:1265.8,y:752.8}},{t:this.instance_3,p:{rotation:0,scaleX:1,scaleY:1,y:752.8}},{t:this.instance_2,p:{rotation:0,scaleX:1,scaleY:1,x:1872.3,y:752.8}},{t:this.instance_1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-802.6,606.3,2722.7,194.5);


// stage content:
(lib.Untitled3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.สายพานswf();
	this.instance.parent = this;
	this.instance.setTransform(558.6,570.5,1,1,0,0,0,558.6,703.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(157.4,1013.2,2722.7,194.5);
// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;