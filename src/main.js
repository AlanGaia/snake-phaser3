import Bootloader from './bootloader.js';
import Play from './scenes/play.js';
import UI from './scenes/UI.js';
import Gameover from './scenes/gameover.js';
import menu from './scenes/menu.js';
import Menu from './scenes/menu.js';

const config = {
  title: 'Snake',
  width: 320,
  height: 180,
  type: Phaser.AUTO,
  parent: 'container',
  backgroundColor: '#f7df5c',
  pixelArt: true,
  scene: [Bootloader, Play, Gameover, UI, Menu],

}

new Phaser.Game(config);