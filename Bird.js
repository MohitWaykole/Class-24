class Bird{
    constructor(x, y){
        this.width = 50;
        this.height = 50;
        var option = {
            restituion : 0.6,
            friction : 1.0,
            density : 1.0
        }

        this.b = Bodies.rectangle(x, y, 50, 50, option);

        World.add(world, this.b);
    }

    display(){
        var p = this.b.position;
        push();
        translate(p.x, p.y);
        rotate(this.b.angle);
        rectMode(CENTER);
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
    }
}