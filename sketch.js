const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;

var bomb;
 
var slingShot;

var stand1,stand2;

var polygon_img;

function preload(){
 polygon_img = loadImage("bomb.png");
}


function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  stand1 = new Stand(390,650,250,10);
 
  
  
  
  
  
  ground = new Ground();
  
  block1 = new Block(330,195,30,40);
  block2 = new Block(330,630,30,40);
  block3 = new Block(360,630,30,40);
  block4 = new Block(390,630,30,40);
  block5 = new Block(420,630,30,40);
  block6 = new Block(450,630,30,40);
  block7 = new Block(450,195,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three 
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:600});
  
}



function draw() {
  background("lightblue");  
 
  
  
  
  
  
  
  
  
  
  
  
  ground.display();
  stand1.display();
 
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();

  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}

function keyPressed(){
  
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

//if (keyCode)