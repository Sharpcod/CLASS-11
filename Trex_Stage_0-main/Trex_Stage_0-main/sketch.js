
var trex ,trex_running, ground;
function preload(){
 //using 3 images to create animation
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,160,20,50)
 //adding animation to the sprite
 trex.addAnimation("running",trex_running)
 //resizeing the default size"1"
 trex.scale = 0.5
 ground = createSprite(200,180,400,20)
}

function draw(){
  background("white")
  //give velocity for trex to jump
  if(keyDown("space")){
    trex.velocityY=-5
  }
  //gravitational pull to pull it back
  trex.velocityY=trex.velocityY+0.5
  //collide function to keep it from going underground
  trex.collide(ground)
drawSprites()
}
