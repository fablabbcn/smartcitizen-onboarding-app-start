'use strict';

var particles = [];
var limit = 20;
var imgs = [];

var gif;

function preload() {
  
  var path = 'app/images/';
  //img 10 looks weird find way to handle
  for (var i = 0; i < limit; i++){
    imgs.push( loadGif(path + floor(random(1,10)) + '.gif'));
  }
  
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
    var img = imgs[i];
    particles.push(new Particle(random(50,width-50), random(50, height-50), img));
  }
  
}

function draw() {
  // background('#212B32');
  // for (var i = 0; i < limit; i++){
  //   particles[i].separate(particles);
  //   particles[i].update();
  //   particles[i].display();
  // }
}