
class SodaCan {
    constructor() {
        this.x = Math.random() * ((WIDTH + 300) - (WIDTH - 600)) + (WIDTH - 600);
        this.y = 0
        this.image = choiceScreen.game.sodaCan;
        this.hit = false
        this.type = 'sodaCans';
    }
    
    draw() {
        // Constantly updates position to check for collisions
        this.position = {
            left: this.x,
            right: this.x + 110,
            top: this.y,
            bottom: this.y + 110
        }

        // Draws image to canvass
        if (this.type === 'waterBottles') image(this.image, this.x, this.y, 80, 120)
        else image(this.image, this.x, this.y, 110, 110)
        

        // Sets conditions for movement along X and Y axes with increasing speed as game progresses
        this.x -= Math.floor(Math.random() * (5 - 0.2) + 0.9);
        this.y += 1.25;

        if (choiceScreen.game.sodaCounter > 10) this.y += 0.25
        if (choiceScreen.game.sodaCounter > 20) this.y += 0.35
        if (choiceScreen.game.sodaCounter > 30) this.y += 0.40
        if (choiceScreen.game.sodaCounter > 40) this.y += 0.45
        if (choiceScreen.game.sodaCounter > 50) this.y += 0.5
                
        // Checks for collision and, if true, displays boom image at coordinates of collision
        this.checkCollision()
        if (this.hit) {
            image(choiceScreen.game.boomImages[choiceScreen.game.boomImageCounter], this.position.left, this.position.top, 110, 110)
        }
    }


    intersectRect(rectA, rectB) {
        return !(
          rectA.left > rectB.right ||
          rectA.right < rectB.left ||
          rectA.top > rectB.bottom ||
          rectA.bottom < rectB.top
        );
      }
    

    checkCollision(){

        // Loop through bullet array, checking if each bullet collides with obstacle
        if (choiceScreen.game.bullets.length > 1 && this.position.right < WIDTH) {
            choiceScreen.game.bullets.forEach((el,i)=>{
                if(this.intersectRect(this.position, el.rect)){


                    choiceScreen.game.bullets.splice(i,1)   // Bullet disappears
                    this.hit = true;

                    choiceScreen.game.boomImageCounter++;       // Changes boom image for each collision
                    if (choiceScreen.game.boomImageCounter > 5) choiceScreen.game.boomImageCounter = 0;

                    if (this.type === 'sodaCans') choiceScreen.game.sodaCounter += 1;       // Conditions for different obstacles
                    if (this.type === 'juiceBoxes') choiceScreen.game.character.lifeCount.push('1')    
                    if (this.type === 'waterBottles' && choiceScreen.game.sodaCounter > 10) choiceScreen.game.sodaCounter -= 10
                    else if (this.type === 'waterBottles') choiceScreen.game.sodaCounter = 0;
            }
        })}

        // Cuts soda can from array and removes a life if it reachs bottom of screen
        choiceScreen.game.sodaCans.forEach(el => {

                if (el.position) {

                    if (el.position.top >= HEIGHT - 100 && el.position.left >= 0 && el.position.right < WIDTH - 50) {
                        choiceScreen.game.sodaCans.splice(el.index, 1)
                        choiceScreen.game.character.lifeCount.pop()
                    }
                }
            }
        )    
    }    
}



class JuiceBox extends SodaCan {
    constructor(x, y, hit) {
        super(x, y, hit) 
        this.image = choiceScreen.game.juiceBox;
        this.type = 'juiceBoxes'
    }  
}

class WaterBottle extends SodaCan {
    constructor(x, y, hit) {
        super(x, y, hit) 
        this.image = choiceScreen.game.waterBottle;
        this.type = 'waterBottles'
    }
}