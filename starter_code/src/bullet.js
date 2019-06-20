class Bullet {
    constructor(mouseX, mouseY) {
    this.bulletX = 260;
    this.bulletY = HEIGHT - 180;
    this.mouseX = mouseX;
    this.mouseY = mouseY;
    this.diffX = (this.mouseX - this.bulletX - 8)/5;
    this.diffY = (this.mouseY - this.bulletY - 10)/5; 
    }

    draw() {
        this.rect = {
            left : this.bulletX,
            right : this.bulletX + 29,
           top : this.bulletY,
           bottom : this.bulletY + 29

        }
        
        image(choiceScreen.game.bulletImg, this.bulletX, this.bulletY)

            // let diffX = this.mouseX - this.bulletX - 8;
            // let diffY = this.mouseY - this.bulletY - 10; 

            if (this.bulletX <= WIDTH) this.bulletX+=(this.diffX/5);

            if (this.bulletY >= -100) this.bulletY+=(this.diffY/5);
        
    
        // if (diffX < 10) choiceScreen.game.bullets.splice(this.index, 1)

    }
}

