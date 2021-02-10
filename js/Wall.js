class Wall{
    constructor(x,y,width,height){

        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        
    }
    display(){
       
        noStroke();
        fill("brown");
        rect(this.x, this.y, this.width, this.height);

    }
}