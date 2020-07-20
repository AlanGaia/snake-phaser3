class Bootloader extends Phaser.Scene {
  constructor() {
    super('Bootloader');
  }


  preload() {
    console.log('Soy bootloader preload');
    this.load.image('cuerpo', '../assets/body.png');
    this.load.image('comida', '../assets/food.png');
    this.load.image('tablero', '../assets/tablero.png');

    //When Complete shot play scene
    this.load.on('complete', () => {
      this.scene.start('Play');
    })
  }


}

export default Bootloader;