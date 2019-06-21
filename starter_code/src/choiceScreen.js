class ChoiceScreen {
    constructor() {
        this.characterSelectionClicks = 0;
    }

    // Character choice images
    setup() {
        textAlign(CENTER, CENTER)
        this.chewieMugShot = loadImage("assets/chewie-images/chewie-character.png")
        this.samuraiMugShot = loadImage("assets/samurai-images/samurai-transparent.png")
    }

    // Character choice text
    draw() {
        strokeWeight(4)
        background('#efefef')
        rect(280, 400, 220, 302)
        image(this.samuraiMugShot, 280, 400)
        rect(730, 400, 220, 302)
        image(this.chewieMugShot, 760, 400)

        textSize(60)
        text('SODA  SLASHING  SAMURAI', 580, 100)
        textSize(30)
        text('KEEP  YOUR  STREETS  CLEAN  BY  SHOOTING  FALLING  SODA  CANS', 600, 200)
        text('HIT  JUICEBOXES  FOR  THAT  SWEET  EXTRA  LIFE', 600, 250)
        text('AVOID  WATERBOTTLES  FOR  MINUS  POINTS', 600, 300)

        text ('SAMURAI', 395, 380)
        text ('CHEWBACCA', 842, 380)

        textSize(60)
        text('SELECT  A  CHARACTER  TO  START', 620, 800)

    }

    // Initialize game with different characters
    startchewieGame() {
        choiceScreen.game = new Game('chewie')
        choiceScreen.game.setup();
        choiceScreen.game.draw();
        removeElements();
    }

    startSamuraiGame() {
        choiceScreen.game = new Game('samurai')
        choiceScreen.game.setup();
        choiceScreen.game.draw();
        removeElements();
    }

    // Tracks mouse click and chooses game character
    mouseClicked() {
        if (this.characterSelectionClicks === 0) {
            if (
            mouseX > 280 && 
            mouseX < 500 && 
            mouseY > 400 &&
            mouseY < 702
            ) {
                choiceScreen.startSamuraiGame();
                this.characterSelectionClicks++
            }   
            else if (
            mouseX > 730 &&
            mouseX < 950 && 
            mouseY > 400 &&
            mouseY < 702
            ) {
                choiceScreen.startchewieGame();
                this.characterSelectionClicks++
            }
        }
    }
}



