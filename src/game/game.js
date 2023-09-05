import { Game, AUTO, Scale, Scene} from "phaser";

export class MainScene extends Scene {
    constructor () {
      super({ key: 'MainScene' })
    }
  
    create () {
        this.add.text(100, 100, "Hello Phaser!", {
            font: "24px Courier",
            fill: "#ffffff",
        });
      
    }

  }

export function launch() {
    return new Game({
      type: AUTO,
      scale: {
        mode: Scale.RESIZE,
        width: window.innerWidth * window.devicePixelRatio,
        autoCenter: Scale.CENTER_BOTH,
        height: window.innerHeight * window.devicePixelRatio,
      },
      parent: "game",
      backgroundColor: "#201726",
      physics: {
        default: "arcade",
      },
      scene: MainScene,
    });
  }