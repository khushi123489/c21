var movingRect, fixedRect;
var gameState1, gameState2, gameState3, gameState4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(700, 300, 50, 80);
  fixedRect.velocityY = 5;
  movingRect = createSprite(700, 700, 80, 30);
  movingRect.velocityY = -5;
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect.debug = true;

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";
  
}

function draw() {
  background(0, 0, 0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if (isTouching(movingRect, gameObject1)){
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }
  bounceOff(movingRect, fixedRect);
  drawSprites();
}

  