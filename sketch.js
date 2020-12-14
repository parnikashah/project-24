
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,dustbin1,dustbin2,dustbin3,ball1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
   
	
	
	engine = Engine.create();
	world = engine.world;

	dustbin1=new Dustbin(450,615,20,80);
	dustbin2=new Dustbin(600,615,20,80);
  dustbin3=new Dustbin(525,649,129,20);
	ball1=new Ball(110,645,20);
  
  myGround= new Ground(400,660,800,10);
	

  
}


function draw() {
 
  background(0);

  Engine.update(engine);

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  myGround.display();
  ball1.display();
 
}
    
function keyPressed(){
	if(keyCode===UP_ARROW){
	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:92,y:-98});
	}  
 
}



