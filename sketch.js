



var playingGround;
var border1, border2, border3, border5;
var bg1, bg2;
var monkeyBody, monkeyBodyIMG;
var shopButton, levelsButton, howToPlayButton, backButton, buyButton, buyButton2, sellButton;
var LV1Button, LV2Button, LV3Button, LV4Button, LV5Button;
var earthIMG, earth, marsIMG, mars, rocket, rocketIMG, rocketShipIMG, rocketShip;
var monkeyCount = 2;
var capCount = 0;
var moneyCount = 0;
var levelCount = 1;
var gameState = "0";
var cap1, cap1IMG;
var shooter1, shooter1IMG;
var blueBoxIMG, blueBox, redBox, redBoxIMG;


var capSeller, monkey1,monkey2;
var monkey1Stat = "no";
var monkey2Stat = "no";



var redCap1, redCap2, redCap3, blueCap1, blueCap2, blueCap3;

var rocketim = "0", shooter = "0";

function preload() {
  monkeyBodyIMG = loadImage("Images/monkeyFullBody.png");

  marsIMG = loadImage("Images/Mars.png");
  earthIMG = loadImage("Images/Earth.png");
  rocketIMG = loadImage("Images/rocket.png");
  rocketShipIMG = loadImage("Images/roketShip.png");

  cap1IMG = loadImage("Images/blueCap.png");
  shooter1IMG = loadImage("Images/shooter.png");

  redBoxIMG = loadImage("Images/redBox.png");
  blueBoxIMG = loadImage("Images/blueBox.png");
  sound = loadSound("footStep.mp3");

}

