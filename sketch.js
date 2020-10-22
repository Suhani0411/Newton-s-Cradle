var roof,b1,b2,b3,b4,b5,r1,r2,r3,r4,r5;
//var ballsArray = [];
//var ropeArray = [];
	
	

const Engine = Matter.Engine;
const World = Matter.World;
const Render = Matter.Render;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	roof=new Roof(width/2,height/4,width/7,20);
	bobDiameter=40;

	  startBobPositionX=width/2;
	  startBobPositionY=height/4 + 500;

	  var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });

	/*var initPosition = 150;
	var diameter = 70;
	var yPosition = 400;*/	
	
	/*for(var i=0;i< 5;i++)
	{
		ballsArray[i] = new Paper(initPosition + (i*diameter),yPosition,diameter);
	}
	
	for(var i=0;i< 5;i++)
	{
		ropeArray[i] = new Slingshot(ballsArray[i].body,roof.body,0,0);
	}*/
	
	/*ballsArray[0] = new paper(initPosition,yPosition,diameter);
	ballsArray[1] = new paper(220,200,70);*/
	//b1=new paper(initPosition,yPosition,diameter);
	b1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	b2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	b3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	b4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	b5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	
	r1=new Rope(b1.body,roof.body,-bobDiameter*2,0);	
	r2=new Rope(b2.body,roof.body,-bobDiameter*1,0);	
	r3=new Rope(b3.body,roof.body,0,0);	
	r4=new Rope(b4.body,roof.body,bobDiameter*1,0);	
	r5=new Rope(b5.body,roof.body,bobDiameter*2,0);	
    




	

	//Create the Bodies Here.


	Engine.run(engine);
	Render.run(render);
	
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  Engine.update(engine);
  roof.display();
 /* for(var i=0;i< 5;i++)
  {
	  ballsArray[i].display();
	  ropeArray[i].display();
  }*/


   b1.display();
   b2.display();
   b3.display();
   b4.display();
   b5.display();
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();

keyPressed();
  
  drawSprites();
 
}




function keyPressed() {
	if (keyCode === UP_ARROW) {

// Matter.Body.applyForce(ballsArray[0].body,ballsArray[0].body.position,{x:-90,y:-10});
Matter.Body.applyForce(b1.body,b1.body.position,{x:-50,y:-45});  
  
	}
}
