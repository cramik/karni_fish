class Fish {
  constructor(position) {
    this.position = position.copy();
    this.width = 100;
    this.height = 60;
  }

  run() {
    this.swim();
    this.display();
  }

  swim() {
    this.position.x += random(-1, 1);
    this.position.y += random(-1, 1);
  }

  display() {
    noStroke();
    fill(255, 191, 0);
    ellipse(this.position.x, this.position.y, this.width, this.height);
    triangle(
      this.position.x - this.width / 2 + 10,
      this.position.y,
      this.position.x - this.width * 0.75,
      this.position.y + this.height / 3,
      this.position.x - this.width * 0.75,
      this.position.y - this.height / 3
    );
    fill(255, 191, 0);
    triangle(
      this.position.x + this.width / 2 + 10,
      this.position.y - this.height / 12,
      this.position.x + this.width / 2 - 2,
      this.position.y + this.height / 8,
      this.position.x + this.width / 2 - 2,
      this.position.y - this.height / 8
    );
    triangle(
      this.position.x + this.width / 2 + 10,
      this.position.y - this.height / 12 + 18,
      this.position.x + this.width / 2 - 10,
      this.position.y + this.height / 8 + 10,
      this.position.x + this.width / 2 - 12,
      this.position.y - this.height / 8 + 10
    );
    fill(255, 255, 255);
    ellipse(
      this.position.x + this.width / 2 - 10,
      this.position.y - 11,
      15,
      20
    );
    fill(0, 0, 0);
    ellipse(this.position.x + this.width / 2 - 7, this.position.y - 10, 6, 6);
  }

  getMouthPosition() {
    return createVector(this.position.x + this.width / 2 + 10, this.position.y);
  }
}
