let pressStartFont;
let choiceScreen = new ChoiceScreen();

function preload() {
  arcadeClassic = loadFont('assets/font/ARCADECLASSIC.woff')
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("game-board");
  textFont(arcadeClassic);
  choiceScreen.setup();
  choiceScreen.game && choiceScreen.game.setup();
}

function draw() {
  choiceScreen.draw();
  choiceScreen.game && choiceScreen.game.draw()
  // text(display, 200, 10);
}

function mouseClicked(){
  choiceScreen.mouseClicked();
  if (choiceScreen.game) {
    choiceScreen.game.createBullet(mouseX, mouseY)    
  }
  if (choiceScreen.game && choiceScreen.game.gameOver) {
    location.reload()
  }
}

