var bg;
var satelite;
var alien;
var earth, shield;
var face;
var bullet;
var edgeup, edgedown, edgeright, edgeleft;
var start;
var timer=30;
var bulletgroup1,bulletgroup2;
var aliengroup,alien1group,alien2group,alien3group;
var gameState="time"
var abulletgroup1,abulletgroup2,abulletgroup3,abulletgroup4;
var deadaliens=0;

function preload() {


  sateliteImage = loadImage("satelite/satelite3.png")
  bgImage = loadImage("bg/bg.png")
  alienImage = loadImage("alien/alien.png")
  alien1Image = loadImage("alien/alien1.png")
  alien2Image = loadImage("alien/alien2.png")
  alien3Image = loadImage("alien/alien3.png")
  earthImage = loadImage("earth/earth.png")
  shieldImage = loadImage("shield/shield.png")
  targetImage = loadImage("target.png")
}
function setup() {
  createCanvas(displayWidth - 20, displayHeight - 120);
  bg = createSprite(600, 600, 1200, 1200);
  bg.addImage(bgImage)
  bg.scale = 5.0

  

  alien1group=new Group()
  alien2group=new Group()
  aliengroup=new Group()
  alien3group=new Group()
  start=createSprite(1150,100,50,30);

  

  edgeleft = createSprite(0, displayHeight / 2, 10, displayHeight)

  edgeright = createSprite(displayWidth - 20, displayHeight / 2, 10, displayHeight)

  edgedown = createSprite(displayWidth / 2, displayHeight - 120, displayWidth, 10)

  edgeup = createSprite(displayWidth / 2, 0, displayWidth, 10)


  satelite = createSprite(300, 250, 10, 10);
  satelite.addImage(sateliteImage)
  satelite.scale = 0.5
  satelite.velocityY = -3
  satelite.velocityX=3

  alien = createSprite(200, 200, 10, 10)
  alien.addImage(alienImage)
  alien.velocityX = 3
  alien.velocityY = 3
  alien.scale = 0.3
  aliengroup.add(alien) 
  

  alien1 = createSprite(1000, 500, 10, 10)
  alien1.addImage(alien1Image)
  alien1.velocityX = -3
  alien1.velocityY = -3
  alien1.scale = 0.5
  alien1group.add(alien1)
 

  alien2 = createSprite(400, 500, 10, 10)
  alien2.addImage(alien2Image)
  alien2.velocityX = -3
  alien2.velocityY = 3
  alien2.scale = 0.5
  alien2group.add(alien2)

  alien3 = createSprite(800, 200, 10, 10)
  alien3.addImage(alien3Image)
  alien3.velocityX = 3
  alien3.velocityY = -3
  alien3.scale = 0.5
  alien3group.add(alien3)

  earth = createSprite(700, 300, 10, 10)
  earth.addImage(earthImage)
  earth.scale = 0.2

  shield = createSprite(700, 300, 10, 10)
  shield.addImage(shieldImage)
  shield.scale = 0.8
  shield.visible=false

  target = createSprite(satelite.x, satelite.y, 10, 10)
  target.addImage(targetImage)
  target.scale = 0.1;
  

   
  bulletgroup1=new Group()
   bulletgroup2=new Group()

   abulletgroup1=new Group()
   abulletgroup2=new Group()
   abulletgroup3=new Group()
   abulletgroup4=new Group()   
   
}

