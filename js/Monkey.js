class Monkey{
    constructor(x,y,width,height){

        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.image = loadImage("Images/Monkey.png");
        this.image2 = loadImage("Images/MonkeyS.png");
        this.side = this.image;
        
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
    movement() {

        if(keyDown(UP_ARROW)){
            this.y = this.y - 5;
          }
          if(keyDown(DOWN_ARROW)){
            this.y = this.y + 5;
          }
          if(keyDown(LEFT_ARROW)){
            this.x = this.x - 5;
            this.side = this.image;

          }
          if(keyDown(RIGHT_ARROW)){
            this.x = this.x + 5;
            this.side = this.image2;

          }

    }
    display(){
        
        push();
        translate(this.x, this.y);

        imageMode(CENTER);
        image(this.side, 0,0,this.width,this.height);
        pop();

        

    }
}