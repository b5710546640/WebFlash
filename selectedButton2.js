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
  this.character = new Pointer( this, this.textures.characterSprite, 350, 100 );
  this.character.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this.character, this.character.box));
  this.nuclear = new Button( this, this.textures.nuclear,500,225);
  this.water = new Button( this, this.textures.water, 850,225);
  this.coal = new Button( this, this.textures.coal, 1200,225);
  this.nuclear2 = new Button( this, this.textures.nuclear, 500,550);
  this.water2 = new Button( this, this.textures.water, 850,550);
  this.coal2 = new Button( this, this.textures.coal, 1200,550);

  // this.belt = new Belt(this,this.textures.belt, 0,800);


  this.addChild(this.background);
  // this.addChild(this.belt);
  this.addChild( this.character );
  this.addChild(this.nuclear);
  this.addChild(this.water);
  this.addChild(this.coal);
	this.addChild(this.nuclear2);
  this.addChild(this.water2);
  this.addChild(this.coal2);

  this.control = Kiwi.Plugins.LEAPController.createController();
}

myState.update = function(){
  Kiwi.State.prototype.update.call(this);
      this.character.x = (this.control.hands[0].pointables[0].tipX* 1.7) + 400;
      this.character.y =((-1 * this.control.hands[0].pointables[0].tipY)*1.7) + 600;


      if(this.control.hands[0].pointables[0].touchZone == "none"){
        console.log('none');
        this.character.animation.play('point');

    }else if(this.control.hands[0].pointables[0].touchZone == "hovering"){
        if(this.character.physics.overlaps(this.nuclear)){
            console.log("Change color");
            this.nuclear.animation.play('float');
        }else if (this.character.physics.overlaps(this.water)) {
            this.water.animation.play('float');
        }else if (this.character.physics.overlaps(this.coal)) {
            this.coal.animation.play('float');
        }
        console.log('hovering');
    } else if(this.control.hands[0].pointables[0].touchZone == "touching"){
        if(this.character.physics.overlaps(this.nuclear)){
            console.log("Change color");
            this.nuclear.physics.velocity.y = 10;
        }else if (this.character.physics.overlaps(this.water)) {
            this.water.physics.velocity.y = 10;
        }else if (this.character.physics.overlaps(this.coal)) {
            this.water.physics.velocity.y = 10;
        }
        this.character.animation.play('press');


    }

}

var Button = function (state,image, x, y){
    Kiwi.GameObjects.Sprite.call(this, state, image, x, y);

		this.scaleX = 2;
		this.scaleY = 2;

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
			if(this.y >= 775 ){
				this.physics.velocity.y = 0;
				this.x += 2.75;
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
	this.addSpriteSheet('nuclear','nuclear.png',250,150);
	this.addSpriteSheet('water','water.png',250,150);
	this.addSpriteSheet('coal','coal.png',250,150);
	this.addSpriteSheet('nuclear2','nuclear.png',250,150);
	this.addSpriteSheet('water2','water.png',250,150);
	this.addSpriteSheet('coal2','coal.png',250,150);
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
