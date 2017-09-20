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


(lib.Tween58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#939598").p("AHGBnIBUgEQBKgCgvAQQiaAkiFAZQkLAxBog6QhwAShsAOQjaAbAMgWIA5gVQBcgbC1ghQioABifgFQk/gJA0gbIATgEQAbgDArAGQAQg/AvhDQBgiIChgZIAVADQAbAGAbARQBVA2AyCRQAFgFAIgGQAQgMAPgFQAwgRAOA8QAJgNAQgOQAggcAjgKQBwgfBkCqg");
	this.shape.setTransform(-60.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E7E7").s().p("Ak3DKIA5gVQBcgbC1ghQioABifgFQk/gJA0gbIATgEQAbgDArAGQAQg/AvhDQBgiIChgZIAVADQAbAGAbARQBVA2AyCRIANgLQAQgMAPgFQAwgRAOA8QAJgNAQgOQAggcAjgKQBwgfBkCqIBUgEQBKgCgvAQQiaAkiFAZQkLAxBog6QhwAShsAOQh4APgzAAQgpAAAGgKg");
	this.shape_1.setTransform(-60.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#939598").p("AnFBnQgugDgmgBQhKgCAvAQIEfA9QELAxhng6IDbAgQDaAbgMgWQgKgHgugOQhdgbi1ghIFIgEQE+gJg0gbQgFgCgOgCQgbgDgrAGQgPg/gwhDQhgiIihgZQgIAAgNADQgbAGgbARQhVA2gxCRQgVgTgYgJQgwgRgOA8Qgkgxg4gQQhwgfhkCqg");
	this.shape_2.setTransform(60.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E6E7E7").s().p("ABqDFIjbggQBnA6kLgxIkfg9QgvgQBKACQAmABAuADQBkiqBwAfQA4AQAkAxQAOg8AwARQAYAJAVATQAxiRBVg2QAbgRAbgGQANgDAIAAQChAZBgCIQAwBDAPA/QArgGAbADQAOACAFACQA0Abk+AJIlIAEQC1AhBdAbQAuAOAKAHQAGAKgpAAQgyAAh5gPg");
	this.shape_3.setTransform(60.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.4,-22.1,239.9,44.3);


(lib.Tween57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#939598").p("AHGBnIBUgEQBKgCgvAQQiaAkiFAZQkLAxBog6QhwAShsAOQjaAbAMgWIA5gVQBcgbC1ghQioABifgFQk/gJA0gbIATgEQAbgDArAGQAQg/AvhDQBgiIChgZIAVADQAbAGAbARQBVA2AyCRQAFgFAIgGQAQgMAPgFQAwgRAOA8QAJgNAQgOQAggcAjgKQBwgfBkCqg");
	this.shape.setTransform(-60.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E7E7").s().p("Ak3DKIA5gVQBcgbC1ghQioABifgFQk/gJA0gbIATgEQAbgDArAGQAQg/AvhDQBgiIChgZIAVADQAbAGAbARQBVA2AyCRIANgLQAQgMAPgFQAwgRAOA8QAJgNAQgOQAggcAjgKQBwgfBkCqIBUgEQBKgCgvAQQiaAkiFAZQkLAxBog6QhwAShsAOQh4APgzAAQgpAAAGgKg");
	this.shape_1.setTransform(-60.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#939598").p("AnFBnQgugDgmgBQhKgCAvAQIEfA9QELAxhng6IDbAgQDaAbgMgWQgKgHgugOQhdgbi1ghIFIgEQE+gJg0gbQgFgCgOgCQgbgDgrAGQgPg/gwhDQhgiIihgZQgIAAgNADQgbAGgbARQhVA2gxCRQgVgTgYgJQgwgRgOA8Qgkgxg4gQQhwgfhkCqg");
	this.shape_2.setTransform(60.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E6E7E7").s().p("ABqDFIjbggQBnA6kLgxIkfg9QgvgQBKACQAmABAuADQBkiqBwAfQA4AQAkAxQAOg8AwARQAYAJAVATQAxiRBVg2QAbgRAbgGQANgDAIAAQChAZBgCIQAwBDAPA/QArgGAbADQAOACAFACQA0Abk+AJIlIAEQC1AhBdAbQAuAOAKAHQAGAKgpAAQgyAAh5gPg");
	this.shape_3.setTransform(60.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.4,-22.1,239.9,44.3);


(lib.Tween56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E7E7").s().p("AJ6EZQiwACiYgIQkugOCBguQiTgLiHgQQkQgfA8gWIB/gGQCZgECFAKQjOgqjBguQmChbBGgSIAYAAQAkADA4AXQARg9Azg9QBmh6CrAAIAhAIQAoANAlAbQB1BVAoC3IAQgIQATgIAQgBQA3gEAPBBQANgLAWgLQAqgXArgCQCKgFBXDTIBnAXQBKATgxAAIgVAAg");
	this.shape.setTransform(-82.9,88.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E7E7").s().p("ApQEAQApgJA1gJQBAjXCEAEQBCACA1AuQAAhHA5AGQAdADAcARQARiuBPhTQAYgaAdgOIAXgJQC4gPCPB9QBHA+AiBCQAugTAegEQAQgBAGABQBAAQldBeIlpBdQDRgNBuAFQA2ADANAFQAUAVj4AcIj8AZQCBAkkzARIlOAJQg4gEBTgSg");
	this.shape_1.setTransform(86.1,88.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D0D2D3").s().p("AtfJdQhZi2hXi9Qiul6AIglIAkAkQAvAkA4ACIAEAPQAJASAUASQBAA5CaAkQg7gMg1ABQhsAAAWA7IAIAYQAMAfASAhQA6BpBiBZQE6EZJaAAICEgVQChggCQg0QHMinB0kxIhTBJQhnBMhjATQBlhnBJiGQCSkLiIiYQAIgNgDgTQgFgmg1gcQihhXobAnIAIgBQA+gGA2gMQCrglARhLIAYA0IBTACQBlAGBYAQQEZAzAqCKIAIA0QAIBEACBMQAHDzg7DxIgcAdQgmAkgxAkQibB1jMBRQluCRm3AAQlZAAmIhag");
	this.shape_2.setTransform(-9.2,-122.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A7A9AC").s().p("ADnhGQCLAQA+AzQi/hVljBKQhvAWhyAkIhcAgQGBixEVAfg");
	this.shape_3.setTransform(-19.6,-186.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A7A9AC").s().p("As5DRIimgTQjFhCD1hZQB6grCiggQB6ghDfgeQDcgdDdgNQDvgOCXALQCpAMARArQAiBVmPA+Qh9AUiZAPIh/AMQHVAdDyhgQB4gvAbg2QA2htkfgaQhagIhxACIhgADQE2gbDeATQC/ARBBArQAiAWgBAqQgCAqgkANQqhDtrrARIhxACQisAAiigNg");
	this.shape_4.setTransform(-15.7,-157.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E6E7E7").s().p("AkqLTQjNgKjJgiIigggIlLrcQhDiTFyhhQC5gwDHgTQJ2hBFBAVQCgALAjAYQACBlmAA4Qh4ARiPALIh4AIQHZAxD2h3QBMglAtgyIAdgqQgGhUk6gSQhjgGh1ACIhiADQCTgMAugmQAOgMACgNIAAgLQivhHlkBFQhwAWh0AhIheAdQAsgHAEAeQACAQgHAQQg8BKg9gPQgTgFgRgNIgNgMQABibGahUQDNgqDMgLQEUgCBrBAQA1AggCAgQELgDCuBJQBXAlAiAlQBJBSgbFRQgJBrgTB3QgOBdgEALQgTAyihBjQhRAxhNAnQmRDForAAQhNAAhQgEg");
	this.shape_5.setTransform(-9.1,-126.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D0D2D3").s().p("Ap9CsQh0iMhUiJQipkUCbAMIgLAEQgMAHgEAIQgNAZBKAiIgNABQgPACgHAFQgWAQA+ApIBBArQBCAuAHASIgJARQgKAWAAAYQABBKBhA9IAyAxQBEA4BeAnQEtB9G+hjIDKg4QDNhDALgyQjNAbg6ABQBkg0BfhIQC9iTgchpQAIgFAKgLQATgWAJgiIAFARQADAcgKA3QgeCviSF1QidA2j8ALQgrACgrAAQnHAAmujHg");
	this.shape_6.setTransform(-5.6,-16.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A7A9AC").s().p("AASCwQmkganchuQgagGgKgYQgKgYAPgVQA6hSDtgfQB2gQBrABQJWgwGfBQQDPApBYAyQiSDeosAAQheAAhpgGg");
	this.shape_7.setTransform(-5.7,-47.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E6E7E7").s().p("AiZF0Qisgkisg2IiJgvIkYmyQhPiFF3g5QC8gcDLgCQIVgbFpBMQC0AlBKArQAgBLhkEqQgyCVg5CHQizA8jnAAQjdAAkMg3g");
	this.shape_8.setTransform(-6,-22.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D0D2D3").s().p("AlaCYQhQhKg+hNQh8ibBcgVIgLAJQgMALgDAJQgJAfBWAGIgKAMQgIAOAFAQQARAyCUApIgcAMQgcAQgFARQgQA3DfArIApAKQAzAMA2AGQCoAVB3gnQBGgdA+gkQB+hHgjghQgWgDgrAKQhVAShjA5QBIgwBNg/QCaiAAVhNIgLCGQgUCXguBfQhTAqiRAUQhRALhTAAQjVAAjghLg");
	this.shape_9.setTransform(-5.9,41);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A7A9AC").s().p("AjbBoIiLgHQjzgUA6gyQARgQAugPQAXgJAUgFQHah3EzApQCZAVA6AsQgRB4nCAQQhAAChFAAQhTAAhbgDg");
	this.shape_10.setTransform(-5.1,19.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E6E7E7").s().p("AhbDsQhjgMhegXIhKgVQijiwglhcQgLgdADgRIAFgLQCahbHygJQCkgDCmAHQCNAFABAEQASAsgvC8QgYBegbBWQi4BDjXAAQhUAAhbgLg");
	this.shape_11.setTransform(-5.1,39.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D0D2D3").s().p("AihgXIh6ifQANAQA+AQIA7APQgkAVBLBJQAmAlAtAfQgXBQBqhEIBwhTIB1hsQgnAuhJB2Qg0BXgvBUQhcgmiPiog");
	this.shape_12.setTransform(-0.7,88.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A7A9AC").s().p("AhSBOQhJgPhIgfIg6gcQgkg2BWgZQAqgNAygBQEeABBpApQA1AUgFAUQhsBhicAAQg1AAg9gMg");
	this.shape_13.setTransform(0.5,69.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E6E7E7").s().p("AiVAfIiUinQgBgyBOgbQAngNAngDQDsgHB+AxQA+AZAQAaQggAYhnCtQgzBXgsBTQg7gaieiug");
	this.shape_14.setTransform(0.7,83.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#221E1F").s().p("AAAClQgVgBgQgGIgOgGIgNgJIgJgMQgDgHgBgJIAAAuIgwAAIAAlFIAwAAIAADJIABAIIADAQIAHAUQAEAKAJAJQAIAIANAGQANAGATAAIAIgBIAPgCIASgIQAKgEAIgKQAIgJAGgOQAFgOAAgVIAAjJIAwAAIAADJIAAAEIgBARIgEAZIgLAdQgIAOgMAMQgNAMgUAIQgTAHgcAAg");
	this.shape_15.setTransform(9.6,169.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#221E1F").s().p("ABPCkIAAhgQABgOgHgKQgGgJgKgGIgUgKIgVgFIgVgDIgGABIgMACIgRAFIgQAJIgNAPQgHAKgCANIgBAIQAAAKAEAHQAGAHAIAGIASAIIATAEIASACIALAAIAEAAIAAAuIg1AAQgSAAgPgHQgPgIgLgMQgLgNgHgQQgGgRAAgSQAAgSAIgTQAIgSATgSIAXgQIAYgLIAXgGIAWgCIAfAEIAaAGIAWAKIAAgTQAAgPgDgMIgJgUIgMgNIgPgLQgRgIgWgCQgTABgOAGQgNAIgJAKQgJAKgFALIgHAUIgyAAQABgcAJgTQAJgTAMgMQAMgMAOgIIAcgKIAYgFIAOgBIADAAQAeAAAVAIQAWAIAOAMQAOANAJAPIALAdIAGAZIAAAQIAAADIAADGg");
	this.shape_16.setTransform(-21,168.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.4,-199.4,300.8,399);


(lib.Tween55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E7E7").s().p("AJ6EZQiwACiYgIQkugOCBguQiTgLiHgQQkQgfA8gWIB/gGQCZgECFAKQjOgqjBguQmChbBGgSIAYAAQAkADA4AXQARg9Azg9QBmh6CrAAIAhAIQAoANAlAbQB1BVAoC3IAQgIQATgIAQgBQA3gEAPBBQANgLAWgLQAqgXArgCQCKgFBXDTIBnAXQBKATgxAAIgVAAg");
	this.shape.setTransform(-82.9,88.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E7E7").s().p("ApQEAQApgJA1gJQBAjXCEAEQBCACA1AuQAAhHA5AGQAdADAcARQARiuBPhTQAYgaAdgOIAXgJQC4gPCPB9QBHA+AiBCQAugTAegEQAQgBAGABQBAAQldBeIlpBdQDRgNBuAFQA2ADANAFQAUAVj4AcIj8AZQCBAkkzARIlOAJQg4gEBTgSg");
	this.shape_1.setTransform(86.1,88.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D0D2D3").s().p("AtfJdQhZi2hXi9Qiul6AIglIAkAkQAvAkA4ACIAEAPQAJASAUASQBAA5CaAkQg7gMg1ABQhsAAAWA7IAIAYQAMAfASAhQA6BpBiBZQE6EZJaAAICEgVQChggCQg0QHMinB0kxIhTBJQhnBMhjATQBlhnBJiGQCSkLiIiYQAIgNgDgTQgFgmg1gcQihhXobAnIAIgBQA+gGA2gMQCrglARhLIAYA0IBTACQBlAGBYAQQEZAzAqCKIAIA0QAIBEACBMQAHDzg7DxIgcAdQgmAkgxAkQibB1jMBRQluCRm3AAQlZAAmIhag");
	this.shape_2.setTransform(-9.2,-122.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A7A9AC").s().p("ADnhGQCLAQA+AzQi/hVljBKQhvAWhyAkIhcAgQGBixEVAfg");
	this.shape_3.setTransform(-19.6,-186.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A7A9AC").s().p("As5DRIimgTQjFhCD1hZQB6grCiggQB6ghDfgeQDcgdDdgNQDvgOCXALQCpAMARArQAiBVmPA+Qh9AUiZAPIh/AMQHVAdDyhgQB4gvAbg2QA2htkfgaQhagIhxACIhgADQE2gbDeATQC/ARBBArQAiAWgBAqQgCAqgkANQqhDtrrARIhxACQisAAiigNg");
	this.shape_4.setTransform(-15.7,-157.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E6E7E7").s().p("AkqLTQjNgKjJgiIigggIlLrcQhDiTFyhhQC5gwDHgTQJ2hBFBAVQCgALAjAYQACBlmAA4Qh4ARiPALIh4AIQHZAxD2h3QBMglAtgyIAdgqQgGhUk6gSQhjgGh1ACIhiADQCTgMAugmQAOgMACgNIAAgLQivhHlkBFQhwAWh0AhIheAdQAsgHAEAeQACAQgHAQQg8BKg9gPQgTgFgRgNIgNgMQABibGahUQDNgqDMgLQEUgCBrBAQA1AggCAgQELgDCuBJQBXAlAiAlQBJBSgbFRQgJBrgTB3QgOBdgEALQgTAyihBjQhRAxhNAnQmRDForAAQhNAAhQgEg");
	this.shape_5.setTransform(-9.1,-126.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D0D2D3").s().p("Ap9CsQh0iMhUiJQipkUCbAMIgLAEQgMAHgEAIQgNAZBKAiIgNABQgPACgHAFQgWAQA+ApIBBArQBCAuAHASIgJARQgKAWAAAYQABBKBhA9IAyAxQBEA4BeAnQEtB9G+hjIDKg4QDNhDALgyQjNAbg6ABQBkg0BfhIQC9iTgchpQAIgFAKgLQATgWAJgiIAFARQADAcgKA3QgeCviSF1QidA2j8ALQgrACgrAAQnHAAmujHg");
	this.shape_6.setTransform(-5.6,-16.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A7A9AC").s().p("AASCwQmkganchuQgagGgKgYQgKgYAPgVQA6hSDtgfQB2gQBrABQJWgwGfBQQDPApBYAyQiSDeosAAQheAAhpgGg");
	this.shape_7.setTransform(-5.7,-47.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E6E7E7").s().p("AiZF0Qisgkisg2IiJgvIkYmyQhPiFF3g5QC8gcDLgCQIVgbFpBMQC0AlBKArQAgBLhkEqQgyCVg5CHQizA8jnAAQjdAAkMg3g");
	this.shape_8.setTransform(-6,-22.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D0D2D3").s().p("AlaCYQhQhKg+hNQh8ibBcgVIgLAJQgMALgDAJQgJAfBWAGIgKAMQgIAOAFAQQARAyCUApIgcAMQgcAQgFARQgQA3DfArIApAKQAzAMA2AGQCoAVB3gnQBGgdA+gkQB+hHgjghQgWgDgrAKQhVAShjA5QBIgwBNg/QCaiAAVhNIgLCGQgUCXguBfQhTAqiRAUQhRALhTAAQjVAAjghLg");
	this.shape_9.setTransform(-5.9,41);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A7A9AC").s().p("AjbBoIiLgHQjzgUA6gyQARgQAugPQAXgJAUgFQHah3EzApQCZAVA6AsQgRB4nCAQQhAAChFAAQhTAAhbgDg");
	this.shape_10.setTransform(-5.1,19.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E6E7E7").s().p("AhbDsQhjgMhegXIhKgVQijiwglhcQgLgdADgRIAFgLQCahbHygJQCkgDCmAHQCNAFABAEQASAsgvC8QgYBegbBWQi4BDjXAAQhUAAhbgLg");
	this.shape_11.setTransform(-5.1,39.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D0D2D3").s().p("AihgXIh6ifQANAQA+AQIA7APQgkAVBLBJQAmAlAtAfQgXBQBqhEIBwhTIB1hsQgnAuhJB2Qg0BXgvBUQhcgmiPiog");
	this.shape_12.setTransform(-0.7,88.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A7A9AC").s().p("AhSBOQhJgPhIgfIg6gcQgkg2BWgZQAqgNAygBQEeABBpApQA1AUgFAUQhsBhicAAQg1AAg9gMg");
	this.shape_13.setTransform(0.5,69.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E6E7E7").s().p("AiVAfIiUinQgBgyBOgbQAngNAngDQDsgHB+AxQA+AZAQAaQggAYhnCtQgzBXgsBTQg7gaieiug");
	this.shape_14.setTransform(0.7,83.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#221E1F").s().p("AAAClQgVgBgQgGIgOgGIgNgJIgJgMQgDgHgBgJIAAAuIgwAAIAAlFIAwAAIAADJIABAIIADAQIAHAUQAEAKAJAJQAIAIANAGQANAGATAAIAIgBIAPgCIASgIQAKgEAIgKQAIgJAGgOQAFgOAAgVIAAjJIAwAAIAADJIAAAEIgBARIgEAZIgLAdQgIAOgMAMQgNAMgUAIQgTAHgcAAg");
	this.shape_15.setTransform(9.6,169.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#221E1F").s().p("ABPCkIAAhgQABgOgHgKQgGgJgKgGIgUgKIgVgFIgVgDIgGABIgMACIgRAFIgQAJIgNAPQgHAKgCANIgBAIQAAAKAEAHQAGAHAIAGIASAIIATAEIASACIALAAIAEAAIAAAuIg1AAQgSAAgPgHQgPgIgLgMQgLgNgHgQQgGgRAAgSQAAgSAIgTQAIgSATgSIAXgQIAYgLIAXgGIAWgCIAfAEIAaAGIAWAKIAAgTQAAgPgDgMIgJgUIgMgNIgPgLQgRgIgWgCQgTABgOAGQgNAIgJAKQgJAKgFALIgHAUIgyAAQABgcAJgTQAJgTAMgMQAMgMAOgIIAcgKIAYgFIAOgBIADAAQAeAAAVAIQAWAIAOAMQAOANAJAPIALAdIAGAZIAAAQIAAADIAADGg");
	this.shape_16.setTransform(-21,168.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.4,-199.4,300.8,399);


(lib.Tween54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E7E7").s().p("AJ6EZQiwACiYgIQkugOCBguQiTgLiHgQQkQgfA8gWIB/gGQCZgECFAKQjOgqjBguQmChbBGgSIAYAAQAkADA4AXQARg9Azg9QBmh6CrAAIAhAIQAoANAlAbQB1BVAoC3IAQgIQATgIAQgBQA3gEAPBBQANgLAWgLQAqgXArgCQCKgFBXDTIBnAXQBKATgxAAIgVAAg");
	this.shape.setTransform(-82.9,88.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E7E7").s().p("ApQEAQApgJA1gJQBAjXCEAEQBCACA1AuQAAhHA5AGQAdADAcARQARiuBPhTQAYgaAdgOIAXgJQC4gPCPB9QBHA+AiBCQAugTAegEQAQgBAGABQBAAQldBeIlpBdQDRgNBuAFQA2ADANAFQAUAVj4AcIj8AZQCBAkkzARIlOAJQg4gEBTgSg");
	this.shape_1.setTransform(86.1,88.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D0D2D3").s().p("AtfJdQhZi2hXi9Qiul6AIglIAkAkQAvAkA4ACIAEAPQAJASAUASQBAA5CaAkQg7gMg1ABQhsAAAWA7IAIAYQAMAfASAhQA6BpBiBZQE6EZJaAAICEgVQChggCQg0QHMinB0kxIhTBJQhnBMhjATQBlhnBJiGQCSkLiIiYQAIgNgDgTQgFgmg1gcQihhXobAnIAIgBQA+gGA2gMQCrglARhLIAYA0IBTACQBlAGBYAQQEZAzAqCKIAIA0QAIBEACBMQAHDzg7DxIgcAdQgmAkgxAkQibB1jMBRQluCRm3AAQlZAAmIhag");
	this.shape_2.setTransform(-9.2,-122.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A7A9AC").s().p("ADnhGQCLAQA+AzQi/hVljBKQhvAWhyAkIhcAgQGBixEVAfg");
	this.shape_3.setTransform(-19.6,-186.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A7A9AC").s().p("As5DRIimgTQjFhCD1hZQB6grCiggQB6ghDfgeQDcgdDdgNQDvgOCXALQCpAMARArQAiBVmPA+Qh9AUiZAPIh/AMQHVAdDyhgQB4gvAbg2QA2htkfgaQhagIhxACIhgADQE2gbDeATQC/ARBBArQAiAWgBAqQgCAqgkANQqhDtrrARIhxACQisAAiigNg");
	this.shape_4.setTransform(-15.7,-157.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E6E7E7").s().p("AkqLTQjNgKjJgiIigggIlLrcQhDiTFyhhQC5gwDHgTQJ2hBFBAVQCgALAjAYQACBlmAA4Qh4ARiPALIh4AIQHZAxD2h3QBMglAtgyIAdgqQgGhUk6gSQhjgGh1ACIhiADQCTgMAugmQAOgMACgNIAAgLQivhHlkBFQhwAWh0AhIheAdQAsgHAEAeQACAQgHAQQg8BKg9gPQgTgFgRgNIgNgMQABibGahUQDNgqDMgLQEUgCBrBAQA1AggCAgQELgDCuBJQBXAlAiAlQBJBSgbFRQgJBrgTB3QgOBdgEALQgTAyihBjQhRAxhNAnQmRDForAAQhNAAhQgEg");
	this.shape_5.setTransform(-9.1,-126.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D0D2D3").s().p("Ap9CsQh0iMhUiJQipkUCbAMIgLAEQgMAHgEAIQgNAZBKAiIgNABQgPACgHAFQgWAQA+ApIBBArQBCAuAHASIgJARQgKAWAAAYQABBKBhA9IAyAxQBEA4BeAnQEtB9G+hjIDKg4QDNhDALgyQjNAbg6ABQBkg0BfhIQC9iTgchpQAIgFAKgLQATgWAJgiIAFARQADAcgKA3QgeCviSF1QidA2j8ALQgrACgrAAQnHAAmujHg");
	this.shape_6.setTransform(-5.6,-16.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A7A9AC").s().p("AASCwQmkganchuQgagGgKgYQgKgYAPgVQA6hSDtgfQB2gQBrABQJWgwGfBQQDPApBYAyQiSDeosAAQheAAhpgGg");
	this.shape_7.setTransform(-5.7,-47.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E6E7E7").s().p("AiZF0Qisgkisg2IiJgvIkYmyQhPiFF3g5QC8gcDLgCQIVgbFpBMQC0AlBKArQAgBLhkEqQgyCVg5CHQizA8jnAAQjdAAkMg3g");
	this.shape_8.setTransform(-6,-22.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D0D2D3").s().p("AlaCYQhQhKg+hNQh8ibBcgVIgLAJQgMALgDAJQgJAfBWAGIgKAMQgIAOAFAQQARAyCUApIgcAMQgcAQgFARQgQA3DfArIApAKQAzAMA2AGQCoAVB3gnQBGgdA+gkQB+hHgjghQgWgDgrAKQhVAShjA5QBIgwBNg/QCaiAAVhNIgLCGQgUCXguBfQhTAqiRAUQhRALhTAAQjVAAjghLg");
	this.shape_9.setTransform(-5.9,41);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A7A9AC").s().p("AjbBoIiLgHQjzgUA6gyQARgQAugPQAXgJAUgFQHah3EzApQCZAVA6AsQgRB4nCAQQhAAChFAAQhTAAhbgDg");
	this.shape_10.setTransform(-5.1,19.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E6E7E7").s().p("AhbDsQhjgMhegXIhKgVQijiwglhcQgLgdADgRIAFgLQCahbHygJQCkgDCmAHQCNAFABAEQASAsgvC8QgYBegbBWQi4BDjXAAQhUAAhbgLg");
	this.shape_11.setTransform(-5.1,39.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D0D2D3").s().p("AihgXIh6ifQANAQA+AQIA7APQgkAVBLBJQAmAlAtAfQgXBQBqhEIBwhTIB1hsQgnAuhJB2Qg0BXgvBUQhcgmiPiog");
	this.shape_12.setTransform(-0.7,88.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A7A9AC").s().p("AhSBOQhJgPhIgfIg6gcQgkg2BWgZQAqgNAygBQEeABBpApQA1AUgFAUQhsBhicAAQg1AAg9gMg");
	this.shape_13.setTransform(0.5,69.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E6E7E7").s().p("AiVAfIiUinQgBgyBOgbQAngNAngDQDsgHB+AxQA+AZAQAaQggAYhnCtQgzBXgsBTQg7gaieiug");
	this.shape_14.setTransform(0.7,83.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#221E1F").s().p("AAAClQgVgBgQgGIgOgGIgNgJIgJgMQgDgHgBgJIAAAuIgwAAIAAlFIAwAAIAADJIABAIIADAQIAHAUQAEAKAJAJQAIAIANAGQANAGATAAIAIgBIAPgCIASgIQAKgEAIgKQAIgJAGgOQAFgOAAgVIAAjJIAwAAIAADJIAAAEIgBARIgEAZIgLAdQgIAOgMAMQgNAMgUAIQgTAHgcAAg");
	this.shape_15.setTransform(9.6,169.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#221E1F").s().p("ABPCkIAAhgQABgOgHgKQgGgJgKgGIgUgKIgVgFIgVgDIgGABIgMACIgRAFIgQAJIgNAPQgHAKgCANIgBAIQAAAKAEAHQAGAHAIAGIASAIIATAEIASACIALAAIAEAAIAAAuIg1AAQgSAAgPgHQgPgIgLgMQgLgNgHgQQgGgRAAgSQAAgSAIgTQAIgSATgSIAXgQIAYgLIAXgGIAWgCIAfAEIAaAGIAWAKIAAgTQAAgPgDgMIgJgUIgMgNIgPgLQgRgIgWgCQgTABgOAGQgNAIgJAKQgJAKgFALIgHAUIgyAAQABgcAJgTQAJgTAMgMQAMgMAOgIIAcgKIAYgFIAOgBIADAAQAeAAAVAIQAWAIAOAMQAOANAJAPIALAdIAGAZIAAAQIAAADIAADGg");
	this.shape_16.setTransform(-21,168.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.4,-199.4,300.8,399);


(lib.Tween53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E7E7").s().p("AJ6EZQiwACiYgIQkugOCBguQiTgLiHgQQkQgfA8gWIB/gGQCZgECFAKQjOgqjBguQmChbBGgSIAYAAQAkADA4AXQARg9Azg9QBmh6CrAAIAhAIQAoANAlAbQB1BVAoC3IAQgIQATgIAQgBQA3gEAPBBQANgLAWgLQAqgXArgCQCKgFBXDTIBnAXQBKATgxAAIgVAAg");
	this.shape.setTransform(-82.9,88.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E7E7").s().p("ApQEAQApgJA1gJQBAjXCEAEQBCACA1AuQAAhHA5AGQAdADAcARQARiuBPhTQAYgaAdgOIAXgJQC4gPCPB9QBHA+AiBCQAugTAegEQAQgBAGABQBAAQldBeIlpBdQDRgNBuAFQA2ADANAFQAUAVj4AcIj8AZQCBAkkzARIlOAJQg4gEBTgSg");
	this.shape_1.setTransform(86.1,88.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D0D2D3").s().p("AtfJdQhZi2hXi9Qiul6AIglIAkAkQAvAkA4ACIAEAPQAJASAUASQBAA5CaAkQg7gMg1ABQhsAAAWA7IAIAYQAMAfASAhQA6BpBiBZQE6EZJaAAICEgVQChggCQg0QHMinB0kxIhTBJQhnBMhjATQBlhnBJiGQCSkLiIiYQAIgNgDgTQgFgmg1gcQihhXobAnIAIgBQA+gGA2gMQCrglARhLIAYA0IBTACQBlAGBYAQQEZAzAqCKIAIA0QAIBEACBMQAHDzg7DxIgcAdQgmAkgxAkQibB1jMBRQluCRm3AAQlZAAmIhag");
	this.shape_2.setTransform(-9.2,-122.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A7A9AC").s().p("ADnhGQCLAQA+AzQi/hVljBKQhvAWhyAkIhcAgQGBixEVAfg");
	this.shape_3.setTransform(-19.6,-186.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A7A9AC").s().p("As5DRIimgTQjFhCD1hZQB6grCiggQB6ghDfgeQDcgdDdgNQDvgOCXALQCpAMARArQAiBVmPA+Qh9AUiZAPIh/AMQHVAdDyhgQB4gvAbg2QA2htkfgaQhagIhxACIhgADQE2gbDeATQC/ARBBArQAiAWgBAqQgCAqgkANQqhDtrrARIhxACQisAAiigNg");
	this.shape_4.setTransform(-15.7,-157.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E6E7E7").s().p("AkqLTQjNgKjJgiIigggIlLrcQhDiTFyhhQC5gwDHgTQJ2hBFBAVQCgALAjAYQACBlmAA4Qh4ARiPALIh4AIQHZAxD2h3QBMglAtgyIAdgqQgGhUk6gSQhjgGh1ACIhiADQCTgMAugmQAOgMACgNIAAgLQivhHlkBFQhwAWh0AhIheAdQAsgHAEAeQACAQgHAQQg8BKg9gPQgTgFgRgNIgNgMQABibGahUQDNgqDMgLQEUgCBrBAQA1AggCAgQELgDCuBJQBXAlAiAlQBJBSgbFRQgJBrgTB3QgOBdgEALQgTAyihBjQhRAxhNAnQmRDForAAQhNAAhQgEg");
	this.shape_5.setTransform(-9.1,-126.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D0D2D3").s().p("Ap9CsQh0iMhUiJQipkUCbAMIgLAEQgMAHgEAIQgNAZBKAiIgNABQgPACgHAFQgWAQA+ApIBBArQBCAuAHASIgJARQgKAWAAAYQABBKBhA9IAyAxQBEA4BeAnQEtB9G+hjIDKg4QDNhDALgyQjNAbg6ABQBkg0BfhIQC9iTgchpQAIgFAKgLQATgWAJgiIAFARQADAcgKA3QgeCviSF1QidA2j8ALQgrACgrAAQnHAAmujHg");
	this.shape_6.setTransform(-5.6,-16.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A7A9AC").s().p("AASCwQmkganchuQgagGgKgYQgKgYAPgVQA6hSDtgfQB2gQBrABQJWgwGfBQQDPApBYAyQiSDeosAAQheAAhpgGg");
	this.shape_7.setTransform(-5.7,-47.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E6E7E7").s().p("AiZF0Qisgkisg2IiJgvIkYmyQhPiFF3g5QC8gcDLgCQIVgbFpBMQC0AlBKArQAgBLhkEqQgyCVg5CHQizA8jnAAQjdAAkMg3g");
	this.shape_8.setTransform(-6,-22.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D0D2D3").s().p("AlaCYQhQhKg+hNQh8ibBcgVIgLAJQgMALgDAJQgJAfBWAGIgKAMQgIAOAFAQQARAyCUApIgcAMQgcAQgFARQgQA3DfArIApAKQAzAMA2AGQCoAVB3gnQBGgdA+gkQB+hHgjghQgWgDgrAKQhVAShjA5QBIgwBNg/QCaiAAVhNIgLCGQgUCXguBfQhTAqiRAUQhRALhTAAQjVAAjghLg");
	this.shape_9.setTransform(-5.9,41);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A7A9AC").s().p("AjbBoIiLgHQjzgUA6gyQARgQAugPQAXgJAUgFQHah3EzApQCZAVA6AsQgRB4nCAQQhAAChFAAQhTAAhbgDg");
	this.shape_10.setTransform(-5.1,19.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E6E7E7").s().p("AhbDsQhjgMhegXIhKgVQijiwglhcQgLgdADgRIAFgLQCahbHygJQCkgDCmAHQCNAFABAEQASAsgvC8QgYBegbBWQi4BDjXAAQhUAAhbgLg");
	this.shape_11.setTransform(-5.1,39.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D0D2D3").s().p("AihgXIh6ifQANAQA+AQIA7APQgkAVBLBJQAmAlAtAfQgXBQBqhEIBwhTIB1hsQgnAuhJB2Qg0BXgvBUQhcgmiPiog");
	this.shape_12.setTransform(-0.7,88.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A7A9AC").s().p("AhSBOQhJgPhIgfIg6gcQgkg2BWgZQAqgNAygBQEeABBpApQA1AUgFAUQhsBhicAAQg1AAg9gMg");
	this.shape_13.setTransform(0.5,69.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E6E7E7").s().p("AiVAfIiUinQgBgyBOgbQAngNAngDQDsgHB+AxQA+AZAQAaQggAYhnCtQgzBXgsBTQg7gaieiug");
	this.shape_14.setTransform(0.7,83.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#221E1F").s().p("AAAClQgVgBgQgGIgOgGIgNgJIgJgMQgDgHgBgJIAAAuIgwAAIAAlFIAwAAIAADJIABAIIADAQIAHAUQAEAKAJAJQAIAIANAGQANAGATAAIAIgBIAPgCIASgIQAKgEAIgKQAIgJAGgOQAFgOAAgVIAAjJIAwAAIAADJIAAAEIgBARIgEAZIgLAdQgIAOgMAMQgNAMgUAIQgTAHgcAAg");
	this.shape_15.setTransform(9.6,169.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#221E1F").s().p("ABPCkIAAhgQABgOgHgKQgGgJgKgGIgUgKIgVgFIgVgDIgGABIgMACIgRAFIgQAJIgNAPQgHAKgCANIgBAIQAAAKAEAHQAGAHAIAGIASAIIATAEIASACIALAAIAEAAIAAAuIg1AAQgSAAgPgHQgPgIgLgMQgLgNgHgQQgGgRAAgSQAAgSAIgTQAIgSATgSIAXgQIAYgLIAXgGIAWgCIAfAEIAaAGIAWAKIAAgTQAAgPgDgMIgJgUIgMgNIgPgLQgRgIgWgCQgTABgOAGQgNAIgJAKQgJAKgFALIgHAUIgyAAQABgcAJgTQAJgTAMgMQAMgMAOgIIAcgKIAYgFIAOgBIADAAQAeAAAVAIQAWAIAOAMQAOANAJAPIALAdIAGAZIAAAQIAAADIAADGg");
	this.shape_16.setTransform(-21,168.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.4,-199.4,300.8,399);


(lib.Tween30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAuBfIAAh9QAAgMgEgIQgEgJgHgEIgfATIgdgTQgHAEgFAJQgEAIAAAMIAABCQABAJADAIIAEAFIAGAFIAIAEIAKACIAUAAIAAAaIglAAQgMgBgJgGIgIgHIgHgJIgFgOIgCgSIAAhRQACgTALgOQALgOARgGIAgAUIAhgUQARAGALAOQAGAHADAIQADAIABAKIAACIg");
	this.shape.setTransform(65.9,-95.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzAOIAAgaIBnAAIAAAag");
	this.shape_1.setTransform(48.7,-108.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAuBfIAAg4QAAgHgEgGQgDgFgGgEIgMgGIgMgDIgMgBIgDAAIgIABIgJADIgJAGIgIAIQgEAGgBAHIgBAFQAAAGADAEQADAEAFADIAKAEIALADIAKACIAGAAIADAAIAAAaIgeAAQgLAAgIgEQgJgFgHgGQgGgIgEgJQgDgKAAgKQAAgLAEgLQAFgKALgLIANgIIAOgHIANgDIANgBIASACIAPADIANAGIAAgLQAAgIgCgIIgFgLIgIgIIgIgGQgKgFgNAAQgKAAgIADQgIAFgFAFQgGAGgCAGIgEAMIgdAAQABgQAEgLQAGgLAHgHQAHgHAIgFIAQgFIAOgEIAJAAIAAAAQASAAAMAFQAMAFAJAGQAIAIAFAIIAHASIACAOIABAKIAAABIAAByg");
	this.shape_2.setTransform(48.1,-95.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVBeQgHgCgEgEQgFgEgCgFQgDgFAAgHQAAAHgCAFQgCAFgFAEQgFAEgGACIgNACQgJAAgIgCIgMgGIgKgIIgGgJQgHgLgBgNIAAiNIAtAAIAAAaIgRAAIAABoQAAANADAGQADAHAEADQAEADAEABIAGABIABAAQAIAAAEgFQAEgDACgGIADgKIABgIIAAgCIAAiCIAXAAIAACCIAAACIABAIIADAKQACAGAFADQAEAFAHAAIACAAIAGgBQAEgBADgDQAEgDADgHQADgGAAgNIAAiCIAcAAIAACNQgBANgHALIgGAJIgKAIIgNAGQgHACgJAAg");
	this.shape_3.setTransform(29.7,-95.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdBcQgOgFgIgEQgLgHgHgIIATgSIAJAHIAMAHIAQAEIAQACQAIAAAIgDQAHgBAFgFQAFgEADgFQACgGAAgHQAAgGgCgEIgGgHIgGgDIgFgCIgGgBIgLgCIgLgCIgKgBIgGgCIgJgEIgJgFIgJgIQgEgGgDgIQgCgHAAgLQAAgOAGgMQAFgKAJgHQAIgHAMgDQALgCAKAAQALAAAKACIARAGIAPAIIAOAKIgPAXIgNgHIgKgGIgKgEIgLgDIgIgBIgMABQgGABgEADQgFADgDAGQgCAFAAAIQAAAJAFAFQAEAFAIACIAQAFIASACQAKACAIAFQAIAFAIAFQAGAIAEAIQAEAJgBAJQAAAQgEAKQgGALgJAHQgJAHgMADQgNAEgNgBQgSABgOgFg");
	this.shape_4.setTransform(11.3,-95.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVBfIAAiFQgBgIgCgGIgDgFIgEgFIgGgCIgGgBIgMABIgIADIgEAFIgDADIgUgUQAFgGAHgEIAOgHQAJgEAMAAIAEAAIAKADIAMAEQAGAEAGAFQAFAHADAJQADAKABAOIAACFg");
	this.shape_5.setTransform(-2.6,-95.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAuBfIAAh0QAAgLgDgIQgDgIgFgFQgFgEgFgDIgLgEIgJgBIgFAAQgIAAgGABIgLAFIgIAHIgGAJQgFAJgBANIAAB0IgcAAIAAiQQAGgKAHgIQAHgIAHgFIAPgHIANgEIAKgDIAHAAIABAAQAOABAKADQAKADAIAFQAIAFAGAGIAIAMIAGANIADALIABAJIAAAFIAAB0g");
	this.shape_6.setTransform(-16.4,-95.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAuBfIAAh0QAAgLgDgIQgDgIgFgFQgFgEgFgDIgLgEIgJgBIgFAAQgIAAgGABIgLAFIgIAHIgGAJQgFAJgBANIAAB0IgcAAIAAiQQAGgKAHgIQAHgIAHgFIAPgHIANgEIAKgDIAHAAIABAAQAOABAKADQAKADAIAFQAIAFAGAGIAIAMIAGANIADALIABAJIAAAFIAAB0g");
	this.shape_7.setTransform(-34.7,-95.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVBfIAAiFQgBgIgCgGIgDgFIgEgFIgGgCIgGgBIgMABIgIADIgEAFIgDADIgUgUQAFgGAHgEIAOgHQAJgEAMAAIAEAAIAKADIAMAEQAGAEAGAFQAFAHADAJQADAKAAAOIAACFg");
	this.shape_8.setTransform(-50.7,-95.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAuBfIAAg0IgGgKQgDgGgFgCIgKgFIgNgCIgJAAIgHACIAAgcQAHgBAJAAQAUAAARAJIAAgTQgCgNgFgLIgGgIIgIgIIgLgEQgGgCgIAAQgMAAgKAFIgIAGIgIAIIgFALQgCAIAAAIIgcAAIAAgCIABgJIADgOIAHgSQAEgJAIgHQAJgGAMgFQAMgFARAAIACAAIAJAAIAOAEIARAHQAJAEAHAIQAHAIAEAMQAFANAAARIAAB0g");
	this.shape_9.setTransform(-64.5,-95.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAUBfIAAiFQAAgIgCgGIgDgFIgEgFIgGgCIgFgBIgNABIgIADIgEAFIgDADIgUgUQAFgGAHgEIAOgIQAJgDANAAIADABIAKACIAMAEQAGADAGAGQAEAHAEAJQAEAJgBAPIAACFg");
	this.shape_10.setTransform(99.3,-133.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgfAfIAAgjIgOAAIAAgaIAcAAIAGACIAFAEQACADgBAEIAAAVIAzAAIAAAbg");
	this.shape_11.setTransform(87.4,-155.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAUCAQgFgCgFgEQgFgEgCgFQgCgGgBgGQAAAGgBAGQgEAFgEAEQgFAEgFACIgOABQgJAAgIgBIgMgGIgKgIIgHgJQgFgKgCgOIAAiNIAcAAIAACCQAAAMADAIQADAGAFADQADADAEAAIAGABIABAAQAIAAAEgDQAEgFACgEIADgLIABgHIAAgDIAAiCIAXAAIAACCIAAADIABAHIADALQACAEAEAFQAFADAHAAIACAAIAGgBQADAAAEgDQAEgDADgGQADgIAAgMIAAjHIAcAAIAADSQgCAOgFAKIgHAJIgJAIIgNAGQgIABgJAAg");
	this.shape_12.setTransform(84.6,-137.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAUCAQgFgCgFgEQgFgEgCgFQgCgGgBgGQAAAGgBAGQgDAFgFAEQgFAEgFACIgOABQgJAAgIgBIgNgGIgJgIIgHgJQgFgKgCgOIAAiNIAcAAIAACCQAAAMADAIQADAGAFADQADADAFAAIAFABIABAAQAIAAAEgDQAEgFACgEIADgLIABgHIAAgDIAAiCIAXAAIAACCIAAADIACAHIACALQADAEAEAFQAEADAHAAIABAAIAHgBQADAAAFgDQADgDADgGQADgIAAgMIAAjHIAcAAIAADSQgCAOgFAKIgHAJIgKAIIgMAGQgIABgJAAg");
	this.shape_13.setTransform(64,-137.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AARCdIAAkDIgCgHIgEgHIgGgHIgWAWIgbgkIARgRIAMASIAOgUQAIABAHADIALAHIAJAIIAFAKQAFALABAOIAAEDg");
	this.shape_14.setTransform(47.3,-140.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgFBfQgQAAgLgEQgLgFgIgGQgHgHgFgIIgGgRIgDgPIAAgJIAAgCIAAh0IAcAAIAAB0QAAAMADAIQADAIAFAFQAEAFAGADIALAFIAJABIADAAQALAAAIgDQAHgEAFgEQAFgGADgFIAEgMIACgJIAAgEIAAh0IAcAAIAAC7IgcAAIAAgaIgDAJIgFAHIgHAFIgIAEQgKADgMAAg");
	this.shape_15.setTransform(36,-133.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAVBfIAAiFQgBgIgDgGIgCgFIgEgFIgFgCIgHgBIgLABIgIADIgGAFIgCADIgTgUQAEgGAHgEIAPgIQAIgDAMAAIAFABIAKACIALAEQAGADAFAGQAGAHADAJQAEAJAAAPIAACFg");
	this.shape_16.setTransform(20.1,-133.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgBBgQgMAAgJgDIgOgHQgHgFgEgGIATgSIADADIAFAEIAIAEIALACIAGgCIAGgDIAEgFIACgFQADgGAAgIIAAhtIgZAAIAAgbIA1AAIAACIQAAANgDAKQgDAJgFAGQgGAGgGAEIgMAFIgKACIgEAAg");
	this.shape_17.setTransform(9,-133.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgBBgQgMAAgJgDIgOgHQgHgFgEgGIATgSIADADIAFAEIAIAEIALACIAGgCIAGgDIAEgFIACgFQADgGAAgIIAAhtIgZAAIAAgbIA1AAIAACIQAAANgDAKQgDAJgFAGQgGAGgGAEIgMAFIgKACIgEAAg");
	this.shape_18.setTransform(-2.2,-133.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgjAUQgFAAgCgCIgEgEIgBgGIAAgbIAaAAIAAAOIBGAAIAAAZg");
	this.shape_19.setTransform(-12.3,-147.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAuBfIAAg3QAAgJgEgFQgEgGgFgDIgMgGIgMgDIgMgBIgDAAIgHABIgKADIgJAFIgIAJQgEAFgCAIIAAAFQAAAGADAEQADAEAFADIAKAEIAMADIAJACIAHAAIACAAIAAAaIgeAAQgKAAgJgEQgJgFgGgHQgHgHgDgKQgEgJAAgKQAAgLAFgLQAEgLALgKIANgJIAOgGIANgEIANAAIASABIAOAEIAOAGIAAgLQAAgIgCgIIgFgLIgIgJIgIgFQgKgFgNAAQgLAAgHADQgIAFgFAFQgFAGgDAHIgEALIgeAAQACgQAEgLQAFgKAIgIQAHgHAIgEIAQgHIAOgCIAIgBIABAAQARAAANAFQAMAFAJAGQAIAIAFAIIAGARIAEAPIAAAKIAAABIAAByg");
	this.shape_20.setTransform(-15.7,-133.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAUBeQgFgCgFgEQgFgEgCgFQgDgFAAgHIAAAAIAAAAQAAAHgCAFQgCAFgFAEQgFAEgFACIgOABQgJAAgIgBIgMgGIgKgIIgHgJQgFgKgCgOIAAiNIAcAAIAACCQAAAMADAIQADAGAEADQAEADAEAAIAGABIABAAQAHAAAFgDQAEgFACgEIADgLIABgHIAAgDIAAiCIAXAAIAACCIAAADIABAHIADALQACAEAEAFQAFADAHAAIACAAIAGgBQAEAAADgDQAEgDADgGQADgIAAgMIAAiCIAcAAIAACNQgCAOgFAKIgHAJIgKAIIgMAGQgIABgJAAg");
	this.shape_21.setTransform(-34.2,-133.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXBeQgKgDgIgFQgIgFgFgGIgJgMQgJgPgBgTIAAglIA1AAIAAAZIgZAAIAAAMQAAAHACAGIAGALIAHAHIAIAFQAKAEAMABQANgBAKgEIAIgFIAHgHIAGgLQABgGAAgHIAAg4QAAgIgBgFIgGgKIgHgHIgIgFQgKgEgNgBIgBAAIgJABIgNAEQgGADgGAGQgFAFgDAJIgdAAIAEgKIAFgNIAKgMQAFgGAIgFQAIgEAJgDQALgDAMAAQAOAAAKADQAKADAIAFQAHAEAGAHIAJAMQAIAPACATIAAA4QgCATgIAPIgJAMQgGAGgHAFQgIAFgKADQgKACgOAAQgMAAgLgCg");
	this.shape_22.setTransform(-53,-133.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag5AXIAAgaIAvAAIAAgTIAaAAIAAATIAPAAIAAgTIAbAAIAAAtg");
	this.shape_23.setTransform(-70.2,-147.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAuBfIAAg3QAAgJgEgFQgDgGgGgDIgMgGIgMgDIgMgBIgDAAIgIABIgJADIgJAFIgIAJQgEAFgBAIIgBAFQAAAGADAEQADAEAFADIAKAEIALADIALACIAFAAIADAAIAAAaIgfAAQgKAAgIgEQgJgFgHgHQgGgHgEgKQgDgJAAgKQAAgLAEgLQAFgLALgKIAOgJIANgGIAOgEIAMAAIASABIAPAEIANAGIAAgLQAAgIgCgIIgFgLIgHgJIgJgFQgKgFgNAAQgKAAgIADQgIAFgFAFQgFAGgDAHIgEALIgdAAQAAgQAGgLQAFgKAHgIQAHgHAIgEIAQgHIAOgCIAJgBIAAAAQARAAANAFQANAFAIAGQAIAIAEAIIAIARIACAPIABAKIAAABIAAByg");
	this.shape_24.setTransform(-70.6,-133.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAsBeIAAhRIgCgJIgCgHIgFgIIgHgFQgEgDgFAAIg+AAIAABxIgcAAIAAi8IAcAAIAAAxIA+AAQAFgBAEgDIAHgHQAEgEACgJIAAgZIAcAAIAAAcIgBAHIgDAJIgFAKIgHAIIAJAMIAHAOQADAIAAALIAABRg");
	this.shape_25.setTransform(-87.8,-133.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgNBeIAAi7IAbAAIAAC7g");
	this.shape_26.setTransform(-100.1,-133.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgQBzQgRAAgMgEQgMgDgIgGQgIgGgFgHIgHgNIgEgNIAAgKQAAgOAEgJQAFgJAHgGIAMgIIAGgEIgMgDIgJgHIgGgIIgFgJQgEgLgBgMQAAgNACgJIAHgRIAJgMIAKgIQAMgHAQgBIAtAAIAAAgIgaAAIgOACIgKAEIgHAFIgFAGQgEAIgBAKQAAAIADAGIAHAKIAKAGIAJADIAIABIAEAAIAaAAIAAAfIgaAAIgQADIgKAEIgGAHIgEAHIgBAGIAAADQAAAJACAGIAGAKIAIAFIAJAEIAHABIAFAAIABAAIAoAAQAMAAAHgFQAHgFAEgGQAEgHABgKIAAikIAiAAIAACkQAAAPgEAKQgEALgHAHQgHAHgIAEIgPAHIgOADIgIABg");
	this.shape_27.setTransform(32.7,57.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVByQgLgEgIgFQgIgGgGgIIgJgPIAGgDIAIgEIAIgFIAGgDQAEAIAHAGIANAHQAIADAHAAQAMgBAKgGIAIgGIAGgIIAFgLIACgOIAAhLQgBgNgFgKIgFgJIgHgGIgLgGIgOgCIgSACQgIACgGAFQgFADgFAIIgIAQIgiAAQABgPAGgNQAGgOAKgJQALgJAPgFQAPgFAUAAIABAAIABAAIAJAAIAPADIARAIQAJAGAIAJQAHAIAFANQAFAOAAATIAABLQgBAWgIARIgKAOQgFAIgIAFQgIAGgLADQgLADgPAAQgOAAgLgDg");
	this.shape_28.setTransform(12.6,57.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgPAhIAAhAIAfAAIAABAg");
	this.shape_29.setTransform(-1.8,31.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgHB0QgTAAgOgFQgNgFgJgJQgJgIgGgKIgHgUIgEgSIAAgMIAAgDIAAiNIAiAAIAACNQAAAPAEAKQAEAKAFAGQAGAHAHADIANAFIALACIAFAAQANAAAJgEQAKgEAFgGQAHgGACgHIAGgOIACgLIAAgGIAAiNIAiAAIAADkIgiAAIAAggIgDALIgGAJIgJAGIgKAEQgMAEgOABg");
	this.shape_30.setTransform(-7.3,57.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AA2BzIAAhjIgCgLIgEgJIgFgJIgIgIQgGgDgHAAIhLAAIAACLIgiAAIAAjlIAiAAIAAA7IBLAAQAHgBAFgEIAJgIQAFgGACgKIAAgeIAiAAIAAAiIgBAIIgEALIgGALIgJALIAMAPIAIARQAEAKAAANIAABjg");
	this.shape_31.setTransform(-29.3,57.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C0212F").s().p("AhbGlQgpgLgegTQgegSgVgYIgigwQghg6gHhLIAAg8IAEgcIAHgdIAMglIADgHIAIgSIATgpIAjhMIA4h7IBTi1IBrAAIiBEfQAmgJAsAAQA0AAAoAMQApAKAdAUQAeASAWAYIAiAwQAhA5AGBJIAAA8QgGBLghA6IgiAwQgWAYgeASQgdATgpALQgoAMg0AAQg0AAgngMgAhYgfIggASIgdAcIgVApQgHAWAAAeIAAA8QAAAdAHAWIAVAmIAdAbIAgASQAnARAxACQAygCAmgRIAigSIAcgbIAUgmQAIgWAAgdIAAg8QAAgegIgWIgUgpIgcgcIgigSQgmgSgygCQgxACgnASg");
	this.shape_32.setTransform(36.2,-25.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C0212F").s().p("Aj0GvIAAhnQBqhsBUhjIBFhVIA+hUIArhNQAPgjAAgZQAAgcgKgYQgLgZgSgTQgTgSgYgKQgZgLgcAAQgbAAgZALQgYAKgSASQgTATgKAZQgLAYAAAcIhuAAQAAgyATgtQATgtAighQAgghAugTQAsgUAyAAQAzAAAtAUQAsATAiAhQAhAhATAtQATAtAAAyQAAAmgKAjQgLAigTAdIh6CkIgxBBIgvA+IgpAzIgfAjIFKAAIAABng");
	this.shape_33.setTransform(-30.3,-26.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#7CB44B").s().p("AjuOxIthAAQidAAhwhwQhwhwAAidIAA8qQAAidBwhvQBwhwCdAAMAigAAAQCdAABvBwQBwBvAACdIAAcqQAACdhwBwQhvBwidAAIrlAAIkuLCg");
	this.shape_34.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148,-165.1,297,330.2);


(lib.Tween29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAuBfIAAh9QAAgMgEgIQgEgJgHgEIgfATIgdgTQgHAEgFAJQgEAIAAAMIAABCQABAJADAIIAEAGIAGAEIAIAEIAKACIAUAAIAAAaIglAAQgMgBgJgGIgIgHIgHgJIgFgNIgCgTIAAhRQACgTALgOQALgOARgGIAgAUIAhgUQARAGALAOQAGAHADAIQADAJABAJIAACIg");
	this.shape.setTransform(65.9,-112.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzAOIAAgaIBnAAIAAAag");
	this.shape_1.setTransform(48.7,-125.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAuBfIAAg4QAAgHgEgGQgDgFgGgEIgMgGIgMgDIgMgBIgDAAIgIABIgJADIgJAGIgIAIQgEAGgBAHIgBAFQAAAGADAEQADAEAFADIAKAEIALADIAKACIAGAAIADAAIAAAaIgeAAQgLAAgIgEQgJgFgHgGQgGgIgEgKQgDgJAAgKQAAgLAEgLQAFgKALgLIANgJIAOgGIANgDIANgBIASABIAPAEIANAGIAAgLQAAgIgCgIIgFgLIgIgIIgIgGQgKgFgNAAQgKAAgIADQgIAEgFAGQgGAGgCAHIgEALIgdAAQABgQAEgLQAGgKAHgIQAHgHAIgEIAQgGIAOgDIAJgBIAAAAQASAAAMAFQAMAFAJAGQAIAIAFAIIAHARIACAPIABAKIAAABIAAByg");
	this.shape_2.setTransform(48.1,-112.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVBeQgHgCgEgEQgFgEgCgFQgDgFAAgHQAAAHgCAFQgCAFgFAEQgFAEgGACIgNACQgJAAgIgCIgMgGIgKgIIgGgJQgHgLgBgNIAAiNIAtAAIAAAaIgRAAIAABoQAAANADAGQADAHAEADQAEADAEABIAGAAIABAAQAIAAAEgDQAEgFACgEIADgLIABgHIAAgDIAAiCIAXAAIAACCIAAADIABAHIADALQACAEAFAFQAEADAHAAIACAAIAGAAQAEgBADgDQAEgDADgHQADgGAAgNIAAiCIAcAAIAACNQgBANgHALIgGAJIgKAIIgNAGQgHACgJAAg");
	this.shape_3.setTransform(29.7,-112.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdBcQgOgFgIgEQgLgHgHgIIATgSIAJAHIAMAHIAQAEIAQACQAIAAAIgDQAHgCAFgDQAFgFADgFQACgFAAgIQAAgGgCgEIgGgHIgGgDIgFgCIgGgBIgLgCIgLgCIgKgBIgGgCIgJgEIgJgFIgJgIQgEgGgDgIQgCgHAAgLQAAgPAGgLQAFgKAJgHQAIgGAMgEQALgDAKAAQALAAAKADIARAGIAPAIIAOAKIgPAYIgNgIIgKgGIgKgEIgLgDIgIgBIgMABQgGABgEADQgFADgDAGQgCAFAAAIQAAAJAFAFQAEAFAIADIAQADIASADQAKACAIAFQAIAFAIAFQAGAIAEAIQAEAJgBAJQAAAQgEAKQgGALgJAHQgJAGgMAEQgNADgNAAQgSABgOgFg");
	this.shape_4.setTransform(11.3,-112.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVBfIAAiFQgBgIgCgGIgDgFIgEgFIgGgCIgGgBIgMABIgIADIgEAFIgDADIgUgUQAFgGAHgEIAOgHQAJgEAMAAIAEABIAKACIAMAEQAGAEAGAFQAFAHADAJQADAJABAPIAACFg");
	this.shape_5.setTransform(-2.6,-112.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAuBfIAAh0QAAgLgDgHQgDgJgFgFQgFgEgFgDIgLgEIgJgBIgFAAQgIAAgGABIgLAFIgIAHIgGAJQgFAJgBANIAAB0IgcAAIAAiPQAGgLAHgIQAHgIAHgFIAPgHIANgEIAKgCIAHgBIABAAQAOABAKADQAKADAIAFQAIAFAGAFIAIANIAGANIADALIABAJIAAAFIAAB0g");
	this.shape_6.setTransform(-16.4,-112.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAuBfIAAh0QAAgLgDgHQgDgJgFgFQgFgEgFgDIgLgEIgJgBIgFAAQgIAAgGABIgLAFIgIAHIgGAJQgFAJgBANIAAB0IgcAAIAAiPQAGgLAHgIQAHgIAHgFIAPgHIANgEIAKgCIAHgBIABAAQAOABAKADQAKADAIAFQAIAFAGAFIAIANIAGANIADALIABAJIAAAFIAAB0g");
	this.shape_7.setTransform(-34.7,-112.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVBfIAAiFQgBgIgCgGIgDgFIgEgFIgGgCIgGgBIgMABIgIADIgEAFIgDADIgUgUQAFgGAHgEIAOgHQAJgEAMAAIAEABIAKACIAMAEQAGAEAGAFQAFAHADAJQADAJAAAPIAACFg");
	this.shape_8.setTransform(-50.7,-112.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAuBfIAAg0IgGgKQgDgGgFgCIgKgFIgNgCIgJAAIgHACIAAgcQAHgBAJAAQAUAAARAJIAAgTQgCgNgFgLIgGgIIgIgIIgLgEQgGgCgIAAQgMAAgKAFIgIAGIgIAIIgFALQgCAIAAAIIgcAAIAAgCIABgJIADgPIAHgRQAEgJAIgHQAJgGAMgFQAMgFARAAIACAAIAJABIAOADIARAHQAJAEAHAIQAHAIAEAMQAFANAAARIAAB0g");
	this.shape_9.setTransform(-64.5,-112.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAUBfIAAiFQAAgIgCgGIgDgFIgEgFIgGgCIgFgBIgNABIgIADIgEAFIgDADIgUgUQAFgGAHgEIAOgIQAJgDANAAIADABIAKACIAMAEQAGADAGAGQAEAHAEAJQAEAJgBAPIAACFg");
	this.shape_10.setTransform(99.3,-133.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgfAfIAAgjIgOAAIAAgaIAcAAIAGACIAFAEQACADgBAEIAAAVIAzAAIAAAbg");
	this.shape_11.setTransform(87.4,-155.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAUCAQgFgCgFgEQgFgEgCgFQgCgGgBgGQAAAGgBAGQgEAFgEAEQgFAEgFACIgOABQgJAAgIgBIgMgGIgKgIIgHgJQgFgKgCgOIAAiNIAcAAIAACCQAAAMADAIQADAGAFADQADADAEAAIAGABIABAAQAIAAAEgDQAEgFACgEIADgLIABgHIAAgDIAAiCIAXAAIAACCIAAADIABAHIADALQACAEAEAFQAFADAHAAIACAAIAGgBQADAAAEgDQAEgDADgGQADgIAAgMIAAjHIAcAAIAADSQgCAOgFAKIgHAJIgJAIIgNAGQgIABgJAAg");
	this.shape_12.setTransform(84.6,-137.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAUCAQgFgCgFgEQgFgEgCgFQgCgGgBgGQAAAGgBAGQgDAFgFAEQgFAEgFACIgOABQgJAAgIgBIgNgGIgJgIIgHgJQgFgKgCgOIAAiNIAcAAIAACCQAAAMADAIQADAGAFADQADADAFAAIAFABIABAAQAIAAAEgDQAEgFACgEIADgLIABgHIAAgDIAAiCIAXAAIAACCIAAADIACAHIACALQADAEAEAFQAEADAHAAIABAAIAHgBQADAAAFgDQADgDADgGQADgIAAgMIAAjHIAcAAIAADSQgCAOgFAKIgHAJIgKAIIgMAGQgIABgJAAg");
	this.shape_13.setTransform(64,-137.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AARCdIAAkDIgCgHIgEgHIgGgHIgWAWIgbgkIARgRIAMASIAOgUQAIABAHADIALAHIAJAIIAFAKQAFALABAOIAAEDg");
	this.shape_14.setTransform(47.3,-140.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgFBfQgQAAgLgEQgLgFgIgGQgHgHgFgIIgGgRIgDgPIAAgJIAAgCIAAh0IAcAAIAAB0QAAAMADAIQADAIAFAFQAEAFAGADIALAFIAJABIADAAQALAAAIgDQAHgEAFgEQAFgGADgFIAEgMIACgJIAAgEIAAh0IAcAAIAAC7IgcAAIAAgaIgDAJIgFAHIgHAFIgIAEQgKADgMAAg");
	this.shape_15.setTransform(36,-133.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAVBfIAAiFQgBgIgDgGIgCgFIgEgFIgFgCIgHgBIgLABIgIADIgGAFIgCADIgTgUQAEgGAHgEIAPgIQAIgDAMAAIAFABIAKACIALAEQAGADAFAGQAGAHADAJQAEAJAAAPIAACFg");
	this.shape_16.setTransform(20.1,-133.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgBBgQgMAAgJgDIgOgHQgHgFgEgGIATgSIADADIAFAEIAIAEIALACIAGgCIAGgDIAEgFIACgFQADgGAAgIIAAhtIgZAAIAAgbIA1AAIAACIQAAANgDAKQgDAJgFAGQgGAGgGAEIgMAFIgKACIgEAAg");
	this.shape_17.setTransform(9,-133.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgBBgQgMAAgJgDIgOgHQgHgFgEgGIATgSIADADIAFAEIAIAEIALACIAGgCIAGgDIAEgFIACgFQADgGAAgIIAAhtIgZAAIAAgbIA1AAIAACIQAAANgDAKQgDAJgFAGQgGAGgGAEIgMAFIgKACIgEAAg");
	this.shape_18.setTransform(-2.2,-133.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgjAUQgFAAgCgCIgEgEIgBgGIAAgbIAaAAIAAAOIBGAAIAAAZg");
	this.shape_19.setTransform(-12.3,-147.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAuBfIAAg3QAAgJgEgFQgEgGgFgDIgMgGIgMgDIgMgBIgDAAIgHABIgKADIgJAFIgIAJQgEAFgCAIIAAAFQAAAGADAEQADAEAFADIAKAEIAMADIAJACIAHAAIACAAIAAAaIgeAAQgKAAgJgEQgJgFgGgHQgHgHgDgKQgEgJAAgKQAAgLAFgLQAEgLALgKIANgJIAOgGIANgEIANAAIASABIAOAEIAOAGIAAgLQAAgIgCgIIgFgLIgIgJIgIgFQgKgFgNAAQgLAAgHADQgIAFgFAFQgFAGgDAHIgEALIgeAAQACgQAEgLQAFgKAIgIQAHgHAIgEIAQgHIAOgCIAIgBIABAAQARAAANAFQAMAFAJAGQAIAIAFAIIAGARIAEAPIAAAKIAAABIAAByg");
	this.shape_20.setTransform(-15.7,-133.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAUBeQgFgCgFgEQgFgEgCgFQgDgFAAgHIAAAAIAAAAQAAAHgCAFQgCAFgFAEQgFAEgFACIgOABQgJAAgIgBIgMgGIgKgIIgHgJQgFgKgCgOIAAiNIAcAAIAACCQAAAMADAIQADAGAEADQAEADAEAAIAGABIABAAQAHAAAFgDQAEgFACgEIADgLIABgHIAAgDIAAiCIAXAAIAACCIAAADIABAHIADALQACAEAEAFQAFADAHAAIACAAIAGgBQAEAAADgDQAEgDADgGQADgIAAgMIAAiCIAcAAIAACNQgCAOgFAKIgHAJIgKAIIgMAGQgIABgJAAg");
	this.shape_21.setTransform(-34.2,-133.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXBeQgKgDgIgFQgIgFgFgGIgJgMQgJgPgBgTIAAglIA1AAIAAAZIgZAAIAAAMQAAAHACAGIAGALIAHAHIAIAFQAKAEAMABQANgBAKgEIAIgFIAHgHIAGgLQABgGAAgHIAAg4QAAgIgBgFIgGgKIgHgHIgIgFQgKgEgNgBIgBAAIgJABIgNAEQgGADgGAGQgFAFgDAJIgdAAIAEgKIAFgNIAKgMQAFgGAIgFQAIgEAJgDQALgDAMAAQAOAAAKADQAKADAIAFQAHAEAGAHIAJAMQAIAPACATIAAA4QgCATgIAPIgJAMQgGAGgHAFQgIAFgKADQgKACgOAAQgMAAgLgCg");
	this.shape_22.setTransform(-53,-133.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag5AXIAAgaIAvAAIAAgTIAaAAIAAATIAPAAIAAgTIAbAAIAAAtg");
	this.shape_23.setTransform(-70.2,-147.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAuBfIAAg3QAAgJgEgFQgDgGgGgDIgMgGIgMgDIgMgBIgDAAIgIABIgJADIgJAFIgIAJQgEAFgBAIIgBAFQAAAGADAEQADAEAFADIAKAEIALADIALACIAFAAIADAAIAAAaIgfAAQgKAAgIgEQgJgFgHgHQgGgHgEgKQgDgJAAgKQAAgLAEgLQAFgLALgKIAOgJIANgGIAOgEIAMAAIASABIAPAEIANAGIAAgLQAAgIgCgIIgFgLIgHgJIgJgFQgKgFgNAAQgKAAgIADQgIAFgFAFQgFAGgDAHIgEALIgdAAQAAgQAGgLQAFgKAHgIQAHgHAIgEIAQgHIAOgCIAJgBIAAAAQARAAANAFQANAFAIAGQAIAIAEAIIAIARIACAPIABAKIAAABIAAByg");
	this.shape_24.setTransform(-70.6,-133.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAsBeIAAhRIgCgJIgCgHIgFgIIgHgFQgEgDgFAAIg+AAIAABxIgcAAIAAi8IAcAAIAAAxIA+AAQAFgBAEgDIAHgHQAEgEACgJIAAgZIAcAAIAAAcIgBAHIgDAJIgFAKIgHAIIAJAMIAHAOQADAIAAALIAABRg");
	this.shape_25.setTransform(-87.8,-133.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgNBeIAAi7IAbAAIAAC7g");
	this.shape_26.setTransform(-100.1,-133.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgQBzQgRAAgMgEQgMgDgIgGQgIgGgFgHIgHgNIgEgNIAAgKQAAgOAEgJQAFgJAHgGIAMgIIAGgEIgMgDIgJgHIgGgIIgFgJQgEgLgBgMQAAgNACgJIAHgRIAJgMIAKgIQAMgHAQgBIAtAAIAAAgIgaAAIgOACIgKAEIgHAFIgFAGQgEAIgBAKQAAAIADAGIAHAKIAKAGIAJADIAIABIAEAAIAaAAIAAAfIgaAAIgQADIgKAEIgGAHIgEAHIgBAGIAAADQAAAJACAGIAGAKIAIAFIAJAEIAHABIAFAAIABAAIAoAAQAMAAAHgFQAHgFAEgGQAEgHABgKIAAikIAiAAIAACkQAAAPgEAKQgEALgHAHQgHAHgIAEIgPAHIgOADIgIABg");
	this.shape_27.setTransform(32.7,57.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVByQgLgEgIgFQgIgGgGgIIgJgPIAGgDIAIgEIAIgFIAGgDQAEAIAHAGIANAHQAIADAHAAQAMgBAKgGIAIgGIAGgIIAFgLIACgOIAAhLQgBgNgFgKIgFgJIgHgGIgLgGIgOgCIgSACQgIACgGAFQgFADgFAIIgIAQIgiAAQABgPAGgNQAGgOAKgJQALgJAPgFQAPgFAUAAIABAAIABAAIAJAAIAPADIARAIQAJAGAIAJQAHAIAFANQAFAOAAATIAABLQgBAWgIARIgKAOQgFAIgIAFQgIAGgLADQgLADgPAAQgOAAgLgDg");
	this.shape_28.setTransform(12.6,57.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgPAhIAAhAIAfAAIAABAg");
	this.shape_29.setTransform(-1.8,31.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgHB0QgTAAgOgFQgNgFgJgJQgJgIgGgKIgHgUIgEgSIAAgMIAAgDIAAiNIAiAAIAACNQAAAPAEAKQAEAKAFAGQAGAHAHADIANAFIALACIAFAAQANAAAJgEQAKgEAFgGQAHgGACgHIAGgOIACgLIAAgGIAAiNIAiAAIAADkIgiAAIAAggIgDALIgGAJIgJAGIgKAEQgMAEgOABg");
	this.shape_30.setTransform(-7.3,57.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AA2BzIAAhjIgCgLIgEgJIgFgJIgIgIQgGgDgHAAIhLAAIAACLIgiAAIAAjlIAiAAIAAA7IBLAAQAHgBAFgEIAJgIQAFgGACgKIAAgeIAiAAIAAAiIgBAIIgEALIgGALIgJALIAMAPIAIARQAEAKAAANIAABjg");
	this.shape_31.setTransform(-29.3,57.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C0212F").s().p("AhfG1QgqgMgfgUQgfgTgVgZIgkgyQgig7gHhNIAAg/IAEgdIAHgeIAMgmIAEgIIAIgSIAUgrIAkhOIA6iAIBWi7IBvAAIiHEqQAogKAuAAQA1AAAqAMQAqALAfAUQAfATAWAZIAkAxQAiA7AHBMIAAA/QgHBNgiA7IgkAyQgWAZgfATQgfAUgqAMQgqALg1AAQg2AAgpgLgAhbghIgiAUIgdAdIgWAqQgHAXAAAfIAAA/QAAAdAHAXIAWAoIAdAcIAiASQAoASAzACQAzgCApgSIAigSIAdgcIAWgoQAHgXAAgdIAAg/QAAgfgHgXIgWgqIgdgdIgigUQgpgSgzgCQgzACgoASg");
	this.shape_32.setTransform(40.4,-32.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C0212F").s().p("Aj9G+IAAhqQBvhxBWhmIBHhYIBAhXIAthPQARglAAgaQAAgdgLgZQgLgZgTgUQgTgTgagKQgZgMgdAAQgdAAgZAMQgZAKgUATQgTAUgKAZQgMAZAAAdIhyAAQAAg0AUguQAUgvAjgiQAigiAugVQAugTA0AAQA1AAAuATQAuAVAjAiQAiAiAUAvQAUAuAAA0QAAAogLAjQgLAkgUAfIh+CpIgzBDIgwBAIgrA1IggAlIFWAAIAABqg");
	this.shape_33.setTransform(-28.5,-32.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#7CB44B").s().p("AjuOxIthAAQidAAhwhwQhwhwAAidIAA8qQAAidBwhvQBwhwCdAAMAigAAAQCdAABvBwQBwBvAACdIAAcqQAACdhwBwQhvBwidAAIrlAAIkuLCg");
	this.shape_34.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148,-165.1,297,330.2);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape.setTransform(99.3,-81.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgYAYIAAgbIgLAAIAAgUIAWAAIAFABIADADQACACAAAEIAAARIAnAAIAAAUg");
	this.shape_1.setTransform(90,-98.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AAQBjQgFgBgDgDQgEgDgCgEQgCgEAAgGQAAAGgBAEQgCAEgEADIgIAEIgKACQgIAAgFgCIgKgEIgIgGIgFgHQgFgIgBgLIAAhuIAWAAIAABmQAAAJADAFQACAGADACIAGADIAFAAIABAAQAGAAADgDQADgDACgEIACgIIAAgGIAAgBIAAhmIATAAIAABmIAAABIAAAGIACAIQACAEAEADQADADAGAAIABAAIAEAAIAGgDQADgCADgGQACgFAAgJIAAibIAWAAIAACjQgBALgFAIIgFAHIgIAGIgKAEQgFACgIAAg");
	this.shape_2.setTransform(87.8,-83.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AAQBjQgFgBgDgDQgEgDgCgEQgCgEAAgGQAAAGgBAEQgCAEgEADIgIAEIgKACQgIAAgFgCIgKgEIgIgGIgFgHQgFgIgBgLIAAhuIAWAAIAABmQAAAJADAFQACAGADACIAGADIAFAAIABAAQAGAAADgDQADgDACgEIACgIIAAgGIAAgBIAAhmIATAAIAABmIAAABIAAAGIACAIQACAEAEADQADADAGAAIABAAIAEAAIAGgDQADgCADgGQACgFAAgJIAAibIAWAAIAACjQgBALgFAIIgFAHIgIAGIgKAEQgFACgIAAg");
	this.shape_3.setTransform(71.7,-83.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AANB6IAAjJIgBgGIgDgFIgFgGIgRASIgVgdIAOgMIAJANIAKgPQAGAAAGADIAJAFIAGAHIAFAHQAEAJAAALIAADJg");
	this.shape_4.setTransform(58.8,-86);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgBBLQgJgBgGgCIgMgFQgFgEgEgFIAPgOIACADIAFADIAGADIAIABIAFgBIAFgDIADgDIABgEQACgFAAgHIAAhUIgTAAIAAgVIAqAAIAABpQgBALgCAHQgCAIgEAEIgJAIIgKAEIgHACIgEAAg");
	this.shape_5.setTransform(52.3,-81);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgWBIQgLgEgHgEQgIgFgGgGIAPgOIAHAFIAKAFIAMAEIAMABQAHAAAFgBQAGgCAEgDQAEgDACgFQACgEAAgFQAAgFgCgEIgEgFIgFgDIgEgBIgEAAIgJgCIgJgCIgHgBIgFgBIgGgDIgIgEIgHgGQgDgFgBgFQgCgGgBgIQABgMAEgJQAEgIAGgFQAIgFAIgDQAIgCAJAAQAIAAAIACIANAFIALAGIAMAHIgNATIgJgGIgIgEIgIgEIgIgCIgGgBIgJABQgFABgDACQgEADgCAEQgDAEABAHQAAAGADAEQAEAEAGACIAMADIAOACQAHACAHADQAHAEAFAEQAFAGADAGQADAHABAIQAAALgFAJQgEAIgHAFQgHAGgKACQgJADgKAAQgOAAgLgDg");
	this.shape_6.setTransform(42.3,-81);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgTB6IAAiTQAAgFgCgEIgFgIIgFgJIgHgIIgFgJQgCgFAAgFIABgOQACgHAEgHQAEgGAHgFQAIgEAKAAIA3AAIAAAUIgxAAQgGABgEACIgEADIgDAEIgCAGIgBAHQAAAGACADIAEAHIAIAIIAJANIAAAFIACAGIABAIIAACQg");
	this.shape_7.setTransform(35.5,-86);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AAABLQgKgBgGgCIgMgFQgFgEgDgFIAOgOIADADIADADIAHADIAJABIAEgBIAFgDIACgDIACgEQACgFABgHIAAhUIgUAAIAAgVIApAAIAABpQAAALgCAHQgDAIgEAEIgJAIIgJAEIgIACIgCAAg");
	this.shape_8.setTransform(26,-81);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgSBJQgIgDgGgDQgGgEgEgFIgHgJQgGgMgBgPIAAgdIApAAIAAAUIgUAAIAAAJQAAAGACAFIAEAIIAGAGIAGADQAIAEAJAAQAKAAAIgEIAGgDIAGgGIAEgIQABgFAAgGIAAgrQAAgGgBgEIgEgIIgGgGIgGgDQgIgEgKAAIgBAAIgHABIgJADQgFACgFAEQgEAFgCAHIgWAAIACgIIAFgKIAHgKQAEgEAGgEQAGgEAIgCQAIgCAJAAQAKAAAIACQAIADAGADIALAJIAHAJQAGAMABAPIAAArQgBAPgGAMIgHAJIgLAJQgGADgIADQgIACgKAAQgKAAgIgCg");
	this.shape_9.setTransform(15.7,-81);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AAABLQgLgBgKgDQgJgDgFgGQgGgFgEgGIgEgMIgCgKIAAgGQAAgHACgGIAFgKIAHgIIAHgHIAGgHQABgDABgEIAAgBIAAgCQAAgEgBgEIgFgGIgFgDIgHgCIgGgBIgEgBIgBAAIAAgVIAMAAQAJABAHACQAGACAFAEQADAEADAFIAEAJIABAJIABAHIAAABIgBABIAAAAIgCAIIgDAHIgFAHIgKAMIgFAJIgCAHIAAADQAAAHACAGQACAFADADIAHAFIAGADIAGABIACAAQAHAAAFgCQAFgCADgDIAFgHIAEgHIABgFIABgEIAAhiIAVAAIAABiQABAMgEAJQgDAJgGAFQgGAFgGAEIgMAFIgKACg");
	this.shape_10.setTransform(2.2,-81);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AAjBKIAAhhQAAgJgCgHQgEgGgFgEIgYAPIgXgPQgFAEgEAGQgDAHAAAJIAAAzQABAHACAGIAEAFIAEADIAGAEIAJABIAPAAIAAAUIgdAAQgKAAgGgGIgHgEIgFgIIgEgKIgBgPIAAg/QACgOAIgLQAIgLANgFIAZAQIAagQQANAFAIALQAFAFACAHQACAGABAHIAABqg");
	this.shape_11.setTransform(-11.2,-81.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgoAKIAAgUIBRAAIAAAUg");
	this.shape_12.setTransform(-24.5,-91.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AAjBKIAAgrQABgHgDgEQgDgEgFgDIgJgEIgJgDIgJgBIgCAAIgGABIgIACIgHAFIgGAGQgDAFgBAGIgBADQABAFACADIAGAGIAIADIAJACIAIABIAEAAIACAAIAAAVIgXAAQgJAAgGgEQgHgDgFgFQgFgGgDgIQgDgHABgIQgBgIAEgJQADgIAJgIIALgHIAKgFIAKgCIAKgBIAOABIALADIAKAFIAAgJQABgGgCgGIgEgJIgFgGIgHgFQgIgDgKgBQgIAAgGADQgGADgEAFQgEAEgCAFIgDAJIgXAAQAAgMAEgJQAEgIAGgGQAFgFAHgEIAMgEIALgCIAHgBIAAAAQAOAAAKAEQAJADAHAGQAGAGAEAGIAFANIACAMIABAHIAAABIAABZg");
	this.shape_13.setTransform(-25,-81.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AAQBJQgFgCgDgCQgEgDgCgEQgCgFAAgFIAAAAIAAAAQAAAFgBAFIgGAHIgIAEIgKABQgHAAgGgBIgKgFIgIgGIgFgHQgEgIgCgKIAAhuIAkAAIAAAUIgOAAIAABRQAAAKADAFQACAFADADIAGACIAFABIABAAQAGAAADgDIAFgHIACgIIABgGIAAgCIAAhlIASAAIAABlIAAACIAAAGIADAIQACAEADADQADADAGAAIABAAIAFgBIAGgCQADgDACgFQACgFAAgKIAAhlIAWAAIAABuQgBAKgFAIIgFAHIgHAGIgLAFQgFABgIAAg");
	this.shape_14.setTransform(-39.4,-81);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgWBIQgLgEgHgEQgIgFgGgGIAPgOIAHAFIAKAFIAMAEIAMABQAHAAAGgBQAFgCAEgDQAEgDACgFQACgEAAgFQAAgFgCgEIgEgFIgFgDIgEgBIgEAAIgJgCIgJgCIgHgBIgFgBIgGgDIgIgEIgHgGQgDgFgCgFQgCgGAAgIQAAgMAFgJQAEgIAHgFQAGgFAJgDQAJgCAIAAQAIAAAIACIANAFIALAGIALAHIgMATIgJgGIgIgEIgIgEIgIgCIgGgBIgKABQgEABgDACQgEADgCAEQgCAEAAAHQAAAGADAEQAEAEAGACIAMADIAOACQAHACAHADQAHAEAFAEQAFAGADAGQADAHAAAIQABALgFAJQgEAIgHAFQgHAGgJACQgKADgKAAQgPAAgKgDg");
	this.shape_15.setTransform(-53.7,-81);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape_16.setTransform(-64.5,-81.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AAjBKIAAhaQAAgJgCgGQgCgGgEgEQgEgEgEgCIgIgDIgHgBIgEAAQgGAAgFABIgJAEIgGAGIgEAGQgEAIgBAKIAABaIgWAAIAAhwQAFgIAFgGIALgKIAMgGIAKgDIAJgCIAEAAIABAAQALAAAHADQAJACAGAEQAGAEAEAFIAHAJIAEAKIADAJIABAHIAAAEIAABag");
	this.shape_17.setTransform(-75.2,-81.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AgDBKQgNAAgJgDQgIgEgGgFQgGgFgDgHIgFgNIgCgLIgBgHIAAgCIAAhaIAWAAIAABaQAAAJACAGQADAHADAEQAEAEAFACIAIADIAHACIACAAQAJAAAGgDQAFgCAFgEQADgEACgFIAEgJIABgHIAAgDIAAhaIAWAAIAACRIgWAAIAAgUIgCAHIgEAFIgFAEIgGADQgIADgKAAg");
	this.shape_18.setTransform(86,-116.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AgNBJQgHgDgFgDQgGgEgDgFIgGgJIAEgCIAFgDIAFgDIAEgDQADAGAEAEIAIAEQAFACAFAAQAHgBAGgDIAFgEIAFgFIADgHIABgJIAAgwQgBgIgDgGIgDgGIgFgEIgGgEIgJgBIgLABQgGACgDACIgHAHIgFALIgWAAQABgKAEgIQADgJAHgFQAHgGAKgEQAJgDANAAIAAAAIABAAIAGABIAJACIALAEQAGAEAFAGQAFAFADAJQADAIAAAMIAAAwQgBAOgFALIgGAJQgEAFgFADQgFAEgHACQgHACgJAAQgJAAgHgCg");
	this.shape_19.setTransform(72.6,-116.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AgSBIQgIgCgGgDQgFgFgFgEIgGgJQgHgMgBgPIAAhfIAVAAIAABfQABAGABAFIAEAIIAGAFIAGAEQAIADAJABQAKgBAIgDIAHgEIAFgFIAEgIQABgFABgGIAAhfIAVAAIAABfQgBAPgGAMIgHAJQgFAEgFAFQgHADgIACQgHACgLAAQgJAAgJgCg");
	this.shape_20.setTransform(59.9,-116.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AgTA8IgFgBIgDgEIgCgEIAAgWIAVAAIAAAKIAmAAIAAAVgAgTgcIgFgBIgDgEIgCgEIAAgWIAVAAIAAALIAmAAIAAAUg");
	this.shape_21.setTransform(49.2,-116.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AgWBIQgLgEgHgEQgIgFgFgGIAOgOIAHAFIAKAFIAMAEIAMABQAHAAAFgBQAGgCAEgDQAEgDACgFQACgEAAgFQAAgFgCgEIgEgFIgFgDIgEgBIgEAAIgJgCIgJgCIgIgBIgEgBIgGgDIgIgEIgHgGQgDgFgBgFQgCgGAAgIQAAgMADgJQAFgIAGgFQAIgFAIgDQAIgCAJAAQAJAAAHACIANAFIALAGIAMAHIgNATIgJgGIgIgEIgIgEIgIgCIgGgBIgJABQgFABgDACQgEADgCAEQgCAEgBAHQAAAGAEAEQAEAEAGACIAMADIAOACQAIACAGADQAHAEAFAEQAFAGADAGQAEAHAAAIQAAALgFAJQgEAIgHAFQgHAGgKACQgJADgKAAQgPAAgKgDg");
	this.shape_22.setTransform(39.3,-116.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AAjBKIAAhaQAAgJgBgGQgDgGgEgEQgEgEgEgCIgJgDIgGgBIgEAAQgFAAgGABIgIAEIgHAGIgEAGQgEAIgBAKIAABaIgVAAIAAhwQAEgIAGgGIAKgKIAMgGIAKgDIAIgCIAFAAIABAAQAKAAAIADQAJACAGAEQAGAEAEAFIAHAJIAEAKIACAJIACAHIAAAEIAABag");
	this.shape_23.setTransform(26.7,-116.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("AgEBKQgMAAgIgDQgKgEgFgFQgGgFgEgHIgEgNIgDgLIAAgHIAAgCIAAhaIAWAAIAABaQAAAJACAGQADAHAEAEQADAEAFACIAIADIAHACIADAAQAIAAAGgDQAFgCAEgEQAFgEABgFIADgJIACgHIAAgDIAAhaIAWAAIAACRIgWAAIAAgUIgCAHIgEAFIgGAEIgFADQgIADgJAAg");
	this.shape_24.setTransform(12.4,-116.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("AgDB6IAAiUIACgKIACgIIAFgHIAGgHIAGgGIADgGIABgEIABgFQAAgFgCgEQgCgFgDgCQgEgDgEgCIgIAAQgIgBgFACIgHADIgDAFIgSAAIgBAAIAAgBIABgFIACgFIAEgHQACgEAFgCQAFgDAHgBQAHgCAJAAQAKAAAHACQAHADAFADQAFAEACAEIAFAJIABAIIABAHIAAADIgBAGIgCAHIgEAIIgHAKIgGAJIgDAGIgCAGIAACUg");
	this.shape_25.setTransform(1.4,-121.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("AgKBJQgLAAgIgCQgIgCgFgEIgIgIIgEgJIgDgIIAAgGQAAgJADgGQADgGAEgDIAIgGIAFgCIgIgCIgGgEIgEgFIgEgGQgCgHgBgIQABgIABgGIAEgLIAFgHIAHgFQAIgFAKAAIAcAAIAAAUIgQAAIgJABIgGADIgFADIgCAEQgDAFAAAGQAAAGABADIAEAHIAHADIAGACIAEABIADAAIAQAAIAAAUIgQAAIgKABIgGADIgFAEIgBAFIgBAEIAAACQgBAFACAEIAEAGIAFAEIAGACIAEABIADAAIABAAIAZAAQAIAAAFgDIAGgIQACgEACgGIAAhoIAVAAIAABoQAAAJgDAHQgCAHgFAEQgEAFgFADIgKAEIgJACIgFAAg");
	this.shape_26.setTransform(-8.8,-116.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("AgoARIAAgUIA8AAIAAgNIAVAAIAAAhg");
	this.shape_27.setTransform(-22.5,-127.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AAgBSIAAgrQAAgGgCgEQgDgFgFgDIgJgEIgKgDIgIgBIgDAAIgGABIgHACIgIAFIgFAHQgEAEgBAGIAAACIAAABQAAAFACADQADADADADIAIADIAJACIAIABIAFAAIACAAIAAAVIgYAAQgIAAgHgEQgHgDgFgFQgEgGgEgHQgCgIAAgIQAAgIADgJQAEgIAJgHIAKgIIALgFIAKgCIAKgBIAOACIAKACIALAEIAAgHQAAgHgCgGIgDgJIgGgGIgHgFQgHgDgKgBQgIAAgGADQgGADgFAFQgEAFgBAEIgEAJIgXAAQABgMAEgIQAEgJAFgGQAGgFAHgEIALgEIALgCIAHgBIABAAQAKAAALADQAFgBAGgCIAJgGQAFgEADgGIAHAHIADADIACACIACACIABABIgBACIgDAEIgDAEIgFAFIgEADIgEABIAHAMIAEAMIACAJIAAAGIAAACIAABYg");
	this.shape_28.setTransform(-21.9,-117.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("AgKBJIAAiRIAVAAIAACRg");
	this.shape_29.setTransform(-31.5,-116.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231F20").s().p("AAwBfIgLgFQgGgDgDgFIAPgSIACABIAEAEIAGADIAJABQAGAAAEgCQADgDACgEQACgEAAgFIAAgaIgCAHIgEAFIgGAEIgGACQgIADgIABIgFAAQgNAAgIgDQgJgEgGgFQgGgFgCgGIgFgOIgCgLIgBgGIAAgmQAAgIgCgGQgCgGgEgEQgEgEgEgCIgJgDIgHgBIgDgBQgHABgFABIgJAEIgGAGIgEAGQgEAIgBAJIAAAtQABAHACAGIADAEIAFAEIAGADIAIABIAQAAIAAAUIgdAAQgKAAgHgFIgGgFIgFgIIgEgKIgBgOIAAgDIAAhBQAEgJAFgGIALgKIAMgGIAKgEIAIgBIAFAAIACAAQAOAAAKAEQAJAFAHAFQAFAGAEAIIAFAMIACALIAAAFIAAAkQAAAIADAHQACAGAEAEQADAEAFADIAIACIAHACIAEAAQAIAAAGgCQAGgDAEgEQAEgEACgFIADgIIABgHIAAgDIAAhbIAWAAIAACXQAAAKgDAIQgCAHgEAEQgEAFgFADIgJAEIgIACIgEAAQgJAAgHgDg");
	this.shape_30.setTransform(-45.6,-114.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231F20").s().p("AgJAXQgDAAgDgDQgDgCAAgEIAAgTIgIAAIAAgRIARAAQAEAAACADIACACIABAEIAAATIAKAAIAAgcIARAAIAAAkQAAAEgCACQgDADgEAAg");
	this.shape_31.setTransform(-62.1,-105.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231F20").s().p("AAgBSIAAgrQAAgGgDgEQgDgFgEgDIgJgEIgKgDIgJgBIgCAAIgGABIgHACIgHAFIgHAHQgCAEgBAGIgBACIAAABQAAAFADADQABADAEADIAIADIAJACIAIABIAGAAIAAAAIAAAVIgYAAQgHAAgGgEQgHgDgGgFQgEgGgEgHQgDgIAAgIQAAgIAFgJQADgIAJgHIAKgIIAKgFIALgCIAKgBIANACIALACIALAEIAAgHQAAgHgCgGIgDgJIgGgGIgGgFQgJgDgIgBQgKAAgFADQgHADgDAFQgFAFgCAEIgDAJIgXAAQABgMAEgIQAEgJAGgGQAFgFAGgEIAMgEIAMgCIAGgBIACAAQAJAAALADQAFgBAFgCIAKgGQAEgEAEgGIAHAHIADADIACACIADACIABABIgBACIgEAEIgDAEIgFAFIgEADIgDABIAGAMIAEAMIACAJIAAAGIAAACIAABYg");
	this.shape_32.setTransform(-63.9,-117.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#231F20").s().p("AgQBzQgRAAgMgEQgMgDgIgGQgIgGgFgHIgHgNIgEgNIAAgKQAAgOAEgJQAFgJAHgGIAMgIIAGgEIgMgDIgJgHIgGgIIgFgJQgEgLgBgMQAAgNACgJIAHgRIAJgMIAKgIQAMgHAQgBIAtAAIAAAgIgaAAIgOACIgKAEIgHAFIgFAGQgEAIgBAKQAAAIADAGIAHAKIAKAGIAJADIAIABIAEAAIAaAAIAAAfIgaAAIgQADIgKAEIgGAHIgEAHIgBAGIAAADQAAAJACAGIAGAKIAIAFIAJAEIAHABIAFAAIABAAIAoAAQAMAAAHgFQAHgFAEgGQAEgHABgKIAAikIAiAAIAACkQAAAPgEAKQgEALgHAHQgHAHgIAEIgPAHIgOADIgIABg");
	this.shape_33.setTransform(46.7,85.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#231F20").s().p("AgVByQgLgEgIgGQgIgFgGgHIgJgQIAGgDIAIgFIAIgEIAGgDQAEAIAHAGIANAHQAIADAHAAQAMgCAKgFIAIgGIAGgIIAFgLIACgOIAAhLQgBgNgFgKIgFgJIgHgHIgLgFIgOgCIgSACQgIACgGAFQgFADgFAIIgIAQIgiAAQABgQAGgNQAGgNAKgJQALgJAPgFQAPgFAUAAIABAAIABAAIAJABIAPACIARAIQAJAFAIAKQAHAIAFANQAFAOAAATIAABLQgBAWgIARIgKAOQgFAIgIAFQgIAFgLAEQgLADgPAAQgOAAgLgDg");
	this.shape_34.setTransform(26.6,85.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#231F20").s().p("AgPAhIAAhBIAfAAIAABBg");
	this.shape_35.setTransform(12.2,59);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#231F20").s().p("AgGB0QgUAAgNgFQgOgFgJgJQgJgIgFgKIgIgUIgDgSIgBgMIAAgDIAAiNIAiAAIAACNQAAAPAEAKQADAKAHAGQAFAHAHADIANAFIALACIAEAAQAOAAAJgEQAJgEAHgGQAFgGAEgHIAEgOIACgLIABgGIAAiNIAiAAIAADkIgiAAIAAggIgDALIgHAJIgIAGIgKAEQgMAEgPABg");
	this.shape_36.setTransform(6.7,85.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#231F20").s().p("AA1BzIAAhkIgBgKIgDgJIgGgJIgJgIQgEgDgIAAIhLAAIAACLIgiAAIAAjlIAiAAIAAA6IBLAAQAGAAAGgEIAJgIQAEgFADgLIAAgeIAiAAIAAAiIgBAIIgEALIgGALIgJALIAMAPIAJARQADAJAAANIAABkg");
	this.shape_37.setTransform(-15.3,85.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C0212F").s().p("ABnGrIAAhsImeAAIAAhmIGeqDIBtAAIAAKDIBkAAIAABmIhkAAIAABsgAizDZIEaAAIAAm6g");
	this.shape_38.setTransform(42.6,-2.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C0212F").s().p("AiIGrIEkrvImkAAIAAhnIIRAAIAABnIkkLvg");
	this.shape_39.setTransform(-21.4,-2.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EBD638").s().p("AvWPzQgyg0gahCQgchFAAhJIAA8fQAAidBvhuQBuhvCeAAIZFAAQCdAABvBvQBvBuAACdIAAcfQAACchvBvQhvBvidAAI5FAAIghgBIoYFDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.7,-145.1,255.4,290.2);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape.setTransform(99.3,-89.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgYAYIAAgaIgLAAIAAgVIAWAAIAFACIADACQACADAAADIAAARIAnAAIAAAUg");
	this.shape_1.setTransform(90,-106.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AAQBjQgFgBgDgDQgEgDgCgEQgCgEAAgGQAAAGgBAEQgCAEgEADIgIAEIgKACQgIAAgFgCIgKgEIgIgGIgFgHQgFgIgBgLIAAhuIAWAAIAABmQAAAJADAFQACAGADACIAGADIAFAAIABAAQAGAAADgDQADgDACgEIACgIIAAgGIAAgBIAAhmIATAAIAABmIAAABIAAAGIACAIQACAEAEADQADADAGAAIABAAIAEAAIAGgDQADgCADgGQACgFAAgJIAAibIAWAAIAACjQgBALgFAIIgFAHIgIAGIgKAEQgFACgIAAg");
	this.shape_2.setTransform(87.8,-92);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AAQBjQgFgBgDgDQgEgDgCgEQgCgEAAgGQAAAGgBAEQgCAEgEADIgIAEIgKACQgIAAgFgCIgKgEIgIgGIgFgHQgFgIgBgLIAAhuIAWAAIAABmQAAAJADAFQACAGADACIAGADIAFAAIABAAQAGAAADgDQADgDACgEIACgIIAAgGIAAgBIAAhmIATAAIAABmIAAABIAAAGIACAIQACAEAEADQADADAGAAIABAAIAEAAIAGgDQADgCADgGQACgFAAgJIAAibIAWAAIAACjQgBALgFAIIgFAHIgIAGIgKAEQgFACgIAAg");
	this.shape_3.setTransform(71.7,-92);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AANB6IAAjJIgBgGIgDgFIgFgGIgRASIgVgdIAOgMIAJANIAKgPQAGAAAGADIAJAFIAGAHIAFAHQAEAJAAALIAADJg");
	this.shape_4.setTransform(58.8,-94.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgBBKQgJAAgGgCIgMgFQgFgEgEgEIAPgPIACACIAFAEIAGADIAIABIAFgBIAFgCIADgEIABgEQACgFAAgGIAAhVIgTAAIAAgUIAqAAIAABpQgBAKgCAIQgCAHgEAEIgJAIIgKAEIgHABIgEAAg");
	this.shape_5.setTransform(52.3,-89.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgWBIQgLgEgHgEQgIgFgGgGIAPgOIAHAFIAKAFIAMAEIAMABQAHAAAFgBQAGgCAEgDQAEgDACgFQACgEAAgFQAAgFgCgEIgEgFIgFgDIgEgBIgEAAIgJgCIgJgCIgHgBIgFgBIgGgDIgIgEIgHgGQgDgFgBgFQgCgGgBgIQABgMAEgJQAEgIAGgFQAIgFAIgDQAIgCAJAAQAIAAAIACIANAFIALAGIAMAHIgNATIgJgGIgIgEIgIgEIgIgCIgGgBIgJABQgFABgDACQgEADgCAEQgDAEABAHQAAAGADAEQAEAEAGACIAMADIAOACQAHACAHADQAHAEAFAEQAFAGADAGQADAHABAIQAAALgFAJQgEAIgHAFQgHAGgKACQgJADgKAAQgOAAgLgDg");
	this.shape_6.setTransform(42.3,-89.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgTB6IAAiTQAAgFgCgEIgFgIIgFgJIgHgIIgFgJQgCgFAAgFIABgOQACgHAEgHQAEgGAHgFQAIgEAKAAIA3AAIAAAUIgxAAQgGABgEACIgEADIgDAEIgCAGIgBAHQAAAGACADIAEAHIAIAIIAJANIAAAFIACAGIABAIIAACQg");
	this.shape_7.setTransform(35.5,-94.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AAABKQgKAAgGgCIgMgFQgFgEgDgEIAOgPIADACIADAEIAHADIAJABIAEgBIAFgCIACgEIACgEQACgFABgGIAAhVIgUAAIAAgUIApAAIAABpQAAAKgCAIQgDAHgEAEIgJAIIgJAEIgIABIgCAAg");
	this.shape_8.setTransform(26,-89.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgSBJQgIgDgGgDQgGgEgEgFIgHgJQgGgMgBgPIAAgdIApAAIAAAUIgUAAIAAAJQAAAGACAFIAEAIIAGAGIAGADQAIAEAJAAQAKAAAIgEIAGgDIAGgGIAEgIQABgFAAgGIAAgrQAAgGgBgEIgEgIIgGgGIgGgDQgIgEgKAAIgBAAIgHABIgJADQgFACgFAEQgEAFgCAHIgWAAIACgIIAFgKIAHgKQAEgEAGgEQAGgEAIgCQAIgCAJAAQAKAAAIACQAIADAGADIALAJIAHAJQAGAMABAPIAAArQgBAPgGAMIgHAJIgLAJQgGADgIADQgIACgKAAQgKAAgIgCg");
	this.shape_9.setTransform(15.7,-89.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AAABKQgLAAgKgDQgJgEgFgFQgGgFgEgGIgEgMIgCgKIAAgGQAAgHACgGIAFgKIAHgIIAHgHIAGgHQABgDABgDIAAgCIAAgCQAAgFgBgDIgFgGIgFgDIgHgDIgGgBIgEAAIgBAAIAAgUIAMAAQAJgBAHADQAGADAFAEQADADADAFIAEAKIABAJIABAGIAAABIgBABIAAABIgCAIIgDAGIgFAHIgKAMIgFAKIgCAGIAAADQAAAHACAGQACAFADADIAHAGIAGACIAGABIACAAQAHAAAFgCQAFgCADgDIAFgGIAEgHIABgHIABgDIAAhhIAVAAIAABhQABAMgEAJQgDAIgGAGQgGAGgGADIgMAEIgKACg");
	this.shape_10.setTransform(2.2,-89.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AAjBKIAAhhQAAgJgCgHQgEgGgFgEIgYAQIgXgQQgFAEgEAGQgDAHAAAJIAAAzQABAIACAFIAEAFIAEADIAGADIAJABIAPAAIAAAVIgdAAQgKgBgGgFIgHgEIgFgIIgEgKIgBgPIAAg+QACgQAIgKQAIgLANgFIAZAQIAagQQANAFAIALQAFAFACAGQACAHABAIIAABpg");
	this.shape_11.setTransform(-11.2,-89.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgoAKIAAgTIBRAAIAAATg");
	this.shape_12.setTransform(-24.5,-99.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AAjBKIAAgrQABgHgDgEQgDgEgFgDIgJgEIgJgDIgJgBIgCAAIgGABIgIACIgHAFIgGAGQgDAFgBAGIgBADQABAFACADIAGAGIAIADIAJACIAIABIAEAAIACAAIAAAVIgXAAQgJAAgGgEQgHgDgFgFQgFgGgDgIQgDgHABgIQgBgIAEgJQADgIAJgIIALgHIAKgFIAKgCIAKgBIAOABIALADIAKAFIAAgJQABgGgCgGIgEgJIgFgGIgHgFQgIgDgKgBQgIAAgGADQgGADgEAFQgEAEgCAFIgDAJIgXAAQAAgMAEgJQAEgIAGgGQAFgFAHgEIAMgEIALgCIAHgBIAAAAQAOAAAKAEQAJADAHAGQAGAGAEAGIAFANIACAMIABAHIAAABIAABZg");
	this.shape_13.setTransform(-25,-89.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AAQBJQgFgCgDgCQgEgDgCgEQgCgFAAgFIAAAAIAAAAQAAAFgBAFIgGAHIgIAEIgKABQgHAAgGgBIgKgFIgIgGIgFgHQgEgIgCgKIAAhuIAkAAIAAAUIgOAAIAABRQAAAKADAFQACAFADADIAGACIAFABIABAAQAGAAADgDIAFgHIACgIIABgGIAAgCIAAhlIASAAIAABlIAAACIAAAGIADAIQACAEADADQADADAGAAIABAAIAFgBIAGgCQADgDACgFQACgFAAgKIAAhlIAWAAIAABuQgBAKgFAIIgFAHIgHAGIgLAFQgFABgIAAg");
	this.shape_14.setTransform(-39.4,-89.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgWBIQgLgEgHgEQgIgFgGgGIAPgOIAHAFIAKAFIAMAEIAMABQAHAAAGgBQAFgCAEgDQAEgDACgFQACgEAAgFQAAgFgCgEIgEgFIgFgDIgEgBIgEAAIgJgCIgJgCIgHgBIgFgBIgGgDIgIgEIgHgGQgDgFgCgFQgCgGAAgIQAAgMAFgJQAEgIAHgFQAGgFAJgDQAJgCAIAAQAIAAAIACIANAFIALAGIALAHIgMATIgJgGIgIgEIgIgEIgIgCIgGgBIgKABQgEABgDACQgEADgCAEQgCAEAAAHQAAAGADAEQAEAEAGACIAMADIAOACQAHACAHADQAHAEAFAEQAFAGADAGQADAHAAAIQABALgFAJQgEAIgHAFQgHAGgJACQgKADgKAAQgPAAgKgDg");
	this.shape_15.setTransform(-53.7,-89.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape_16.setTransform(-64.5,-89.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AAjBKIAAhaQAAgJgCgGQgCgGgEgEQgEgEgEgCIgIgDIgHgBIgEAAQgGAAgFABIgJAEIgGAGIgEAGQgEAIgBAKIAABaIgWAAIAAhwQAFgIAFgGIALgKIAMgGIAKgDIAJgCIAEAAIABAAQALAAAHADQAJACAGAEQAGAEAEAFIAHAJIAEAKIADAJIABAHIAAAEIAABag");
	this.shape_17.setTransform(-75.2,-89.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AgDBKQgNAAgJgDQgIgEgGgFQgGgFgDgHIgFgNIgCgLIgBgHIAAgCIAAhaIAWAAIAABaQAAAJACAGQADAHADAEQAEAEAFACIAIADIAHACIACAAQAJAAAGgDQAFgCAFgEQADgEACgFIAEgJIABgHIAAgDIAAhaIAWAAIAACRIgWAAIAAgUIgCAHIgEAFIgFAEIgGADQgIADgKAAg");
	this.shape_18.setTransform(86,-116.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AgNBJQgHgDgFgDQgGgEgDgFIgGgJIAEgCIAFgDIAFgDIAEgDQADAGAEAEIAIAEQAFACAFAAQAHgBAGgDIAFgEIAFgFIADgHIABgJIAAgwQgBgIgDgGIgDgGIgFgEIgGgEIgJgBIgLABQgGACgDACIgHAHIgFALIgWAAQABgKAEgIQADgJAHgFQAHgGAKgEQAJgDANAAIAAAAIABAAIAGABIAJACIALAEQAGAEAFAGQAFAFADAJQADAIAAAMIAAAwQgBAOgFALIgGAJQgEAFgFADQgFAEgHACQgHACgJAAQgJAAgHgCg");
	this.shape_19.setTransform(72.6,-116.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AgSBIQgIgCgGgDQgFgFgFgEIgGgJQgHgMgBgPIAAhfIAVAAIAABfQABAGABAFIAEAIIAGAFIAGAEQAIADAJABQAKgBAIgDIAHgEIAFgFIAEgIQABgFABgGIAAhfIAVAAIAABfQgBAPgGAMIgHAJQgFAEgFAFQgHADgIACQgHACgLAAQgJAAgJgCg");
	this.shape_20.setTransform(59.9,-116.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AgTA8IgFgBIgDgEIgCgEIAAgWIAVAAIAAAKIAmAAIAAAVgAgTgcIgFgBIgDgEIgCgEIAAgWIAVAAIAAALIAmAAIAAAUg");
	this.shape_21.setTransform(49.2,-116.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AgWBIQgLgEgHgEQgIgFgFgGIAOgOIAHAFIAKAFIAMAEIAMABQAHAAAFgBQAGgCAEgDQAEgDACgFQACgEAAgFQAAgFgCgEIgEgFIgFgDIgEgBIgEAAIgJgCIgJgCIgIgBIgEgBIgGgDIgIgEIgHgGQgDgFgBgFQgCgGAAgIQAAgMADgJQAFgIAGgFQAIgFAIgDQAIgCAJAAQAJAAAHACIANAFIALAGIAMAHIgNATIgJgGIgIgEIgIgEIgIgCIgGgBIgJABQgFABgDACQgEADgCAEQgCAEgBAHQAAAGAEAEQAEAEAGACIAMADIAOACQAIACAGADQAHAEAFAEQAFAGADAGQAEAHAAAIQAAALgFAJQgEAIgHAFQgHAGgKACQgJADgKAAQgPAAgKgDg");
	this.shape_22.setTransform(39.3,-116.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AAjBKIAAhaQAAgJgBgGQgDgGgEgEQgEgEgEgCIgJgDIgGgBIgEAAQgFAAgGABIgIAEIgHAGIgEAGQgEAIgBAKIAABaIgVAAIAAhwQAEgIAGgGIAKgKIAMgGIAKgDIAIgCIAFAAIABAAQAKAAAIADQAJACAGAEQAGAEAEAFIAHAJIAEAKIACAJIACAHIAAAEIAABag");
	this.shape_23.setTransform(26.7,-116.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("AgEBKQgMAAgIgDQgKgEgFgFQgGgFgEgHIgEgNIgDgLIAAgHIAAgCIAAhaIAWAAIAABaQAAAJACAGQADAHAEAEQADAEAFACIAIADIAHACIADAAQAIAAAGgDQAFgCAEgEQAFgEABgFIADgJIACgHIAAgDIAAhaIAWAAIAACRIgWAAIAAgUIgCAHIgEAFIgGAEIgFADQgIADgJAAg");
	this.shape_24.setTransform(12.4,-116.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("AgDB6IAAiUIACgKIACgIIAFgHIAGgHIAGgGIADgGIABgEIABgFQAAgFgCgEQgCgFgDgCQgEgDgEgCIgIAAQgIgBgFACIgHADIgDAFIgSAAIgBAAIAAgBIABgFIACgFIAEgHQACgEAFgCQAFgDAHgBQAHgCAJAAQAKAAAHACQAHADAFADQAFAEACAEIAFAJIABAIIABAHIAAADIgBAGIgCAHIgEAIIgHAKIgGAJIgDAGIgCAGIAACUg");
	this.shape_25.setTransform(1.4,-121.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("AgKBJQgLAAgIgCQgIgCgFgEIgIgIIgEgJIgDgIIAAgGQAAgJADgGQADgGAEgDIAIgGIAFgCIgIgCIgGgEIgEgFIgEgGQgCgHgBgIQABgIABgGIAEgLIAFgHIAHgFQAIgFAKAAIAcAAIAAAUIgQAAIgJABIgGADIgFADIgCAEQgDAFAAAGQAAAGABADIAEAHIAHADIAGACIAEABIADAAIAQAAIAAAUIgQAAIgKABIgGADIgFAEIgBAFIgBAEIAAACQgBAFACAEIAEAGIAFAEIAGACIAEABIADAAIABAAIAZAAQAIAAAFgDIAGgIQACgEACgGIAAhoIAVAAIAABoQAAAJgDAHQgCAHgFAEQgEAFgFADIgKAEIgJACIgFAAg");
	this.shape_26.setTransform(-8.8,-116.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("AgoARIAAgUIA8AAIAAgNIAVAAIAAAhg");
	this.shape_27.setTransform(-22.5,-127.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AAgBSIAAgrQAAgGgCgEQgDgFgFgDIgJgEIgKgDIgIgBIgDAAIgGABIgHACIgIAFIgFAHQgEAEgBAGIAAACIAAABQAAAFACADQADADADADIAIADIAJACIAIABIAFAAIACAAIAAAVIgYAAQgIAAgHgEQgHgDgFgFQgEgGgEgHQgCgIAAgIQAAgIADgJQAEgIAJgHIAKgIIALgFIAKgCIAKgBIAOACIAKACIALAEIAAgHQAAgHgCgGIgDgJIgGgGIgHgFQgHgDgKgBQgIAAgGADQgGADgFAFQgEAFgBAEIgEAJIgXAAQABgMAEgIQAEgJAFgGQAGgFAHgEIALgEIALgCIAHgBIABAAQAKAAALADQAFgBAGgCIAJgGQAFgEADgGIAHAHIADADIACACIACACIABABIgBACIgDAEIgDAEIgFAFIgEADIgEABIAHAMIAEAMIACAJIAAAGIAAACIAABYg");
	this.shape_28.setTransform(-21.9,-117.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("AgKBJIAAiRIAVAAIAACRg");
	this.shape_29.setTransform(-31.5,-116.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231F20").s().p("AAwBfIgLgFQgGgDgDgFIAPgSIACABIAEAEIAGADIAJABQAGAAAEgCQADgDACgEQACgEAAgFIAAgaIgCAHIgEAFIgGAEIgGACQgIADgIABIgFAAQgNAAgIgDQgJgEgGgFQgGgFgCgGIgFgOIgCgLIgBgGIAAgmQAAgIgCgGQgCgGgEgEQgEgEgEgCIgJgDIgHgBIgDgBQgHABgFABIgJAEIgGAGIgEAGQgEAIgBAJIAAAtQABAHACAGIADAEIAFAEIAGADIAIABIAQAAIAAAUIgdAAQgKAAgHgFIgGgFIgFgIIgEgKIgBgOIAAgDIAAhBQAEgJAFgGIALgKIAMgGIAKgEIAIgBIAFAAIACAAQAOAAAKAEQAJAFAHAFQAFAGAEAIIAFAMIACALIAAAFIAAAkQAAAIADAHQACAGAEAEQADAEAFADIAIACIAHACIAEAAQAIAAAGgCQAGgDAEgEQAEgEACgFIADgIIABgHIAAgDIAAhbIAWAAIAACXQAAAKgDAIQgCAHgEAEQgEAFgFADIgJAEIgIACIgEAAQgJAAgHgDg");
	this.shape_30.setTransform(-45.6,-114.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231F20").s().p("AgJAXQgDAAgDgDQgDgCAAgEIAAgTIgIAAIAAgRIARAAQAEAAACADIACACIABAEIAAATIAKAAIAAgcIARAAIAAAkQAAAEgCACQgDADgEAAg");
	this.shape_31.setTransform(-62.1,-105.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231F20").s().p("AAgBSIAAgrQAAgGgDgEQgDgFgEgDIgJgEIgKgDIgJgBIgCAAIgGABIgHACIgHAFIgHAHQgCAEgBAGIgBACIAAABQAAAFADADQABADAEADIAIADIAJACIAIABIAGAAIAAAAIAAAVIgYAAQgHAAgGgEQgHgDgGgFQgEgGgEgHQgDgIAAgIQAAgIAFgJQADgIAJgHIAKgIIAKgFIALgCIAKgBIANACIALACIALAEIAAgHQAAgHgCgGIgDgJIgGgGIgGgFQgJgDgIgBQgKAAgFADQgHADgDAFQgFAFgCAEIgDAJIgXAAQABgMAEgIQAEgJAGgGQAFgFAGgEIAMgEIAMgCIAGgBIACAAQAJAAALADQAFgBAFgCIAKgGQAEgEAEgGIAHAHIADADIACACIADACIABABIgBACIgEAEIgDAEIgFAFIgEADIgDABIAGAMIAEAMIACAJIAAAGIAAACIAABYg");
	this.shape_32.setTransform(-63.9,-117.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#231F20").s().p("AgQBzQgRAAgMgEQgMgDgIgGQgIgGgFgHIgHgNIgEgNIAAgKQAAgOAEgJQAFgJAHgGIAMgIIAGgEIgMgDIgJgHIgGgIIgFgJQgEgLgBgMQAAgNACgJIAHgRIAJgMIAKgIQAMgHAQgBIAtAAIAAAgIgaAAIgOACIgKAEIgHAFIgFAGQgEAIgBAKQAAAIADAGIAHAKIAKAGIAJADIAIABIAEAAIAaAAIAAAfIgaAAIgQADIgKAEIgGAHIgEAHIgBAGIAAADQAAAJACAGIAGAKIAIAFIAJAEIAHABIAFAAIABAAIAoAAQAMAAAHgFQAHgFAEgGQAEgHABgKIAAikIAiAAIAACkQAAAPgEAKQgEALgHAHQgHAHgIAEIgPAHIgOADIgIABg");
	this.shape_33.setTransform(44.5,80.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#231F20").s().p("AgVByQgLgEgIgFQgIgGgGgIIgJgPIAGgDIAIgEIAIgGIAGgCQAEAIAHAGIANAHQAIADAHAAQAMgBAKgGIAIgGIAGgIIAFgLIACgOIAAhLQgBgNgFgKIgFgJIgHgGIgLgGIgOgCIgSACQgIACgGAFQgFADgFAIIgIAQIgiAAQABgPAGgNQAGgOAKgJQALgJAPgFQAPgFAUAAIABAAIABAAIAJAAIAPADIARAIQAJAGAIAJQAHAIAFANQAFAOAAATIAABLQgBAWgIARIgKAOQgFAIgIAFQgIAGgLADQgLADgPAAQgOAAgLgDg");
	this.shape_34.setTransform(24.4,81);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#231F20").s().p("AgPAhIAAhAIAfAAIAABAg");
	this.shape_35.setTransform(10,54.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#231F20").s().p("AgHB0QgTAAgOgFQgNgFgJgJQgJgIgGgKIgHgUIgEgSIAAgMIAAgDIAAiNIAiAAIAACNQAAAPAEAKQAEAKAFAGQAGAHAHADIANAFIALACIAFAAQANAAAJgEQAKgEAFgGQAHgGACgHIAGgOIABgLIABgGIAAiNIAiAAIAADkIgiAAIAAggIgDALIgGAJIgJAGIgKAEQgMAEgOABg");
	this.shape_36.setTransform(4.5,81);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#231F20").s().p("AA1BzIAAhjIgBgLIgEgJIgFgJIgIgIQgFgDgHAAIhMAAIAACLIgiAAIAAjlIAiAAIAAA7IBMAAQAGgBAFgEIAJgIQAFgGACgKIAAgeIAiAAIAAAiIgBAIIgEALIgGALIgJALIAMAPIAIARQAEAKAAANIAABjg");
	this.shape_37.setTransform(-17.5,80.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C0212F").s().p("ABJExIAAhNIknAAIAAhJIEonLIBNAAIAAHLIBIAAIAABJIhIAAIAABNgAh/CbIDJAAIAAk8g");
	this.shape_38.setTransform(16.8,-16.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C0212F").s().p("AhiExIDRoYIksAAIAAhJIF6AAIAABJIjQIYg");
	this.shape_39.setTransform(-28.9,-16.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EBD638").s().p("AvWPzQgyg0gahCQgchFAAhJIAA8fQAAidBvhuQBuhvCeAAIZFAAQCdAABvBvQBvBuAACdIAAcfQAACchvBvQhvBvidAAI5FAAIghgBIoYFDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.7,-145.1,255.4,290.2);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F45C30").s().p("AqcFtQgUAAgNgOQgOgOAAgUIAAp6QAAgUAOgNQANgOAUAAIU4AAQAUAAAOAOQAOANAAAUIAAJ6QAAAUgOAOQgOAOgUAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.6,-36.5,143.3,73.1);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F69435").s().p("Aj5BrQgYgIgFgWQgLguBfhNIAKAfQARAbAjgNQARgOAPgVQAdgogJgeIA5AgQAyAmgeAdIgFAFQgEAGADADQALAKBUgaIAogYQAkgbgQgSIAxAoQApAtgqAkIAbAIQAgAEAbgbQACANgIARQgRAgg3ARg");
	this.shape.setTransform(1.8,18.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE242A").s().p("AngDSQgNheB7gyIACAaQAHASAXghQAHgWAWgaQArg1BGgcIAUgNQAXgVAJgtIATARQASATgFAVIAEAEQAFADAHgCQAUgFAbgyQAEgGAEgQQAHgfgDgzIAGgVQASgZA3gUIgHAQQgIATAAAUQgBBBBGAwIAvAmQAuAugDAsIASAJQATAFAIgZQAFgbgKgQIBIAyQBIA6AAAlIAOAJQAUADAYgcIARAaQATAgAJAeQAfBdhHAjItsABQgfgkgGgwg");
	this.shape_1.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.2,-29.5,96.5,59.1);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F69435").s().p("Aj5BrQgYgIgFgWQgLguBfhNIAKAfQARAbAjgNQARgOAPgVQAdgogJgeIA5AgQAyAmgeAdIgFAFQgEAGADADQALAKBUgaIAogYQAkgbgQgSIAxAoQApAtgqAkIAbAIQAgAEAbgbQACANgIARQgRAgg3ARg");
	this.shape.setTransform(1.8,18.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE242A").s().p("AngDSQgNheB7gyIACAaQAHASAXghQAHgWAWgaQArg1BGgcIAUgNQAXgVAJgtIATARQASATgFAVIAEAEQAFADAHgCQAUgFAbgyQAEgGAEgQQAHgfgDgzIAGgVQASgZA3gUIgHAQQgIATAAAUQgBBBBGAwIAvAmQAuAugDAsIASAJQATAFAIgZQAFgbgKgQIBIAyQBIA6AAAlIAOAJQAUADAYgcIARAaQATAgAJAeQAfBdhHAjItsABQgfgkgGgwg");
	this.shape_1.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.2,-29.5,96.5,59.1);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AqcFtQgUAAgNgOQgOgOAAgUIAAp6QAAgUAOgNQANgOAUAAIU4AAQAUAAAOAOQAOANAAAUIAAJ6QAAAUgOAOQgOAOgUAAg");
	this.shape.setTransform(-405.8,127.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#989898").s().p("AhRCsIAAlXICjAAIAAFXg");
	this.shape_1.setTransform(-80.4,296.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#989898").s().p("AkvAzIAAhlIJfAAIAABlg");
	this.shape_2.setTransform(-138.7,308.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#989898").s().p("AkvAzIAAhlIJfAAIAABlg");
	this.shape_3.setTransform(-138.7,292.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#989898").s().p("AkvAzIAAhlIJfAAIAABlg");
	this.shape_4.setTransform(-138.7,275.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D1D2D3").s().p("EgJLAhXIAAmuIroAAIAAkPILoAAIAAjWQAAhlBEhHQBFhJBkAAIMnAAQBlAABIBJQBIBIAABkIAAClIEOAAMAAAg2/IFoAAIAALaIiCAAMAAAAxNIn0AAIAAGGg");
	this.shape_5.setTransform(68.6,138.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#595A5C").s().p("ApmBLIAAiVITNAAIAACVg");
	this.shape_6.setTransform(-135.7,343.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#595A5C").s().p("A0nBLIAAiVMApPAAAIAACVg");
	this.shape_7.setTransform(-403.7,343.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#595A5C").s().p("AhSB6QhYgsgThvICnAAIAuhuIAABuICmAAIgFAbQgHAggPAbQgxBXhvADIgCABQgnAAgsgWg");
	this.shape_8.setTransform(-341.6,275.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FAFAFA").s().p("AiGCGQg3g3AAhPQAAhOA3g3QA4g4BOAAQBPAAA3A4QA4A3AABOQAABPg4A3Qg3A4hPAAQhOAAg4g4g");
	this.shape_9.setTransform(-341.6,271.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#595A5C").s().p("AhSB6QhYgsgThvICaAAIAAhuIAoBuIC5AAIgEAbQgIAggPAbQgxBXhwADIgBABQgnAAgsgWg");
	this.shape_10.setTransform(-399.6,275.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FAFAFA").s().p("AiGCGQg3g3AAhPQAAhOA3g3QA5g4BNAAQBPAAA4A4QA3A3AABOQAABPg3A3Qg4A4hPAAQhNAAg5g4g");
	this.shape_11.setTransform(-399.4,271.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#595A5C").s().p("AhSCHQhZgsgThuICzAAIBViJIgrCJICgAAIgEAaQgIAggPAbQgyBYhvADIgCAAQgnAAgsgWg");
	this.shape_12.setTransform(-458.5,274.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FAFAFA").s().p("AiGCGQg3g3AAhPQAAhOA3g3QA5g4BNAAQBPAAA3A4QA4A3AABOQAABPg4A3Qg3A4hPAAQhNAAg5g4g");
	this.shape_13.setTransform(-458.4,271.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#969595").s().p("AgkAlQgPgPAAgWQAAgVAPgPQAPgPAVAAQAWAAAPAPQAPAPAAAVQAAAWgPAPQgQAPgVAAQgVAAgPgPg");
	this.shape_14.setTransform(-574,275.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#969595").s().p("AgkAlQgQgPAAgWQAAgVAQgPQAPgPAVAAQAWAAAPAPQAQAPAAAVQAAAWgQAPQgQAPgVAAQgVAAgPgPg");
	this.shape_15.setTransform(-604.1,275.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#969595").s().p("AgkAlQgQgPAAgWQAAgVAQgPQAQgPAUAAQAWAAAPAPQAQAPAAAVQAAAWgQAPQgQAPgVAAQgUAAgQgPg");
	this.shape_16.setTransform(-693.1,275.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#969595").s().p("AgkAlQgQgPAAgWQAAgVAQgPQAQgPAUAAQAWAAAPAPQAQAPAAAVQAAAWgQAPQgPAPgWAAQgUAAgQgPg");
	this.shape_17.setTransform(-723.3,275.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#969595").s().p("AgaDwIAAnfIA2AAIAAHfg");
	this.shape_18.setTransform(-708.4,276.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#969595").s().p("AgbDwIAAnfIA2AAIAAHfg");
	this.shape_19.setTransform(-588.9,276.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D1D2D3").s().p("A3yDsIBnnZMAt+AAAIAAHbg");
	this.shape_20.setTransform(-618.5,276.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#595A5C").s().p("AtgCWIAAkrIbBAAIAAErg");
	this.shape_21.setTransform(-403.7,214.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D1D2D3").s().p("AoqIIIAAjmIgYAAQgjAAgagZQgZgZAAgkIAAndQAAgkAZgZQAagZAjAAIAZAAQAFhDAvguQAwgvBCAAIKMAAQBHAAA2A0QA3A0AABGIAAAuICGAAQAjAAAaAZQAZAaAAAjIAAFSQAAAjgZAZQgaAZgjAAIiGAAIAAE2g");
	this.shape_22.setTransform(-130.7,298);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B5B5DA").s().p("AtHHPIAAucIaPAAIAAOcg");
	this.shape_23.setTransform(-406.6,128.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D1D2D3").s().p("A5iY7MAAAguNQAAhiBAhDQBBhDBhAAIerAAQBiAABJBDQBJBFAABgMAAAAjkINEAAIAAEPItEAAIAAGag");
	this.shape_24.setTransform(-360.7,190.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D1D2D3").s().p("EgkKAA8IAAh3MBIVAAAIAAB3g");
	this.shape_25.setTransform(539.3,-17.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D1D2D3").s().p("EgkKAA8IAAh3MBIVAAAIAAB3g");
	this.shape_26.setTransform(539.3,-37.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D1D2D3").s().p("EgkKAA8IAAh3MBIVAAAIAAB3g");
	this.shape_27.setTransform(539.3,-57.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#414142").s().p("AlxFyIAArjILjAAIAALjg");
	this.shape_28.setTransform(271.8,-39.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#7D4A4C").s().p("EhMeADhIAAnBMCY9AAAIAAHBg");
	this.shape_29.setTransform(-199.7,375.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C2B59C").s().p("Eg/HAkLMAAAhIVMB+PAAAMAAABIVg");
	this.shape_30.setTransform(-202.2,128.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6D6F72").s().p("AlTGBIAAksIDcAAIAAipIhOAAQgeAAgVgVQgVgWAAgdIAAicQAAgeAVgVQAVgVAeAAIGAAAQAfAAAVAVQAVAVAAAeIAACcQAAAdgVAWQgVAVgfAAIhNAAIAACpIDmAAIAAEsg");
	this.shape_31.setTransform(63.8,-214.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6D6F72").s().p("AlTGBIAAksIDcAAIAAipIhOAAQgeAAgVgVQgVgWAAgdIAAicQAAgeAVgVQAVgVAeAAIGBAAQAdAAAWAVQAVAVAAAeIAACcQAAAdgVAWQgWAVgdAAIhOAAIAACpIDmAAIAAEsg");
	this.shape_32.setTransform(-96.2,-214.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6D6F72").s().p("AlTGBIAAksIDmAAIAAipIhOAAQgeAAgVgVQgVgWAAgdIAAicQAAgeAVgVQAVgVAeAAIGBAAQAdAAAWAVQAVAVAAAeIAACcQAAAdgVAWQgWAVgdAAIhYAAIAACpIDmAAIAAEsg");
	this.shape_33.setTransform(-276.2,-214.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6D6F72").s().p("AlYGBIAAksIDmAAIAAipIhOAAQgeAAgVgVQgVgWAAgdIAAicQAAgeAVgVQAVgVAeAAIGAAAQAfAAAVAVQAVAVAAAeIAACcQAAAdgVAWQgVAVgfAAIhNAAIAACpIDmAAIAAEsg");
	this.shape_34.setTransform(-450.7,-214.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#AE7070").s().p("EhESAIRIAAkgIBYAAIAAoFIATAAIAAi0QAAgeAVgVQAVgVAeAAIAKAAQAdAAAWAVQAUAVAAAeIAAC0IAZAAIAAIFMB/rAAAIAAoFIATAAIAAi0QAAgeAVgVQAVgVAeAAIAJAAQAeAAAVAVQAVAVAAAeIAAC0IAZAAIAAIFIBYAAIAAEgg");
	this.shape_35.setTransform(-199.1,-174.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CB9595").s().p("EhDWAnyMAAAhPiMCGtAAAMAAABPig");
	this.shape_36.setTransform(-198,105);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#273247").s().p("Eg/+ADXIgBmtMB//AAAIAAGtg");
	this.shape_37.setTransform(-198.8,-169.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D1D2D3").s().p("AlYAeIAAg7IKxAAIAAA7g");
	this.shape_38.setTransform(401.3,-394.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#AE7070").s().p("AnBBXICpitIJDAAICXCtg");
	this.shape_39.setTransform(400.1,-388.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#7D4A4C").s().p("AkoBWIiZiwIODAAIi0C1g");
	this.shape_40.setTransform(400.1,-329.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#AE7070").s().p("AnBDSIAAmjIODAAIAAGjg");
	this.shape_41.setTransform(400.1,-359.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#7D4A4C").s().p("AobBzIAAjlIQ3AAIAADlg");
	this.shape_42.setTransform(400.8,386.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#AE7070").s().p("EAAAA37IobgNMAD2hvqII7AAUAEGBvKAAAAAgQAAAPkXAAQhtAAiYgCg");
	this.shape_43.setTransform(400.3,35.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6E6F71").s().p("AwoFtIAArZMAhRAAAIAALZg");
	this.shape_44.setTransform(308.3,360.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-770.8,-397.5,1541.7,795.1);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AqcFtQgUAAgNgOQgOgOAAgUIAAp6QAAgUAOgNQANgOAUAAIU4AAQAUAAAOAOQAOANAAAUIAAJ6QAAAUgOAOQgOAOgUAAg");
	this.shape.setTransform(-405.8,127.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#989898").s().p("AhRCsIAAlXICjAAIAAFXg");
	this.shape_1.setTransform(-80.4,296.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#989898").s().p("AkvAzIAAhlIJfAAIAABlg");
	this.shape_2.setTransform(-138.7,308.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#989898").s().p("AkvAzIAAhlIJfAAIAABlg");
	this.shape_3.setTransform(-138.7,292.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#989898").s().p("AkvAzIAAhlIJfAAIAABlg");
	this.shape_4.setTransform(-138.7,275.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D1D2D3").s().p("EgJLAhXIAAmuIroAAIAAkPILoAAIAAjWQAAhlBEhHQBFhJBkAAIMnAAQBlAABIBJQBIBIAABkIAAClIEOAAMAAAg2/IFoAAIAALaIiCAAMAAAAxNIn0AAIAAGGg");
	this.shape_5.setTransform(68.6,138.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#595A5C").s().p("ApmBLIAAiVITNAAIAACVg");
	this.shape_6.setTransform(-135.7,343.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#595A5C").s().p("A0nBLIAAiVMApPAAAIAACVg");
	this.shape_7.setTransform(-403.7,343.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#595A5C").s().p("AhSB6QhYgsgThvICnAAIAuhuIAABuICmAAIgFAbQgHAggPAbQgxBXhvADIgCABQgnAAgsgWg");
	this.shape_8.setTransform(-341.6,275.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FAFAFA").s().p("AiGCGQg3g3AAhPQAAhOA3g3QA4g4BOAAQBPAAA3A4QA4A3AABOQAABPg4A3Qg3A4hPAAQhOAAg4g4g");
	this.shape_9.setTransform(-341.6,271.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#595A5C").s().p("AhSB6QhYgsgThvICaAAIAAhuIAoBuIC5AAIgEAbQgIAggPAbQgxBXhwADIgBABQgnAAgsgWg");
	this.shape_10.setTransform(-399.6,275.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FAFAFA").s().p("AiGCGQg3g3AAhPQAAhOA3g3QA5g4BNAAQBPAAA4A4QA3A3AABOQAABPg3A3Qg4A4hPAAQhNAAg5g4g");
	this.shape_11.setTransform(-399.4,271.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#595A5C").s().p("AhSCHQhZgsgThuICzAAIBViJIgrCJICgAAIgEAaQgIAggPAbQgyBYhvADIgCAAQgnAAgsgWg");
	this.shape_12.setTransform(-458.5,274.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FAFAFA").s().p("AiGCGQg3g3AAhPQAAhOA3g3QA5g4BNAAQBPAAA3A4QA4A3AABOQAABPg4A3Qg3A4hPAAQhNAAg5g4g");
	this.shape_13.setTransform(-458.4,271.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#969595").s().p("AgkAlQgPgPAAgWQAAgVAPgPQAPgPAVAAQAWAAAPAPQAPAPAAAVQAAAWgPAPQgQAPgVAAQgVAAgPgPg");
	this.shape_14.setTransform(-574,275.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#969595").s().p("AgkAlQgQgPAAgWQAAgVAQgPQAPgPAVAAQAWAAAPAPQAQAPAAAVQAAAWgQAPQgQAPgVAAQgVAAgPgPg");
	this.shape_15.setTransform(-604.1,275.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#969595").s().p("AgkAlQgQgPAAgWQAAgVAQgPQAQgPAUAAQAWAAAPAPQAQAPAAAVQAAAWgQAPQgQAPgVAAQgUAAgQgPg");
	this.shape_16.setTransform(-693.1,275.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#969595").s().p("AgkAlQgQgPAAgWQAAgVAQgPQAQgPAUAAQAWAAAPAPQAQAPAAAVQAAAWgQAPQgPAPgWAAQgUAAgQgPg");
	this.shape_17.setTransform(-723.3,275.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#969595").s().p("AgaDwIAAnfIA2AAIAAHfg");
	this.shape_18.setTransform(-708.4,276.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#969595").s().p("AgbDwIAAnfIA2AAIAAHfg");
	this.shape_19.setTransform(-588.9,276.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D1D2D3").s().p("A3yDsIBnnZMAt+AAAIAAHbg");
	this.shape_20.setTransform(-618.5,276.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#595A5C").s().p("AtgCWIAAkrIbBAAIAAErg");
	this.shape_21.setTransform(-403.7,214.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D1D2D3").s().p("AoqIIIAAjmIgYAAQgjAAgagZQgZgZAAgkIAAndQAAgkAZgZQAagZAjAAIAZAAQAFhDAvguQAwgvBCAAIKMAAQBHAAA2A0QA3A0AABGIAAAuICGAAQAjAAAaAZQAZAaAAAjIAAFSQAAAjgZAZQgaAZgjAAIiGAAIAAE2g");
	this.shape_22.setTransform(-130.7,298);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B5B5DA").s().p("AtHHPIAAucIaPAAIAAOcg");
	this.shape_23.setTransform(-406.6,128.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D1D2D3").s().p("A5iY7MAAAguNQAAhiBAhDQBBhDBhAAIerAAQBiAABJBDQBJBFAABgMAAAAjkINEAAIAAEPItEAAIAAGag");
	this.shape_24.setTransform(-360.7,190.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D1D2D3").s().p("EgkKAA8IAAh3MBIVAAAIAAB3g");
	this.shape_25.setTransform(539.3,-17.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D1D2D3").s().p("EgkKAA8IAAh3MBIVAAAIAAB3g");
	this.shape_26.setTransform(539.3,-37.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D1D2D3").s().p("EgkKAA8IAAh3MBIVAAAIAAB3g");
	this.shape_27.setTransform(539.3,-57.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#414142").s().p("AlxFyIAArjILjAAIAALjg");
	this.shape_28.setTransform(271.8,-39.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#7D4A4C").s().p("EhMeADhIAAnBMCY9AAAIAAHBg");
	this.shape_29.setTransform(-199.7,375.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C2B59C").s().p("Eg/HAkLMAAAhIVMB+PAAAMAAABIVg");
	this.shape_30.setTransform(-202.2,128.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6D6F72").s().p("AlTGBIAAksIDcAAIAAipIhOAAQgeAAgVgVQgVgWAAgdIAAicQAAgeAVgVQAVgVAeAAIGAAAQAfAAAVAVQAVAVAAAeIAACcQAAAdgVAWQgVAVgfAAIhNAAIAACpIDmAAIAAEsg");
	this.shape_31.setTransform(63.8,-214.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6D6F72").s().p("AlTGBIAAksIDcAAIAAipIhOAAQgeAAgVgVQgVgWAAgdIAAicQAAgeAVgVQAVgVAeAAIGBAAQAdAAAWAVQAVAVAAAeIAACcQAAAdgVAWQgWAVgdAAIhOAAIAACpIDmAAIAAEsg");
	this.shape_32.setTransform(-96.2,-214.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6D6F72").s().p("AlTGBIAAksIDmAAIAAipIhOAAQgeAAgVgVQgVgWAAgdIAAicQAAgeAVgVQAVgVAeAAIGBAAQAdAAAWAVQAVAVAAAeIAACcQAAAdgVAWQgWAVgdAAIhYAAIAACpIDmAAIAAEsg");
	this.shape_33.setTransform(-276.2,-214.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6D6F72").s().p("AlYGBIAAksIDmAAIAAipIhOAAQgeAAgVgVQgVgWAAgdIAAicQAAgeAVgVQAVgVAeAAIGAAAQAfAAAVAVQAVAVAAAeIAACcQAAAdgVAWQgVAVgfAAIhNAAIAACpIDmAAIAAEsg");
	this.shape_34.setTransform(-450.7,-214.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#AE7070").s().p("EhESAIRIAAkgIBYAAIAAoFIATAAIAAi0QAAgeAVgVQAVgVAeAAIAKAAQAdAAAWAVQAUAVAAAeIAAC0IAZAAIAAIFMB/rAAAIAAoFIATAAIAAi0QAAgeAVgVQAVgVAeAAIAJAAQAeAAAVAVQAVAVAAAeIAAC0IAZAAIAAIFIBYAAIAAEgg");
	this.shape_35.setTransform(-199.1,-174.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CB9595").s().p("EhDWAnyMAAAhPiMCGtAAAMAAABPig");
	this.shape_36.setTransform(-198,105);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#273247").s().p("Eg/+ADXIgBmtMB//AAAIAAGtg");
	this.shape_37.setTransform(-198.8,-169.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D1D2D3").s().p("AlYAeIAAg7IKxAAIAAA7g");
	this.shape_38.setTransform(401.3,-394.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#AE7070").s().p("AnBBXICpitIJDAAICXCtg");
	this.shape_39.setTransform(400.1,-388.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#7D4A4C").s().p("AkoBWIiZiwIODAAIi0C1g");
	this.shape_40.setTransform(400.1,-329.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#AE7070").s().p("AnBDSIAAmjIODAAIAAGjg");
	this.shape_41.setTransform(400.1,-359.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#7D4A4C").s().p("AobBzIAAjlIQ3AAIAADlg");
	this.shape_42.setTransform(400.8,386.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#AE7070").s().p("EAAAA37IobgNMAD2hvqII7AAUAEGBvKAAAAAgQAAAPkXAAQhtAAiYgCg");
	this.shape_43.setTransform(400.3,35.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6E6F71").s().p("AwoFtIAArZMAhRAAAIAALZg");
	this.shape_44.setTransform(308.3,360.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-770.8,-397.5,1541.7,795.1);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAACCQgQgBgNgEIgLgGIgKgHIgHgJQgDgFAAgIIAAAkIgnAAIAAj/IAnAAIAACeIAAAHIADAMIAFAPQAEAJAGAHQAHAGAKAFQALAEAOAAIAGAAIAMgCIAPgGQAHgEAHgHQAGgHAEgLQAEgMAAgQIAAieIAmAAIAACeIAAAEIAAAMIgEAUIgIAXQgGALgLAJQgKAKgPAGQgPAGgWAAg");
	this.shape.setTransform(104.8,-133.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA/CBIAAhLQAAgLgFgIQgFgHgIgFIgQgIIgQgEIgRgCIgFAAIgJACIgNAEIgNAHIgLAMQgFAHgCALIAAAGQAAAIAEAGQAEAGAGAEIAOAGIAPADIAOACIAJAAIADAAIAAAkIgqAAQgNAAgMgFQgMgGgJgKQgJgKgFgNQgFgNAAgPQAAgOAHgOQAGgPAPgNIASgNIATgJIASgFIARgBIAZACIATAGIATAIIAAgPQAAgMgDgJIgHgQIgKgLIgLgIQgOgHgSgBQgOAAgLAGQgLAFgHAIQgHAIgDAJIgGAPIgoAAQACgVAHgPQAGgPAKgKQAKgKALgFIAWgJIASgDIAMgBIABAAQAYAAARAGQARAHALAJQALAKAHAMIAJAXIAEAUIABAMIAAADIAACbg");
	this.shape_1.setTransform(80.6,-134);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA+CBIAAieQAAgPgEgKQgFgLgFgHQgHgHgIgDIgOgFIgNgDIgGAAQgLAAgJADIgPAHIgLAKIgHALQgIANAAARIAACeIgnAAIAAjDQAJgPAIgKQAKgLAKgGIAUgLIASgGIAOgDIAJAAIACAAQASAAAOAFQAOAEALAHQALAGAHAIIAMASIAHARIAFAQIABAMIABAGIAACeg");
	this.shape_2.setTransform(56.8,-134);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcCBIAAi2QgBgKgDgIIgEgHIgFgGIgHgEIgJgCIgQADIgLAFIgHAFIgEAEIgagbQAGgIAKgGIAUgKQALgEARAAIAGAAIANADIAQAGQAJAFAHAIQAHAIAEANQAFANAAATIAAC2g");
	this.shape_3.setTransform(35,-134);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA+CBIAAhHIgHgOQgEgGgIgFIgNgGIgSgCIgLAAIgLADIAAgmQAKgDAMAAQAcAAAWANIAAgaQgBgSgIgOIgHgMIgMgKIgOgHQgJgDgLAAQgQABgPAHIgKAIIgKALIgIAQQgCAJAAAMIgnAAIAAgDIABgMIAEgUIAKgXQAGgMALgKQALgJARgHQAQgGAYAAIACAAIANABIATADIAXAKQAMAGAJALQAKALAGARQAHAQAAAYIAACeg");
	this.shape_4.setTransform(16.3,-134);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHCCQgWAAgPgGQgQgGgJgKQgLgJgFgLIgJgXIgEgUIgBgMIAAgEIAAieIAnAAIAACeQgBAQAFAMQAEALAGAHQAHAHAIAEIAOAGIAMACIAFAAQAQAAAKgEQAKgFAHgGQAGgHAEgJIAGgPIACgMIAAgHIAAieIAmAAIAAD/IgmAAIAAgkIgDANIgIAJIgJAHIgLAGQgNAEgRABg");
	this.shape_5.setTransform(-6.8,-133.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcCBIAAi2QgBgKgDgIIgEgHIgFgGIgHgEIgJgCIgQADIgLAFIgHAFIgEAEIgagbQAGgIAKgGIAUgKQALgEARAAIAGAAIANADIAQAGQAJAFAHAIQAHAIAEANQAFANAAATIAAC2g");
	this.shape_6.setTransform(-28.6,-134);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeB+IgUgKQgJgGgGgHIAagaIAEAFIAHAFIALAFIAPACIAJgBIAHgFIAGgGIADgHQAEgJABgLIAAiUIgkAAIAAgkIBKAAIAAC4QAAASgFANQgEANgIAIQgGAJgJAFIgQAGIgOADIgGAAQgQAAgMgEg");
	this.shape_7.setTransform(-43.5,-133.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeB+IgUgKQgJgGgGgHIAagaIAEAFIAHAFIALAFIAPACIAJgBIAHgFIAGgGIADgHQAEgJABgLIAAiUIgkAAIAAgkIBKAAIAAC4QAAASgFANQgEANgIAIQgGAJgJAFIgQAGIgOADIgGAAQgQAAgMgEg");
	this.shape_8.setTransform(-58.8,-133.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgwAcQgGgBgDgCIgGgFIgCgJIAAgmIAkAAIAAAUIBfAAIAAAjg");
	this.shape_9.setTransform(-72.6,-152.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA/CBIAAhLQAAgLgFgIQgFgHgIgFIgQgIIgQgEIgRgCIgFAAIgJACIgNAEIgNAHIgLAMQgFAHgCALIAAAGQAAAIAEAGQAEAGAGAEIAOAGIAPADIAOACIAJAAIADAAIAAAkIgqAAQgNAAgMgFQgMgGgJgKQgJgKgFgNQgFgNAAgPQAAgOAHgOQAGgPAPgNIASgNIATgJIASgFIARgBIAZACIATAGIATAIIAAgPQAAgMgDgJIgHgQIgKgLIgLgIQgOgHgSgBQgOAAgLAGQgLAFgHAIQgHAIgDAJIgGAPIgoAAQACgVAHgPQAGgPAKgKQAKgKALgFIAWgJIASgDIAMgBIABAAQAYAAARAGQARAHALAJQALAKAHAMIAJAXIAEAUIABAMIAAADIAACbg");
	this.shape_10.setTransform(-77.3,-134);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAcB/QgIgCgGgFQgGgFgEgHQgEgIAAgKQAAAKgDAIQgDAHgHAFQgGAFgIACIgSADQgNAAgKgDIgRgHIgNgLIgJgMQgIgPgDgSIAAjBIAnAAIAACyQAAARAEAJQAEAJAFAFQAGAEAFAAIAIABIACAAQAKAAAGgFQAGgFADgIIADgNIABgKIAAgEIAAiyIAhAAIAACyIAAAEIABAKIAEANQADAIAGAFQAGAFAKAAIACAAIAIgBQAFAAAFgEQAFgFAEgJQAEgJAAgRIAAiyIAnAAIAADBQgCASgJAPIgJAMIgNALIgRAHQgKADgNAAg");
	this.shape_11.setTransform(-102.5,-133.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRB2QgRAAgNgEQgMgDgIgGQgJgGgEgHIgIgOIgDgOIgBgKQAAgOAFgJQAFgJAHgHIAMgIIAHgDIgNgEIgJgHIgHgJIgFgJQgEgKgBgNQAAgOADgJIAGgRIAJgMIALgJQANgHAQgBIAuAAIAAAhIgbAAIgOABIgKAEIgHAGIgFAHQgFAIAAAKQAAAIACAGIAIAKIAJAGIAKAEIAIABIAEAAIAbAAIAAAgIgbAAIgQACIgKAFIgHAHIgDAIIgCAFIAAAEQAAAJADAGIAGAKIAIAFIAJAEIAIABIAEAAIABAAIAqAAQAMAAAHgFQAHgFAEgGQAEgIABgJIAAipIAkAAIAACpQAAAPgFALQgEALgHAHQgHAHgIAEIgQAHIgOADIgJABg");
	this.shape_12.setTransform(31.9,55.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVB1QgLgEgJgGQgIgFgHgIIgJgQIAHgDIAIgFIAJgEIAFgEQAEAJAHAGIANAHQAJADAIAAQAMgBAJgGIAIgGIAIgIIAFgMIACgOIAAhOQgCgMgFgLIgFgIIgHgIIgMgFIgNgCIgTACQgIACgHAEQgFAFgFAGIgIARIgkAAQADgPAFgNQAGgOALgKQAKgJAQgFQAQgGAVAAIAAAAIABAAIAJABIAQADIASAIQAJAGAIAJQAIAJAEANQAFAOABATIAABOQgCAXgIARIgKAPQgFAHgJAGQgIAFgLAEQgMADgOABQgPgBgLgDg");
	this.shape_13.setTransform(11.2,55.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAhIAAhBIAfAAIAABBg");
	this.shape_14.setTransform(-3.6,28.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHB4QgTAAgOgGQgOgGgKgIQgJgJgGgKIgIgVIgDgSIgBgMIAAgDIAAiSIAkAAIAACSQAAAPADAKQAFAKAFAHQAGAHAHADIANAFIAMACIAEABQAPAAAJgFQAJgEAHgGQAGgGADgIIAFgOIACgLIAAgGIAAiSIAjAAIAADrIgjAAIAAghIgDAMIgHAIIgIAHIgLAEQgMAEgPACg");
	this.shape_15.setTransform(-9.3,55.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AA3B2IAAhmIgCgLIgEgIIgFgKIgIgIQgGgDgHAAIhOAAIAACOIgiAAIAAjrIAiAAIAAA8IBOAAQAHgBAFgDIAJgJQAFgGACgKIAAgfIAjAAIAAAiIgBAJIgEALIgGAMIgJALIAMAPIAIASQAFAKAAANIAABmg");
	this.shape_16.setTransform(-31.8,55.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7CB44B").s().p("AhvIEQgxgOgkgXQglgWgZgcIgqg7QgohGgIhaIAAmjQAIhZAohGIAqg6QAZgdAlgXQAkgXAxgNQAwgOA/AAQA/AAAxAOQAwANAlAXQAkAXAaAdIAqA6QAoBGAIBZIAAGjQgIBagoBGIgqA7QgaAcgkAWQglAXgwAOQgxANg/AAQg/AAgwgNgAhrl0IgnAWIgjAiIgZAuQgJAbAAAiIAAGjQAAAkAJAcIAZAxIAjAiIAnAYQAwAVA7ADQA9gDAvgVIAogYIAjgiIAYgxQAJgcAAgkIAAmjQAAgigJgbIgYguIgjgiIgogWQgvgVg9gCQg7ACgwAVg");
	this.shape_17.setTransform(67.4,-35.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7CB44B").s().p("AhvIEQgxgOgkgXQglgWgZgcIgqg7QgohGgIhaIAAmjQAIhZAohGIAqg6QAZgdAlgXQAkgXAxgNQAwgOA/AAQA/AAAxAOQAwANAlAXQAkAXAaAdIAqA6QAoBGAIBZIAAGjQgIBagoBGIgqA7QgaAcgkAWQglAXgwAOQgxANg/AAQg/AAgwgNgAhrl0IgnAWIgjAiIgZAuQgJAbAAAiIAAGjQAAAkAJAcIAZAxIAjAiIAnAYQAwAVA7ADQA9gDAvgVIAogYIAjgiIAYgxQAJgcAAgkIAAmjQAAgigJgbIgYguIgjgiIgogWQgvgVg9gCQg7ACgwAVg");
	this.shape_18.setTransform(-15.4,-35.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7CB44B").s().p("AAqIHIAAr1QgmAbg0ATQg1AQhJADIAAiFIAYgBIApgGIA0gTQAagNAWgXQAWgYAPgjQAOglAAg1ICFAAIAAQMg");
	this.shape_19.setTransform(-83,-35.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C0212F").s().p("AlkPWIp/AAQizAAh/h/Qh/h/AAizIAA+KQAAi0B/h+QB/h/CzAAIfHAAQCzAAB/B/QB/B+AAC0IAAeKQAACzh/B/Qh/B/izAAIkZAAIpINBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.9,-181.5,285.9,363.1);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAB1QgOgBgMgEIgKgEIgJgHIgGgIQgDgFAAgGIAAAAIAAAAIAAAgIgiAAIAAjmIAiAAIAACPIABAFIABALIAFAOQAEAHAGAHQAGAGAJAEQAJAEANAAIAFAAIALgCIANgGQAHgDAGgGQAGgHADgKQAEgKAAgOIAAiPIAiAAIAACPIAAACIAAAMIgDASIgIAUQgFAKgKAJQgJAIgNAGQgOAFgUAAg");
	this.shape.setTransform(94,-128.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA4B0IAAhEQAAgKgEgHQgFgGgGgFIgPgHIgPgDIgPgCIgEABIgIABIgMADIgLAHIgKAKQgFAHgBAJIgBAGQAAAIAEAEQADAGAGADIANAGIANADIANABIAHABIADAAIAAAgIglAAQgMAAgLgFQgLgGgIgIQgHgJgFgMQgFgLAAgNQAAgNAGgNQAGgOANgMIARgLIAQgIIARgEIAPgCIAWADIASAFIAQAHIAAgOQAAgKgCgJIgGgNIgJgLIgLgGQgMgHgQAAQgNAAgJAEQgKAFgGAIQgGAGgEAIIgFAOIgkAAQACgTAGgOQAGgMAJgJQAIgJAKgGIAUgHIARgEIAKAAIABAAQAWAAAPAGQAPAGAKAIQAKAJAGAKIAJAVIADASIABALIAAACIAACMg");
	this.shape_1.setTransform(72.3,-128.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA4B0IAAiOQAAgNgEgKQgEgKgFgFQgGgHgHgDIgNgFIgLgBIgGAAQgKAAgIABIgNAHIgKAJIgHAKQgGAMgBAPIAACOIgiAAIAAiwQAHgNAIgJQAJgJAJgGIARgKIAQgFIANgDIAJAAIABAAQARAAAMAFQANADAKAGQAJAGAHAHIAKAQIAHAQIAEAOIABAKIAAAGIAACOg");
	this.shape_2.setTransform(51,-128.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZB0IAAijQgBgJgDgIIgDgGIgEgGIgHgDIgIgBIgOABIgKAFIgGAFIgDAEIgYgZQAFgHAJgGIASgIQAKgEAPAAIAFAAIAMACIAPAGQAHAEAHAIQAGAHAEAMQAEALAAASIAACjg");
	this.shape_3.setTransform(31.4,-128.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA4B0IAAhAIgGgNQgFgFgGgEIgMgFIgPgDIgMAAIgIADIAAgiQAIgDAMAAQAYAAAUAMIAAgYQgCgQgGgMIgHgKIgKgJIgNgHQgIgDgKABQgPAAgMAHIgKAGIgJALIgHANQgCAJAAAKIgiAAIAAgCIAAgLIAEgSIAJgVQAFgKAKgJQAKgIAPgGQAPgGAVAAIACAAIALAAIASAEIAUAIQALAGAJAKQAIAKAGAPQAFAPAAAVIAACOg");
	this.shape_4.setTransform(14.6,-128.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGB1QgUAAgNgFQgOgGgJgIQgJgJgFgKIgIgUIgEgSIAAgMIAAgCIAAiPIAiAAIAACPQAAAOAEAKQAEAKAFAHQAGAGAHADIANAGIALACIAFAAQANAAAJgEQAKgEAGgGQAGgHADgHIAFgOIACgLIAAgFIAAiPIAiAAIAADmIgiAAIAAggIgDALIgGAIIgJAHIgKAEQgMAEgOABg");
	this.shape_5.setTransform(-6.1,-128.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZB0IAAijQgBgJgDgIIgDgGIgEgGIgHgDIgIgBIgOABIgKAFIgGAFIgDAEIgYgZQAFgHAJgGIASgIQAKgEAPAAIAFAAIAMACIAPAGQAHAEAHAIQAGAHAEAMQAEALAAASIAACjg");
	this.shape_6.setTransform(-25.6,-128.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgBB1QgPAAgLgEIgRgIQgJgGgFgHIAXgXIAEAEIAGAFIAKAFIAOACIAHgCIAHgEIAFgFIADgHQADgIABgKIAAiFIggAAIAAggIBCAAIAAClQAAARgEALQgEAMgHAHQgGAIgIAEIgOAGIgMADIgFAAg");
	this.shape_7.setTransform(-39.1,-128.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgBB1QgPAAgLgEIgRgIQgJgGgFgHIAXgXIAEAEIAGAFIAKAFIAOACIAHgCIAHgEIAFgFIADgHQADgIABgKIAAiFIggAAIAAggIBCAAIAAClQAAARgEALQgEAMgHAHQgGAIgIAEIgOAGIgMADIgFAAg");
	this.shape_8.setTransform(-52.8,-128.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgrAZQgGAAgDgCIgEgGIgCgIIAAghIAgAAIAAARIBVAAIAAAgg");
	this.shape_9.setTransform(-65.2,-145);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA4B0IAAhEQAAgKgEgHQgFgGgGgFIgPgHIgPgDIgPgCIgEABIgIABIgMADIgLAHIgKAKQgFAHgBAJIgBAGQAAAIAEAEQADAGAGADIANAGIANADIANABIAHABIADAAIAAAgIglAAQgMAAgLgFQgLgGgIgIQgHgJgFgMQgFgLAAgNQAAgNAGgNQAGgOANgMIARgLIAQgIIARgEIAPgCIAWADIASAFIAQAHIAAgOQAAgKgCgJIgGgNIgJgLIgLgGQgMgHgQAAQgNAAgJAEQgKAFgGAIQgGAGgEAIIgFAOIgkAAQACgTAGgOQAGgMAJgJQAIgJAKgGIAUgHIARgEIAKAAIABAAQAWAAAPAGQAPAGAKAIQAKAJAGAKIAJAVIADASIABALIAAACIAACMg");
	this.shape_10.setTransform(-69.4,-128.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAaBzQgIgDgGgEQgFgFgEgGQgCgHAAgJQgBAJgCAHQgEAGgFAFQgGAEgHADIgQACQgLAAgJgDIgRgGIgLgKIgIgLQgHgNgCgQIAAiuIAiAAIAACgQAAAQADAIQAEAIAFAEQAFADAFABIAHABIACAAQAJAAAFgFQAGgFACgGIADgMIABgKIAAgDIAAigIAdAAIAACgIAAADIACAKIADAMQADAGAFAFQAFAFAJAAIACAAIAHgBQAEgBAFgDQAFgEAEgIQADgIAAgQIAAigIAjAAIAACuQgCAQgHANIgIALIgMAKIgQAGQgJADgMAAg");
	this.shape_11.setTransform(-92,-128.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRB2QgRAAgNgEQgMgDgIgGQgJgGgEgHIgIgOIgDgOIgBgKQAAgOAFgJQAFgJAHgHIAMgIIAHgDIgNgEIgJgHIgHgJIgFgJQgEgKgBgNQAAgOADgJIAGgRIAJgMIALgJQANgHAQgBIAuAAIAAAhIgbAAIgOABIgKAEIgHAGIgFAHQgFAIAAAKQAAAIACAGIAIAKIAJAGIAKAEIAIABIAEAAIAbAAIAAAgIgbAAIgQACIgKAFIgHAHIgDAIIgCAFIAAAEQAAAJADAGIAGAKIAIAFIAJAEIAIABIAEAAIABAAIAqAAQAMAAAHgFQAHgFAEgGQAEgIABgJIAAipIAkAAIAACpQAAAPgFALQgEALgHAHQgHAHgIAEIgQAHIgOADIgJABg");
	this.shape_12.setTransform(31.9,55.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVB1QgLgEgJgGQgIgFgHgIIgJgQIAHgDIAIgFIAJgEIAFgEQAEAJAHAGIANAHQAJADAIAAQAMgBAJgGIAIgGIAIgIIAFgMIACgOIAAhOQgCgMgFgLIgFgIIgHgIIgMgFIgNgCIgTACQgIACgHAEQgFAFgFAGIgIARIgkAAQADgPAFgNQAGgOALgKQAKgJAQgFQAQgGAVAAIAAAAIABAAIAJABIAQADIASAIQAJAGAIAJQAIAJAEANQAFAOABATIAABOQgCAXgIARIgKAPQgFAHgJAGQgIAFgLAEQgMADgOABQgPgBgLgDg");
	this.shape_13.setTransform(11.2,55.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAhIAAhBIAfAAIAABBg");
	this.shape_14.setTransform(-3.6,28.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHB4QgTAAgOgGQgOgGgKgIQgJgJgGgKIgIgVIgDgSIgBgMIAAgDIAAiSIAkAAIAACSQAAAPADAKQAFAKAFAHQAGAHAHADIANAFIAMACIAEABQAPAAAJgFQAJgEAHgGQAGgGADgIIAFgOIACgLIAAgGIAAiSIAjAAIAADrIgjAAIAAghIgDAMIgHAIIgIAHIgLAEQgMAEgPACg");
	this.shape_15.setTransform(-9.3,55.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AA3B2IAAhmIgCgLIgEgIIgFgKIgIgIQgGgDgHAAIhOAAIAACOIgiAAIAAjrIAiAAIAAA8IBOAAQAHgBAFgDIAJgJQAFgGACgKIAAgfIAjAAIAAAiIgBAJIgEALIgGAMIgJALIAMAPIAIASQAFAKAAANIAABmg");
	this.shape_16.setTransform(-31.8,55.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7CB44B").s().p("AhvIEQgxgOgkgXQglgWgZgcIgqg7QgohGgIhaIAAmjQAIhZAohGIAqg6QAZgdAlgXQAkgXAxgNQAwgOA/AAQA/AAAxAOQAwANAlAXQAkAXAaAdIAqA6QAoBGAIBZIAAGjQgIBagoBGIgqA7QgaAcgkAWQglAXgwAOQgxANg/AAQg/AAgwgNgAhrl0IgnAWIgjAiIgZAuQgJAbAAAiIAAGjQAAAkAJAcIAZAxIAjAiIAnAYQAwAVA7ADQA9gDAvgVIAogYIAjgiIAYgxQAJgcAAgkIAAmjQAAgigJgbIgYguIgjgiIgogWQgvgVg9gCQg7ACgwAVg");
	this.shape_17.setTransform(67.4,-35.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7CB44B").s().p("AhvIEQgxgOgkgXQglgWgZgcIgqg7QgohGgIhaIAAmjQAIhZAohGIAqg6QAZgdAlgXQAkgXAxgNQAwgOA/AAQA/AAAxAOQAwANAlAXQAkAXAaAdIAqA6QAoBGAIBZIAAGjQgIBagoBGIgqA7QgaAcgkAWQglAXgwAOQgxANg/AAQg/AAgwgNgAhrl0IgnAWIgjAiIgZAuQgJAbAAAiIAAGjQAAAkAJAcIAZAxIAjAiIAnAYQAwAVA7ADQA9gDAvgVIAogYIAjgiIAYgxQAJgcAAgkIAAmjQAAgigJgbIgYguIgjgiIgogWQgvgVg9gCQg7ACgwAVg");
	this.shape_18.setTransform(-15.4,-35.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7CB44B").s().p("AAqIHIAAr1QgmAbg0ATQg1AQhJADIAAiFIAYgBIApgGIA0gTQAagNAWgXQAWgYAPgjQAOglAAg1ICFAAIAAQMg");
	this.shape_19.setTransform(-83,-35.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C0212F").s().p("AlkPWIp/AAQizAAh/h/Qh/h/AAizIAA+KQAAi0B/h+QB/h/CzAAIfHAAQCzAAB/B/QB/B+AAC0IAAeKQAACzh/B/Qh/B/izAAIkZAAIpINBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.9,-181.5,285.9,363.1);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#040505").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");
	this.shape.setTransform(-45.2,52.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#221E1F").ss(1.5).p("AEqAAQAAB7hXBYQhYBXh7AAQh6AAhYhXQhXhYAAh7QAAh7BXhXQBYhYB6AAQB8AABXBYQBXBXAAB7g");
	this.shape_1.setTransform(-45.2,53);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0F3E1").s().p("AjSDTQhYhXAAh8QAAh6BYhYQBXhXB7gBQB8ABBXBXQBYBYAAB6QAAB8hYBXQhXBYh8gBQh7ABhXhYg");
	this.shape_2.setTransform(-45.2,53);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#040505").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");
	this.shape_3.setTransform(47.4,52.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#221E1F").ss(1.5).p("AEqAAQAAB7hXBYQhYBXh7AAQh7AAhXhXQhYhYAAh7QAAh7BYhXQBXhYB7AAQB7AABYBYQBXBXAAB7g");
	this.shape_4.setTransform(47.4,53);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0F3E1").s().p("AjSDTQhXhXgBh8QABh6BXhYQBYhXB6gBQB8ABBXBXQBYBYAAB6QAAB8hYBXQhXBYh8gBQh6ABhYhYg");
	this.shape_5.setTransform(47.4,53);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#040505").s().p("AvDCWIAAkrIeHAAIAAErg");
	this.shape_6.setTransform(0.2,30.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#969595").s().p("Au2HoIjovPMAk+AAAIjaPPg");
	this.shape_7.setTransform(0,-34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.3,-82.7,236.7,166.6);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#040505").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");
	this.shape.setTransform(-45.2,52.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#221E1F").ss(1.5).p("AEqAAQAAB7hXBYQhYBXh7AAQh6AAhYhXQhXhYAAh7QAAh7BXhXQBYhYB6AAQB8AABXBYQBXBXAAB7g");
	this.shape_1.setTransform(-45.2,53);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0F3E1").s().p("AjSDTQhYhXAAh8QAAh6BYhYQBXhXB7gBQB8ABBXBXQBYBYAAB6QAAB8hYBXQhXBYh8gBQh7ABhXhYg");
	this.shape_2.setTransform(-45.2,53);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#040505").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");
	this.shape_3.setTransform(47.4,52.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#221E1F").ss(1.5).p("AEqAAQAAB7hXBYQhYBXh7AAQh7AAhXhXQhYhYAAh7QAAh7BYhXQBXhYB7AAQB7AABYBYQBXBXAAB7g");
	this.shape_4.setTransform(47.4,53);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0F3E1").s().p("AjSDTQhXhXgBh8QABh6BXhYQBYhXB6gBQB8ABBXBXQBYBYAAB6QAAB8hYBXQhXBYh8gBQh6ABhYhYg");
	this.shape_5.setTransform(47.4,53);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#040505").s().p("AvDCWIAAkrIeHAAIAAErg");
	this.shape_6.setTransform(0.2,30.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#969595").s().p("Au2HoIjovPMAk+AAAIjaPPg");
	this.shape_7.setTransform(0,-34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.3,-82.7,236.7,166.6);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F45C30").s().p("EhY7ACRIAAkhMCx3AAAIAAEhg");
	this.shape.setTransform(0,77.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221E1F").s().p("AB1IjIAAsGQgCgrgOgjIgPgdIgXgZIgegSIgpgHIhDAKIgvAWIgcAYIgRAQIhvh0QAaghAogaIBUgoQAygTBFAAIAeACIA3AKIBEAcQAkATAeAjQAdAkAVA3QATA2AABQIAAMGg");
	this.shape_1.setTransform(512.8,-26.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#221E1F").s().p("Ai3CyIAAjLIhRAAIAAiYIChAAIAjALIAaAWQALAOAAAZIAACDIEoAAIAACYg");
	this.shape_2.setTransform(444.3,-152.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#221E1F").s().p("AB3LhQgkgMgZgVQgagVgQggQgPgfgBgqQAAAqgPAfQgPAggaAVQgbAVgiAMIhMAKQg3gBgqgMIhKgfIg2gtIgmgzQgkg+gJhNIAAs2ICiAAIAAL3QAABHASAnQASAmAXASQAXASAXADIAjADIAHAAQAqAAAZgXQAYgWAMgdIAQg7IACgtIAAgMIAAr3ICPAAIAAL3IAAAMIAFAtIAPA7QANAdAZAWQAYAXArAAIAIAAIAjgDQAWgDAWgSQAWgSARgmQAQgnABhHIAAx+ICiAAIAAS9QgJBNgjA+IglAzIg3AtIhLAfQgrAMg2ABg");
	this.shape_3.setTransform(427.7,-45.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221E1F").s().p("AB3LhQgkgMgZgVQgagVgQggQgPgfAAgqQgBAqgPAfQgPAggbAVQgZAVgjAMIhMAKQg2gBgrgMIhKgfIg2gtIgmgzQgjg+gJhNIAAs2ICiAAIAAL3QAABHASAnQAQAmAYASQAYASAXADIAiADIAHAAQAqAAAZgXQAYgWANgdIAOg7IAEgtIAAgMIAAr3ICPAAIAAL3IAAAMIADAtIARA7QANAdAYAWQAYAXArAAIAIAAIAigDQAXgDAWgSQAWgSASgmQAPgnAAhHIAAx+ICiAAIAAS9QgHBNgkA+IgmAzIg2AtIhLAfQgqAMg3ABg");
	this.shape_4.setTransform(308.8,-45.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#221E1F").s().p("ABiOKIAA3bIgLgqIgYgoIgkgoIiBCBIidjRIBlheIBEBkIBPh0QAzAHAnARIBEAnIAxAzIAfA3QAdBAAEBPIAAXbg");
	this.shape_5.setTransform(212.9,-62.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#221E1F").s().p("AEHIkIAArWQAAhDgXgxQgYgwgpgcIivByIithyQgqAdgYAvQgXAxAABDIAAGDQADA1AUApIAXAiIAgAeIAsAVIA9AIIB3AAIAACYIjZAAQhFgFg2gjIguglIgog5IgbhOIgLhpIAAnWQAMhvA/hQQA/hQBhglIC9B2IC/h2QBgAlBBBQQAfAnASAwQARAvAHA5IAAMTg");
	this.shape_6.setTransform(148.6,-26.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#221E1F").s().p("AkuBNIAAiZIJdAAIAACZg");
	this.shape_7.setTransform(49.7,-101.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#221E1F").s().p("AEJIjIAAlAQAAgvgVgfQgWghgfgUIhFggIhFgRIhKgJIgTACIgpAHIg2AQIg2AeIguA0QgWAegIAtIgDAaQAAAiASAZQARAYAaAQIA8AbIBBAPIA5AHIApABIAOAAIAACYIi1AAQg5AAgygZQgygYgmgpQglgrgVg3QgWg3AAg9QAAg8Acg9QAag+A/g6IBNg5IBPglIBOgUIBLgGIBoALIBUAWIBNAhIAAg+QAAgzgLgmIgehDIgqgwIgxggQg5gehKgEQhBAAguAYQgtAXgeAiQgdAigPAlIgXBAIirAAQAGhaAeg/QAcg/AqgpQAogrAwgYIBcgjIBPgQIAygDIAJAAQBlAABIAcQBHAaAvApQAvAqAbAyIApBhIAQBUIADA1IAAALIAAKVg");
	this.shape_8.setTransform(45.9,-26.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#221E1F").s().p("AB3IdQgjgLgagVQgagVgPgfQgPgggBgpQgBApgPAgQgPAfgaAVQgaAVgjALIhMAKQg2AAgrgMIhKggIg2gsIgmg0Qgjg+gKhNIAAs2IEHAAIAACYIhlAAIAAJgQAABHASAmQARAnAXASQAXARAYADIAiADIAHAAQArAAAYgWQAYgWAOgeIAPg7IADgsIAAgMIAAr4ICPAAIAAL4IAAAMIAEAsIARA7QANAeAZAWQAZAWAqAAIAIAAIAigDQAWgDAWgRQAVgSASgnQAQgmAAhHIAAr4ICiAAIAAM2QgIBNgkA+IglA0Ig3AsIhLAgQgqAMg3AAg");
	this.shape_9.setTransform(-60.4,-25.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#221E1F").s().p("AghInQhcAAhAgZQhBgbgqgnQgsgogYgwIglheIgQhUIgDg4IAAgNIAAqjICiAAIAAKjQAABFASAvQARAvAcAeQAaAeAgARIA+AYIA0AJIAaABQA/AAAsgTQArgTAcgdQAdgdAQgjIAXhAIAJg1IABgaIAAqjICiAAIAAQ+IiiAAIAAiYIgOA2IgeAnIgpAdIguAVQg4AThFAFg");
	this.shape_10.setTransform(-174.4,-25.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#221E1F").s().p("AB1IjIAAsGQgCgrgOgjIgPgdIgXgZIgegSIgpgHIhDAKIgvAWIgcAYIgRAQIhvh0QAaghAogaIBUgoQAygTBFAAIAeACIA3AKIBEAcQAkATAeAjQAdAkAVA3QATA2AABQIAAMGg");
	this.shape_11.setTransform(-266.5,-26.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#221E1F").s().p("AiBIVIhTgoQgogbgaggIBthqIARARIAfAXIAvAWIBBAKIAogIIAfgSIAWgbIAPgeQAPglADgvIAAp3IiZAAIAAiYIE7AAIAAMPQAABNgTA3QgVA2gdAjQgeAkgkAUIhFAcIg4ALIgcACQhGAAgygSg");
	this.shape_12.setTransform(-329.9,-25.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#221E1F").s().p("AiBIVIhTgoQgogbgaggIBuhqIARARIAeAXIAuAWIBBAKIApgIIAfgSIAXgbIAPgeQAOglADgvIAAp3IiZAAIAAiYIE7AAIAAMPQAABNgUA3QgTA2geAjQgeAkgkAUIhEAcIg4ALIgeACQhGAAgxgSg");
	this.shape_13.setTransform(-394.6,-25.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#221E1F").s().p("AisITQhPgag0geQg8gignguIBshpIAzAnIBKAlIBYAaIBfAKQAzAAApgMQApgNAdgYQAdgXAOgfQAQggAAgmQAAgogOgYIgegnIgkgUIgcgIIghgFIhBgLIhIgMIg3gKIgigIIgygTIg2ghIgyg1QgYgggOgrQgOgtAAg7QAAhYAfg9QAfg9AzgnQAzgmA/gRQBAgSBAAAQBDAAA3APIBgAhIBVAuIBTA5IhaCIIhFgtIg5geIg+gaIg9gSIgvgGIhIAHQgiAGgaATQgbARgPAfQgQAfAAAxQAAAyAbAcQAaAcAsAQIBfAXIBsARQA1AJAyAcQAxAaAnAnQAlAnAYAzQAWAyAAA5QAABUgeA+QgfA9gzApQg1AnhGAUQhHAThPAAQhuAAhOgYg");
	this.shape_14.setTransform(-468.7,-25.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#221E1F").s().p("AiROJIAAxMQAAgggOgeIglg+Igug/IgwhAIgjhDQgPgjAAgkIAMhoQALg4AegwQAfgwAzggQA0ggBQAAIGeAAIAACYIl3AAQgoADgfASIgaAUIgXAfIgQApIgGA4QAAAoANAaIAiAxIA1A9IBDBeIAMAmIAJAtIAEA9IAAQyg");
	this.shape_15.setTransform(-519.4,-62.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-569.2,-91.7,1138.5,183.6);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F45C30").s().p("EhY7ACRIAAkhMCx3AAAIAAEhg");
	this.shape.setTransform(0,77.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221E1F").s().p("AB1IjIAAsGQgCgrgOgjIgPgdIgXgZIgegSIgpgHIhDAKIgvAWIgcAYIgRAQIhvh0QAaghAogaIBUgoQAygTBFAAIAeACIA3AKIBEAcQAkATAeAjQAdAkAVA3QATA2AABQIAAMGg");
	this.shape_1.setTransform(512.8,-26.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#221E1F").s().p("Ai3CyIAAjLIhRAAIAAiYIChAAIAjALIAaAWQALAOAAAZIAACDIEoAAIAACYg");
	this.shape_2.setTransform(444.3,-152.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#221E1F").s().p("AB3LhQgkgMgZgVQgagVgQggQgPgfgBgqQAAAqgPAfQgPAggaAVQgbAVgiAMIhMAKQg3gBgqgMIhKgfIg2gtIgmgzQgkg+gJhNIAAs2ICiAAIAAL3QAABHASAnQASAmAXASQAXASAXADIAjADIAHAAQAqAAAZgXQAYgWAMgdIAQg7IACgtIAAgMIAAr3ICPAAIAAL3IAAAMIAFAtIAPA7QANAdAZAWQAYAXArAAIAIAAIAjgDQAWgDAWgSQAWgSARgmQAQgnABhHIAAx+ICiAAIAAS9QgJBNgjA+IglAzIg3AtIhLAfQgrAMg2ABg");
	this.shape_3.setTransform(427.7,-45.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221E1F").s().p("AB3LhQgkgMgZgVQgagVgQggQgPgfAAgqQgBAqgPAfQgPAggbAVQgZAVgjAMIhMAKQg2gBgrgMIhKgfIg2gtIgmgzQgjg+gJhNIAAs2ICiAAIAAL3QAABHASAnQAQAmAYASQAYASAXADIAiADIAHAAQAqAAAZgXQAYgWANgdIAOg7IAEgtIAAgMIAAr3ICPAAIAAL3IAAAMIADAtIARA7QANAdAYAWQAYAXArAAIAIAAIAigDQAXgDAWgSQAWgSASgmQAPgnAAhHIAAx+ICiAAIAAS9QgHBNgkA+IgmAzIg2AtIhLAfQgqAMg3ABg");
	this.shape_4.setTransform(308.8,-45.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#221E1F").s().p("ABiOKIAA3bIgLgqIgYgoIgkgoIiBCBIidjRIBlheIBEBkIBPh0QAzAHAnARIBEAnIAxAzIAfA3QAdBAAEBPIAAXbg");
	this.shape_5.setTransform(212.9,-62.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#221E1F").s().p("AEHIkIAArWQAAhDgXgxQgYgwgpgcIivByIithyQgqAdgYAvQgXAxAABDIAAGDQADA1AUApIAXAiIAgAeIAsAVIA9AIIB3AAIAACYIjZAAQhFgFg2gjIguglIgog5IgbhOIgLhpIAAnWQAMhvA/hQQA/hQBhglIC9B2IC/h2QBgAlBBBQQAfAnASAwQARAvAHA5IAAMTg");
	this.shape_6.setTransform(148.6,-26.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#221E1F").s().p("AkuBNIAAiZIJdAAIAACZg");
	this.shape_7.setTransform(49.7,-101.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#221E1F").s().p("AEJIjIAAlAQAAgvgVgfQgWghgfgUIhFggIhFgRIhKgJIgTACIgpAHIg2AQIg2AeIguA0QgWAegIAtIgDAaQAAAiASAZQARAYAaAQIA8AbIBBAPIA5AHIApABIAOAAIAACYIi1AAQg5AAgygZQgygYgmgpQglgrgVg3QgWg3AAg9QAAg8Acg9QAag+A/g6IBNg5IBPglIBOgUIBLgGIBoALIBUAWIBNAhIAAg+QAAgzgLgmIgehDIgqgwIgxggQg5gehKgEQhBAAguAYQgtAXgeAiQgdAigPAlIgXBAIirAAQAGhaAeg/QAcg/AqgpQAogrAwgYIBcgjIBPgQIAygDIAJAAQBlAABIAcQBHAaAvApQAvAqAbAyIApBhIAQBUIADA1IAAALIAAKVg");
	this.shape_8.setTransform(45.9,-26.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#221E1F").s().p("AB3IdQgjgLgagVQgagVgPgfQgPgggBgpQgBApgPAgQgPAfgaAVQgaAVgjALIhMAKQg2AAgrgMIhKggIg2gsIgmg0Qgjg+gKhNIAAs2IEHAAIAACYIhlAAIAAJgQAABHASAmQARAnAXASQAXARAYADIAiADIAHAAQArAAAYgWQAYgWAOgeIAPg7IADgsIAAgMIAAr4ICPAAIAAL4IAAAMIAEAsIARA7QANAeAZAWQAZAWAqAAIAIAAIAigDQAWgDAWgRQAVgSASgnQAQgmAAhHIAAr4ICiAAIAAM2QgIBNgkA+IglA0Ig3AsIhLAgQgqAMg3AAg");
	this.shape_9.setTransform(-60.4,-25.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#221E1F").s().p("AghInQhcAAhAgZQhBgbgqgnQgsgogYgwIglheIgQhUIgDg4IAAgNIAAqjICiAAIAAKjQAABFASAvQARAvAcAeQAaAeAgARIA+AYIA0AJIAaABQA/AAAsgTQArgTAcgdQAdgdAQgjIAXhAIAJg1IABgaIAAqjICiAAIAAQ+IiiAAIAAiYIgOA2IgeAnIgpAdIguAVQg4AThFAFg");
	this.shape_10.setTransform(-174.4,-25.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#221E1F").s().p("AB1IjIAAsGQgCgrgOgjIgPgdIgXgZIgegSIgpgHIhDAKIgvAWIgcAYIgRAQIhvh0QAaghAogaIBUgoQAygTBFAAIAeACIA3AKIBEAcQAkATAeAjQAdAkAVA3QATA2AABQIAAMGg");
	this.shape_11.setTransform(-266.5,-26.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#221E1F").s().p("AiBIVIhTgoQgogbgaggIBthqIARARIAfAXIAvAWIBBAKIAogIIAfgSIAWgbIAPgeQAPglADgvIAAp3IiZAAIAAiYIE7AAIAAMPQAABNgTA3QgVA2gdAjQgeAkgkAUIhFAcIg4ALIgcACQhGAAgygSg");
	this.shape_12.setTransform(-329.9,-25.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#221E1F").s().p("AiBIVIhTgoQgogbgaggIBuhqIARARIAeAXIAuAWIBBAKIApgIIAfgSIAXgbIAPgeQAOglADgvIAAp3IiZAAIAAiYIE7AAIAAMPQAABNgUA3QgTA2geAjQgeAkgkAUIhEAcIg4ALIgeACQhGAAgxgSg");
	this.shape_13.setTransform(-394.6,-25.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#221E1F").s().p("AisITQhPgag0geQg8gignguIBshpIAzAnIBKAlIBYAaIBfAKQAzAAApgMQApgNAdgYQAdgXAOgfQAQggAAgmQAAgogOgYIgegnIgkgUIgcgIIghgFIhBgLIhIgMIg3gKIgigIIgygTIg2ghIgyg1QgYgggOgrQgOgtAAg7QAAhYAfg9QAfg9AzgnQAzgmA/gRQBAgSBAAAQBDAAA3APIBgAhIBVAuIBTA5IhaCIIhFgtIg5geIg+gaIg9gSIgvgGIhIAHQgiAGgaATQgbARgPAfQgQAfAAAxQAAAyAbAcQAaAcAsAQIBfAXIBsARQA1AJAyAcQAxAaAnAnQAlAnAYAzQAWAyAAA5QAABUgeA+QgfA9gzApQg1AnhGAUQhHAThPAAQhuAAhOgYg");
	this.shape_14.setTransform(-468.7,-25.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#221E1F").s().p("AiROJIAAxMQAAgggOgeIglg+Igug/IgwhAIgjhDQgPgjAAgkIAMhoQALg4AegwQAfgwAzggQA0ggBQAAIGeAAIAACYIl3AAQgoADgfASIgaAUIgXAfIgQApIgGA4QAAAoANAaIAiAxIA1A9IBDBeIAMAmIAJAtIAEA9IAAQyg");
	this.shape_15.setTransform(-519.4,-62.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-569.2,-91.7,1138.5,183.6);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F45C30").s().p("AgRAVIgngcIB9hrIg/BiIAaAaIhlBpg");
	this.shape.setTransform(7,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,13.9,23), null);


(lib.Tween28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(1.3,0,1,1,0,0,0,7,11.5);
	this.instance.alpha = 0.5;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBF041").s().p("AhjBlQgqgqAAg7QAAg6AqgpQApgqA6AAQA7AAApAqQAqApAAA6QAAA7gqAqQgpApg7AAQg6AAgpgpg");
	this.shape.setTransform(0.8,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#342E32").s().p("AhBgeICEhZQgMC/gEAAQgFAAhmAwg");
	this.shape_1.setTransform(10.4,4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#342E32").s().p("Ag2A7IBth4IgvB7g");
	this.shape_2.setTransform(-11.4,-10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#201611").s().p("Ag/BYIgsjBIA/AFQCOA0AAAEIAKCWg");
	this.shape_3.setTransform(-6.1,6.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3B3539").s().p("Ah8CVIgsjBIBth6ICBAKIBkBUIgQC/IhsAwg");
	this.shape_4.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.9,-16.6,34,33.3);


(lib.Tween27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(-4.3,0,1,1,0,0,0,7,11.5);
	this.instance.alpha = 0.5;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBF041").s().p("AhjBlQgqgqAAg7QAAg6AqgpQApgqA6AAQA7AAApAqQAqApAAA6QAAA7gqAqQgpApg7AAQg6AAgpgpg");
	this.shape.setTransform(-4.8,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#342E32").s().p("AhBgeICEhZQgMC/gEAAQgFAAhmAwg");
	this.shape_1.setTransform(4.8,4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#342E32").s().p("Ag2A7IBth4IgvB7g");
	this.shape_2.setTransform(-17,-10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#201611").s().p("Ag/BYIgsjBIA/AFQCOA0AAAEIAKCWg");
	this.shape_3.setTransform(-11.7,6.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3B3539").s().p("Ah8CVIgsjBIBth6ICBAKIBkBUIgQC/IhsAwg");
	this.shape_4.setTransform(-5.5,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(255,255,255,0.529)").ss(1,1,1).p("AglAAIBLAA");
	this.shape_5.setTransform(16.8,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,153,255,0.529)").ss(1,1,1).p("AgJAAIATAA");
	this.shape_6.setTransform(21.6,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-16.6,46.1,33.3);


(lib.fire = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween17("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(48.3,59.2,1,1,0,0,0,0,29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:29.7,scaleX:0.73,scaleY:0.73,y:59.3},14).wait(1).to({startPosition:0},0).to({regX:0,regY:29.6,scaleX:1,scaleY:1,y:59.2},14).wait(1).to({startPosition:0},0).to({regX:0.1,regY:29.7,scaleX:0.73,scaleY:0.73,y:59.3},14).wait(1).to({startPosition:0},0).to({regX:0,regY:29.6,scaleX:1,scaleY:1,y:59.2},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96.5,59.1);


(lib.e = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Tween27("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(22.5,332.9);

	this.instance_1 = new lib.Tween28("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(241.5,332.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:241.5,y:332.8},9).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},9).to({y:-2.9},15).to({x:873.1},10).to({_off:true},1).wait(27));

	// Layer 1 copy 2
	this.instance_2 = new lib.Tween27("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(22.5,332.9);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween28("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(241.5,332.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({_off:true,x:241.5,y:332.8},9).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},9).to({y:-2.9},15).to({x:873.1},10).to({_off:true},1).wait(24));

	// Layer 1 copy 3
	this.instance_4 = new lib.Tween27("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(22.5,332.9);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween28("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(241.5,332.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({_off:true,x:241.5,y:332.8},9).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},9).to({y:-2.9},15).to({x:873.1},10).to({_off:true},1).wait(21));

	// Layer 1 copy 4
	this.instance_6 = new lib.Tween27("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(22.5,332.9);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween28("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(241.5,332.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21).to({_off:false},0).to({_off:true,x:241.5,y:332.8},9).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({_off:false},9).to({y:-2.9},15).to({x:873.1},10).to({_off:true},1).wait(6));

	// Layer 1 copy 5
	this.instance_8 = new lib.Tween27("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(22.5,332.9);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween28("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(241.5,332.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({_off:false},0).to({_off:true,x:241.5,y:332.8},9).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(24).to({_off:false},9).to({y:-2.9},15).to({x:873.1},10).to({_off:true},1).wait(3));

	// Layer 1
	this.instance_10 = new lib.Tween27("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(22.5,332.9);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween28("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(241.5,332.8);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(27).to({_off:false},0).to({_off:true,x:241.5,y:332.8},9).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(27).to({_off:false},9).to({y:-2.9},15).to({x:873.1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,316.3,46.1,33.4);


// stage content:
(lib._037_Factory = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// หัวข้อเปิด
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F45C30").s().p("EhY7ACRIAAkhMCx3AAAIAAEhg");
	this.shape.setTransform(971.1,616.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221E1F").s().p("AB1IjIAAsGQgCgrgOgjIgPgdIgXgZIgegSIgpgHIhDAKIgvAWIgcAYIgRAQIhvh0QAaghAogaIBUgoQAygTBFAAIAeACIA3AKIBEAcQAkATAeAjQAdAkAVA3QATA2AABQIAAMGg");
	this.shape_1.setTransform(1483.9,512.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#221E1F").s().p("Ai3CyIAAjLIhRAAIAAiYIChAAIAjALIAaAWQALAOAAAZIAACDIEoAAIAACYg");
	this.shape_2.setTransform(1415.4,387.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#221E1F").s().p("AB3LgQgkgKgZgWQgagVgPggQgQgfgBgpQAAApgPAfQgPAggaAVQgaAWgjAKIhMALQg2AAgrgNIhKgfIg2gsIgmg0Qgkg+gJhNIAAs2ICiAAIAAL3QAABHASAnQASAnAXARQAXARAXAEIAjADIAHAAQAqAAAZgXQAYgVAMgeIAQg7IACgsIAAgNIAAr3ICPAAIAAL3IAAANIAFAsIAPA7QANAeAZAVQAYAXArAAIAIAAIAjgDQAVgEAXgRQAWgRARgnQAQgnABhHIAAx+ICiAAIAAS9QgJBNgjA+IglA0Ig3AsIhLAfQgrANg2AAg");
	this.shape_3.setTransform(1398.8,494.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221E1F").s().p("AB3LgQgjgKgagWQgagVgQggQgPgfAAgpQgBApgPAfQgPAggbAVQgZAWgjAKIhMALQg2AAgrgNIhKgfIg3gsIglg0Qgkg+gIhNIAAs2ICiAAIAAL3QAABHASAnQAQAnAYARQAYARAWAEIAjADIAHAAQAqAAAZgXQAYgVANgeIAOg7IAEgsIAAgNIAAr3ICPAAIAAL3IAAANIADAsIARA7QANAeAYAVQAYAXArAAIAIAAIAigDQAXgEAWgRQAWgRASgnQAPgnAAhHIAAx+ICiAAIAAS9QgHBNgkA+IgmA0Ig2AsIhLAfQgqANg3AAg");
	this.shape_4.setTransform(1279.9,494.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#221E1F").s().p("ABiOKIAA3bIgLgqIgYgoIgkgoIiBCBIidjRIBlheIBEBkIBPh0QAzAHAnARIBEAnIAxAzIAfA3QAdBAAEBPIAAXbg");
	this.shape_5.setTransform(1184,476.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#221E1F").s().p("AEHIkIAArWQAAhDgXgxQgYgwgpgcIivByIithyQgqAdgYAvQgXAxAABDIAAGDQADA1AUApIAXAiIAgAeIAsAVIA9AIIB3AAIAACYIjZAAQhFgFg2gjIguglIgog5IgbhOIgLhpIAAnWQAMhvA/hQQA/hQBhglIC9B2IC/h2QBgAlBBBQQAfAnASAwQARAvAHA5IAAMTg");
	this.shape_6.setTransform(1119.7,512.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#221E1F").s().p("AkuBOIAAiaIJdAAIAACag");
	this.shape_7.setTransform(1020.8,438.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#221E1F").s().p("AEJIjIAAlAQAAgvgVgfQgWghgfgUIhFggIhFgRIhKgJIgTACIgpAHIg2AQIg2AeIguA0QgWAegIAtIgDAaQAAAiASAZQARAYAaAQIA8AbIBBAPIA5AHIApABIAOAAIAACYIi1AAQg5AAgygZQgygYgmgpQglgrgVg3QgWg3AAg9QAAg8Acg9QAag+A/g6IBNg5IBPglIBOgUIBLgGIBoALIBUAWIBNAhIAAg+QAAgzgLgmIgehDIgqgwIgxggQg5gehKgEQhBAAguAYQgtAXgeAiQgdAigPAlIgXBAIirAAQAGhaAeg/QAcg/AqgpQAogrAwgYIBcgjIBPgQIAygDIAJAAQBlAABIAcQBHAaAvApQAvAqAbAyIApBhIAQBUIADA1IAAALIAAKVg");
	this.shape_8.setTransform(1017,512.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#221E1F").s().p("AB3IdQgjgLgagVQgagVgPgfQgPgggBgpQgBApgPAgQgPAfgaAVQgaAVgjALIhMAKQg2AAgrgMIhKggIg2gsIgmg0Qgjg+gKhNIAAs2IEHAAIAACYIhlAAIAAJgQAABHASAmQARAnAXASQAXARAYADIAiADIAHAAQArAAAYgWQAYgWAOgeIAPg7IADgsIAAgMIAAr4ICPAAIAAL4IAAAMIAEAsIARA7QANAeAZAWQAZAWAqAAIAIAAIAigDQAWgDAWgRQAVgSASgnQAQgmAAhHIAAr4ICiAAIAAM2QgIBNgkA+IglA0Ig3AsIhLAgQgqAMg3AAg");
	this.shape_9.setTransform(910.7,513.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#221E1F").s().p("AghInQhcAAhAgZQhBgbgqgnQgsgogYgwIglheIgQhUIgDg4IAAgNIAAqjICiAAIAAKjQAABFASAvQARAvAcAeQAaAeAgARIA+AYIA0AJIAaABQA/AAAsgTQArgTAcgdQAdgdAQgjIAXhAIAJg1IABgaIAAqjICiAAIAAQ+IiiAAIAAiYIgOA2IgeAnIgpAdIguAVQg4AThFAFg");
	this.shape_10.setTransform(796.7,513.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#221E1F").s().p("AB1IjIAAsGQgCgrgOgjIgPgdIgXgZIgegSIgpgHIhDAKIgvAWIgcAYIgRAQIhvh0QAaghAogaIBUgoQAygTBFAAIAeACIA3AKIBEAcQAkATAeAjQAdAkAVA3QATA2AABQIAAMGg");
	this.shape_11.setTransform(704.6,512.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#221E1F").s().p("AiBIVIhTgoQgogbgaggIBthqIASARIAeAXIAvAWIBBAKIAogIIAfgSIAWgbIAPgeQAPglADgvIAAp3IiZAAIAAiYIE7AAIAAMPQAABNgTA3QgVA2gdAjQgeAkgkAUIhFAcIg4ALIgcACQhGAAgygSg");
	this.shape_12.setTransform(641.2,513.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#221E1F").s().p("AiBIVIhTgoQgogbgaggIBuhqIARARIAeAXIAuAWIBBAKIApgIIAfgSIAXgbIAPgeQAOglADgvIAAp3IiZAAIAAiYIE7AAIAAMPQAABNgUA3QgTA2geAjQgeAkgkAUIhEAcIg4ALIgeACQhGAAgxgSg");
	this.shape_13.setTransform(576.5,513.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#221E1F").s().p("AisITQhPgag0geQg8gignguIBshpIAzAnIBKAlIBYAaIBfAKQAyAAAqgMQApgNAdgYQAdgXAOgfQAQggAAgmQAAgogOgYIgegnIgkgUIgcgIIghgFIhBgLIhIgMIg3gKIgigIIgygTIg2ghIgyg1QgYgggOgrQgOgtAAg7QAAhYAfg9QAfg9AzgnQAzgmA/gRQBAgSBAAAQBDAAA3APIBgAhIBVAuIBTA5IhaCIIhFgtIg5geIg+gaIg9gSIgvgGIhIAHQgiAGgaATQgbARgPAfQgQAfAAAxQAAAyAbAcQAaAcAsAQIBfAXIBsARQA1AJAyAcQAxAaAnAnQAlAnAYAzQAWAyAAA5QAABUgeA+QgfA9gzApQg1AnhGAUQhHAThPAAQhuAAhOgYg");
	this.shape_14.setTransform(502.4,513.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#221E1F").s().p("AiROJIAAxMQAAgggOgeIglg+Igug/IgwhAIgjhDQgPgjAAgkIAMhoQALg4AegwQAfgwAzggQA0ggBQAAIGeAAIAACYIl3AAQgoADgfASIgaAUIgXAfIgQApIgGA4QAAAoANAaIAiAxIA1A9IBDBeIAMAmIAJAtIAEA9IAAQyg");
	this.shape_15.setTransform(451.7,476.9);

	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(971.1,539.4);
	this.instance._off = true;

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(424.9,140.2,0.485,0.485,0,0,0,113.5,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},15).to({state:[{t:this.instance_1}]},14).wait(520));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({_off:true,regX:113.5,regY:0.2,scaleX:0.49,scaleY:0.49,x:424.9,y:140.2},14).wait(520));

	// พลังงานเปิด
	this.instance_2 = new lib.Tween53("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(960,540,0.061,0.061);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween54("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(960,540);

	this.instance_4 = new lib.Tween55("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(960,540);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween56("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(960,540,0.07,0.07);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},22).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_4}]},32).to({state:[{t:this.instance_5}]},15).to({state:[]},1).wait(469));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1},10).wait(517));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(64).to({_off:false},0).to({_off:true,scaleX:0.07,scaleY:0.07},15).wait(470));

	// รถ
	this.instance_6 = new lib.Tween7("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-151.7,895);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween8("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(259,895);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},45).to({state:[{t:this.instance_7}]},17).wait(487));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45).to({_off:false},0).to({_off:true,x:259},17).wait(487));

	// วัตถุดิบโหลด
	this.instance_8 = new lib.Tween57("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-151.8,791.1);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween58("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(259.1,790.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(45).to({_off:false},0).to({_off:true,x:259.1,y:790.6},17).wait(487));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(45).to({_off:false},17).wait(77).to({regX:-0.1,regY:21.7,x:259,y:812.3},0).to({regX:0,regY:21.3,scaleX:0.26,scaleY:0.26,x:748.6,y:806.3},30).to({_off:true},1).wait(379));

	// 100
	this.instance_10 = new lib.Tween11("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(245.9,728.4,0.065,0.065,0,0,0,0,181.6);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween12("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(245.9,728.4,1,1,0,0,0,0,181.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(79).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1},10).wait(460));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(79).to({_off:false},10).wait(80).to({startPosition:0},0).to({scaleX:0.07,scaleY:0.07},10).to({_off:true},1).wait(369));

	// fire move
	this.instance_12 = new lib.fire();
	this.instance_12.parent = this;
	this.instance_12.setTransform(742.2,710.9,1,1,0,0,0,48.2,29.6);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(180).to({_off:false},0).wait(369));

	// ไฟ
	this.instance_13 = new lib.Tween16("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(742.3,740.4,1,0.5,0,0,0,0,29.6);
	this.instance_13._off = true;

	this.instance_14 = new lib.fire();
	this.instance_14.parent = this;
	this.instance_14.setTransform(742.2,740.4,1,1,0,0,0,48.2,59.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},169).to({state:[{t:this.instance_13}]},9).to({state:[{t:this.instance_14}]},1).to({state:[]},1).wait(369));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(169).to({_off:false},0).to({regY:29.7,scaleY:0.95,y:740.5},9).to({_off:true,regX:48.2,regY:59.1,scaleY:1,x:742.2,y:740.4,mode:"independent"},1).wait(370));

	// Layer 3
	this.instance_15 = new lib.Tween19("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(742.4,744,1,1,0,0,0,0.1,39.7);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(169).to({_off:false},0).wait(380));

	// y
	this.instance_16 = new lib.Tween21("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(873.5,765.3,0.02,0.02,0,0,0,-127.7,145.6);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween22("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(873.6,765.2,1,1,0,0,0,-127.7,145.1);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(184).to({_off:false},0).to({scaleX:0.61,scaleY:0.61,x:873.6,y:765.2},3).to({_off:true,regY:145.1,scaleX:1,scaleY:1},2).wait(360));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(187).to({_off:false},2).wait(106).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({regX:-127.5,scaleX:0.09,scaleY:0.09},13).to({_off:true},1).wait(239));

	// พลงงาน
	this.instance_18 = new lib.e();
	this.instance_18.parent = this;
	this.instance_18.setTransform(1107.5,870.9,1,1,0,0,0,22.8,332.9);

	this.instance_19 = new lib.e();
	this.instance_19.parent = this;
	this.instance_19.setTransform(1519.9,713.1,1,1,0,0,0,435.2,174.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_19},{t:this.instance_18}]},189).wait(360));

	// g
	this.instance_20 = new lib.Tween29("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(1745,503.7,0.03,0.031,0,0,0,1.7,166.3);
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween30("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(1745,503.6,1,1,0,0,0,0,165.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20}]},309).to({state:[{t:this.instance_21}]},9).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(309).to({_off:false},0).to({_off:true,regX:0,regY:165.1,scaleX:1,scaleY:1,y:503.6},9).wait(231));

	// โรงงาน
	this.instance_22 = new lib.Tween13("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(1148.2,975,0,0.064,0,0,0,0,397.9);
	this.instance_22._off = true;

	this.instance_23 = new lib.Tween14("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(1148.2,975.1,1,1,0,0,0,0,397.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_22}]},104).to({state:[{t:this.instance_23}]},15).wait(430));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(104).to({_off:false},0).to({_off:true,regY:397.6,scaleX:1,scaleY:1,y:975.1},15).wait(430));

	// bG
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F0F3E1").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_16.setTransform(959,540);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(549));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(959,540,1920,1080);
// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;