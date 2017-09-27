(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
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
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
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
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape.setTransform(-761.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_1.setTransform(-593.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_2.setTransform(-426,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_3.setTransform(-258.4,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_4.setTransform(-90.9,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_5.setTransform(-1933.8,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_6.setTransform(-1766.3,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_7.setTransform(-1598.8,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_8.setTransform(-1431.2,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_9.setTransform(-1263.7,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_10.setTransform(-1096.2,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_11.setTransform(-928.6,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_12.setTransform(1263.7,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_13.setTransform(1431.3,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_14.setTransform(1598.8,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_15.setTransform(1766.4,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_16.setTransform(1933.9,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_17.setTransform(91,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_18.setTransform(258.5,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_19.setTransform(426,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_20.setTransform(593.6,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_21.setTransform(761.1,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_22.setTransform(928.6,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_23.setTransform(1096.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1936.3,-57,3872.8,114);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape.setTransform(-761.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_1.setTransform(-593.6,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_2.setTransform(-426,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_3.setTransform(-258.5,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_4.setTransform(-90.9,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_5.setTransform(-1933.9,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_6.setTransform(-1766.3,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_7.setTransform(-1598.8,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_8.setTransform(-1431.3,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_9.setTransform(-1263.8,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_10.setTransform(-1096.2,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_11.setTransform(-928.7,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_12.setTransform(1263.7,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_13.setTransform(1431.2,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_14.setTransform(1598.8,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_15.setTransform(1766.3,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_16.setTransform(1933.9,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_17.setTransform(90.9,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_18.setTransform(258.5,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_19.setTransform(426,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_20.setTransform(593.5,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_21.setTransform(761,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_22.setTransform(928.6,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#2E2527").ss(5).p("AAAIhIAAxB");
	this.shape_23.setTransform(1096.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1936.4,-57,3872.8,114);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#685E5D").s().p("AgZA4QANglAAgTQAAgRgNgnQgJgXAPAAQAUAAAOAXQAPAYAAAgQAAAigPAWQgOAYgUAAQgPAAAJgYg");
	this.shape.setTransform(14,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#685E5D").s().p("AgOA4QgPgWAAgiQAAggAPgYQAOgXAUAAQAPAAgIAXQgOAnAAARQAAATAOAlQAIAYgPAAQgUAAgOgYg");
	this.shape_1.setTransform(-14,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#685E5D").s().p("AA5AbQgngOgSAAQgRAAgnAOQgXAIAAgPQAAgUAXgOQAYgPAgAAQAhAAAYAPQAXAOAAAUQAAAKgKAAQgFAAgIgDg");
	this.shape_2.setTransform(0,-14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#685E5D").s().p("Ag4APQgXgOAAgUQAAgPAXAJQAnANARAAQASAAAngNQAXgJAAAPQAAAUgXAOQgXAPgiAAQggAAgYgPg");
	this.shape_3.setTransform(0,14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#9F9892","#827C77","#2E2B29","#000000"],[0,0.243,0.776,1],-3,5.2,3,-5.2).s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A3978F").s().p("AiUCUQg9g9AAhXQAAhWA9g+QA+g9BWAAQBXAAA9A9QA+A+AABWQAABXg+A9Qg9A+hXAAQhWAAg+g+g");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#BAB6AF","#685E5D"],[0,1],-22.9,0,23,0).s().p("AihCjQhEhEAAhfQAAheBEhDQBDhEBeAAQBgAABDBEQBDBDAABeQAABfhDBEQhDBDhgAAQheAAhDhDg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3D3335").s().p("Aj3D3QhmhmAAiRQAAiQBmhnQBnhmCQAAQCRAABmBmQBnBnAACQQAACRhnBmQhmBniRAAQiQAAhnhng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-35,70,70);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#685E5D").s().p("AgZA4QANglAAgTQAAgRgNgnQgJgXAPAAQAUAAAOAXQAPAYAAAgQAAAigPAWQgOAYgUAAQgPAAAJgYg");
	this.shape.setTransform(14,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#685E5D").s().p("AgOA4QgPgWAAgiQAAggAPgYQAOgXAUAAQAPAAgIAXQgOAnAAARQAAATAOAlQAIAYgPAAQgUAAgOgYg");
	this.shape_1.setTransform(-14,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#685E5D").s().p("AA5AbQgngOgSAAQgRAAgnAOQgXAIAAgPQAAgUAXgOQAYgPAgAAQAhAAAYAPQAXAOAAAUQAAAKgKAAQgFAAgIgDg");
	this.shape_2.setTransform(0,-14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#685E5D").s().p("Ag4APQgXgOAAgUQAAgPAXAJQAnANARAAQASAAAngNQAXgJAAAPQAAAUgXAOQgXAPgiAAQggAAgYgPg");
	this.shape_3.setTransform(0,14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#9F9892","#827C77","#2E2B29","#000000"],[0,0.243,0.776,1],-3,5.2,3,-5.2).s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A3978F").s().p("AiUCUQg9g9AAhXQAAhWA9g+QA+g9BWAAQBXAAA9A9QA+A+AABWQAABXg+A9Qg9A+hXAAQhWAAg+g+g");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#BAB6AF","#685E5D"],[0,1],-22.9,0,23,0).s().p("AihCjQhEhEAAhfQAAheBEhDQBDhEBeAAQBgAABDBEQBDBDAABeQAABfhDBEQhDBDhgAAQheAAhDhDg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3D3335").s().p("Aj3D3QhmhmAAiRQAAiQBmhnQBnhmCQAAQCRAABmBmQBnBnAACQQAACRhnBmQhmBniRAAQiQAAhnhng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-35,70,70);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-35,70,70);


(lib.สายพาน = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-90.9,54.5);

	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1921.9,54.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},359).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:1921.9},359).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2027.3,-2.5,3872.8,114);


(lib.ล้อ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(35,35);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(35,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},59).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:360},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,70);


(lib.belt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.สายพาน();
	this.instance.parent = this;
	this.instance.setTransform(-41.8,54.5,1,1,0,0,0,-91,54.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#685E5D").s().p("EiV/AIhIAAxBMEr/AAAIAARBg");
	this.shape.setTransform(960,54.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.belt, new cjs.Rectangle(-1978.1,-2.5,3898.1,114), null);


// stage content:
(lib.Untitled1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.belt();
	this.instance.parent = this;
	this.instance.setTransform(960.1,73.4,1,1,0,0,0,960,54.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E2527").s().p("EiV/AJ7IAAz1MEr/AAAIAAT1g");
	this.shape.setTransform(960,77.4);

	this.instance_1 = new lib.ล้อ();
	this.instance_1.parent = this;
	this.instance_1.setTransform(42.3,161.1,1,1,0,0,0,35,35);

	this.instance_2 = new lib.ล้อ();
	this.instance_2.parent = this;
	this.instance_2.setTransform(348.3,161.1,1,1,0,0,0,35,35);

	this.instance_3 = new lib.ล้อ();
	this.instance_3.parent = this;
	this.instance_3.setTransform(654.2,161.1,1,1,0,0,0,35,35);

	this.instance_4 = new lib.ล้อ();
	this.instance_4.parent = this;
	this.instance_4.setTransform(960.2,161.1,1,1,0,0,0,35,35);

	this.instance_5 = new lib.ล้อ();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1266.1,161.1,1,1,0,0,0,35,35);

	this.instance_6 = new lib.ล้อ();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1572.1,161.1,1,1,0,0,0,35,35);

	this.instance_7 = new lib.ล้อ();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1878,161.1,1,1,0,0,0,35,35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#151011").s().p("EiV/AJ7IAAz1MEr/AAAIAAT1g");
	this.shape_1.setTransform(960,134.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2E2527").s().p("EiV/AGfIAAs9MEr/AAAIAAM9g");
	this.shape_2.setTransform(960,169.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1018.1,123.9,3898.1,197);
// library properties:
lib.properties = {
	id: 'C5156C5941497446AFB384BE208D352A',
	width: 1920,
	height: 220,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C5156C5941497446AFB384BE208D352A'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;