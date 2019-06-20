
class SodaCan {
    constructor() {
        this.x = Math.random() * ((WIDTH + 300) - (WIDTH - 600)) + (WIDTH - 600);
        this.y = 0
        this.image = choiceScreen.game.sodaCan;
        this.hit = false
    }
    
    draw() {
        image(this.image, this.x, this.y, 110, 110)
        
        this.x -= Math.floor(Math.random() * (5 - 0.2) + 0.9);
        
        this.y += 1.25;
        if (choiceScreen.game.sodaCounter > 10) this.y += 0.25
        if (choiceScreen.game.sodaCounter > 20) this.y += 0.35
                
        this.checkCollision()        
    }
    
    checkCollision(){
        this.position = {
            left: this.x,
            right: this.x + 110,
            top: this.y,
            bottom: this.y + 110
        }

        if (choiceScreen.game.bullets.length > 1) {
            console.log(choiceScreen.game.bullets[0].rect)
            choiceScreen.game.bullets.forEach((el,i)=>{
            // console.log(el.rect)
            if(intersectRect(this.position, el.rect)){
                choiceScreen.game.bullets.splice(i,1)
                this.hit = true
            }
            
        })}

        choiceScreen.game.sodaCans.forEach(el => {

                if (el.position) {

                    if (el.position.bottom >= HEIGHT && el.position.left >= 0 && el.position.right < WIDTH - 50) {
                        choiceScreen.game.sodaCans.splice(el.index, 1)
                        choiceScreen.game.character.lifeCount.pop()
                        choiceScreen.game.boomImageCounter++;
                    }
                }
            }
        )    
     function intersectRect(rectA, rectB) {
            return !(
              rectA.left > rectB.right ||
              rectA.right < rectB.left ||
              rectA.top > rectB.bottom ||
              rectA.bottom < rectB.top
            );
          }
    }    
}



class JuiceBox extends SodaCan {
    constructor(x, y, position) {
        super(x, y, position) 
        this.image = choiceScreen.game.juiceBox
    }
}

class WaterBottle extends SodaCan {
    constructor(x, y, position) {
        super(x, y, position) 
        this.image = choiceScreen.game.waterBottle
    }

    draw() {
        image(this.image, this.x, this.y, 80, 110)

        this.x -= Math.floor(Math.random() * (5 - 0.2) + 0.9);
        
        this.y += 0.25;
        
        this.checkCollision() 
    }
}