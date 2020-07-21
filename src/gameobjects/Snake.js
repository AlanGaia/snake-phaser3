class Snake {
  constructor(scene) {
    this.scene = scene;
    this.cuerpo = [];
    this.dir = "derecha";
    this.timer = 0;
    
    
    for (let i = 0; i < 3; i++) {
      this.cuerpo.push(
        this.scene.physics.add.image(10 + i * 10, 10, "cuerpo")
          .setOrigin(0)
        );
      
    }

  }


  changeMove(dir) {
    this.dir = dir;
  }

  update(time) {
    if (time > this.timer) {

      for(let i = this.cuerpo.length - 1; i > 0; i--){
        this.cuerpo[i].x = this.cuerpo[i - 1].x; 
        this.cuerpo[i].y = this.cuerpo[i - 1].y; 
      }


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
