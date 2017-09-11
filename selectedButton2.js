var gameOptions = {
	width: 1920,
	height: 1080
};

var myGame = new Kiwi.Game("layer2","kiwiLayer",null,gameOptions);
var myState = new Kiwi.State("myState");
var loadingState = new Kiwi.State('loadingState');
var preloader = new Kiwi.State('preloader');
let isloadingSomePage = false;

myState.preload = function(){
  Kiwi.State.prototype.preload.call(this);

}

myState.create = function(){
  Kiwi.State.prototype.create.call( this );
  this.background = new Kiwi.GameObjects.StaticImage(this, this.textures.background, 0, 0);
  this.character = new Pointer( this, this.textures.characterSprite, 900, 500 );
  this.character.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this.character, this.character.box));
	this.buttonGroup = new Kiwi.Group(this);
	this.coal = new Button( this, this.textures.coal,298,150);
  this.petroleum = new Button( this, this.textures.petroleum, 656,150);
	this.nuclear = new Button( this, this.textures.nuclear, 1014,150);
  this.gas = new Button( this, this.textures.gas, 1372,150);
  this.water = new Button( this, this.textures.water, 298,473);
  this.sun = new Button( this, this.textures.sun, 656,473);
  this.wind = new Button( this, this.textures.wind, 1014,473);
	this.underworld = new Button( this, this.textures.underworld, 1372,473);


  this.addChild(this.background);

	this.buttonGroup.addChild(this.underworld);
	this.buttonGroup.addChild(this.wind);
	this.buttonGroup.addChild(this.sun);
	this.buttonGroup.addChild(this.water);
	this.buttonGroup.addChild(this.gas);
	this.buttonGroup.addChild(this.nuclear);
	this.buttonGroup.addChild(this.petroleum);
	this.buttonGroup.addChild(this.coal);

	this.addChild( this.buttonGroup );
  this.addChild( this.character );

  this.control = Kiwi.Plugins.LEAPController.createController();
}

myState.update = function(){
  Kiwi.State.prototype.update.call(this);

	console.log(isloadingSomePage);

	if( this.petroleum.isDown ){
		this.petroleum.physics.velocity.y = 70;
	}

// console.log(this.game.input.mouse.x);
// console.log(this.game.input.mouse.y);
	// if(this.game.input.mouse.overlaps(this.nuclear)){
	// 		console.log("Change color");
	// 		this.nuclear.animation.play('float');
	// }

    if(this.control.hands[0].pointables[0].touchZone == "none"){
        console.log('none');
        this.character.animation.play('point');

    }else if(this.control.hands[0].pointables[0].touchZone == "hovering"){
			let xVal = this.control.hands[0].posX;
			let yVal = (this.control.hands[0].posY);

			//กำหนดให้ LEAP รู้ว่าเอามือลงโดยการอ้างอิงจากแกนYที่ตำแหน่ง 150
			if(yVal <= 150) yVal = (150 - yVal);
			else yVal = -1*(yVal -150);

			let newX = this.character.x + xVal*0.25;
			let newY = this.character.y + yVal*0.20;

			//ดักขอบ
			if(newX < 20 || newX >1800) newX = (-1*(newX));
			if(newY < 10 || newY > 700) newY = (-1*(newY));

			//Updateตำแหน่งมือ
			this.character.x = newX;
			this.character.y = newY;

			this.updateButtonAnimation();
      console.log('hovering');
    } else if(this.control.hands[0].posZ < -100){
			this.updateTheVelocity();
      this.character.animation.play('press');

    }


}

myState.updateButtonAnimation = function(){
	var chkBtn = this.buttonGroup.members;
	for (var i = 0; i < chkBtn.length; i++) {
		if(this.character.physics.overlaps(chkBtn[i])){
				console.log("Change color");
				chkBtn[i].animation.play('float');
		}
	}

}

myState.updateTheVelocity = function(){

	var chkBtn = this.buttonGroup.members;
	for (var i = 0; i < chkBtn.length; i++) {
		if(this.character.physics.overlaps(chkBtn[i]) && !isloadingSomePage){
				console.log("this fall when "+isloadingSomePage );
				chkBtn[i].physics.velocity.y = 70;
		}
	}

}

var Button = function (state,image, x, y){
    Kiwi.Plugins.GameObjects.TouchButton.call(this, state, image, x, y);


    this.animation.add('float', [0], 0.05, false);
    this.animation.add('lay', [1], 0.05, true);
    this.animation.play('lay');

    this.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this, this.box));

		// game.input.mouse.onDown.add( this.fallen, this );

    Button.prototype.update = function(){
        Kiwi.GameObjects.Sprite.prototype.update.call(this);
        this.physics.update();
				this.loadedFinish();
				// if( this.isDown ){
				// 	this.physics.velocity.y = 70;
				// }
				this.fallen();
    };

		this.isLoad = function(){
			if(this.y === 600 && this.x >= 1920)
			return false;
			return true;
		}

		this.fallen = function(){
			this.animation.play('lay');
			if(this.y >= 600){
				console.log(this.y);
				this.physics.velocity.y = 0;
				this.x += 4.07;
			}
		};

		this.loadedFinish = function(){
			if(this.physics.velocity.y > 0){
				isloadingSomePage = true;
				this.fallen();
			}
		};


}
Kiwi.extend(Button, Kiwi.Plugins.GameObjects.TouchButton);


var Pointer = function (state,image, x, y){
    Kiwi.GameObjects.Sprite.call(this, state, image, x, y);

    this.animation.add( "point", [ 0 ], 0.01, false );
    this.animation.add( "press", [ 1 ], 0.01, false );
    this.animation.play('point');

    this.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this, this.box));
    Pointer.prototype.update = function(){
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
	this.addSpriteSheet('characterSprite','pointer.png',100,125);
	this.addSpriteSheet('underworld','button/btn1_underworld.png',250,300);
	this.addSpriteSheet('nuclear','button/btn2_nuclear.png',250,300);
	this.addSpriteSheet('wind','button/btn3_wind.png',250,300);
	this.addSpriteSheet('sun','button/btn4_sun.png',250,300);
	this.addSpriteSheet('water','button/btn5_water.png',250,300);
	this.addSpriteSheet('gas','button/btn6_gas.png',250,300);
	this.addSpriteSheet('coal','button/btn7_coal.png',250,300);
	this.addSpriteSheet('petroleum','button/btn8_petroleum.png',250,300);

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
