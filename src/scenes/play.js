import Snake from '../gameobjects/Snake.js'
class Play extends Phaser.Scene {
  constructor() {
    super('Play');
  }

  
  preload() {
    console.log('Soy Escena Play preload');
    this.snake = new Snake(this);
  }

}

export default Play;