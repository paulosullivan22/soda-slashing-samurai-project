let pressStartFont;
let choiceScreen = new ChoiceScreen();

function preload() {
  arcadeClassic = loadFont('assets/font/ARCADECLASSIC.woff')
}

// Setup canvas and initializes character selection screen
function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("game-board");
  textFont(arcadeClassic);
  choiceScreen.setup();
  choiceScreen.game && choiceScreen.game.setup();
}

// Draws character choice screen
function draw() {
  choiceScreen.draw();
  choiceScreen.game && choiceScreen.game.draw()
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