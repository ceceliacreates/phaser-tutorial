import { Scene } from "phaser";

export class PlayScene extends Scene {
    constructor () {
      super({ key: 'PlayScene' })
    }
  
    create () {
        this.add.text(100, 100, "PlayScene", {
            font: "24px Courier",
            fill: "#ffffff",
        });
      
    }

  }