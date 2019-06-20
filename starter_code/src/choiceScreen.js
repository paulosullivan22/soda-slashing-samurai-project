class ChoiceScreen {
    constructor() {
        this.characterSelectionClicks = 0;
    }

    logChewy() {
        choiceScreen.game = new Game('chewy')
        choiceScreen.game.setup();
        choiceScreen.game.draw()
        removeElements();
    }

    logSamurai() {
        console.log('choose Samurai Jack')
        choiceScreen.game = new Game('samurai')
        choiceScreen.game.setup();
        choiceScreen.game.draw()
        removeElements();
    }

    setup() {
        textAlign(CENTER, CENTER)
        this.chewyMugShot = loadImage("assets/completed-images/chewy-character.png")
        this.samuraiMugShot = loadImage("assets/completed-images/samurai-transparent.png")
    }

    draw() {
        strokeWeight(4)
        background('#efefef')
        rect(280, 400, 220, 302)
        image(this.samuraiMugShot, 280, 400)
        rect(730, 400, 220, 302)
        image(this.chewyMugShot, 760, 400)

        textSize(60)
        text('SODA  SLASHING  SAMURAI', 580, 100)
        textSize(30)
        text('KEEP  YOUR  STREETS  CLEAN  BY  CLICKING  ON  FALLING  SODA  CANS', 600, 200)
        text('HIT  JUICEBOXES  FOR  THAT  SWEET  EXTRA  LIFE', 600, 250)
        text('AVOID  WATERBOTTLES  FOR  MINUS  POINTS', 600, 300)

        text ('SAMURAI', 395, 380)
        text ('CHEWBACCA', 842, 380)

        textSize(60)
        text('SELECT  A  CHARACTER  TO  START', 620, 800)

    }

    mouseClicked() {
        if (this.characterSelectionClicks === 0) {
            if (
            mouseX > 280 && 
            mouseX < 500 && 
            mouseY > 400 &&
            mouseY < 702
            ) {
                choiceScreen.logSamurai();
                this.characterSelectionClicks++
            }   
            else if (
            mouseX > 730 &&
            mouseX < 950 && 
            mouseY > 400 &&
            mouseY < 702
            ) {
                choiceScreen.logChewy();
                this.characterSelectionClicks++
            }
        }
    }
}



