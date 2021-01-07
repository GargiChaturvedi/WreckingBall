const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world, ball, ground, chain;

var stack = [];

var gameState = "play";

function setup() {
  createCanvas(1280, 610);
  engine = Engine.create();
  world = engine.world;

  ball = new Ball(600, 510);
  ground = new Ground();
  chain = new Chain(ball.ball, {x: 600, y: 100});

  Body.applyForce(ball.ball, ball.ball.position, {x: -1000, y: -1000});

  for(var i = 580; i > 80; i -= 50) {
    stack.push(new Box(800, i));
  }
  for(var i = 580; i > 80; i -= 50) {
    stack.push(new Box(850, i));
  }
  for(var i = 580; i > 80; i -= 50) {
    stack.push(new Box(900, i));
  }
  for(var i = 580; i > 80; i -= 50) {
    stack.push(new Box(950, i));
  }
  for(var i = 580; i > 80; i -= 50) {
    stack.push(new Box(1000, i));
  }
}

function draw() {
  background(0);
  Engine.update(engine);
  chain.display();
  ball.display();
  ground.display();

  for(var x = 0; x < stack.length; x++) {
    stack[x].display();
  }
}

function replay() {
  for(var x = 0; x < stack.length; x++) {
    Body.setPosition(stack[x].body, {x: stack[x].x, y: stack[x].y});
  }
  Body.setPosition(ball.ball, {x: ball.x, y: ball.y});
}

function keyPressed() {
  if(keyCode === 8) {
    replay();
  }
  //Body.applyForce(ball.ball, ball.ball.position, {x: -1000, y: -1000});
}