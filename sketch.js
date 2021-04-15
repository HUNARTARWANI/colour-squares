var canvas;
var music;

var ball;
var rect1,rect2,rect3,rect4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
rect1 = createSprite(100,200,100,100);
rect1.shapeColor = "pink";
rect2 = createSprite(250,200,100,100);
rect2.shapeColor = "blue";
rect3 = createSprite(400,200,100,100);
rect3.shapeColor = "purple";
rect4 = createSprite(550,200,100,100);
rect4.shapeColor = "green";



    //create ball sprite and give velocity
ball = createSprite(700,500,50,50);
ball.shapeColor = "yellow";

}

function draw() {
    background(rgb(169,169,169));
    ball.x = World.mouseX;
    ball.y = World.mouseY;
    
if (ball.isTouching(rect1)){
    ball.shapeColor = "pink";
}

if (ball.isTouching(rect2)){
    ball.shapeColor = "blue";
}

if (ball.isTouching(rect3)){
    ball.shapeColor = "purple";
}

if (ball.isTouching(rect4)){
    ball.shapeColor = "green";
}
 
    


drawSprites();


   

}
