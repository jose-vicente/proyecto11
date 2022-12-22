var ship, shipstar;
var sea, seaImg;

function preload(){
seaImg = loadImage("sea.png");
shipstarb = loadAnimation("sea.png");

shipstar = loadAnimation("ship1.png", "ship2.png", "ship3.png", "ship4.png");
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(400, 200);
  sea.addImage(seaImg);
  sea.scale = 0.5;

  //crear sprite del bote
  ship = createSprite(150, 200, 20, 20);
  ship.addAnimation("movingShip", shipstar);
  ship.scale = 0.25;
}

function draw() {
  background("blue");
  if (sea.x < 0) {
      sea.x=sea.widht/2;
  }
 
  drawSprites();
}