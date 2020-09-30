var player, player_img1, player_img2;
var bg, bg_img;
var tri, obstacle2;
var wood1, obstacle3;
var wood2, obstacle4;
var ground;
var obstaclesGroup,obstacles1Group,obstacles11Group,obstacles111Group;
var gameState = "intro";
var score = 0;
var reset, reset_img;
var bullet, pause_img;
var x = 20;
var bulletgamestate = "shoot";
var guun,gun_image;


function preload(){
    player_img1 = loadImage("player.png");
    player_img2 = loadImage("player2.png");
    bg_img = loadImage("Capture.jpg");
    obstacle2 = loadImage("wood1.png");
    obstacle3 = loadImage("wood2.png");
    obstacle4 = loadImage("wood2 (4) (1).png");
    reset_img = loadImage("reset.jpg");
    pause_img = loadImage("untitled (6) (2).png")
    gun_image = loadImage("download.png");
}
function setup(){
    canvas = createCanvas(windowWidth,windowHeight);
    
    ground = createSprite(400,700,13000,50);
    ground.shapeColor = "green";
    ground.visible = false;
intros=new PLAY();
    player = createSprite(250,600,5,5);
    player.addImage("player", player_img1);
    player.scale = 0.1;
    player.visible = false;
    player.setCollider("rectangle",player.x-280,player.y-600,350,650);

    reset = createSprite(800,300,50,50);
    reset.addImage("reset", reset_img);
    reset.scale = 0.7;
    reset.visible = false;

    //pause = createSprite(750,350,50,50);
    //pause.addImage("pause", pause_img);
    //pause.scale = 0.07;
    //pause.visible = false;
    
    obstaclesGroup = new Group();
    obstacles1Group = new Group();
    obstacles11Group = new Group();
    obstacles111Group = new Group();
}

function draw(){
 
 if(player.isTouching(obstacles111Group)){
   gameState="end"
  
 }

  
  intros.display();
 
    
    if(gameState === "play"){
        background(bg_img);
        textSize(15);
        text("Score : " + score,380,25);
        //text("M", 750,320);
        
        player.visible = true;
        ground.visible = true;
        //pause.visible = true;
        obstaclesGroup.setVisibleEach(true);
        obstacles1Group.setVisibleEach(true);
        obstacles11Group.setVisibleEach(true);
        obstacles111Group.setVisibleEach(true);
        reset.visible = false;

        player.velocityY = player.velocityY + 0.7;

        if(touches.length > 0 || keyDown("space")){
            player.y = player.y - 17;
            touches = [];
        }

        if(keyWentDown(68) && bulletgamestate === "shoot"){
         var bullet=createSprite(player.x,player.y,10,5);
         bullet.velocityX=4;
         bulletgamestate="nonshoot";

      }
      else if (keyWentUp(68) && bulletgamestate === "nonshoot"){
        bulletgamestate="shoot";
      }
        if(touches.length > 0 || keyDown("right_arrow")){
            player.x = player.x + 7;
            player.addImage("player", player_img1);
            touches = [];
        }
        if(touches.length > 0 || keyDown("left_arrow")){
          player.x = player.x - 7;
          player.addImage("player", player_img2);
          touches = [];
      }

        if(player.y < 500){
            score = score + Math.round(getFrameRate()/60);
            ground.y = 1000;
        }

        player.collide(obstaclesGroup);
        player.collide(obstacles1Group);
        player.collide(obstacles11Group);
        obstaclesGroup.collide(obstacles1Group);
        obstaclesGroup.collide(obstacles11Group);
        obstacles1Group.collide(obstacles11Group);
        obstaclesGroup.collide(obstacles111Group);
        obstacles1Group.collide(obstacles111Group);
        obstacles11Group.collide(obstacles111Group);
        player.collide(ground);

        spawnObstacles();
        spawnObstacles1();
        spawnObstacles11();
        spawnObstacles111();
       
       /// if(keyDown("m")){
       //   gameState = "pause";
        //}

        if(player.x < 0 || player.y > 900){
            gameState = "end";
            
        }
        for (var gun = 5; gun < 900; gun=gun+150) {
          guun=createSprite(1500,gun,100,gun+10)
          
         guun.addImage("gn",gun_image)
        }
    }

   

    else if(gameState === "end"){
        textSize(15);
        text("Score : " + score,380,25);
        player.visible = false;
        reset.visible = true;
        obstaclesGroup.destroyEach();
        obstacles1Group.destroyEach();
        obstacles11Group.destroyEach();
        obstacles111Group.destroyEach();
        score = score;
    
        if(touches.length  > 0 || mousePressedOver(reset)){
           restart();
           touches = [];
        }
    }
    
    drawSprites();
}   
  
