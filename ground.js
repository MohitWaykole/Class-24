class Ground{
    constructor(x,y,width,height){
        var option = {
            isStatic : true
        }
        this.g = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;

        World.add(world,this.g);
    }

    display(){
        push();
        rectMode(CENTER);
        fill("red");
        rect(this.g.position.x,this.g.position.y,this.width,this.height);
        pop();
    }
}