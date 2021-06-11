var fixedrect, movingrect, fixedrect2,fixedrect3;
function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400,200,40,50);
  fixedrect.shapeColor="yellow";

  fixedrect2 = createSprite(500,200,40,50);
  fixedrect2.shapeColor = "green";

  fixedrect3 = createSprite(300,200,40,50);
  fixedrect3.shapecolor = "pink";



  movingrect = createSprite(100,100,30,40);
  movingrect.shapeColor="yellow";
}

function draw() {
  background("orange");  

  movingrect.x=mouseX;
  movingrect.y=mouseY;

if(isTouching(movingrect,fixedrect)){

movingrect.visible = false;
fixedrect.visible = false;

}else{

movingrect.visible = true;
fixedrect.visible = true;

}

if(isTouching(fixedrect2,movingrect)){

  movingrect.shapeColor = "red";
  fixedrect2.shapeColor = "red";
  
  }else{
  
  movingrect.shapeColor = "yellow";
  fixedrect2.shapeColor = "green";
  
  }

  if(isTouching(fixedrect3,movingrect)){

    movingrect.shapeColor = "purple";
    fixedrect3.shapeColor = "purple";
    
    }else{
    
    movingrect.shapeColor = "yellow";
    fixedrect3.shapeColor = "pink";
    
    }


  drawSprites();
}

