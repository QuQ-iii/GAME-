class CapSeller{
    constructor(x,y,width,height){

        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.image = loadImage("Images/capSeller.png.png");
        this.image2 = loadImage("Images/CapSellerS.png");
        this.side = this.image;
        this.sound = loadSound("footStep.mp3");
        
    }
    movement() {

      

        if(keyDown(UP_ARROW)){
            this.y = this.y - 5;
            this.sound.play();
          }
          if(keyDown(DOWN_ARROW)){
            this.y = this.y + 5;
            this.sound.play();
          }
          if(keyDown(LEFT_ARROW)){
            this.x = this.x - 5;
            this.side = this.image2;
            this.sound.play();

          }
          if(keyDown(RIGHT_ARROW)){
            this.x = this.x + 5;
            this.side = this.image;
            this.sound.play();

          }
    }
    isTouching(object1){

      if(object1.x - this.x < this.width/2 + object1.width/2
    
       && this.x - object1.x < this.width/2 + object1.width/2
    
       && object1.y - this.y < this.height/2 + object1.height/2
    
       && this.y - object1.y < this.height/2 + object1.height/2){
    
        return true;
    
       }else{
    
        return false;
    
       }
    
     }

     collide(object1){

      if(object1.x - this.x < this.width/2 + object1.width/2
    
       && this.x - object1.x < this.width/2 + object1.width/2
    
       && object1.y - this.y < this.height/2 + object1.height/2
    
       && this.y - object1.y < this.height/2 + object1.height/2){
    
        this.x - 5
       }
     }

    display(){
        
        rectMode(CENTER);

        imageMode(CENTER);
        image(this.side,this.x,this.y,this.width,this.height);



    }
}