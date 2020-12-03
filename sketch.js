const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, bird, pig;

function setup(){
  createCanvas(1200, 800);

  engine = Engine.create();

  world = engine.world;

  ground = new Ground(600, 790, 1200, 70);

  bird = new Bird(200, 200);

  pig1 = new Pig(925, 710);

  box1 = new Box(800, 710, 70, 70);
  box2 = new Box(1050, 710, 70, 70);
  log1 = new Log(925, 670, 320, PI/2);
  box3 = new Box(800, 620, 70, 70);
  box4 = new Box(1050, 620, 70, 70);
  log2 = new Log(925, 580, 320, PI/2);
  pig2 = new Pig(925, 620);

  box5 = new Box(925, 530, 60, 60);

  log3 = new Log(865, 510, 160, PI/7);
  log4 = new Log(965, 510, 160, -PI/7);
}

function draw(){
  background(200);

  Engine.update(engine);

  textSize(20);
  text(mouseX,200,50);
  text(mouseY,250,50);

  ground.display();

  bird.display();

  box1.display();

  box2.display();

  pig1.display();
  log1.display();
  box3.display();

  box4.display();

  pig2.display();
  log2.display();

  box5.display();
  log3.display();
  log4.display();

}