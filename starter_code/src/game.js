class Game {
    constructor(characterChoice) {
      this.background = new Background();
      this.character = new Character(characterChoice);
      this.bullets = [];
      this.sodaCounter = 0;
      this.sodaCans = [];
      this.juiceBoxes = [];
      this.waterBottles = [];
      this.boomImageCounter = 0;
      this.chewyImageCounter = 0;
      this.samuraiImageCounter = 0;
      this.sodaCanInterval = 0;
    }
    setup() {

      this.heartImage = loadImage("assets/completed-images/heart.png")

      this.boomImage1 = loadImage("assets/completed-images/bang-words.png")
      this.boomImage2 = loadImage("assets/completed-images/bang.png")
      this.boomImage3 = loadImage("assets/completed-images/boom-layered.jpg")
      this.boomImage4 = loadImage("assets/completed-images/ka-pow.png")
      this.boomImage5 = loadImage("assets/completed-images/explosion-big-resized.png")
      this.boomImage6 = loadImage("assets/completed-images/pow-resized copy.png")
      this.boomImages = [this.boomImage1, this.boomImage2, this.boomImage3, this.boomImage4, this.boomImage5, this.boomImage6]

      this.chewyImage1 = loadImage("assets/completed-images/chewy-walking-6.png")
      this.chewyImage2 = loadImage("assets/completed-images/chewy-walking-5.png")
      this.chewyImage3 = loadImage("assets/completed-images/chewy-walking-4.png")
      this.chewyImage4 = loadImage("assets/completed-images/chewy-walking-3.png")
      this.chewyImage5 = loadImage("assets/completed-images/chewy-walking-2.png")
      this.chewyImage6 = loadImage("assets/completed-images/chewy-walking-1.png")
      this.chewyImageInjured = loadImage("assets/completed-images/chewy-injured.png")
      this.chewyImages = [this.chewyImage1, this.chewyImage2, this.chewyImage3, this.chewyImage4, this.chewyImage5, this.chewyImage6]

      this.samuraiImage1 = loadImage("assets/completed-images/jack-walking-8.png")
      this.samuraiImage2 = loadImage("assets/completed-images/jack-walking-7.png")
      this.samuraiImage3 = loadImage("assets/completed-images/jack-walking-6.png")
      this.samuraiImage4 = loadImage("assets/completed-images/jack-walking-5.png")
      this.samuraiImage5 = loadImage("assets/completed-images/jack-walking-4.png")
      this.samuraiImage6 = loadImage("assets/completed-images/jack-walking-3.png")
      this.samuraiImage7 = loadImage("assets/completed-images/jack-walking-2.png")
      this.samuraiImage8 = loadImage("assets/completed-images/jack-walking-1.png")
      this.samuraiInjured = loadImage("assets/completed-images/jack-crouching.png")
      this.samuraiImages = [this.samuraiImage1, this.samuraiImage2, this.samuraiImage3, this.samuraiImage4, this.samuraiImage5, this.samuraiImage6, this.samuraiImage7, this.samuraiImage8]

      this.sodaCan = loadImage("assets/soda-can-cartoon-3.png")
      this.juiceBox = loadImage("assets/cartoon-juice-box.png")
      this.waterBottle = loadImage("assets/water-bottle.png")
      
      this.bulletImg = loadImage("assets/completed-images/bullet.png")

      this.background.setup();
    }
  
    draw() {
      this.background.draw();
      this.character.draw();

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

      this.bullets.forEach((bullet, i) => {
        // if (i > 0) {
          bullet.draw()
        // }
      })
  
      this.sodaCans.forEach((sodaCan, i) => {
        // sodaCan.index = i;
        sodaCan.draw();
        if(sodaCan.hit){
          this.sodaCans.splice(i,1)
        }
      });

      this.juiceBoxes.forEach((juicebox, i) => {
        juicebox.index = i
        juicebox.draw()
      });

      this.waterBottles.forEach((waterbottle, i) => {
        waterbottle.index = i
        waterbottle.draw()
      });
      

      if (choiceScreen.game.character.lifeCount.length === 0) choiceScreen.game.over()
      textSize(50)
      fill(255, 255, 255)
      text('LIFE COUNT', 180, 60)

      text('SODAS  SLASHED', 1000, 60)
      text(this.sodaCounter, 1150, 100)

      cursor(CROSS)
    }

    createBullet(mouseX, mouseY) {
        this.bullets.push(new Bullet(mouseX, mouseY));
    }

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