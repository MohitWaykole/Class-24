class Box{
    constructor(x,y,width,height){
        var option = {
            restitution : 0.8,
            friction : 1.0,
            density : 1.0
        }

        this.box = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;

        World.add(world,this.box);
    }

    display(){
        var p = this.box.position;
        push();
        translate(p.x, p.y);
        rotate(this.box.angle);
        fill("green");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}