function draw() {

 if (gameState==="time"){
  
    

  if (keyWentDown("RIGHT_ARROW")) {
    target.x = satelite.x + 400
    target.y = satelite.y
    face = "A"
  }
  if (keyWentDown("LEFT_ARROW")) {
    target.x = satelite.x - 400
    target.y = satelite.y
    face = "B"
  }
  if (keyWentDown("UP_ARROW")) {
    target.x = satelite.x
    target.y = satelite.y - 400
    face = "C"
  }
  if (keyWentDown("DOWN_ARROW")) {
    target.x = satelite.x
    target.y = satelite.y + 400
    face = "D"
  }
  if (face == "A" && keyDown("space")) {
    bullet = createSprite(satelite.x, satelite.y, 15, 10)
    bullet.velocityX = 2
    bullet.shapeColor="red"
    bulletgroup2.add(bullet)
    bullet.lifetime=150
  }
  if (face == "B" && keyDown("space")) {
    bullet = createSprite(satelite.x, satelite.y, 15, 10)
    bullet.velocityX = -2
    bullet.shapeColor="red"
    bulletgroup2.add(bullet)
    bullet.lifetime=150
  }
  if (face == "C" && keyDown("space")) {
    bullet = createSprite(satelite.x, satelite.y, 10, 15)
    bullet.velocityY = -2
    bullet.shapeColor="red"
   bulletgroup1.add(bullet)
   bullet.lifetime=150
  } 
  if (face == "D" && keyDown("space")) {
    bullet = createSprite(satelite.x, satelite.y, 10, 15)
    bullet.velocityY = 2
    bullet.shapeColor="red"
    bulletgroup1.add(bullet)
    bullet.lifetime=150
  }

  if (frameCount%30===0){
    abullet= createSprite(alien.x,alien.y,10,15)
    abullet.velocityX=random(-3,3)
    abullet.velocityY=random(-3,3)
    abullet.lifetime=200
    abullet.shapeColor="green"
    abulletgroup1.add(abullet)
  }

  if (frameCount%30===0){
    abullet= createSprite(alien1.x,alien1.y,10,15)
    abullet.velocityX=random(-3,3)
    abullet.velocityY=random(-3,3)
    abullet.lifetime=200
    abullet.shapeColor="green"
    abulletgroup2.add(abullet)
  }

  if (frameCount%30===0){
    abullet= createSprite(alien2.x,alien2.y,10,15)
    abullet.velocityX=random(-3,3)
    abullet.velocityY=random(-3,3)
    abullet.lifetime=200
    abullet.shapeColor="green"
    abulletgroup3.add(abullet)
  }

  if (frameCount%30===0){
    abullet= createSprite(alien3.x,alien3.y,10,15)
    abullet.velocityX=random(-3,3)
    abullet.velocityY=random(-3,3)
    abullet.lifetime=200
    abullet.shapeColor="green"
    abulletgroup4.add(abullet)
  }


   if (abulletgroup1.isTouching(earth)){
   earth.destroy()
   abulletgroup1.destroyEach()
   abulletgroup2.destroyEach()
   abulletgroup3.destroyEach()
   abulletgroup4.destroyEach()
   //gameState="earthend"
   }

   if (abulletgroup2.isTouching(earth)){
    earth.destroy()
    abulletgroup1.destroyEach()
   abulletgroup2.destroyEach()
    abulletgroup3.destroyEach()
    abulletgroup4.destroyEach()
    //gameState="earthend"
    }

    if (abulletgroup3.isTouching(earth)){
      earth.destroy()
      abulletgroup1.destroyEach()
   abulletgroup2.destroyEach()
    abulletgroup3.destroyEach()
    abulletgroup4.destroyEach()
   // gameState="earthend"
      }

      if (abulletgroup4.isTouching(earth)){
        earth.destroy()
        abulletgroup1.destroyEach()
   abulletgroup2.destroyEach()
    abulletgroup3.destroyEach()
    abulletgroup4.destroyEach()
    //gameState="earthend"
        }
        if (mousePressedOver(start)){
          shield.visible=true
          gameState="time2" 
        }
        if (frameCount%30==0&&gameState=="time2"){
          timer=timer-1
         }
         if (timer===0) {
          shield.destroy();
        }
        if (bulletgroup1.isTouching(aliengroup)||bulletgroup2.isTouching(aliengroup)){
        aliengroup.destroyEach()
       deadaliens++
       }
        if (bulletgroup1.isTouching(alien1group)||bulletgroup2.isTouching(alien1group)){
         alien1group.destroyEach()
         deadaliens++
         }
         if (bulletgroup1.isTouching(alien2group)||bulletgroup2.isTouching(alien2group)){
           alien2group.destroyEach()
           deadaliens++
           }
           if (bulletgroup1.isTouching(alien3group)||bulletgroup2.isTouching(alien3group)){
             alien3group.destroyEach()
             deadaliens++
             }
      }
      if (deadaliens===4){
        textSize(20)
        text("you win",600,400)
        gameState="earthend"
        }
     if (gameState==="earthend"){
       textSize(20)
       text("you lose",300,200)
       var startagain=createSprite(displayWidth/2,displayHeight/2,50,30)
     }
 
  if (mousePressedOver(startagain)){
    reset()
  }

 

  createEdgeSprites()
   satelite.bounceOff(edgeup)
   satelite.bounceOff(edgedown)
    satelite.bounceOff(edgeleft)
  satelite.bounceOff(edgeright)
  satelite.bounceOff(earth)
  
  alien.bounceOff(edgeup)
  alien.bounceOff(edgedown)
   alien.bounceOff(edgeleft)
 alien.bounceOff(edgeright)
 alien.bounceOff(earth)

 alien1.bounceOff(edgeup)
 alien1.bounceOff(edgedown)
  alien1.bounceOff(edgeleft)
alien1.bounceOff(edgeright)
alien1.bounceOff(earth)

alien2.bounceOff(edgeup)
alien2.bounceOff(edgedown)
 alien2.bounceOff(edgeleft)
alien2.bounceOff(edgeright)
alien2.bounceOff(earth)

alien3.bounceOff(edgeup)
alien3.bounceOff(edgedown)
 alien3.bounceOff(edgeleft)
alien3.bounceOff(edgeright)
alien3.bounceOff(earth)



  abulletgroup1.bounceOff(shield)
  abulletgroup2.bounceOff(shield)
  abulletgroup3.bounceOff(shield)
  abulletgroup4.bounceOff(shield)
  
  drawSprites();

 
   text("timer "+timer,600,50)

   


        
       
  text("Click here to activate the shield " ,1050,70)
  text("deadaliens "+deadaliens,300,300)
  
  
}
function reset(){
  gameState="time"
  deadaliens=0 
  timer=30
}