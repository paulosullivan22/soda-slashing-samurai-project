class Game {
    constructor(characterChoice) {
      this.background = new Background();
      this.character = new Character(characterChoice);
      
      // Initalizing bullet / obstacle arrays
      this.bullets = [];
      this.sodaCans = [];
      this.juiceBoxes = [];
      this.waterBottles = [];

      // Item counters
      this.sodaCounter = 0;
      this.boomImageCounter = 0;
      this.chewyImageCounter = 0;
      this.samuraiImageCounter = 0;

      // Setting bullet position
      this.bulletLeftPosition = 0       // Boom images are placed when bullets collide with obstacles
      this.bulletTopPosition = -200;    // This minus value removes the first image from inital screen 
    }

    setup() {

      // Boom images
      this.boomImage1 = loadImage("assets/boom-images/bang-words.png")
      this.boomImage2 = loadImage("assets/boom-images/bang.png")
      this.boomImage3 = loadImage("assets/boom-images/boom-layered.jpg")
      this.boomImage4 = loadImage("assets/boom-images/ka-pow.png")
      this.boomImage5 = loadImage("assets/boom-images/explosion-big-resized.png")
      this.boomImage6 = loadImage("assets/boom-images/pow-resized copy.png")
      this.boomImages = [this.boomImage1, this.boomImage2, this.boomImage3, this.boomImage4, this.boomImage5, this.boomImage6]

      // Chewy images
      this.chewyImage1 = loadImage("assets/chewy-images/chewy-walking-6.png")
      this.chewyImage2 = loadImage("assets/chewy-images/chewy-walking-5.png")
      this.chewyImage3 = loadImage("assets/chewy-images/chewy-walking-4.png")
      this.chewyImage4 = loadImage("assets/chewy-images/chewy-walking-3.png")
      this.chewyImage5 = loadImage("assets/chewy-images/chewy-walking-2.png")
      this.chewyImage6 = loadImage("assets/chewy-images/chewy-walking-1.png")
      this.chewyImages = [this.chewyImage1, this.chewyImage2, this.chewyImage3, this.chewyImage4, this.chewyImage5, this.chewyImage6]

      // Samurai images
      this.samuraiImage1 = loadImage("assets/samurai-images/jack-walking-8.png")
      this.samuraiImage2 = loadImage("assets/samurai-images/jack-walking-7.png")
      this.samuraiImage3 = loadImage("assets/samurai-images/jack-walking-6.png")
      this.samuraiImage4 = loadImage("assets/samurai-images/jack-walking-5.png")
      this.samuraiImage5 = loadImage("assets/samurai-images/jack-walking-4.png")
      this.samuraiImage6 = loadImage("assets/samurai-images/jack-walking-3.png")
      this.samuraiImage7 = loadImage("assets/samurai-images/jack-walking-2.png")
      this.samuraiImage8 = loadImage("assets/samurai-images/jack-walking-1.png")
      this.samuraiImages = [this.samuraiImage1, this.samuraiImage2, this.samuraiImage3, this.samuraiImage4, this.samuraiImage5, this.samuraiImage6, this.samuraiImage7, this.samuraiImage8]

      // Obstacle & life icon images
      this.sodaCan = loadImage("assets/obstacle-images/soda-can-cartoon-3.png")
      this.juiceBox = loadImage("assets/obstacle-images/cartoon-juice-box.png")
      this.waterBottle = loadImage("assets/obstacle-images/water-bottle.png")
      this.heartImage = loadImage("assets/completed-images/heart.png")
      
      // Bullet images
      if (choiceScreen.game.character.characterChoice === 'chewy') {
        this.bulletImg = loadImage("assets/chewy-images/chewy-bullet.png")
      } else {
        this.bulletImg = loadImage("assets/samurai-images/samurai-bullet.png")
      }

      this.background.setup();
    }
  
    draw() {
      this.background.draw();
      this.character.draw();
      cursor(CROSS)

      // Life count and soda counter text
      textSize(50)
      fill(255, 255, 255)
      text('LIFE COUNT', 180, 60)

      text('SODAS  SLASHED', 1000, 60)
      text(this.sodaCounter, 1150, 100)

      // Conditions for adding new obstacles to obstacle arrays
      if (frameCount % 70 === 0) {
        this.sodaCans.push(new SodaCan());
      }

      if (this.sodaCounter > 15 & frameCount % 60 === 0) {
        this.sodaCans.push(new SodaCan());
      }  

      if (frameCount % 1000 === 0) {
        this.juiceBoxes.push(new JuiceBox())
      }

      if (frameCount % 500 === 0) {
        this.waterBottles.push(new WaterBottle)
      }

      // Looping obstacle arrays and drawing new bullets / obstacles 
      
      this.bullets.forEach((bullet, i) => {
        if (i === 0) bullet.bulletY = 1000; // removes first bullet initialized on character selection 
        bullet.draw()
      })

      var itemCreation = (itemArray) => {
        itemArray.forEach((el, i) => {
          if (el.hit) {
            this.bulletLeftPosition = el.position.left;
            this.bulletTopPosition = el.position.top;
            itemArray.splice(i, 1)
          }
          el.draw()
        })
      }

      itemCreation(this.sodaCans)
      itemCreation(this.juiceBoxes)
      itemCreation(this.waterBottles)

      
      // Updating location of boom images when an obstacle is hit
      image(choiceScreen.game.boomImages[choiceScreen.game.boomImageCounter], this.bulletLeftPosition, this.bulletTopPosition, 110, 110)

      // Game over condition
      if (choiceScreen.game.character.lifeCount.length === 0) choiceScreen.game.over()
    }

    // Initialized on mouse click in main.js
    createBullet(mouseX, mouseY) {
        this.bullets.push(new Bullet(mouseX, mouseY));
    }

    // Game over screen
    over() {
      clear()
      this.gameOver = true;
      console.log("GAME OVER");
      fill(0, 0, 0)
      textSize(300)
      text('GAME', 580, 250)
      text('OVER', 580, 450)
      textSize(50)
      text('YOUR  SCORE  WAS', 580, 610)
      textSize(75)
      text(this.sodaCounter, 580, 650)
      textSize(50)
      text('C LICK  TO  RESTART', 580, 750)
      noLoop();
    }

  } 