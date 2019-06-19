class Character {
    constructor(characterChoice) {
        this.x = 150;
        this.y = HEIGHT - 250;
        this.lifeCount = [1, 1, 1];
        this.position = {
            left: this.x,
            right: this.x + 50,
            top: this.y,
            bottom: this.y + 75
        }
        this.characterChoice = characterChoice;
    }

    draw() {

        // life count
        this.lifeCount.forEach((el, i) => {
            return image(choiceScreen.game.heartImage, 50 + (100 * i), 100, 50, 50)
        })

        // character
        if (this.characterChoice === 'chewy') {
            image(choiceScreen.game.chewyImages[choiceScreen.game.chewyImageCounter], 150, HEIGHT - 250)
            if (frameCount % 8 === 0) {
                choiceScreen.game.chewyImageCounter++;
                if (choiceScreen.game.chewyImageCounter === 3) choiceScreen.game.chewyImageCounter = 0;
            }
        } else {
            image(choiceScreen.game.samuraiImages[choiceScreen.game.samuraiImageCounter], 150, HEIGHT - 250)
            if (frameCount % 8 === 0) {
                choiceScreen.game.samuraiImageCounter++;
                if (choiceScreen.game.samuraiImageCounter === 3) choiceScreen.game.samuraiImageCounter = 0;
            }
        }
    };

    mouseClicked() {

        if (choiceScreen.game.obstacles.length > 0) {
            choiceScreen.game.obstacles.forEach(el => {
                if ((mouseX > el.position.right ||
                     mouseX < el.position.left ||
                     mouseY > el.position.bottom ||
                     mouseY < el.position.top) == false) {
                         choiceScreen.game.sodaCounter += 1;
                         choiceScreen.game.obstacles[el.index].image = choiceScreen.game.boomImages[choiceScreen.game.boomImageCounter]
                         choiceScreen.game.boomImageCounter++;
                         if (choiceScreen.game.boomImageCounter > 5) choiceScreen.game.boomImageCounter = 0;
                         setTimeout(function() {
                             choiceScreen.game.obstacles.splice(el.index, 1)
                         }, 600)
                         
                     }
            })
        }

        if (choiceScreen.game.juiceBoxes.length > 0) {
            choiceScreen.game.juiceBoxes.forEach(el => {
                if ((mouseX > el.position.right ||
                     mouseX < el.position.left ||
                     mouseY > el.position.bottom ||
                     mouseY < el.position.top) == false) {
                         choiceScreen.game.juiceBoxes.splice(el.index, 1)
                         choiceScreen.game.character.lifeCount.push('1')
                     }
                }
            )
        }

    }
    
}