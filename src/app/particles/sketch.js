var particles = [];
var limit = 20;
var imgs = [];

function preload() {

  var path = 'particles/assets/';
  // //circles
  imgs.push( loadImage(path+ 'cB.png'));
  imgs.push( loadImage(path+ 'cG.png'));
  imgs.push( loadImage(path+ 'cO.png'));
  
  //diamonds
  imgs.push( loadImage(path+ 'dB.png'));
  imgs.push( loadImage(path+ 'dG.png'));
  imgs.push( loadImage(path+ 'dO.png'));
  
  //moon -- not squares
  // imgs.push( loadImage(path+ 'mB.png'));
  // imgs.push( loadImage(path+ 'mG.png'));
  // imgs.push( loadImage(path+ 'mO.png'));
  
  //squiggle
  // imgs.push( loadImage(path+ 'sB.png'));
  // imgs.push( loadImage(path+ 'sG.png'));
  // imgs.push( loadImage(path+ 'sO.png'));
  
  //triangle
  imgs.push( loadImage(path+ 'tB.png'));
  imgs.push( loadImage(path+ 'tG.png'));
  imgs.push( loadImage(path+ 'tO.png'));
  
  //cross
  imgs.push( loadImage(path+ 'xB.png'));
  imgs.push( loadImage(path+ 'xG.png'));
  imgs.push( loadImage(path+ 'xO.png'));
  
}

var cnv;

function centerCanvas() {
    cnv = createCanvas(windowWidth, windowHeight);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function windowResized() {
  centerCanvas();
}

function setup() {
  centerCanvas();
  for (var i = 0; i < limit; i++){
    var imgLoc = (floor(random(1,imgs.length)) - 1);
    particles.push(new Particle(random(50,width-50), random(50, height-50), imgLoc));
  }
  
}

function draw() {
  // image(imgs[1], 0, 0, 15, 15);

  background('#39424C');
  
  for (var i = 0; i < limit; i++){
    particles[i].separate(particles)
    particles[i].update();
    particles[i].display();
  }
  
}