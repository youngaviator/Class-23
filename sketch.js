const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1, box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(200,390,400,20);

    box1=new Box(200,300,20,20)
    box2=new Box(210,100,20,20)
    

    
}

function draw(){
    background("lightblue");
    Engine.update(engine);
   ground.display();
   box1.display();
   box2.display();
    
}