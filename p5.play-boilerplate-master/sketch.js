var block1, block2;
function setup() {
  createCanvas(1600,800);
  block1 = createSprite(400, 200, 75,75);
  block2 = createSprite(200,200,75,75);

  block1.debug = true;
  block2.debug = true;

  block1.shapeColor = "red";
  block2.shapeColor = "red";
}

function draw() {
  background(0);
  block2.x = mouseX;
  block2.y = mouseY;
  
  if (block2.x - block1.x < block1.width/2 + block2.width/2 && block1.x - block2.x < block1.width/2 + block2.width/2
    && block2.y - block1.y < block1.height/2 + block2.height/2 && block1.y - block2.y < block1.height/2 + block2.height/2 ){
    block1.shapeColor = "yellow";
    block2.shapeColor = "yellow";

  }
  else {
    block1.shapeColor = "red";
    block2.shapeColor = "red";

  }
  
  drawSprites();
}