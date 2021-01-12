var electrical, admin, navigation, storage;
var player;
var button, button2, button3, button4;
var task1, task2, task3, task4;
var time1=7, time2=7, time3=7, time4=7;
var arrowPosition, arrow;
var imposter, imposter2;
var tb1,tb2,tb3,tb4;
var ob1, ob2, ob3, ob4;

function preload(){
    red = loadImage("Images/Red among us..png");
    redD = loadImage("Images/red dead among us..png");
    black = loadImage("Images/Black among us..png");
    blackD = loadImage("Images/black dead among us..png");
    blue = loadImage("Images/Blue among us .png");
    blueD = loadImage("Images/blue dead among us..png");
    green = loadImage("Images/Green among us.png");
    greenD = loadImage("Images/green dead among us..png");
    orange = loadImage("Images/Orange among us..png");
    orangeD = loadImage("Images/orange dead among us. .png");
    pink = loadImage("Images/Pink among us.jpg");
    pinkD = loadImage("Images/pink dead among us..png");
    purple = loadImage("Images/Purple among us.png");
    purpleD = loadImage("Images/purple dead among us..png");
    white = loadImage("Images/White among us.png");
    whiteD = loadImage("Images/white dead among us..png");
    yellow = loadImage("Images/Yellow among us..png");
    yellowD = loadImage("Images/yellow dead among us..png");
    navigation1 = loadImage("Images/Navigation.png");
    taskn = loadImage("Images/navigationT.jpg");
    storage1 = loadImage("Images/Storage.png");
    tasks = loadImage("Images/storageT.jpg");
    electrical1 = loadImage("Images/Electrical.png");
    taske = loadImage("Images/electricalT.jpg");
    admin1 = loadImage("Images/Admin.png");
    taska = loadImage("Images/adminT.jpg");
}

function setup(){
    var canvas = createCanvas(1400,800);
    admin = createSprite(1200,150,200,200);
    admin.addImage(admin1);
    admin.scale=0.4;

    electrical = createSprite(190,150,200,200);
    electrical.addImage(electrical1);
    electrical.scale=0.6;

    storage = createSprite(260,620,200,200);
    storage.addImage(storage1);
    storage.scale=0.6;

    navigation = createSprite(1114,630,200,200);
    navigation.addImage(navigation1);
    navigation.scale=0.3;

    button = createSprite(1134,610,40,40);
    button.shapeColor="yellow";

    button2 = createSprite(190,150,40,40);
    button2.shapeColor="yellow";

    button3 = createSprite(260,630,40,40);
    button3.shapeColor="yellow";

    button4 = createSprite(1200,150,40,40);
    button4.shapeColor="yellow";

    player = createSprite(600,400,50,50);
    player.addImage("red",red);
    player.scale=0.03;

    arrow = createSprite(700,400,30,30);
    
    imposter = createSprite(700,400,40,40);
    imposter.addImage(yellow);
    imposter.scale=0.03;
    imposter.velocityX=4;
    imposter.velocityY=-4;
    
    imposter2 = createSprite(750,400,40,40);
    imposter2.addImage(green);
    imposter2.scale=0.1;
    imposter.velocityX=2;
    imposter.velocityY=-2;
    imposter2.visible=false;

    tb1 = createSprite(700,70,65,20);
    tb2 = createSprite(740,70,65,20);
    tb2 = createSprite(780,70,65,20);
    tb3 = createSprite(800,70,65,20);

    ob1 = createSprite(800,400,20,50);
    ob1.visible=false;
}

function draw(){
   background("black");
   
   if(keyDown("LEFT_ARROW")){
      player.x=player.x-10;
   }
   if(keyDown("RIGHT_ARROW")){
    player.x=player.x+10;
   }
   if(keyDown("UP_ARROW")){
    player.y=player.y-10;
   }
   if(keyDown("DOWN_ARROW")){
    player.y=player.y+10;
   }

   edges=createEdgeSprites();

   if(player.isTouching(edges)){
       player.bounceOff(edges);
   }
   if(imposter.isTouching(edges)){
    imposter.bounceOff(edges);
   }
   if(imposter2.isTouching(edges)){
    imposter2.bounceOff(edges);
   }

   imposter.bounceOff(ob1);

   if(mousePressedOver(button)){
    task1 = createSprite(1120,610,30,30);  
    task1.visible=true;
    task1.addImage(taskn);
    task1.scale=0.4;
    }

    if(mousePressedOver(button4)){
        task4 = createSprite(1200,150,30,30);  
        task4.visible=true;
        task4.addImage(taska);
        task4.scale=0.3;
        }
    /*if(frameCount%10==0){
        time1 = time1-1;  
    }

   console.log(time1);

   if(time1<=0){
       task1.visible = false;
   }

    if(mousePressedOver(button2)){
    task2 = createSprite(190,150,40,40);  
    task2.visible=true;
    task2.addImage(taske);
    task2.scale=0.4;
    }
    if(frameCount%10==0){
        time2 = time2-1;  
    }

   console.log(time2);

   if(time2<=0){
       task2.destroy();
   }*/

   var arrowPosition=Math.round(random(1,4));
   if(arrowPosition==1){
       arrow.x=420;
       arrow.y=400;
   }
   else if(arrowPosition==2){
       arrow.x=800;
       arrow.y=400;
   }
   else if(arrowPosition==3){
       arrow.x=800;
       arrow.y=150;
   }
   else{
       arrow.x=420;
       arrow.y=150;
   }

    drawSprites();
}