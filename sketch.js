const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;
var chao;
var chao2;
var rock;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world
  
  var ballConfig ={
    restitution: 0.95,
    frictionAir: 0.01,
  }
   
  ball = Bodies.circle(100,10,20,ballConfig);
  World.add(world,ball);

  rockConfig ={
    restitution: 0.7,
    frictionAir: 0,
  }

  rock = Bodies.circle(300,20,10,rockConfig);
  World.add(world,rock);

  var chaoConfig = {
    isStatic: true
  }

  chao = Bodies.rectangle(0,390,400,20,chaoConfig);
  World.add(world,chao);

  chao2 = Bodies.rectangle(300,200,200,20,chaoConfig);
  World.add(world, chao2);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background("red");
 Engine.update(engine);

 ellipse(ball.position.x, ball.position.y, 20);
 ellipse(rock.position.x, rock.position.y, 20);
 rect(chao.position.x, chao.position.y, 400, 20);
 rect(chao2.position.x, chao2.position.y, 200,20);
  
}

