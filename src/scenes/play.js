import Snake from '../gameobjects/Snake.js'
class Play extends Phaser.Scene {
  constructor() {
    super('Play');
  }

  
  preload() {
    console.log('Soy Escena Play preload');
    this.snake = new Snake(this);
  }

  create() {
    this.input.keyboard.on('keydown_RIGHT', () => {
      this.snake.changeMove('derecha');
    })
    this.input.keyboard.on('keydown_LEFT', () => {
      this.snake.changeMove('izquierda');
    })
    this.input.keyboard.on('keydown_UP', () => {
      this.snake.changeMove('arriba');
    })
    this.input.keyboard.on('keydown_DOWN', () => {
      this.snake.changeMove('abajo');
    })
  }

  update(time) {
    this.snake.update(time);
  }

}

export default Play;