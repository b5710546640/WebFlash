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



(lib.Symbol4 = function(mode,startPosition,loop) {
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
	this.shape_5.graphics.f().s("#333333").ss(5).p("ECP/AIhIAAxBEhBcAIhIAAxBEAnRAIhIAAxBANFIhIAAxBAtFIhIAAxBEgnRAIhIAAxBEB1zAIhIAAxBEBboAIhIAAxBEBBcAIhIAAxBEhbnAIhIAAxBEh1yAIhIAAxBEiP+AIhIAAxB");
	this.shape_5.setTransform(418.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1342.8,-57,2685.7,114);


(lib.Symbol3 = function(mode,startPosition,loop) {
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


(lib.Symbol2 = function(mode,startPosition,loop) {
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
	this.shape_5.graphics.f().s("#333333").ss(5).p("ECP/AIhIAAxBEhBcAIhIAAxBEAnRAIhIAAxBANFIhIAAxBAtFIhIAAxBEgnRAIhIAAxBEB1zAIhIAAxBEBboAIhIAAxBEBBcAIhIAAxBEhbnAIhIAAxBEh1yAIhIAAxBEiP+AIhIAAxB");
	this.shape_5.setTransform(418.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1342.8,-57,2685.7,114);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#676767").s().p("EiRjAB5IAAjxMEjHAAAIAADxg");
	this.shape.setTransform(933.8,114.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("EiRjACOIAAkbMEjHAAAIAAEbg");
	this.shape_1.setTransform(933.8,115.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#676767").s().p("EiRjAB6IAAjyMEjHAAAIAADyg");
	this.shape_2.setTransform(933.8,17.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("EiRjACOIAAkbMEjHAAAIAAEbg");
	this.shape_3.setTransform(933.8,18.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A1A1A").s().p("EiRjAHkIAAvHMEjHAAAIAAPHg");
	this.shape_4.setTransform(933.8,49.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("EiRjAE8IAAp3MEjHAAAIAAJ3g");
	this.shape_5.setTransform(933.8,75.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.2,0.8,1863.3,128.6);


// stage content:
(lib.Untitled1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1819.2,67,0.971,0.971);

	this.instance_1 = new lib.Symbol3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1524.8,67,0.971,0.971);

	this.instance_2 = new lib.Symbol3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1230.5,67,0.971,0.971);

	this.instance_3 = new lib.Symbol3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(936.2,67,0.971,0.971);

	this.instance_4 = new lib.Symbol3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(641.9,67,0.971,0.971);

	this.instance_5 = new lib.Symbol3("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(347.6,67,0.971,0.971);

	this.instance_6 = new lib.Symbol3("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(53.3,67,0.971,0.971);

	this.instance_7 = new lib.Symbol2("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(1338.7,113.7,0.971,0.272,180);

	this.instance_8 = new lib.Symbol2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(526.4,17.4,0.971,0.272);

	this.instance_9 = new lib.Symbol1("synched",0);
	this.instance_9.parent = this;

	this.instance_10 = new lib.Symbol4("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(1012.1,114.6,0.971,0.271,180);

	this.instance_11 = new lib.Symbol4("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(1012.1,15.5,0.971,0.271);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.971,x:526.4,y:17.4,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.971,x:1338.7,y:113.7,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.971,scaleY:0.971,rotation:0,x:53.3,y:67}},{t:this.instance_5,p:{scaleX:0.971,scaleY:0.971,rotation:0,x:347.6}},{t:this.instance_4,p:{scaleX:0.971,scaleY:0.971,rotation:0,x:641.9}},{t:this.instance_3,p:{scaleX:0.971,scaleY:0.971,rotation:0,x:936.2,y:67}},{t:this.instance_2,p:{scaleX:0.971,scaleY:0.971,rotation:0,x:1230.5,y:67}},{t:this.instance_1,p:{scaleX:0.971,scaleY:0.971,rotation:0,y:67,x:1524.8}},{t:this.instance,p:{scaleX:0.971,scaleY:0.971,rotation:0,y:67,x:1819.2}}]}).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:534.6,y:17.4,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1333.1,y:113.7,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:6,x:53.4,y:67.1}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:6,x:347.7}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:6,x:642}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:6,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:6,x:1230.5,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:6,y:67,x:1524.8}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:6,y:67,x:1819.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:542.8,y:17.4,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1327.6,y:113.7,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:12.1,x:53.3,y:67.1}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:12.1,x:347.7}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:12.1,x:642}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:12.1,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:12.1,x:1230.5,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:12.1,y:67,x:1524.8}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:12.1,y:67,x:1819.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:551,y:17.3,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1322.1,y:113.7,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:18.3,x:53.4,y:67.1}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:18.3,x:347.7}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:18.3,x:641.9}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:18.3,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:18.3,x:1230.5,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:18.3,y:67,x:1524.8}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:18.3,y:67,x:1819.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:559.3,y:17.3,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1316.5,y:113.7,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:24.3,x:53.3,y:67.1}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:24.3,x:347.7}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:24.3,x:642}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:24.3,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:24.3,x:1230.5,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:24.3,y:67,x:1524.8}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:24.3,y:67,x:1819.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:567.5,y:17.3,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1311,y:113.7,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:30.6,x:53.4,y:67.1}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:30.6,x:347.7}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:30.6,x:642}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:30.6,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:30.6,x:1230.5,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:30.6,y:67,x:1524.8}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:30.6,y:67,x:1819.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:575.7,y:17.2,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1305.5,y:113.8,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:36.6,x:53.3,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:36.6,x:347.7}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:36.6,x:642}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:36.6,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:36.6,x:1230.5,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:36.6,y:67,x:1524.8}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:36.6,y:67,x:1819.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:584,y:17.2,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1299.9,y:113.8,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:42.6,x:53.3,y:67.1}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:42.6,x:347.7}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:42.6,x:642}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:42.6,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:42.6,x:1230.5,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:42.6,y:67,x:1524.8}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:42.6,y:67,x:1819.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:592.2,y:17.2,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1294.4,y:113.7,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:48.9,x:53.3,y:67.1}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:48.9,x:347.7}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:48.9,x:642}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:48.9,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:48.9,x:1230.5,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:48.9,y:66.9,x:1524.8}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:48.9,y:67,x:1819.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:600.4,y:17.1,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1288.9,y:113.8,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:54.9,x:53.3,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:54.9,x:347.7}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:54.9,x:642}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:54.9,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:54.9,x:1230.6,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:54.9,y:67,x:1524.8}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:54.9,y:67,x:1819.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:608.7,y:17.1,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1283.3,y:113.8,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:61.1,x:53.3,y:67.1}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:61.1,x:347.7}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:61.1,x:642}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:61.1,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:61.1,x:1230.5,y:66.9}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:61.1,y:66.9,x:1524.8}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:61.1,y:67.1,x:1819.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:616.9,y:17.1,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1277.8,y:113.8,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:67.2,x:53.3,y:67.1}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:67.2,x:347.7}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:67.2,x:642}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:67.2,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:67.2,x:1230.5,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:67.2,y:67,x:1524.8}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:67.2,y:67,x:1819.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:625.1,y:17,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1272.3,y:113.8,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:73.2,x:53.3,y:67.1}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:73.2,x:347.7}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:73.2,x:642}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:73.2,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:73.2,x:1230.5,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:73.2,y:67,x:1524.8}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:73.2,y:67.1,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:633.4,y:17,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1266.7,y:113.9,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:79.5,x:53.3,y:67.1}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:79.5,x:347.6}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:79.5,x:642}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:79.5,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:79.5,x:1230.5,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:79.5,y:67,x:1524.8}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:79.5,y:67,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:641.6,y:17,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1261.2,y:113.9,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:85.5,x:53.3,y:67.1}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:85.5,x:347.6}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:85.5,x:641.9}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:85.5,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:85.5,x:1230.6,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:85.5,y:67,x:1524.9}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:85.5,y:67.1,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:649.8,y:16.9,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1255.7,y:113.9,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:91.5,x:53.3,y:67.1}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:91.5,x:347.6}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:91.5,x:641.9}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:91.5,x:936.2,y:67}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:91.5,x:1230.5,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:91.5,y:66.9,x:1524.9}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:91.5,y:67.1,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:658,y:16.9,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1250.1,y:113.9,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:97.5,x:53.3,y:67.1}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:97.5,x:347.6}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:97.5,x:641.9}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:97.5,x:936.2,y:67}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:97.5,x:1230.6,y:66.9}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:97.5,y:67,x:1524.8}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:97.5,y:67.1,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:666.3,y:16.9,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1244.6,y:113.9,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:103.6,x:53.3,y:67.1}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:103.6,x:347.6}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:103.6,x:641.9}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:103.6,x:936.2,y:67}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:103.6,x:1230.6,y:66.9}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:103.6,y:67,x:1524.9}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:103.6,y:67.1,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:674.5,y:16.8,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1239.1,y:113.9,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:109.8,x:53.2,y:67.1}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:109.8,x:347.6}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:109.8,x:641.9}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:109.8,x:936.2,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:109.8,x:1230.5,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:109.8,y:66.9,x:1524.8}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:109.8,y:67.1,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:682.8,y:16.8,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1233.5,y:113.9,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:115.8,x:53.3,y:67.1}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:115.8,x:347.6}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:115.8,x:642}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:115.8,x:936.2,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:115.8,x:1230.6,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:115.8,y:67,x:1524.9}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:115.8,y:67,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:691,y:16.8,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1228,y:113.9,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:122.1,x:53.3,y:67.1}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:122.1,x:347.6}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:122.1,x:641.9}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:122.1,x:936.2,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:122.1,x:1230.6,y:66.9}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:122.1,y:67,x:1524.9}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:122.1,y:67.1,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:699.2,y:16.7,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1222.5,y:114,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:128.1,x:53.2,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:128.1,x:347.7}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:128.1,x:641.9}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:128.1,x:936.2,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:128.1,x:1230.6,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:128.1,y:67,x:1524.9}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:128.1,y:67,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:707.5,y:16.7,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1216.9,y:114,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:134.2,x:53.2,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:134.2,x:347.6}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:134.2,x:641.9}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:134.2,x:936.2,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:134.2,x:1230.6,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:134.2,y:67,x:1524.9}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:134.2,y:67,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:715.7,y:16.7,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1211.4,y:114,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:140.4,x:53.3,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:140.4,x:347.6}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:140.4,x:641.9}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:140.4,x:936.2,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:140.4,x:1230.6,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:140.4,y:67,x:1524.9}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:140.4,y:67,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:723.9,y:16.7,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1205.9,y:114,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:146.4,x:53.2,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:146.4,x:347.6}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:146.4,x:641.9}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:146.4,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:146.4,x:1230.6,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:146.4,y:67,x:1524.9}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:146.4,y:67,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:732.1,y:16.7,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1200.3,y:114,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:152.7,x:53.2,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:152.7,x:347.6}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:152.7,x:642}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:152.7,x:936.2,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:152.7,x:1230.6,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:152.7,y:67,x:1524.9}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:152.7,y:67,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:740.4,y:16.6,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1194.8,y:114.1,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:158.7,x:53.2,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:158.7,x:347.7}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:158.7,x:641.9}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:158.7,x:936.2,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:158.7,x:1230.6,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:158.7,y:67,x:1524.9}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:158.7,y:67,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:748.6,y:16.6,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1189.3,y:114.1,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:164.7,x:53.3,y:67}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:164.7,x:347.6}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:164.7,x:642}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:164.7,x:936.2,y:67}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:164.7,x:1230.6,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:164.7,y:67,x:1524.9}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:164.7,y:67,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:756.9,y:16.5,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1183.7,y:114.1,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:171,x:53.2,y:67}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:171,x:347.6}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:171,x:641.9}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:171,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:171,x:1230.6,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:171,y:67,x:1524.9}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:171,y:67,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:765.1,y:16.5,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1178.2,y:114.1,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:177,x:53.2,y:67}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:177,x:347.6}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:177,x:641.9}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:177,x:936.3,y:66.9}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:177,x:1230.6,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:177,y:67,x:1524.9}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:177,y:67,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:773.3,y:16.5,scaleY:0.272}},{t:this.instance_7,p:{scaleX:0.97,x:1172.7,y:114.1,scaleY:0.272}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:-177,x:53.2,y:67}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:-177,x:347.6}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:-177,x:641.9}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:-177,x:936.2,y:67}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:-177,x:1230.6,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:-177,y:67,x:1524.9}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:-177,y:67,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:781.5,y:16.4,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1167.1,y:114.1,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:-171,x:53.2,y:66.9}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:-171,x:347.6}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:-171,x:641.9}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:-171,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:-171,x:1230.6,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:-171,y:67,x:1524.9}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:-171,y:67,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:789.8,y:16.4,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1161.6,y:114.1,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:-164.7,x:53.2,y:66.9}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:-164.7,x:347.6}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:-164.7,x:641.9}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:-164.7,x:936.2,y:67}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:-164.7,x:1230.6,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:-164.7,y:67,x:1524.9}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:-164.7,y:67,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:798,y:16.4,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1156.1,y:114.2,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-158.7,x:53.2,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-158.7,x:347.6}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-158.7,x:641.9}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-158.7,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-158.7,x:1230.6,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-158.7,y:67,x:1524.9}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-158.7,y:67,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:806.3,y:16.3,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1150.5,y:114.2,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-152.7,x:53.3,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-152.7,x:347.6}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-152.7,x:641.9}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-152.7,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-152.7,x:1230.6,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-152.7,y:67,x:1524.9}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-152.7,y:67,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:814.5,y:16.3,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1145,y:114.2,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-146.4,x:53.3,y:66.9}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-146.4,x:347.6}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-146.4,x:641.9}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-146.4,x:936.2,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-146.4,x:1230.6,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-146.4,y:67,x:1524.9}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-146.4,y:67,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:822.7,y:16.3,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1139.5,y:114.1,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-140.4,x:53.3,y:66.9}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-140.4,x:347.6}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-140.4,x:641.9}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-140.4,x:936.2,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-140.4,x:1230.6,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-140.4,y:67,x:1524.9}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-140.4,y:67,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:831,y:16.2,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1133.9,y:114.2,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-134.2,x:53.3,y:66.9}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-134.2,x:347.6}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-134.2,x:641.9}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-134.2,x:936.2,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-134.2,x:1230.6,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-134.2,y:67.1,x:1524.9}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-134.2,y:67,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:839.2,y:16.2,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1128.4,y:114.2,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-128.1,x:53.3,y:66.9}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-128.1,x:347.6}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-128.1,x:641.9}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-128.1,x:936.2,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-128.1,x:1230.6,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-128.1,y:67,x:1524.9}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-128.1,y:67,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:847.4,y:16.2,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1122.9,y:114.2,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-122.1,x:53.3,y:66.9}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-122.1,x:347.7}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-122.1,x:641.9}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-122.1,x:936.2,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-122.1,x:1230.6,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-122.1,y:67,x:1524.9}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-122.1,y:67,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:855.6,y:16.1,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1117.3,y:114.2,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-115.8,x:53.3,y:66.9}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-115.8,x:347.6}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-115.8,x:642}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-115.8,x:936.2,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-115.8,x:1230.6,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-115.8,y:67,x:1524.9}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-115.8,y:66.9,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:863.9,y:16.1,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1111.8,y:114.3,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-109.8,x:53.3,y:66.9}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-109.8,x:347.6}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-109.8,x:641.9}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-109.8,x:936.2,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-109.8,x:1230.5,y:67.1}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-109.8,y:67,x:1524.8}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-109.8,y:67,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:872.1,y:16.1,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1106.2,y:114.3,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:-103.6,x:53.3,y:66.9}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:-103.6,x:347.6}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:-103.6,x:641.9}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:-103.6,x:936.2,y:67}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:-103.6,x:1230.6,y:67.1}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:-103.6,y:67,x:1524.9}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:-103.6,y:67,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:880.4,y:16,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1100.7,y:114.3,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:-97.5,x:53.3,y:66.9}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:-97.5,x:347.7}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:-97.5,x:641.9}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:-97.5,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:-97.5,x:1230.5,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:-97.5,y:67.1,x:1524.9}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:-97.5,y:66.9,x:1819.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:888.6,y:16,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1095.2,y:114.3,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:-91.5,x:53.3,y:66.9}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:-91.5,x:347.7}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:-91.5,x:642}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:-91.5,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:-91.5,x:1230.6,y:67.1}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:-91.5,y:67,x:1524.9}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:-91.5,y:67,x:1819.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:896.8,y:16,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1089.6,y:114.3,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:-85.5,x:53.3,y:66.9}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:-85.5,x:347.7}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:-85.5,x:641.9}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:-85.5,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:-85.5,x:1230.6,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:-85.5,y:67,x:1524.8}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:-85.5,y:66.9,x:1819.1}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:905,y:15.9,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1084.1,y:114.3,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:-79.5,x:53.3,y:66.9}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:-79.5,x:347.7}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:-79.5,x:642}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:-79.5,x:936.2,y:67}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:-79.5,x:1230.5,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:-79.5,y:67,x:1524.8}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:-79.5,y:66.9,x:1819.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:913.3,y:15.9,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1078.6,y:114.4,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:-73.2,x:53.4,y:66.9}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:-73.2,x:347.7}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:-73.2,x:642}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:-73.2,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:-73.2,x:1230.6,y:67.1}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:-73.2,y:67,x:1524.8}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:-73.2,y:67,x:1819.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:921.5,y:15.9,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1073,y:114.3,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-67.2,x:53.3,y:66.9}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-67.2,x:347.7}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-67.2,x:642}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-67.2,x:936.2,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-67.2,x:1230.5,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-67.2,y:67.1,x:1524.9}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-67.2,y:67,x:1819.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:929.7,y:15.8,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1067.5,y:114.4,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-61.1,x:53.3,y:66.9}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-61.1,x:347.6}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-61.1,x:642}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-61.1,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-61.1,x:1230.5,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-61.1,y:67,x:1524.8}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-61.1,y:67,x:1819.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:938,y:15.9,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1062,y:114.4,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-54.9,x:53.3,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-54.9,x:347.7}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-54.9,x:642}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-54.9,x:936.2,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-54.9,x:1230.5,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-54.9,y:67,x:1524.8}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-54.9,y:67,x:1819.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:946.2,y:15.8,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1056.4,y:114.4,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-48.9,x:53.3,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-48.9,x:347.7}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-48.9,x:641.9}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-48.9,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-48.9,x:1230.5,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-48.9,y:67,x:1524.8}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-48.9,y:66.9,x:1819.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:954.4,y:15.8,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1050.9,y:114.4,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-42.6,x:53.4,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-42.6,x:347.6}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-42.6,x:642}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-42.6,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-42.6,x:1230.5,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-42.6,y:67.1,x:1524.8}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-42.6,y:66.9,x:1819.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:962.7,y:15.7,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1045.4,y:114.4,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-36.6,x:53.4,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-36.6,x:347.7}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-36.6,x:642}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-36.6,x:936.2,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-36.6,x:1230.5,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-36.6,y:67,x:1524.8}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-36.6,y:67,x:1819.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:970.9,y:15.7,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1039.8,y:114.5,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-30.6,x:53.4,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-30.6,x:347.7}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-30.6,x:641.9}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-30.6,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-30.6,x:1230.5,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-30.6,y:67,x:1524.8}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-30.6,y:67,x:1819.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:979.1,y:15.7,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1034.3,y:114.5,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.969,scaleY:0.969,rotation:-24.3,x:53.4,y:67}},{t:this.instance_5,p:{scaleX:0.969,scaleY:0.969,rotation:-24.3,x:347.7}},{t:this.instance_4,p:{scaleX:0.969,scaleY:0.969,rotation:-24.3,x:642}},{t:this.instance_3,p:{scaleX:0.969,scaleY:0.969,rotation:-24.3,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.969,scaleY:0.969,rotation:-24.3,x:1230.5,y:67}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:-24.3,y:67,x:1524.8}},{t:this.instance,p:{scaleX:0.969,scaleY:0.969,rotation:-24.3,y:67,x:1819.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:987.4,y:15.6,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1028.8,y:114.5,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:-18.3,x:53.4,y:67}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:-18.3,x:347.7}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:-18.3,x:642}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:-18.3,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:-18.3,x:1230.5,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:-18.3,y:67,x:1524.8}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:-18.3,y:67,x:1819.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:995.6,y:15.6,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1023.2,y:114.5,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:-12.1,x:53.4,y:67}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:-12.1,x:347.7}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:-12.1,x:642}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:-12.1,x:936.2,y:67}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:-12.1,x:1230.5,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:-12.1,y:67,x:1524.8}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:-12.1,y:67,x:1819.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8,p:{scaleX:0.97,x:1003.8,y:15.6,scaleY:0.271}},{t:this.instance_7,p:{scaleX:0.97,x:1017.7,y:114.5,scaleY:0.271}},{t:this.instance_6,p:{scaleX:0.97,scaleY:0.97,rotation:-6,x:53.4,y:67}},{t:this.instance_5,p:{scaleX:0.97,scaleY:0.97,rotation:-6,x:347.7}},{t:this.instance_4,p:{scaleX:0.97,scaleY:0.97,rotation:-6,x:642}},{t:this.instance_3,p:{scaleX:0.97,scaleY:0.97,rotation:-6,x:936.3,y:67}},{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97,rotation:-6,x:1230.5,y:67}},{t:this.instance_1,p:{scaleX:0.97,scaleY:0.97,rotation:-6,y:67,x:1524.8}},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:-6,y:67,x:1819.2}}]},1).to({state:[{t:this.instance_9},{t:this.instance_11},{t:this.instance_10},{t:this.instance_6,p:{scaleX:0.971,scaleY:0.971,rotation:0,x:53.3,y:67}},{t:this.instance_5,p:{scaleX:0.971,scaleY:0.971,rotation:0,x:347.6}},{t:this.instance_4,p:{scaleX:0.971,scaleY:0.971,rotation:0,x:641.9}},{t:this.instance_3,p:{scaleX:0.971,scaleY:0.971,rotation:0,x:936.2,y:67}},{t:this.instance_2,p:{scaleX:0.971,scaleY:0.971,rotation:0,x:1230.5,y:67}},{t:this.instance_1,p:{scaleX:0.971,scaleY:0.971,rotation:0,y:67,x:1524.8}},{t:this.instance,p:{scaleX:0.971,scaleY:0.971,rotation:0,y:67,x:1819.2}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(156.3,65.8,3417.4,129.5);
// library properties:
lib.properties = {
	width: 1865,
	height: 130,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;