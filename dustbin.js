class Rect{
  
 constructor(x, y, width, height){  

  var options = {
   isStatic : true
  } 
 
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  this.image = loadImage("sprites/dustbin.png");

  World.add(world, this.body);
 }

 display(){
   push()
   fill("white");
   var pos = this.body.position;
   rect(pos.x, pos.y, this.width, this.height)
   
   pop();
 }  
}