const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var Polygon;
var consta;



var block17, block18, block19, block20, block21, block22, block23, block24, block25, block26;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(490,300,250,10);
  stand2 = new Stand(700,200,200,10);
  stand3 = new Stand(800,200,150,10);
 
  //level one
  block1 = new Block(400,275,30,40);
  console.log(block1);
  block2 = new Block(430,275,30,40);
  block3 = new Block(460,275,30,40);
  block4 = new Block(490,275,30,40);
  block5 = new Block(520,275,30,40);
  block6 = new Block(550,275,30,40);
  block7 = new Block(580,275,30,40);
  //level two
  block8 = new Block(430,235,30,40);
  block9 = new Block(460,235,30,40);
  block10 = new Block(490,235,30,40);
  block11 = new Block(520,235,30,40);
  block12 = new Block(550,235,30,40);
  //level three
  block13 = new Block(460,195,30,40);
  block14 = new Block(490,195,30,40);
  block15 = new Block(520,195,30,40);
  //top
  block16 = new Block(490,155,30,40);
  //ball
  Polygon = new balle(160,225,40,40);
  //rope
  consta = new SlingShot(Polygon.body,{x:160 ,y:175});
  //second piramid blocks
  //fourth
  block17 = new Block(750,130,30,40);
  block18 = new Block(780,130,30,40);
  block19 = new Block(810,130,30,40);
  block20 = new Block(840,130,30,40);
  //third
  block21 = new Block(765,90,30,40);
  block22 = new Block(795,90,30,40);
  block23 = new Block(825,90,30,40);
 //second
  block24 = new Block(810,50,30,40);
  block25 = new Block(780,50,30,40);
 //frist
  block26 = new Block(795,10,30,40);




}
function draw() {
  background(180); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand3.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
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
  fill("grey");
  block16.display();
  Polygon.display();
  consta.display();
  fill("green");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  fill("red");
  block21.display();
  block22.display();
  block23.display();
  fill("blue");
  block24.display();
  block25.display();
  fill("yellow");
  block26.display();
 
  
 

}

function mouseDragged(){
  Matter.Body.setPosition(Polygon.body,{x:mouseX ,y:mouseY});
}

function mouseReleased(){
  consta.fly();
}



function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(Polygon.body ,{x:160,y:175});
		consta= new SlingShot(Polygon.body,{x:160,y:175});
	}

}							


/*function mouseDragged(){
  Matter.Body.setPosition(st1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  chain.fly();
}*/