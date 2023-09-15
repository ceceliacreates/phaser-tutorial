import { Scene } from "phaser";

export class PlayScene extends Scene {
    constructor () {
      super({ key: 'PlayScene' })
    }

    preload ()
{
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.image('platform', 'assets/platform.png');
    this.load.image('leftArrow', 'assets/leftarrow.png');
    this.load.image('rightArrow', 'assets/rightarrow.png');
    this.load.spritesheet('player', 
        'assets/player.png',
        { frameWidth: 32, frameHeight: 48 }
    );
}

    create () {

    // sets game values based on screen size
    this.screenWidth = this.scale.width;
    this.screenHeight = this.scale.height;
    this.screenCenterX = this.screenWidth / 2;
    this.controlsAreaHeight = this.screenHeight * 0.2;
    this.gameAreaHeight = this.screenHeight - this.controlsAreaHeight;

    console.log(this.gameAreaHeight, this.controlsAreaHeight, this.screenHeight)

    // adds the player, platform, and controls
    this.platform = this.physics.add.staticImage(0, this.gameAreaHeight, 'platform').setOrigin(0, 0).refreshBody();
    this.player = this.physics.add.sprite(this.screenCenterX, this.gameAreaHeight - 24, 'player');
    this.leftArrow = this.add.image(this.screenWidth * 0.1, this.gameAreaHeight + 40, 'leftArrow').setOrigin(0, 0).setInteractive()
    this.rightArrow = this.add.image(this.screenWidth * 0.7, this.gameAreaHeight + 40, 'rightArrow').setOrigin(0, 0).setInteractive()

    // adds animations for player
    if (!this.anims.exists('left')) {
        this.anims.create({
          key: "left",
          frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
          frameRate: 10,
          repeat: -1,
        });
      }
  
    if (!this.anims.exists('turn')) {
        this.anims.create({
          key: "turn",
          frames: [{ key: 'player', frame: 4 }],
        });
      }
  
    if (!this.anims.exists('right')) {
        this.anims.create({
          key: "right",
          frames: this.anims.generateFrameNumbers('player', { start: 5, end: 8 }),
          frameRate: 10,
          repeat: -1,
        });
      }
  
    }
  }