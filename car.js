class Car {
    constructor(x, y, width, height) {
        this.animation = loadImage("images/bluecar.png");
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    display() {
          animation = loadImage("images/bluecar.png");
          image(this.animation, this.x, this.y, this.width, this.height);
    }
}