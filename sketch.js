var player1,player2,blocks



function setup() {
  createCanvas(500,500);
  player1=createSprite(10,80,10,100);
  player2=createSprite(490, 100, 10, 100);
  blocks=createSprite(200,200,10,10);
  createEdgeSprites();
  blocks.velocityX=-2
  blocks.velocityY=2
}

function draw() {
  background(0);  
 // blocks.bounceOff(edges);
  drawSprites();
}