function spawnObstacles() {
    if(frameCount % 80 === 0 ) {
      var obstacle = createSprite(1500,random(50,600),10,40);
      obstacle.addImage("bg",obstacle2)
      if(score < 100){
        obstacle.velocityX = -4;
        x = 20;
      }

      if(score < 200 && score > 100){
        obstacle.velocityX = -4.1;
        x = 21;
      }

      if(score < 300 && score > 200){
        obstacle.velocityX = -4.2;
        x = 22;
      }

      if(score < 400 && score > 300){
        obstacle.velocityX = -4.3;
        x = 23;
      }

      if(score < 500 && score > 400){
        obstacle.velocityX = -4.4;
        x = 24;
      }

      if(score < 600 && score > 500){
        obstacle.velocityX = -4.5;
        x = 25;
      }

      if(score < 700 && score > 600){
        obstacle.velocityX = -4.6;
        x = 26;
      }

      if(score < 800 && score > 700){
        obstacle.velocityX = -4.7;
        x = 27;
      }
        
      if(score < 900 && score > 800){
        obstacle.velocityX = -4.8;
        x = 28;
      } 
      
      if(score < 1000 && score > 900){
        obstacle.velocityX = -4.9;
        x = 29;
      }

      if(score > 1000){
        obstacle.velocityX = -5;
        x = 30;
      }
      
     
      
      obstacle.scale = 0.5;
      obstacle.lifetime = 1210;
      obstaclesGroup.add(obstacle);

     
    }
  }
  function spawnObstacles111() {
    if(frameCount % 80 === 0 ) {
      var obstacle111 = createSprite(1500,random(50,600),10,40);
      obstacle111.addImage("bg",pause_img)
      
      obstacle111.setCollider("rectangle",0,0,250,80)
      if(score < 100){
        obstacle111.velocityX = -4;
        x = 20;
      }

      if(score < 200 && score > 100){
        obstacle111.velocityX = -4.1;
        x = 21;
      }

      if(score < 300 && score > 200){
        obstacle111.velocityX = -4.2;
        x = 22;
      }

      if(score < 400 && score > 300){
        obstacle111.velocityX = -4.3;
        x = 23;
      }

      if(score < 500 && score > 400){
        obstacle111.velocityX = -4.4;
        x = 24;
      }

      if(score < 600 && score > 500){
        obstacle111.velocityX = -4.5;
        x = 25;
      }

      if(score < 700 && score > 600){
        obstacle111.velocityX = -4.6;
        x = 26;
      }

      if(score < 800 && score > 700){
        obstacle111.velocityX = -4.7;
        x = 27;
      }
        
      if(score < 900 && score > 800){
        obstacle111.velocityX = -4.8;
        x = 28;
      } 
      
      if(score < 1000 && score > 900){
        obstacle111.velocityX = -4.9;
        x = 29;
      }

      if(score > 1000){
        obstacle111.velocityX = -5;
        x = 30;
      }
      
     
      
      obstacle111.scale = 0.2;
      obstacle111.lifetime = 1210;
      obstacles111Group.add(obstacle111);

     
    }
  }

  function spawnObstacles1() {
    if(frameCount % 40 === 0 ) {
      var obstacle1 = createSprite(1500,random(50,600),10,40);
      obstacle1.addImage("gb",obstacle3)
      if(score < 100){
        obstacle1.velocityX = -4;
        x = 20;
      }

      if(score < 200 && score > 100){
        obstacle1.velocityX = -4.1;
        x = 21;
      }

      if(score < 300 && score > 200){
        obstacle1.velocityX = -4.2;
        x = 22;
      }

      if(score < 400 && score > 300){
        obstacle1.velocityX = -4.3;
        x = 23;
      }

      if(score < 500 && score > 400){
        obstacle1.velocityX = -4.4;
        x = 24;
      }

      if(score < 600 && score > 500){
        obstacle1.velocityX = -4.5;
        x = 25;
      }

      if(score < 700 && score > 600){
        obstacle1.velocityX = -4.6;
        x = 26;
      }

      if(score < 800 && score > 700){
        obstacle1.velocityX = -4.7;
        x = 27;
      }
        
      if(score < 900 && score > 800){
        obstacle1.velocityX = -4.8;
        x = 28;
      } 
      
      if(score < 1000 && score > 900){
        obstacle1.velocityX = -4.9;
        x = 29;
      }

      if(score > 1000){
        obstacle1.velocityX = -5;
        x = 30;
      }
      
    
      obstacle1.scale = 0.5;
      obstacle1.lifetime = 1210;
      obstacles1Group.add(obstacle1);

     
    }
  }
  function spawnObstacles11() {
    if(frameCount % 60 === 0) {
      var obstacle11 = createSprite(1500,random(50,600),10,40);
      obstacle11.addImage("gb",obstacle4)
    
      obstacle11.setCollider("rectangle",0,-80,200,240)
      if(score < 100){
        obstacle11.velocityX = -4;
        x = 20;
      }

      if(score < 200 && score > 100){
        obstacle11.velocityX = -4.1;
        x = 21;
      }

      if(score < 300 && score > 200){
        obstacle11.velocityX = -4.2;
        x = 22;
      }

      if(score < 400 && score > 300){
        obstacle11.velocityX = -4.3;
        x = 23;
      }

      if(score < 500 && score > 400){
        obstacle11.velocityX = -4.4;
        x = 24;
      }

      if(score < 600 && score > 500){
        obstacle11.velocityX = -4.5;
        x = 25;
      }

      if(score < 700 && score > 600){
        obstacle11.velocityX = -4.6;
        x = 26;
      }

      if(score < 800 && score > 700){
        obstacle11.velocityX = -4.7;
        x = 27;
      }
        
      if(score < 900 && score > 800){
        obstacle11.velocityX = -4.8;
        x = 28;
      } 
      
      if(score < 1000 && score > 900){
        obstacle11.velocityX = -4.9;
        x = 29;
      }

      if(score > 1000){
        obstacle11.velocityX = -5;
        x = 30;
      }
      
    
      obstacle11.scale = 0.2;
      obstacle11.lifetime = 1210;
      obstacles11Group.add(obstacle11);

     
    }
  }
  
function restart(){
    player.y = 600;
    player.x = 250;
    gameState = "play";
    score = 0;
    ground.y = 700;
    obstaclesGroup.setVelocityXEach(0);
    obstacles1Group.setVelocityXEach(0);
    obstacles11Group.setVelocityXEach(0);
    obstacles111Group.setVelocityXEach(0);
    frameCount = 0;
    x = 20;
    
}
