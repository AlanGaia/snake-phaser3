class Bootloader extends Phaser.Scene {
  constructor() {
    super('Bootloader');
  }


  preload() {
    console.log('Soy bootloader preload');
    this.scene.start('Play');
  }

}

export default Bootloader;