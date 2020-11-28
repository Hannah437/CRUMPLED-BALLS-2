
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	//var render = Render.create({ element:document.body, engine: engine, options: { width: 800, height: 700, showAngleIndicator: true, wireframes:true, }, }); Render.run(render);
	rect1 = new Rect(600,635,220,20);
	rect2 = new Rect(500,575,20,100);
	rect3 = new Rect(700,575,20,100);
	paperObject = new Paper(100,200);
}

function draw() {
	background(20,50,100);
	
	Engine.update(engine);
  rectMode(CENTER);
  paperObject.display();
  fill("red")
  rect(ground.position.x, ground.position.y, width, 10)
  
  rect1.display();
  rect2.display();
  rect3.display();

  imageMode(CENTER);
   image(rect1.image,600, 570, 240, 150);
  paperObject.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:60,y:-60});
	}
}