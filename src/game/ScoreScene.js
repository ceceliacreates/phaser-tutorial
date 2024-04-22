import { Scene } from "phaser";

export class ScoreScene extends Scene {
    constructor () {
      super({ key: 'ScoreScene' })
    }

    init(data) {
        this.finalScore = data.score;
    }

    create () {
        // sets game values based on screen size
        this.screenWidth = this.scale.width;
        this.screenHeight = this.scale.height;
        this.screenCenterX = this.screenWidth / 2;

        // calculates rank based on score
        this.scoreRank = this.finalScore > 500 ? 'A: Prime Protocol!' : this.finalScore > 300 ? 'B: Efficient Engine' : this.finalScore > 100 ? 'C: Routine Maintenance' : 'F: Gears Jammed'

        // adds final score text to screen
        this.scoreText = this.add.text(this.screenCenterX, this.screenHeight / 2 - 100, 'Score: ' + this.finalScore, {fontSize: '20px', fill: 'green'}).setOrigin(0.5, 0.5);
        
        // adds score rank text to screen
        this.rankText = this.add.text(this.screenCenterX, this.screenHeight / 2 - 50, 'Rank ' + this.scoreRank, {fontSize: '20px', fill: '#ffffff'}).setOrigin(0.5, 0.5)

        // adds Game Over text to middle of screen
        this.gameOverText = this.add.text(this.screenCenterX, this.screenHeight / 2, 'Game Over', { fontSize: '32px', fill: 'red' }).setOrigin(0.5, 0.5);

        // adds Tap to Restart text underneath Game Over text
        this.restartText = this.add.text(this.screenCenterX, this.screenHeight / 3 + 200, 'Tap to restart', {fontSize: '15px', fill: '#ffffff'}).setOrigin(0.5, 0.5);

        // adds pulsing animation to restart text

        this.tweens.add({
            targets: this.restartText,
            scaleX: 1.5, // Scale it to 150% of its original size
            scaleY: 1.5,
            duration: 1000, // Duration of one pulse
            ease: 'Sine.easeInOut', // Smooth easing
            yoyo: true, // Reverse the tween on completion, creating the "pulse" effect
            repeat: -1 // Repeat forever
        })

        // Add pointerdown handler to restart game
        this.input.once('pointerdown', () => {
            this.scene.stop('ScoreScene')
            this.scene.start('PlayScene')
        });

    }
  }