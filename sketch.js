var pathimg
var leftBoundary
var rightBoundary
function preload(){
pathimg=loadImage("path.png")
runnerimg=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  // Moving background
  path=createSprite(200,200);
  path.addImage(pathimg);
  path.velocityY = 4;
  path.scale=1.2;
 

  runner=createSprite(180,340)
  runner.addAnimation("runnerimg",runnerimg)
  runner.scale=0.05
  leftBoundary=createSprite(100,200,10,400)
  rightBoundary=createSprite(300,200,10,400)
  leftBoundary.visible=true
  rightBoundary.visible=true

}

function draw() {
  background("white");
 //code to reset the background
 if(path. y > 400){
  path.y = height/2;
}
runner.x=mouseX
runner.collide(leftBoundary)
runner.collide(rightBoundary)
drawSprites()
}