var fixed,moving;
var obj1,obj2

function setup() {
  createCanvas(1200,800);
  fixed = createSprite(400, 200, 80, 50);
  moving = createSprite(200,200,50,80);
  fixed.shapeColor="red"
  moving.shapeColor="blue"
  obj1 = createSprite(100,100,50,50)
  obj2 = createSprite(200,100,50,50)
}

function draw() {
  background(255,255,255);  
  moving.x=mouseX;
  moving.y=mouseY;
 if(isTouching(moving,obj1)){
  obj1.shapeColor="green"
  moving.shapeColor="yellow"
 } 
 else{
  obj1.shapeColor="red"
  moving.shapeColor="blue"
 }
 bounceOff(moving,obj2)
  drawSprites();
}

