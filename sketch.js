const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var camilla, albert, draco, fae;
var ground, shop;


function setup(){
    var canvas = createCanvas(1200, 800);
    engine = Engine.create();
    world = engine.world;

    camilla = new Camilla(700, 200, 70, 70);
    albert = new Albert(300, 200, 70, 70);
    draco = new Draco(500, 200, 70, 70);
    fae = new Fae(100, 200, 70, 70);

    ground = new Ground(600, 700, 1300, 70);

    shop = new Shop(600, 400, 1000, 600);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    albert.display();
    camilla.display();
    draco.display();
    fae.display();

    ground.display();

    shop.display();

    drawSprites();
}

function keyPressed(){
    if(keyIsDown(RIGHT_ARROW)){
        camilla.right();
    };

    if(keyIsDown(LEFT_ARROW)){
        camilla.left();
    };

    if(keyIsDown(UP_ARROW)){
        camilla.jump();
    };
}
