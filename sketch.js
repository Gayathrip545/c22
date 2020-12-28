const Engine=Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;

var myEngine, myWorld;
var ground;

function setup() {
  createCanvas(400,400);
  myEngine= Engine.create();
  myWorld= myEngine.world;

  var options= {
    isStatic: true
  }

  ground= Bodies.rectangle(200,390,200,20,options);
  World.add(myWorld,ground);
  console.log(ground);
}

function draw() {
  background("black");  
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
}