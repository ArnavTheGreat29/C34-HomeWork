const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var hero
function preload() {
//preload the images here


}

function setup() {
  background(0);
  createCanvas(3000, 800);
 

  engine = Engine.create();
  world = engine.world;


  // create sprites here
  ground = new Ground(1500,750,3000,10)
  hero = new Hero(50,350)
  fly = new Fly(hero.body,{x:200,y:150} )

}

function draw() {
  background(0);
  Engine.update(engine);

  ground.display()
  hero.display()
  fly.display()


}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}


