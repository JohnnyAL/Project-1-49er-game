class Football {
  constructor() {
    let footballImage = loadImage("./images/Football still.png");
    this.img = footballImage;
    this.width = 50;
    this.height = 50;
    this.y = height - 210;
    this.pass = false;
    this.originX = game.player.x;
  }

  draw() {
    if (!this.pass) {
      this.x = game.player.x + 106;
    }

    if (this.pass) {
      this.y -= 10;
      // this.x = this.originX;
    }
    // this.originX = /;
    image(this.img, this.x, this.y, this.width, this.height);
  }
}