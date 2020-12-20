const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world,ball,ground;

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
world=engine.world
var groundoptions={
  isStatic:true
}

var ballOptions={
restitution:0.8
}


ball=Bodies.circle(500,200,30,ballOptions)
World.add(world,ball)

ground=Bodies.rectangle(400,380,800,20,groundoptions)
World.add(world,ground)
}

function draw() {
  Engine.update(engine)
  background(255,255,255);  

 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,30,30)

 rectMode(CENTER)
 rect(ground.position.x,ground.position.y,800,20)
}