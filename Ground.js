class Ground {
    constructor() {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(640, 610, 1280, 30, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        //push();
        //translate(pos.x, pos.y);
        //rotate(angle);
        fill("green");
        rectMode(CENTER);
        rect(pos.x, pos.y, 1280, 30);
        //pop();
    }
}