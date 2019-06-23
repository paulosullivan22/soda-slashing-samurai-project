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
  let display = touches.length + ' touches';
  text(display, 5, 10);
  console.log(display)
}

// Game click handlers 
function mouseClicked(){
  choiceScreen.mouseClicked();
  if (choiceScreen.game) {
    choiceScreen.game.createBullet(mouseX, mouseY)    
  }
  if (choiceScreen.game && choiceScreen.game.gameOver) {
    location.reload()
  }
}

