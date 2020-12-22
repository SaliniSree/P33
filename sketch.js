var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;

var particle
var score =0;
var count = 0;
var gameState ="start";


function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 15; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 40; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 15; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 40; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);

  fill("white");
  //text(mouseX + "," + mouseY, 20, 50);
  textSize(20)
  text(" 50 ", 25, 550);
  text(" 20 ", 105, 550);
  text(" 10 ", 185, 550);
  text(" 50 ", 265, 550);
  text(" 20 ", 345, 550);
  text(" 10 ", 425, 550);
  
  Engine.update(engine);
  ground.display();

  if ( gameState =="end") {
    
    textSize(30);
    text("GameOver", 150, 250);
   
  }

  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 80) 
              {
                  score=score+50;      
                  particle=null;
                  if ( count>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 160 && particle.body.position.x > 81 ) 
              {
                    score = score + 20;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 240 && particle.body.position.x > 161 )
              {
                    score = score + 10;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }    
              
              else if (particle.body.position.x < 320 && particle.body.position.x > 241 )
              {
                    score = score + 50;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              } 
              else if (particle.body.position.x < 400 && particle.body.position.x > 321 )
              {
                    score = score + 20;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              } 
              else if (particle.body.position.x < 480 && particle.body.position.x > 401 )
              {
                    score = score + 10;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              } 
              
        }
  
      }
 
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}