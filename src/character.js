class Character {
    constructor(characterChoice) {
        this.x = 150;
        this.y = HEIGHT - 250;
        this.lifeCount = [1, 1, 1];
        this.characterChoice = characterChoice;
    }

    draw() {

        // Life count
        this.lifeCount.forEach((el, i) => {
            image(choiceScreen.game.heartImage, 50 + (100 * i), 100, 50, 50)
        })

        // Animates characters 
        if (this.characterChoice === 'chewie') {
            image(choiceScreen.game.chewieImages[choiceScreen.game.chewieImageCounter], this.x, this.y)
            if (frameCount % 8 === 0) {
                choiceScreen.game.chewieImageCounter++;
                if (choiceScreen.game.chewieImageCounter === 6) choiceScreen.game.chewieImageCounter = 0;
            }
        } else {
            image(choiceScreen.game.samuraiImages[choiceScreen.game.samuraiImageCounter], this.x, this.y)
            if (frameCount % 4 === 0) {
                choiceScreen.game.samuraiImageCounter++;
                if (choiceScreen.game.samuraiImageCounter === 8) choiceScreen.game.samuraiImageCounter = 0;
            }
        }
    }  
}