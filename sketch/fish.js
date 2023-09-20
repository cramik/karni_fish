class Fish {
  constructor(position) {
    this.position = position.copy();
    this.width = 100;
    this.height = 60;
    this.direction = 1;
  }

  run() {
    this.swim();
    this.display();
  }

  swim() {
    if (this.direction==1) {
      if (this.position.y==width*(3/4)) {
        this.direction=-1
      }
      else {
        this.position.y+=.5
      }
    }
    else if (this.direction==-1){
      if (this.position.y==width/4) {
        this.direction=1;
      }
      else {
        this.position.y-=.5
      }
    }
  }

  display() {
    noStroke();
    // Name
    fill(0,0,0);
    text("cramik",this.position.x-20,this.position.y-40);

    // Body
    
    fill(255, 129, 50);
    ellipse(this.position.x, this.position.y, this.width, this.height);

    
    // Tail
    triangle(
      this.position.x - this.width / 2 + 10,
      this.position.y,
      this.position.x - this.width * 0.75,
      this.position.y + this.height / 3,
      this.position.x - this.width * 0.75,
      this.position.y - this.height / 3
    );

    // Eye
    fill(255, 255, 255);
    circle(this.position.x + this.width / 2 - 10, this.position.y - 10, 20);

    // Pupil
    fill(0, 0, 0);
    circle(this.position.x + this.width / 2 - 10, this.position.y - 10, 8);
  }

  getMouthPosition() {
    return createVector(this.position.x + this.width / 2 + 10, this.position.y);
  }
}
