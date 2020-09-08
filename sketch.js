 const Engine = Matter.Engine;
  const World = Matter.World;
  //const Events = Matter.Events,
  const Bodies = Matter.Bodies;
 /*
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
*/

var umbrella, man, manimage,umbrellaimage,lightningimage,lightningimage2;
var lightning1;
var drop=[];

function preload()
{
    manimage=loadImage("project41man.png")
    umbrellaimage=loadImage("project41umbrella.png")
    lightningimage=loadImage("project41lightning.jpg")
    lightningimage2=loadImage("project41lightning2.jpg")
}

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  umbrella=createSprite(120,200);
  umbrellaimage.resize(100,150);
  umbrella.addImage("umbrella",umbrellaimage)

  man=createSprite(100,300);
  manimage.resize(100,200);
  man.addImage("man",manimage)
}

function draw() 
{
  background(255,255,255)
    Engine.update(engine);
     // spawnDrops();
   /*
   if (frameCount%20===0)
    {
        drop.push(new Drops(random(10,390),10));  
    }
    
    for (var i=0;i<=drop.length;i++)
    {
        drop[i].display();
    }
  */   
 lightning();
 drawSprites();

   if(frameCount%5===0)
   {
     drop.push(new Drop(random(10, 390), 10,2));
     //score++;
   }
  
   for (var j = 0; j < drop.length; j++) 
   { 
     drop[j].display();
   } 

}


function lightning() 
{ 
    if(frameCount%50===0) 
    { 
        lightning1 = createSprite(200,20);
        lightningimage.resize(400,200);
        lightning1.addImage("image1", lightningimage) 
    } 
        else 
        {
            lightning1 = createSprite(200,20);
            lightningimage2.resize(400,200);
             lightning1.addImage("image2", lightningimage2) 
        }
}