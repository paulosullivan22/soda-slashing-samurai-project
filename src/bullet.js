class Bullet {
    constructor(mouseX, mouseY) {
    this.bulletX = 260;
    this.bulletY = HEIGHT - 200;
    this.mouseX = mouseX;
    this.mouseY = mouseY;
    this.diffX = (this.mouseX - this.bulletX - 8)/5;
    this.diffY = (this.mouseY - this.bulletY - 10)/5; 
    }

    draw() {

        // Constantly updates bullet position
        this.rect = {
            left : this.bulletX,
            right : this.bulletX + 29,
            top : this.bulletY,
            bottom : this.bulletY + 29
        }
        
        // Draws bullet image
        image(choiceScreen.game.bulletImg, this.bulletX, this.bulletY)
        if (choiceScreen.game.character === 'samurai') image(choiceScreen.game.bulletImg, this.bulletX - 5, this.bulletY + 5) 

        // Moves bullet towards mouse click position
        this.bulletX+=(this.diffX/5);
        this.bulletY+=(this.diffY/5);
    }
}

