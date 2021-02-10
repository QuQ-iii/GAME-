class Cap{
    constructor(x,y,width,height,color){

        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.cap = color
        this.blueCapIMG = loadImage("Images/blueCap.png");
        this.redCapIMG = loadImage("Images/redCap.png");
        
    }
    destroy(){
        
    }
    display(){
        
        push();
        translate(this.x, this.y);

        imageMode(CENTER);
        if(this.cap === "red"){
            image(this.redCapIMG, 0,0,this.width,this.height);
        }else if(this.cap === "blue"){
            image(this.blueCapIMG, 0,0,this.width,this.height);
        }
        pop();

        

    }
}