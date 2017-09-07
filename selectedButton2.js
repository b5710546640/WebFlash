var gameOptions = {
	width: 1920,
	height: 1080
};

var myGame = new Kiwi.Game("layer2","kiwiLayer",null,gameOptions);
var myState = new Kiwi.State("myState");
var loadingState = new Kiwi.State('loadingState');
var preloader = new Kiwi.State('preloader');

myState.preload = function(){
  Kiwi.State.prototype.preload.call(this);

}

myState.create = function(){
  Kiwi.State.prototype.create.call( this );
  this.background = new Kiwi.GameObjects.StaticImage(this, this.textures.background, 0, 0);
  this.character = new Pointer( this, this.textures.characterSprite, 900, 500 );
  this.character.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this.character, this.character.box));
  this.nuclear = new Button( this, this.textures.nuclear,298,150);
  this.water = new Button( this, this.textures.water, 656,150);
	this.wind = new Button( this, this.textures.wind, 1014,150);
  this.coal = new Button( this, this.textures.coal, 1372,150);
  this.sun = new Button( this, this.textures.sun, 298,473);
  this.underworld = new Button( this, this.textures.underworld, 656,473);
  this.petroleum = new Button( this, this.textures.petroleum, 1014,473);
	this.fire = new Button( this, this.textures.fire, 1372,473);

  // this.belt = new Belt(this,this.textures.belt, 0,800);


  this.addChild(this.background);
  // this.addChild(this.belt);
	this.addChild(this.sun);
	this.addChild(this.underworld);
	this.addChild(this.petroleum);
	this.addChild(this.fire);
  this.addChild( this.character );
  this.addChild(this.nuclear);
  this.addChild(this.water);
	this.addChild(this.wind);
  this.addChild(this.coal);
  this.control = Kiwi.Plugins.LEAPController.createController();
}

myState.update = function(){
  Kiwi.State.prototype.update.call(this);

      if(this.control.hands[0].pointables[0].touchZone == "none"){
        console.log('none');
        this.character.animation.play('point');

    }else if(this.control.hands[0].pointables[0].touchZone == "hovering"){

			let xVal = this.control.hands[0].pointables[0].tipX;
			let yVal = (this.control.hands[0].pointables[0].tipY);

				//กำหนดให้ LEAP รู้ว่าเอามือลงโดยการอ้างอิงจากแกนYที่ตำแหน่ง 200
				if(yVal <= 200) yVal = (200 - yVal);
				else yVal = -1*(yVal -200);

				//ดักขอบ
				if(this.character.x + xVal*0.05 <0 ) this.character.x = (-1*(this.character.x + xVal*0.05));
				else if(xVal > 1920 - this.character.x){
					this.character.x = 1920 - xVal;
				} else this.character.x += xVal*0.05;
				if(this.character.y + yVal*0.019 <0 ) this.character.y = (-1*(this.character.y + yVal*0.019));
				else if(yVal > 900- this.character.y){
					this.character.y = 900 - yVal;
				} else this.character.y += yVal*0.019;


        if(this.character.physics.overlaps(this.nuclear)){
            console.log("Change color");
            this.nuclear.animation.play('float');
        }else if (this.character.physics.overlaps(this.water)) {
            this.water.animation.play('float');
        }else if (this.character.physics.overlaps(this.coal)) {
            this.coal.animation.play('float');
        }else if (this.character.physics.overlaps(this.fire)) {
            this.fire.animation.play('float');
        }else if (this.character.physics.overlaps(this.petroleum)) {
            this.petroleum.animation.play('float');
        }else if (this.character.physics.overlaps(this.sun)) {
            this.sun.animation.play('float');
        }else if (this.character.physics.overlaps(this.wind)) {
            this.wind.animation.play('float');
        }else if (this.character.physics.overlaps(this.underworld)) {
            this.underworld.animation.play('float');
        }
        console.log('hovering');
    } else if(this.control.hands[0].pointables[0].touchZone == "touching"){
        if(this.character.physics.overlaps(this.nuclear)){
            this.nuclear.physics.velocity.y = 70;
        }else if (this.character.physics.overlaps(this.water)) {
            this.water.physics.velocity.y = 70;
        }else if (this.character.physics.overlaps(this.coal)) {
            this.coal.physics.velocity.y = 70;
        }else if (this.character.physics.overlaps(this.fire)) {
            this.fire.physics.velocity.y = 70;
        }else if (this.character.physics.overlaps(this.petroleum)) {
            this.petroleum.physics.velocity.y = 70;
        }else if (this.character.physics.overlaps(this.sun)) {
            this.sun.physics.velocity.y = 70;
        }else if (this.character.physics.overlaps(this.wind)) {
            this.wind.physics.velocity.y = 70;
        }else if (this.character.physics.overlaps(this.underworld)) {
            this.underworld.physics.velocity.y = 70;
        }
        this.character.animation.play('press');


    }

}

