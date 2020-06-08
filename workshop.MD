# Workshop Notes
created for 2020 ITP summer camp

### [Link to p5 shape and color cheat Sheet](https://docs.google.com/document/d/1s22ceC-dmY_egZO9AwFyWIQAkZ491aZNaYkqE0g3LT0/edit?usp=sharing)

follow the steps to create the game

##### Step 1: create canvas in js file

```
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
```

##### Step 2: create square canvas

global
```
let canv;
```
setup
```
canv = min(windowWidth, windowHeight);
createCanvas(canv, canv);
```
draw
```
background(0);
```

##### Step 3: create variables for the ball
[p5.vector](https://p5js.org/reference/#/p5.Vector)

global
```
let ball,ballSize,ballS,ballV;

```
setup
```
ball = createVector(canv / 2, canv * 0.05);
ballSize = canv / 50;
```
draw
```
fill(255);
noStroke();

rect(ball.x - ballSize / 2, ball.y - ballSize / 2, ballSize, ballSize);
```

##### Step 4: move the ball

setup
```
ballV = createVector(-1, 1);
ballS = 3
```
draw
```
ball.x += ballV.x * ballS;
ball.y += ballV.y * ballS;
```

##### Step 5: move the ball, when it hit something

draw
(hitting the wall)
```
if (ball.y < 0) {
  ballV.y = 1;
}
if (ball.y + ballSize > height) {
  ballV.y = -1;
}
```

(hitting the paddle)
```
if (ball.x > width * 0.05 + paddle[0] * 0.1 && ball.x < width * 0.05 + paddle[0] && ball.y > mouseX - 4 && ball.y < mouseX + paddle[1]) {
  ballV.x = 1;
}
if (ball.x < width * (1 - 0.05) - paddle[0] * 0.1 && ball.x > width * (1 - 0.05) - paddle[0] && ball.y > mouseY - 4 && ball.y < mouseY + paddle[1]) {
  ballV.x = -1;
}
```

##### Step 6: Scoring

global
```
let scoreCount = false;
```
draw
```
if (ball.x < 0 && scoreCount == false) {
  score[1]++;
  scoreCount = true;
}
if (ball.x < -ballS * frameRate()) {
  ball = createVector(width / 2, height * (1 - 0.05));
  ballV = createVector(1, -1);
  scoreCount = false;
}
if (ball.x > width && scoreCount == false) {
  score[0]++;
  scoreCount = true
}
if (ball.x > width + ballS * frameRate()) {
  ball = createVector(width / 2, height * 0.05);
  ballV = createVector(-1, 1);
  scoreCount = false;
}
```

##### Step 7: winning

draw
```
if (score[0] > 11 || score[1] > 11) {
  score = [0,0];
}
```

##### Step 8: Center Line

draw
```
//center dash
let l = 15
let n = height / 15
for (let i = 0; i < n; i++) {
  rect(width / 2 - 2, l * i, 4, l * 2 / 3);
}
```

##### Step 9: Show Scores

draw
```
showScore(score);
```
showScore
```
function showScore(score) {
  let curser = [width / 4, height / 20];
  text(score[0], curser[0], curser[1]);
  curser[0] = width * 3 / 4;
  text(score[1], curser[0], curser[1]);
}
```

##### Step 10: customize font

showScore
```
  // text(score[0], curser[0], curser[1]);
  font(curser, score[0]);

  // text(score[1], curser[0], curser[1]);
  font(curser, score[0]);
```
font
```
function font(curser, score) {
  let textBox = [width / 12, height / 6];
  fill(255);
  //0
  if (score == 0) {
    rect(curser[0], curser[1], textBox[0], textBox[1]);
    fill(0);
    rect(curser[0] + textBox[0] / 4, curser[1] + textBox[1] / 8, textBox[0] / 2, textBox[1] / 8 * 6);
  }


  //1
  if (score == 1) {
    rect(curser[0] + textBox[0] * 2 / 3, curser[1], textBox[0] / 3, textBox[1]);
  }

  //2
  if (score == 2) {
    rect(curser[0], curser[1], textBox[0], textBox[1]);
    fill(0);
    rect(curser[0], curser[1] + textBox[1] / 8, textBox[0] * 3 / 4, textBox[1] / 8 * 2);
    rect(curser[0] + textBox[0] / 4, curser[1] + textBox[1] * 4 / 8, textBox[0] * 3 / 4, textBox[1] / 8 * 3);
  }
  //3
  if (score == 3) {
    rect(curser[0], curser[1], textBox[0], textBox[1]);
    fill(0);
    rect(curser[0], curser[1] + textBox[1] / 8, textBox[0] * 3 / 4, textBox[1] / 8 * 2);
    rect(curser[0], curser[1] + textBox[1] * 4 / 8, textBox[0] * 3 / 4, textBox[1] / 8 * 3);
  }

  //4
  if (score == 4) {
    rect(curser[0], curser[1], textBox[0], textBox[1]);
    fill(0);
    rect(curser[0] + textBox[0] / 4, curser[1], textBox[0] * 2 / 4, textBox[1] / 8 * 3);
    rect(curser[0], curser[1] + textBox[1] * 4 / 8, textBox[0] * 3 / 4, textBox[1] / 8 * 4);
  }


  //5
  if (score == 5) {
    rect(curser[0], curser[1], textBox[0], textBox[1]);
    fill(0);
    rect(curser[0] + textBox[0] / 4, curser[1] + textBox[1] / 8, textBox[0] * 3 / 4, textBox[1] / 8 * 2);
    rect(curser[0], curser[1] + textBox[1] * 4 / 8, textBox[0] * 3 / 4, textBox[1] / 8 * 3);
  }

  //6
  if (score == 6) {
    rect(curser[0], curser[1], textBox[0], textBox[1]);
    fill(0);
    rect(curser[0] + textBox[0] / 4, curser[1], textBox[0] * 3 / 4, textBox[1] / 8 * 3);
    rect(curser[0] + textBox[0] / 4, curser[1] + textBox[1] * 4 / 8, textBox[0] * 2 / 4, textBox[1] / 8 * 3);
  }

  //7
  if (score == 7) {
    rect(curser[0], curser[1], textBox[0], textBox[1]);
    fill(0);
    rect(curser[0], curser[1] + textBox[1] / 8, textBox[0] * 3 / 4, textBox[1] / 8 * 7);
  }

  //8
  if (score == 8) {
    rect(curser[0], curser[1], textBox[0], textBox[1]);
    fill(0);
    rect(curser[0] + textBox[0] / 4, curser[1] + textBox[1] / 8, textBox[0] * 2 / 4, textBox[1] / 8 * 2);
    rect(curser[0] + textBox[0] / 4, curser[1] + textBox[1] * 4 / 8, textBox[0] * 2 / 4, textBox[1] / 8 * 3);
  }

  //9
  if (score == 9) {
    rect(curser[0], curser[1], textBox[0], textBox[1]);
    fill(0);
    rect(curser[0] + textBox[0] / 4, curser[1] + textBox[1] / 8, textBox[0] * 2 / 4, textBox[1] / 8 * 2);
    rect(curser[0], curser[1] + textBox[1] * 4 / 8, textBox[0] * 3 / 4, textBox[1] / 8 * 3);
    fill(255);
  }

  //10
  if (score == 10) {
    rect(curser[0], curser[1], textBox[0], textBox[1]);
    rect(curser[0] - textBox[0] * 1.5 + textBox[0] * 2 / 3, curser[1], textBox[0] / 3, textBox[1]);

    fill(0);
    rect(curser[0] + textBox[0] / 4, curser[1] + textBox[1] / 8, textBox[0] / 2, textBox[1] / 8 * 6);

  }
  //11
  if (score == 11) {
    rect(curser[0] + textBox[0] * 2 / 3, curser[1], textBox[0] / 3, textBox[1]);
    rect(curser[0] - textBox[0] * 1.5 + textBox[0] * 2 / 3, curser[1], textBox[0] / 3, textBox[1]);
  }
  fill(255);
}
```

##### Step 11: play sound

preload
```
function preload() {
  soundHit = loadSound("pong_hit.m4a");
  soundWall = loadSound("pong_wall.m4a");
  soundPoint = loadSound("pong_point.m4a");
}
```
draw
(hitting the wall)
`soundWall.play()`
(hitting the paddle)
`soundHit.play();`
(scoring)
`soundPoint.play();`

##### Step 12: click to start

global
```
let start = false;
```
setup
```
noLoop();
```
mousePressed
```
function
mousePressed(){
  loop();
  start = true
}
```
draw(winning)
```
noLoop();
start = false;
```

##### Step 13: start Screen

draw
```
if (!start){
 startScreen();
}
```
startScreen
```
function startScreen(){
  //start menu
  fill(180,205);
  rect(0,0,canv,canv)
  fill(0,205);
  textSize(canv*0.1);
  textAlign(CENTER, CENTER);
  text("click to start",canv/2,canv/2);
}
```
