var trex
var trexRunning
var edges
var ground,groundImg
var invisibleGround
function preload(){
  trexRunning = loadAnimation("trex1.png","trex2.png","trex4.png")
  groundImg = loadImage("ground2.png")
}



function setup(){
  createCanvas(600,200);
  
trex = createSprite(50,150,20,20);
trex.addAnimation("running",trexRunning)
trex.scale  = 0.5

edges = createEdgeSprites();
ground = createSprite(300,190,100,20)
ground.addImage(groundImg)
invisibleGround = createSprite(100,198,200,10)
invisibleGround.visible = false





}



function draw(){
  background("lightBlue");
console.log(trex.y)



if(keyDown("space") && trex.y > 150){
  trex.velocityY = -6
}



ground.velocityX = -2
if(ground.x < 0){
  ground.x = 300
}
trex.velocityY = trex.velocityY + 0.5
trex.collide(invisibleGround)
  drawSprites();
}