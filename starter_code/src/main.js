// let game = new Game();
let cursorImg;
let choiceScreen = new ChoiceScreen();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("game-board");
  choiceScreen.setup();
  choiceScreen.game && choiceScreen.game.setup();
  // this.cursorImg = loadImage('assets/completed-images/Blue_Lightsaber_icon.png')
}

function draw() {
  choiceScreen.draw();
  cursor(this.cursorImg, 16, 16)
  choiceScreen.game && choiceScreen.game.draw()
}

function mouseClicked(){
  choiceScreen.game.character.mouseClicked()
}