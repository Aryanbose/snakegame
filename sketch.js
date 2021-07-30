var snake,apple,snakeBody;
var length = 0;
var direction = 'e';
function setup() {
  createCanvas(800,400);
  
apple = createSprite(400, 200, 10, 10);
apple.shapeColor = "Red"
snake = createSprite(24,45,30,30)
snake.shapeColor = "Green"  
}

function draw() {
  background('black');  
  if (keyDown ("Right")&& direction != 'w'){
    snake.velocityX = 5;  snake.velocityY = 0
direction = 'e';  
  }
  if (keyDown ("Left") && direction != 'e'){
    snake.velocityX = -5;  snake.velocityY = 0
  direction = 'w';
  }
  if (keyDown ("Up")&& direction != 's'){ 
    snake.velocityY = -5; 
    snake.velocityX = 0;
  direction = 'n';
  }
  if (keyDown ("Down")&& direction != 'n'){
    snake.velocityY = 5;  
    snake.velocityX = 0;
  direction = 's';
  }
drawSnake();
drawSprites();

}

function drawSnake (){
for (var i=0;i<=length;i++){
if(direction == 'e'){
  var s = createSprite(snake.x-i*50-30,snake.y,10,10);
  s.lifetime = 1
}
else if (direction == 'w'){
  var s = createSprite(snake.x+i*50+30,snake.y,10,10);
  s.lifetime = 1
}
else if(direction == 's'){
  var s = createSprite(snake.x,snake.y-i*50-30,10,10);
  s.lifetime = 1 
}
else if (direction == 'n'){
  var s = createSprite(snake.x,snake.y+i*50+30,10,10);
  s.lifetime = 1 
}
}
}






