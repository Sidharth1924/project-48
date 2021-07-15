var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaves,leavesImg;

var select_sprites = Math.round(random(1,2));
if(frameCount % 80 == 0){
if(select_sprites==1){
  apple=createSprites(random(50,350),40,10,10);
 
  
  
 
  
}
} 

var select_sprites = Math.round(random(1,2));
if(frameCount % 80 == 0){
if(select_sprites==1){
  leaves=createSprites(random(50,350),40,10,10);
}
}

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage ("apple.png")
  leavesImg = loadImage ("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);



}



function draw() {
  background(0);
 
  edges= createEdgeSprites();
  rabbit.collide(edges); 
rabbit.x=mouseX



  








 
createapples();
  
}
apple.velocityY=-9

function createapples(){
  
if(frameCount % 80 == 0){
if(select_sprites == 1) {

  
  createapples();

}
function createleaves(){
  if(frameCount % 80 == 0){
    if(select_sprites == 1) {
      createleaves();
    }  
}
}  
apple= createSprite(150,100);
apple.addImage(appleImg);
apple.scale=0.09;
apple.velocityY=2;
apple.y = Math.round(random(50,350))


leaves= createSprite(100,150);
leaves.addImage(leavesImg);
leaves.scale=0.09;
leaves.velocityY=2;
leaves.y = Math.round(random(60,360))


}


drawSprites();
}