function setup(){
  canvas = createCanvas(windowWidth,windowHeight);

  bg1 = createSprite(windowWidth/2, (windowHeight/2) + 50, windowWidth - 100, windowHeight - 200);
  bg1.shapeColor = "white";

  shopButton = createButton("SHOP");
  levelsButton = createButton("LEVELS");
  howToPlayButton = createButton("HOW TO PLAY?");
  backButton = createButton("BACK");
  backButton.position(windowWidth - 190,500);
  backButton.hide();

  buyButton = createButton("BUY");
  buyButton.position(750,480);
  buyButton.hide();
  buyButton2 = createButton("BUY");
  buyButton2.position(1000,480);
  buyButton2.hide();
  sellButton = createButton("SELL");
  sellButton.position(1000,230);
  sellButton.hide();

  cap1 = createSprite(850,250,50,50);
  cap1.addImage("blue", cap1IMG);
  cap1.scale = 0.2;
  cap1.visible = false;

  shooter1 = createSprite(950,390,20,20);
  shooter1.addImage("gun", shooter1IMG);
  shooter1.scale = 0.4;
  shooter.visible = false;

  rocketShip = createSprite(700,350,50,50);
  rocketShip.addImage("ship", rocketShipIMG);
  rocketShip.visible = false;
  rocketShip.scale = 0.4;

  LV1Button = createButton("LV 1");
  LV1Button.position(windowWidth - (windowWidth - 200),250);
  LV1Button.hide();
  LV2Button = createButton("LV 2");
  LV2Button.position(windowWidth - (windowWidth - 200),300);
  LV2Button.hide();
  LV3Button = createButton("LV 3");
  LV3Button.position(windowWidth - (windowWidth - 200),350);
  LV3Button.hide();
  LV4Button = createButton("LV 4");
  LV4Button.position(windowWidth/2,230);
  LV4Button.hide();
  LV5Button = createButton("LV 5");
  LV5Button.position((windowWidth - 200),300);
  LV5Button.hide();

  rocketim = createSprite(windowWidth/2, windowHeight/2, 50,50);
  rocketim.addImage("spaceShip", rocketIMG);
  rocketim.scale = 0.5;
  rocketim.visible = false;
  earth = createSprite(windowWidth - (windowWidth - 200),windowHeight/2,50,50);
  earth.addImage("earth", earthIMG);
  earth.scale = 0.6;
  earth.visible = false;

  mars = createSprite(windowWidth - 200,windowHeight/2,50,50);
  mars.addImage("mars", marsIMG);
  mars.scale = 0.6;
  mars.visible = false;

  monkeyBody = createSprite(windowWidth - (windowWidth - 300),windowHeight - (windowHeight - 300),100,100);
  monkeyBody.addImage("hi",monkeyBodyIMG);

  border1 = new Wall(windowWidth - 50, (windowHeight/2) + 50, 20,windowHeight - 200);
  border2 = new Wall(windowWidth - (windowWidth - 50), (windowHeight/2) + 50, 20,windowHeight - 200);
  border3 = new Wall(windowWidth/2, windowHeight - 50,windowWidth - 80,20);
  border5 = new Wall(windowWidth/2, windowHeight - (windowHeight - 150), windowWidth - 80,20);

  capSeller = new CapSeller(windowWidth/2,windowHeight/2,50,50);

  monkey1 = new Monkey(windowWidth - (windowWidth - 100), windowHeight -(windowHeight - 200),50,50);
  monkey1.debug = true;
  monkey2 = new Monkey(windowWidth - 100,windowHeight -(windowHeight - 200),50,50);
  monkey2.debug = true;

  //caps
  redCap1 = new Cap(400,200,50,50,"red");
  redCap2 = new Cap(400,200,50,50,"red");
  redCap3 = new Cap(400,200,50,50,"red");
  
  blueCap1 = new Cap(500,200,50,50,"blue");
  blueCap2 = new Cap(500,200,50,50,"blue");
  blueCap3 = new Cap(500,200,50,50,"blue");

  //LV1 walls
  wallLV101 = new Wall(windowWidth/2, (windowHeight/2) + 100,20,100);
  wallLV102 = new Wall(windowWidth/2, (windowHeight/2) - 50,300,20);

  redBox = createSprite(windowWidth/4, windowHeight - 100,20,20);
  redBox.addImage("red", redBoxIMG);
  redBox.scale = 0.3;
  redBox.debug = true;
  redBox.setCollider("rectangle",60,100,400,300);
  redBox.visible = false;

  blueBox = createSprite(windowWidth/2 + (windowWidth/4), windowHeight - 105,20,20);
  blueBox.addImage("blue", blueBoxIMG);
  blueBox.scale = 0.3;
  blueBox.debug = true;
  blueBox.setCollider("rectangle",60,100,400,300);
  blueBox.visible = false;
}
function draw(){
  background("black");

  if(gameState !== "LEVELS"){
    fill("white");
    textSize(20);
    text("MONEY : $" + moneyCount, 50,50);
    text("CAPS : " + capCount, 250,50);
    text("MONKEYS : " + monkeyCount, 400,50);
  }

  if(gameState == "0"){
    drawSprites();
    monkeyBody.visible = true;

    textSize(70);
    fill("black");
    text("SPACE EXPEDITION", 545,250);
    textSize(20);
    text("One small step for man, a giant leap for mankind", 650,300);

    shopButton.position(windowWidth - 150,350);
    shopButton.mousePressed(function(){
      gameState = "SHOP";

    });

    levelsButton.position(windowWidth - 160,420);
    levelsButton.mousePressed(function(){
      gameState = "LEVELS";
   
    });

    howToPlayButton.position(windowWidth - 190,500);
    howToPlayButton.mousePressed(function(){
      gameState = "H2P?";
   
    });
  }else{
    hide();
  }

  if(gameState === "LEVELS"){
    if(rocket === "1"
    && shooter === "1"){
      fill("white");
      stroke("white");
      strokeWeight(5);
      for(var i = windowWidth - (windowWidth - 200); i < windowWidth/2; i = i + 20){
        line(i,windowHeight/2,i+10,windowHeight/2);
    }
    }

    if(levelCount === 5){
      fill("white");
      stroke("white");
      strokeWeight(5);
      for(var i = windowWidth/2;i < windowWidth - 200; i = i + 20){
        line(i,windowHeight/2,i+10,windowHeight/2);
    }
    }

    drawSprites();
    noStroke();

    bg1.visible = false;
    monkeyBody.visible = false;
    rocketim.visible = true;
    earth.visible = true;
    mars.visible = true;
    

    LV1Button.show();
    LV2Button.show();
    LV3Button.show();
    LV4Button.show();
    LV5Button.show();

    fill("white");
    textSize(40);
    text("LEVELS : will be unlocked once the required items are bought", (windowWidth/2) - 550,100);

    LV1Button.mousePressed(function(){
      if(levelCount === 1){
        gameState = "LV 1";
      }
    })
    LV2Button.mousePressed(function(){
      if(levelCount === 2){
        gameState = "LV 2";
      }
    })
    LV3Button.mousePressed(function(){
      if(levelCount === 3){
        gameState = "LV 3";
      }
    })
    LV4Button.mousePressed(function(){
      if(levelCount === 4
        && rocket === "1"
        && shooter === "1"){
        gameState = "LV 4";
      }
    })
    LV5Button.mousePressed(function(){
      if(levelCount === 5){
        gameState = "LV 5";
      }
    })
    
    backButton.show();
    backButton.mousePressed(function(){
      gameState = "0";
      backButton.hide();
      show();
    });
  }else{
    bg1.visible = true;
    earth.visible = false;
    mars.visible = false;
    rocketim.visible = false;
    LV5Button.hide();
    LV4Button.hide();
    LV3Button.hide();
    LV2Button.hide();
    LV1Button.hide();

  }

  if(gameState === "SHOP"){
    drawSprites();
    rocketShip.visible = true;
    cap1.visible = true;
    shooter1.visible = true;

    textSize(100);
    fill("white");
    text("SHOP!!",700,130)
    textSize(30);
    fill("black");
    text("$1,000", 900,250);
    text("$5,000",900,500);
    text("$10,000",630,500);

    buyButton.show();
    buyButton2.show();
    sellButton.show();

    buyButton.mousePressed(function(){
      if(moneyCount > 1000){
        rocket = "1";
        moneyCount = moneyCount - 10000;
      }
    })
    buyButton2.mousePressed(function(){
      if(moneyCount > 500){
        shooter = "1";
        moneyCount = moneyCount - 5000;
      }
    })
    sellButton.mousePressed(function(){
      if(capCount >= 1){
        moneyCount = moneyCount + 1000;
        capCount = capCount - 1;
      }
    })

    backButton.show();
    backButton.mousePressed(function(){
      gameState = "0";
      backButton.hide();
      show();
    });
  }else{
    rocketShip.visible = false;
    buyButton.hide();
    buyButton2.hide();
    sellButton.hide();
    shooter1.visible = false;
    cap1.visible = false;
  }

  if(gameState === "H2P?"){
    drawSprites();
    monkeyBody.visible = true;

    textSize(70);
    fill("black");
    text("HOW TO PLAY?",550,250);

    textSize(20);
    fill("grey");
    text("> You are the Cap Seller who wants to become an astronaught!",495,300);
    text("> These pesky monkeys have stolen your caps, so you have to get them back.",495,330);
    text("> It just so happens that the monkeys will follow everything you do!",495,360);
    text("> Use the 'up, down, left, right' arrows to move.",495,390);
    text("> Make the monkeys pick up the caps and drop them off in their respective boxes.",495,420);
    text("> Earn money by selling your caps in the SHOP and buy a shooter and rocket ship",495,450);
    text("   to advance to space! + learn space facts along the way!",495,480);
    
    backButton.show();
    backButton.mousePressed(function(){
      gameState = "0";
      backButton.hide();
      show();
    });
  }

  //LEVELS_________\/_\/_\/_\/_\/_\/_\/_\/

  if(gameState === "LV 1"){
    textSize(20);
    text("GET >1 CAPS TO ADVANCE!",windowWidth/2, windowHeight - (windowHeight - 100));
    backButton.hide();
    bg1.visible = false;
    monkeyBody.visible = false;
    redBox.visible = true;
    blueBox.visible = true;

    capSeller.movement();
    monkey1.movement();
    monkey2.movement();

    capSeller.collide(border1);
    

    if(monkey1.isTouching(redCap1)
    && monkey1Stat === "no"){
      monkey1Stat = "yes:red";
    }
    if(monkey2.isTouching(redCap1)
    && monkey2Stat === "no"){
      monkey2Stat = "yes:red";
    }
    if(monkey1.isTouching(blueCap1)
    && monkey1Stat === "no"){
      monkey1Stat = "yes:blue";
    }
    if(monkey2.isTouching(blueCap1)
    && monkey2Stat === "no"){
      monkey2Stat = "yes:blue";
    }

    if(monkey1.isTouching(blueBox)
      &&monkey1Stat === "yes:blue"){
      console.log("touched");
      
    }
    if(monkey1.isTouching(redBox)
    &&monkey1Stat === "yes:red"){
      console.log("touched");

    }
    var capCollected = 0;
    if(monkey2.isTouching(blueBox)
    &&monkey2Stat === "yes:blue"){
      capCollected = capCollected + 1;
      backButton.show();
    }
    if(monkey2.isTouching(redBox)
    &&monkey2Stat === "yes:red"){
      capCollected = capCollected + 1;
      backButton.show();
    }

    drawSprites();

    capSeller.display();
    border1.display();
    border2.display();
    border3.display();
    border5.display();
    monkey1.display();
    monkey2.display();
    if(monkey1Stat !== "yes:red"
    &&monkey2Stat !== "yes:red"){
      redCap1.display();
    }
    if(monkey1Stat !== "yes:blue"
    &&monkey2Stat !== "yes:blue"){
      blueCap1.display();
    }
    wallLV101.display();
    wallLV102.display();

  }

  if(gameState === "LV 2"){
    capSeller.movement();
    monkey1.movement();
    monkey2.movement();



    drawSprites();

    capSeller.display();
    border1.display();
    border2.display();
    border3.display(); 
    border5.display();
    monkey1.display();
    monkey2.display();
  }

  if(gameState === "LV 3"){
    capSeller.movement();
    monkey1.movement();
    monkey2.movement();




    drawSprites();

    capSeller.display();
    border1.display();
    border2.display();
    border3.display();
    border5.display();
    monkey1.display();
    monkey2.display();
  }

  if(gameState === "LV 4"){
    // capSeller.movement();
    // monkey1.movement();
    // monkey2.movement();




    // drawSprites();

    // capSeller.display();
    // border1.display();
    // border2.display();
    // border3.display();
    // border5.display();
    // monkey1.display();
    // monkey2.display();
  }

  if(gameState === "LV 5"){
    capSeller.movement();
    monkey1.movement();
    monkey2.movement();




    drawSprites();

    capSeller.display();
    border1.display();
    border2.display();
    border3.display();
    border5.display();
    monkey1.display();
    monkey2.display();
  }
  

}
async function hide(){
  shopButton.hide();
  levelsButton.hide();
  howToPlayButton.hide();
}

async function show(){
  shopButton.show();
  levelsButton.show();
  howToPlayButton.show();
}
 
