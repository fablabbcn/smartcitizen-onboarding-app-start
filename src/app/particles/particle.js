
function Particle(x,y, imgLoc){
  this.pos = createVector(x, y);
  this.vel = createVector(random(-2,2),random(-2,2));
  this.acc = createVector(0,0);
  this.size = 20;
  this.maxSpeed = .9;
  this.maxForce = 1;
  this.theta = 0.0;
  this.img = imgLoc;

  this.update = function(){
    //deadFIX
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.set(0,0);
    this.border();
  }
  
  this.display = function(){
    var theta = this.vel.heading() + radians(90);
    this.theta += (this.vel.x * this.vel.mag()) / 20;
    var r = 4;
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.theta);
    // beginShape();
    // vertex(0, -r*1);
    // vertex(-r, r*2);
    // vertex(0, -r * 1);
    // vertex(r, r*2);
    // endShape(CLOSE);
    image(imgs[this.img], this.size/-2, this.size/-2, this.size, this.size);
    pop();
  }
  
  this.border = function(){
    if (this.pos.x < -this.size) this.pos.x = width+this.size;
    if (this.pos.y < -this.size) this.pos.y = height+this.size;
    if (this.pos.x > width+this.size) this.pos.x = -this.size;
    if (this.pos.y > height+this.size) this.pos.y = -this.size;
  }
  
  this.separate = function(vehicles) {
    var desiredseparation = this.size*1.1;
    var sum = createVector();
    var count = 0;
    for (var i = 0; i < vehicles.length; i++) {
      var d = p5.Vector.dist(this.pos, vehicles[i].pos);
      if ((d > 0) && (d < desiredseparation)) {
        var diff = p5.Vector.sub(this.pos, vehicles[i].pos);
        diff.normalize();
        diff.div(d);
        sum.add(diff);
        count++;
      }
    }
    if (count > 0) {
      sum.div(count);
      sum.normalize();
      sum.mult(this.maxSpeed * 10);
      var steer = p5.Vector.sub(sum, this.velocity);
      steer.limit(this.maxforce);
      this.applyForce(steer);
    }
  }
  this.applyForce = function(force) {
    this.acc.add(force);
  }
  
}