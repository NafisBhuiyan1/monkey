
var banana, jungle, stone, monkey, img, jungleimg, ground, stoneimg, bananaimg
var stonegroup
var bananagroup
var Score= 0;
function preload() {
  img=loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png")
  
jungleimg=loadImage("jungle.jpg")
stoneimg=loadImage("stone.png")
bananaimg=loadImage("banana.png")
}


function setup() {
  createCanvas(400, 400);
  jungle = createSprite(200,200,20,20)
  jungle.scale=0.8
  monkey = createSprite(50,350,20,20)
  monkey.scale=0.1 
  monkey.addAnimation("monkey",img);
  jungle.addAnimation("jungle",jungleimg);
  jungle.velocityX=-5
  ground = createSprite(200,385,400,30)
  ground.visible=false;
  bananagroup = new Group();
  stonegroup = new Group();

}

function draw() {
  background(205,153,0);

  monkey.collide(ground)
  
  if(jungle.x<0){
    jungle.x=jungle.width/2
   }
  if(keyDown("space")){
  monkey.velocityY=-7.5
   }
  monkey.velocityY=monkey.velocityY+0.5
  
    if(World.frameCount%60===0){
  stone = createSprite(400,350,20,20)
  stone.velocityX=-7.5
  stone.addAnimation("stone", stoneimg)
  stone.scale=0.1
  stonegroup.add(stone)
   }
    if(World.frameCount%90===0){
  banana = createSprite(50,250,20,20)
  banana.addAnimation("banana", bananaimg)
  banana.scale=0.03
  bananagroup.add(banana)
   }

    if(stonegroup.isTouching(monkey)) {
  monkey.scale=0.1;
  stonegroup.destroyEach();
  }
    if(bananagroup.isTouching(monkey)) {
  Score=Score+20
  bananagroup.destroyEach();
  }
  
      switch(Score) {
      case 10: monkey.scale=0.12;
              break;
      case 20: monkey.scale=0.14;
              break;
      case 30: monkey.scale=0.16;
              break;
      case 40: monkey.scale=0.18;
              break;
      default: break;
    }
  
  drawSprites();

  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ Score, 300,25)
}




