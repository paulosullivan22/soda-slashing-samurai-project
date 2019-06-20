let pressStartFont;
let choiceScreen = new ChoiceScreen();

function preload() {
  pressStartFont = loadFont('assets/ARCADECLASSIC.woff')
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("game-board");
  textFont(pressStartFont);
  choiceScreen.setup();
  choiceScreen.game && choiceScreen.game.setup();
}

function draw() {
  choiceScreen.draw();
  choiceScreen.game && choiceScreen.game.draw()
}

function mouseClicked(){
  choiceScreen.mouseClicked();
  if (choiceScreen.game) {
    choiceScreen.game.createBullet(mouseX, mouseY)    
  }
  if (choiceScreen.game && choiceScreen.game.gameOver) {
    console.log('working')
    location.reload()
  }
}