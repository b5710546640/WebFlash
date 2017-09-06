var frameIndex = new Kiwi.Game();
var frameState = new Kiwi.State("frameState");

frameState.preload = function(){
  Kiwi.State.prototype.preload.call(this);
}

frameState.create = function(){
  Kiwi.State.prototype.create.call(this);
  this.control = Kiwi.Plugins.LEAPController.createController();
}

frameState.update = function(){
  Kiwi.State.prototype.update.call(this);
    console.log(this.control.hands[0].grabStrength === 1);
}

frameIndex.states.addState(frameState);
frameIndex.states.switchState("frameState");
