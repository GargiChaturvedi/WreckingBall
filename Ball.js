class Ball {
    constructor(x, y) {
        var options = {
            density: 1.2,
            frictionAir: 0.005
        }
        this.ball = Bodies.circle(x, y, 50, options);
        this.x = x;
        this.y = y;
        World.add(world, this.ball);
    }
    display() {
        var pos = this.ball.position;
        var angle = this.ball.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("deeppink");
        ellipse(0, 0, 50, 50);
        pop();
    }
}