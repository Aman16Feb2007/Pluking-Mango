var T;
var S;
var G;
var M1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
	backgroundImg = loadImage("Background.jpg");
	bImg = loadImage("boy.png");
	mImg = loadImage("tree.png");
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	B = createSprite(300,550);
	B.addImage(bImg);
	B.scale = 0.19;

	T = createSprite(900,360,550,650);
	T.addImage(mImg)
	T.scale =0.5;

	G = new Ground(600,680,1200,20);
	
	S = new Stone(200,150,100,100);

	C = new Wire(S.body, {x:200, y:440});

	M1 = new MANGO(800,100);
	M2 = new MANGO(900,100);
	M3 = new MANGO(1000,100);
	M4 = new MANGO(800,200);
	M5 = new MANGO(900,200);
	M6 = new MANGO(1000,200);
	M7 = new MANGO(800,300);
	M8 = new MANGO(900,300);
	M9 = new MANGO(1000,300);
	M10 = new MANGO(1100,300);
	M11 = new MANGO(700,300);
	M12 = new MANGO(1100,200);
	M13 = new MANGO(700,200);
	M14 = new MANGO(850,150);
	M15 = new MANGO(950,150);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  Engine.update(engine);

	G.display();

	C.display();

	drawSprites();

	S.display();

	M1.display();
	M2.display();
	M3.display();
	M4.display();
	M5.display();
	M6.display();
	M7.display();
	M8.display();
	M9.display();
	M10.display();
	M11.display();
	M12.display();
	M13.display();
	M14.display();
	M15.display();

	M(M1);
	M(M2);
	M(M3);
	M(M4);
	M(M5);
	M(M6);
	M(M7);
	M(M8);
	M(M9);
	M(M10);
	M(M11);
	M(M12);
	M(M13);
	M(M14);
	M(M15);
	

}

function mouseDragged(){
	Matter.Body.setPosition(S.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){
    C.fly();
}

function keyPressed(){
	if(keyCode === 32){
		C.attach(S.body);
	}
	}

function M(object1){
	if(S.body.position.x-object1.body.position.x< S.width/2+object1.width/2 &&
	   object1.body.position.x-S.body.position.x< S.width/2+object1.width/2 &&
	   S.body.position.y-object1.body.position.y< S.height/2+object1.height/2 &&
	   object1.body.position.y-S.body.position.y< S.height/2+object1.height/2
	){
		Matter.Body.setStatic(object1.body, false);
	}



}