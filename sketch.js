
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, side1,side2,side3, gs, d1, dimg;

function preload() {
	dimg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(300,200);
	gs = new Dustbin(400,660,800,20);
	side1 = new Dustbin(width/2+100,height-90,20, 100);
	side2 = new Dustbin(width/2+200, height-50, 200,20);
	side3 = new Dustbin(width/2+300,height-90,20, 100);

	Engine.run(engine);
  
	d1 = createSprite(600, 500);
	d1.addImage(dimg);


}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  gs.display();
  side1.display();
  side2.display();
  side3.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body, paper.body.position,{x:85, y:-85});
   
	   
	 }
   }

