class Paper{
  
    constructor(x,y){  
   
     var options = { 
      isStatic : false,
      restitution : 0.3,
      friction : 0.5,
      density : 1.2
     } 
    
     this.body = Matter.Bodies.circle(x,y,20,options);
     this.image = loadImage("sprites/paper.png");
     World.add(world, this.body);

    }
  display(){
    push();
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y,40,40);
    pop();
  }
}