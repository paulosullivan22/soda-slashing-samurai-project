class ChoiceScreen {

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
        this.chewyMugShot = loadImage("assets/completed-images/chewy-character.png")
        this.samuraiMugShot = loadImage("assets/completed-images/samurai-transparent.png")

        let buttonSamurai = createButton('choice Jack')
        buttonSamurai.position(220, 350)
        buttonSamurai.mousePressed(this.logSamurai)

        let buttonChewy = createButton('choose Chewy')
        buttonChewy.position(810, 350)
        buttonChewy.mousePressed(this.logChewy)
    }

    draw() {
        background('#efefef')
        rect(100, 90, 230, 260)
        image(this.samuraiMugShot, 220, 404)
        image(this.chewyMugShot, 810 , 400)
    }
}