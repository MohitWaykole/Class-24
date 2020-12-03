class Log{
    constructor(x, y, height, angle){
        this.width = 20;
        this.height = height;
        var option = {
            restituion : 0.6,
            friction : 1.0,
            density : 1.0
    }

    this.b = Bodies.rectangle(x, y, 20, height, option);
    Matter.Body.setAngle(this.b, angle);
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