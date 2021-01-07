class Box {
    constructor(x, y) {
        var options = {
            restitution: 0.1
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("white");
        rectMode(CENTER);
        rect(0, 0, 50, 50);
        pop();
    }
}