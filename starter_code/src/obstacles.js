
class Obstacle {
    constructor() {
        this.x = Math.random() * ((WIDTH + 600) - (WIDTH - 600)) + (WIDTH - 600);
        this.y = 0
        // Math.random() * ((HEIGHT-500) - 50) + 50;
        this.image = choiceScreen.game.sodaCan;
    }
    
    
    draw() {
        image(this.image, this.x, this.y, 110, 110)
        
        this.x -= Math.floor(Math.random() * (5 - 0.2) + 0.9);
        
        this.y += 1.5;
        if (choiceScreen.game.sodaCounter > 10) this.y += 0.25
        if (choiceScreen.game.sodaCounter > 20) this.y += 0.25
        if (choiceScreen.game.sodaCounter > 30) this.y += 0.25
                
        this.checkCollision()        
    }
    
   

    
    checkCollision(){
        this.position = {
            left: this.x,
            right: this.x + 110,
            top: this.y,
            bottom: this.y + 110
        }

        choiceScreen.game.obstacles.forEach(el => {

                if (el.position) {


                    if (el.position.bottom >= HEIGHT && el.position.left >= 0) {
                        choiceScreen.game.obstacles.splice(el.index, 1)
                        choiceScreen.game.character.lifeCount.pop()
                        choiceScreen.game.boomImageCounter++;
                    }
                }
            }
        )    
    }    
}



class JuiceBox extends Obstacle {
    constructor(x, y, sodaCan, position) {
        super(x, y, sodaCan, position) 
        this.image = choiceScreen.game.juiceBox
    }
}