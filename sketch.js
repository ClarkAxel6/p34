const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground1;
var ball1;
var sling1;
var box1, box2, box3;

var backgroundIMG;
var monster, monsterIMG;

function preload(){
  backgroundIMG = loadImage('/images/GamingBackground.png');
  monsterIMG = loadImage('/images/Monster-01.png');
}

function setup() {
  createCanvas(900,500);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(320, 450, 700, 20);
  ball1 = new Ball(400, 200, 100);
  sling1 = new Sling(ball1.body, {x: 100, y: 50});
  box1 = new Box(500, 400, 40, 40);
  box2 = new Box(460, 400, 40, 40);
  box3 = new Box(420, 400, 40, 40);
  box4 = new Box(380, 320, 40, 40);
  box5 = new Box(340, 320, 40, 40);
  box6 = new Box(300, 400, 40, 40);

  box7 = new Box(500, 440, 40, 40);
  box8 = new Box(460, 440, 40, 40);
  box9 = new Box(420, 440, 40, 40);
  box10 = new Box(380, 440, 40, 40);
  box11 = new Box(340, 440, 40, 40);
  box12 = new Box(300, 440, 40, 40);

  box13 = new Box(500, 360, 40, 40);
  box14 = new Box(460, 360, 40, 40);
  box15 = new Box(420, 360, 40, 40);
  box16 = new Box(380, 360, 40, 40);
  box17 = new Box(340, 360, 40, 40);
  box18 = new Box(300, 360, 40, 40);

  monster = Bodies.rectangle(630, 300, 100, 200);
  World.add(world, monster);
  console.log(monster.position.x);
}

function draw() {
  background(backgroundIMG);
  Engine.update(engine);

  ground1.display();
  ball1.display();
  sling1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  image(monsterIMG, monster.position.x, monster.position.y, 200, 200);
  
}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body, {x: mouseX, y: mouseY});
}
