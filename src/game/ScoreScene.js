import { Scene } from "phaser";

export class ScoreScene extends Scene {
    constructor () {
      super({ key: 'ScoreScene' })
    }
    create () {
        // sets game values based on screen size
        this.screenWidth = this.scale.width;
        this.screenHeight = this.scale.height;
        this.screenCenterX = this.screenWidth / 2;

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

    }
  }