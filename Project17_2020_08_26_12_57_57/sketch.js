var ball,img,paddle;
var wall1,wall2,wall3;
function preload() {
  PaddleIMG=loadImage("paddle.png");
  BallIMG=loadImage("ball.png");
}

function setup() {
  createCanvas(400, 400);
  wall1=createSprite(200,1,400,2);
  wall2=createSprite(200,399,400,2);
  wall3=createSprite(1,200,2,400);
  ball=createSprite(30,200,10,10);
  ball.addAnimation("BallIMG");
  ball.velocityY=2;
  ball.velocityX=9;
  paddle=createSprite(390,mouseY,10,70);
  paddle.addAnimation("PaddleIMG");
}

function draw() {
  background(205,153,0);
  createEdgeSprites();
  
 //Bounce Off the Left Edge only 
  ball.bounceOff(wall1); 
  ball.bounceOff(wall2); 
  ball.bounceOff(wall3);   
  ball.bounceOff(paddle);
  if(keyDown(UP_ARROW))
  {
      paddle.y=paddle.y-20; 
}
  
  if(keyDown(DOWN_ARROW))
  {
     paddle.y=paddle.y+20; 
  }
  
  
  drawSprites();
  
}

function randomVelocity()
{
  ball.velocityX=random(3,7);
}