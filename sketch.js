var itachi
var itachiImage
var itachiImage2
var itachiImage3
var itachiImage4
var itachiImage5
var itachiimage12
var ground
var enemy,enemy1,enemy2,enemy3,enemy4
function preload(){
itachiImage=loadAnimation("Image1.png","Image2.png","Image3.png","Image4.png","Image5.png","image12.png")
groundImage=loadImage("image6.jpeg")
enemyImage=loadAnimation("image7.png","image8.png","image9.png","image10.png","image11.jpeg")



}
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  ground=createSprite(400,200,800,400);
  ground.addAnimation("go",groundImage)
  ground.scale=5.5

  itachi=createSprite(250,300,50,50)
itachi.addAnimation("fly",itachiImage)

enemy=createSprite(200,250,50,50)
enemy.addAnimation("add",enemyImage)
  
}

function draw() {
  background(255,255,255);  

if(ground.x>800){
ground.x=ground.width/2

}

ground.velocityX=5


  drawSprites();
}