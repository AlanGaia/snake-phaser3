class Snake {
  constructor(scene) {
    this.scene = scene;
    this.cuerpo = [this.scene.physics.add.image(10, 10, "cuerpo")];
    this.dir = "derecha";
    this.timer = 0;
  }

  changeMove(dir) {
    this.dir = dir;
  }

  update(time) {
    if (time > this.timer) {
      switch (this.dir) {
        case "derecha":
          this.cuerpo[0].x += 10;
          break;
        case "izquierda":
          this.cuerpo[0].x -= 10;
          break;
        case "arriba":
          this.cuerpo[0].y -= 10;
          break;
        case "abajo":
          this.cuerpo[0].y += 10;
          break;
      }
      this.timer = time + 150;
    }
  }
}

export default Snake;