var Button = function (state,image, x, y){
    Kiwi.GameObjects.Sprite.call(this, state, image, x, y);


    this.animation.add('float', [0], 0.05, false);
    this.animation.add('lay', [1], 0.05, true);
    this.animation.play('lay');

    this.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this, this.box));

    Button.prototype.update = function(){
        Kiwi.GameObjects.Sprite.prototype.update.call(this);
        this.physics.update();
				this.fallen();
    }

		this.fallen = function(){
			this.animation.play('lay');
			if(this.y >= 600 ){
				console.log(this.y);
				this.physics.velocity.y = 0;
				this.x += 4.07;
			}
		}
}
Kiwi.extend(Button,Kiwi.GameObjects.Sprite);

var Belt = function (state,image, x, y){
    Kiwi.GameObjects.Sprite.call(this, state, image, x, y);

    this.animation.add('start', [2], 0.1, false);
    this.animation.play('start');

    this.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this, this.box));
    Button.prototype.update = function(){
        Kiwi.GameObjects.Sprite.prototype.update.call(this);
        this.physics.update();
        this.animation.play('end');

    }


}
Kiwi.extend(Belt,Kiwi.GameObjects.Sprite);

var Pointer = function (state,image, x, y){
    Kiwi.GameObjects.Sprite.call(this, state, image, x, y);

    this.animation.add( "point", [ 0 ], 0.01, false );
    this.animation.add( "press", [ 1 ], 0.01, false );
    this.animation.play('point');

    this.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this, this.box));
    Button.prototype.update = function(){
        Kiwi.GameObjects.Sprite.prototype.update.call(this);
        this.physics.update();
        this.animation.play('point');

    }
}
Kiwi.extend(Pointer,Kiwi.GameObjects.Sprite);

preloader.preload = function(){
    Kiwi.State.prototype.preload.call(this);
    // this.addImage('loadingImage', 'assets/loadingImage.png', true);


}

preloader.create = function(){
    Kiwi.State.prototype.create.call(this);
    this.game.states.switchState('loadingState');

}

loadingState.preload = function(){
    Kiwi.State.prototype.preload.call(this);


    ////////////////
    //ASSETS TO LOAD
///////////////////////////////////////
	//Environment Assets
	this.addSpriteSheet('characterSprite','pointer.png',125,75);
	this.addSpriteSheet('underworld','button/btn1_underworld.png',250,300);
	this.addSpriteSheet('nuclear','button/btn2_nuclear.png',250,300);
	this.addSpriteSheet('wind','button/btn3_wind.png',250,300);
	this.addSpriteSheet('sun','button/btn4_sun.png',250,300);
	this.addSpriteSheet('water','button/btn5_water.png',250,300);
	this.addSpriteSheet('fire','button/btn6_fire.png',250,300);
	this.addSpriteSheet('coal','button/btn7_coal.png',250,300);
	this.addSpriteSheet('petroleum','button/btn8_petroleum.png',250,300);
	this.addSpriteSheet('belt','test-belt.png',1920,20);
	this.addImage('background','background.png');

}

loadingState.update = function(){
    Kiwi.State.prototype.update.call(this);
}


loadingState.create = function(){
    Kiwi.State.prototype.create.call(this);
    console.log("inside create of loadingState");
    this.switchToMain();

}
loadingState.switchToMain = function(){
    this.game.states.switchState('myState');
}

myGame.states.addState(loadingState);
myGame.states.addState(preloader);
myGame.states.addState(myState);
myGame.states.switchState('preloader');
