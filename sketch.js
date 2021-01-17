function preload(){
  mario_running = loadAnimation("img/mar1.png", "img/mar2.png", "img/mar3.png", "img/mar4.png", "img/mar5.png", "img/mar6.png", "img/mar7.png");
  bgImage = loadImage("img/bgnew.jpg");
  
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580, 300, 300, 300);
  bg.scale = 0.5;
  bg.addImage(bgImage);
  
  mario = createSprite(200, 520, 30, 30);
  mario.scale = 0.2;
  mario.addAnimation("running", mario_running);
  
  ground = createSprite(480 , 580 , 1000 ,10);
  
  ground.visible = false;   
    

}

function draw() {
  
  if (keyDown('space')) {
    mario.velocityY = -12;
  }

  mario.velocityY = mario.velocityY + 0.5;
  
  drawSprites();
  
  
  mario.collide(ground);  
}