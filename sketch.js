
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
//creating monkey
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running) ;
monkey.scale=0.1
  
ground=createSprite(400,350,500,10) ;
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x) ;

  
}


function draw() {
background(225) ;

if(keyDown("space"))  {
monkey.velocityY=moneky.velocityY+0.8 ;
moneky.collide(ground) ;
drawSprites () ;
  
stroke("white") ;
textsize(20) ;
fill("white") ;
stroke("black")
textsize(20) ;
fill("black") ;
survivalTime=Math.ceil(FrameCount/FrameRate())
text("Survival Time:"+survialTime,100,50) ;
}
  
}
function food() {
  if (frameCount % 100 == 0) {
    //creating banana sprite and adding image to it
    banana = createSprite(400, Math.round(random(120, 200)));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.lifetime = 100;
    FoodGroup.add(banana);
    banana.depth = monkey.depth;
    monkey.depth += 1;
  } }
function obstacle() {
  if (frameCount % 300 === 0) {
    //creating obstracle sprite and adding image to it
    rock = createSprite(400, 330);
    rock.addImage(obstacleImage);
    rock.scale = 0.1;
    rock.velocityX = -4;
    rock.lifetime = 100;
    obstacleGroup.add(rock);
  }
}




