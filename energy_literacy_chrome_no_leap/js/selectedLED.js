//กำหนดขนาดความกว้างความสูง
var gameOptions = {
	width: 1920,
	height: 1080
};

//รูปแบบการสร้าง Animation ด้วย KiwiJS เบื้องต้น
//myGame เป็นเหมือน Panel ที่เก็บทุกอย่างเอาไว้เพื่อเอาไปสร้างเป็น Canvas
var myGame = new Kiwi.Game("layer2","kiwiLayer",null,gameOptions);
//myState เป็นเหมือน Main ที่เอาไว้กำหนด ค่า และ กิจกรรมต่างๆ
var myState = new Kiwi.State("myState");
//loadingState กับ preloader จะมีหรือไม่มีก็ได้ แต่ในกรณีนี้เอาไว้เผื่อกรณีต้องการทำหน้า Loading ก่อนจะมาถึงหน้าหลัก
var loadingState = new Kiwi.State('loadingState');
var preloader = new Kiwi.State('preloader');
//timer ก็คือ ตัวที่จะใช้จับเวลา ที่ต้องประกาษตรงนี้เพราะจะได้ใช้ได้กับทุกๆ Component
var timer;

//เขียนตามนี้ไปเลย เป็น Template อยู่แล้ว
myState.preload = function(){
  Kiwi.State.prototype.preload.call(this);

}

//เอาไว้สำหรับสร้างของที่ต้องการให้มีใน Canvas โดยที่ create จะถูกเรียกแค่ครั้งเดียวตอนเปิดหน้านี้ขึ้นมา
myState.create = function(){
  Kiwi.State.prototype.create.call( this );

	//คำว่า this จะหมายถึง myState ซึ่งหมายถึงทั้งอันนี้
	//this.something จะหมายถึง ให้ component ที่ชื่อ something เป็นของ myState

	//เนื่องจาก KiwiJS เอาไว้สำหรับทำเกม ดังนั้นจึงต้องมีพื้นหลัง กรณีไม่ได้เขียนบรรทัดนี้ก็จะเป็นพื้นหลังสีขาวอัตโนมัติ
  this.background = new Kiwi.GameObjects.StaticImage(this, this.textures.background, 0, 0);

	this.character = new Pointer( this, this.textures.characterSprite, 900, 500 );

	this.buttonGroup = new Kiwi.Group(this);
	this.LED1 = new Button( this, this.textures.LED1,220,190, 'Lamp1');
  this.LED2 = new Button( this, this.textures.LED2,830,190, 'Lamp2');
	this.LED3 = new Button( this, this.textures.LED3, 1440,190, 'Lamp3');

	this.buttonGroup.addChild(this.LED1);
	this.buttonGroup.addChild(this.LED2);
	this.buttonGroup.addChild(this.LED3);

	this.addChild(this.background);
	this.addChild(this.buttonGroup);
	console.log('add buttonGroup');
	//ดังนั้นเราต้อง add background เข้าไปเป็นอันแรก

	this.addChild( this.character );


	//เป็นการสร้าง Leap Controller ให้กับ Kiwi ของเรา
	//การจะประกาศบรรทัดนี้ได้ อย่าลืม import ให้ครบในหน้า html ที่ import ไฟล์นี้ด้วย
  this.control = Kiwi.Plugins.LEAPController.createController();
}


var Button = function (state,image, x, y, vid){
    Kiwi.Plugins.GameObjects.TouchButton.call(this, state, image, x, y);

		this.vid = vid;
		this.originalX = x;

    this.animation.add('float', [0], 0.05, false);
    this.animation.add('lay', [1], 0.05, true);
    this.animation.play('lay');

		console.log('create 1');

    this.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this, this.box));

		// game.input.mouse.onDown.add( this.fallen, this );

    Button.prototype.update = function(){
        Kiwi.GameObjects.Sprite.prototype.update.call(this);
        this.physics.update();
				this.animation.play('lay');
    };

		this.factoryPage = function(){
			return this.page;
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

//ฟังก์ชั่นนี้จะถูกทำตลอดเวลาที่ยังอยู่ใน myState
myState.update = function(){
  Kiwi.State.prototype.update.call(this);


		// this.character.scaleX = (this.control.hands[0].posY - 20)/100;
		// this.character.scaleY = (this.control.hands[0].posY - 20)/100;


			if(this.control.hands[0].pointables[0].touchZone == "hovering"){
				// timer.start();
				let xVal = this.control.hands[0].posX;
				let yVal = (this.control.hands[0].posZ);

				//กำหนดให้ LEAP รู้ว่าเอามือลงโดยการอ้างอิงจากแกนYที่ตำแหน่ง 150
				if(yVal <= -100) yVal = 0;
				else if(yVal > 100) yVal = 0;

				let newX = this.character.x + xVal*0.7;
				let newY = this.character.y + yVal*0.7;

				//ดักขอบ
				if(newX < 20 || newX >1800) newX = this.character.x;
				if(newY < 10 || newY > 700) newY = this.character.y;

				//Updateตำแหน่งมือ
				this.character.x = newX;
				this.character.y = newY;

				this.updateButtonAnimation();
	      console.log('hovering');


	    } else if(this.control.hands[0].posY < 60){

				// timer.start();
				// console.log('z control :'+(this.control.hands[0].posZ <= -70));
				// console.log('z control2 :'+this.control.hands[0].posZ);
				// if(this.control.hands[0].posZ <= -77){
					console.log('press at'+this.control.hands[0].posY);
					this.character.animation.play('press');
					// console.log(this.callVideo());
					var key = this.callVideo();
					console.log('Key :'+key);
					if(key !== "none"){
					window.location = "06_Lamp.html?temp=" + encodeURIComponent(key);
					sessionStorage.temp = key;
					}
				// }
				// this.resetTimer();
	    }else{
		        this.character.animation.play('point');
			}

			var chkBtn = this.buttonGroup.members;
			// for (var i = 0; i < chkBtn.length; i++) {
			// 	console.log(chkBtn[i].x);
			// 	if(chkBtn[i].x >= 1920){
			// 			window.location.href = chkBtn[i].page;
			// 	}
			// }


}

myState.callVideo = function(){

	var chkBtn = this.buttonGroup.members;
	for (var i = 0; i < chkBtn.length; i++) {
		if(this.character.physics.overlaps(chkBtn[i])){
				return chkBtn[i].vid;
		}
	}
	return "none";

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

	this.addSpriteSheet('characterSprite','pointer.png',100,112);

	this.addSpriteSheet('LED1','button/LED01.png',300,400);
	this.addSpriteSheet('LED2','button/LED02.png',300,400);
	this.addSpriteSheet('LED3','button/LED03.png',300,400);
	this.addImage('background','bg_led.png');

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

myState.resetTimer = function() {
    console.log( "Reset Timer"+clock );
};


myGame.states.addState(loadingState);
myGame.states.addState(preloader);
myGame.states.addState(myState);
myGame.states.switchState('preloader');
