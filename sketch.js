const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone;
var iron;
var rubber


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    hammer = new Hammer(10,100);
    plane = new Plane(600,height,1200,20)

    

   stone = new Stone(600,560);
   iron = new Iron(300,560);
    rubber = new Rubber(900,560,50);

   
 
  
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
    iron.display();
    rubber.display();

 
 
}