let score = [0, 0];
let serveL = true;
let ball;
let ballV
let ballS = 3;
let ballSize;
let scoreCount = false;
let soundHit, soundWall, soundPoint;
let myCanvas;
let canv;
let start = false;

// preload sound files
function preload() {
  soundHit = loadSound("pong_hit.m4a");
  soundWall = loadSound("pong_wall.m4a");
  soundPoint = loadSound("pong_point.m4a");
}


function setup() {
  //create a square canvas
  canv = min(windowWidth, windowHeight);
  createCanvas(canv, canv);

  //create ball
  ball = createVector(canv / 2, canv * 0.05);
  ballV = createVector(-1, 1);
  ballSize = canv / 50;


  noLoop();
}

function mousePressed(){
  loop();
  start = true
}

function draw() {

  background(0);
  //styling
  fill(255);
  noStroke();

  //center dash
  let l = 15
  let n = height / 15
  for (let i = 0; i < n; i++) {
    rect(width / 2 - 2, l * i, 4, l * 2 / 3);
  }

  //score
  showScore(score);

  //paddle
  let paddle = [width / 50, height / 10]
    //paddle move based on mouse x,y
  rect(width * 0.05, mouseX - 4, paddle[0], paddle[1]);
  rect(width * (1 - 0.05), mouseY - 4, -paddle[0], paddle[1]);

  //ball
    //when ball hit the wall
  if (ball.y < 0) {
    ballV.y = 1;
    soundWall.play();
  }
  if (ball.y + ballSize > height) {
    ballV.y = -1;
    soundWall.play();
  }
    //when ball hit the paddle
  if (ball.x > width * 0.05 + paddle[0] * 0.1 && ball.x < width * 0.05 + paddle[0] && ball.y > mouseX - 4 && ball.y < mouseX + paddle[1]) {
    ballV.x = 1;
    soundHit.play();
  }
  if (ball.x < width * (1 - 0.05) - paddle[0] * 0.1 && ball.x > width * (1 - 0.05) - paddle[0] && ball.y > mouseY - 4 && ball.y < mouseY + paddle[1]) {
    ballV.x = -1;
    soundHit.play();
  }
    //when scoring
  if (ball.x < 0 && scoreCount == false) {
    score[1]++;
    scoreCount = true;
    soundPoint.play();
  }
  if (ball.x < -ballS * frameRate()) {
    ball = createVector(width / 2, height * (1 - 0.05));
    ballV = createVector(1, -1);
    scoreCount = false;
  }
  if (ball.x > width && scoreCount == false) {
    score[0]++;
    scoreCount = true
    soundPoint.play();
  }
  if (ball.x > width + ballS * frameRate()) {
    ball = createVector(width / 2, height * 0.05);
    ballV = createVector(-1, 1);
    scoreCount = false;
  }

    //move ball
  ball.x += ballV.x * ballS;
  ball.y += ballV.y * ballS;

    //draw ball
  rect(ball.x - ballSize / 2, ball.y - ballSize / 2, ballSize, ballSize);

  //win
  if (score[0] > 11 || score[1] > 11) {
    score = [0,0];
    noLoop();
    start = false;
  }

  //start screen
  if (!start){
   startScreen();
  }
}

//resize canvas when window is resized
function windowResized() {
  canv = min(windowWidth, windowHeight);
  resizeCanvas(canv, canv);
}


//displaying score
function showScore(score) {
  let curser = [width / 4, height / 20];
  font(curser, score[0]);
  curser[0] = width * 3 / 4;
  font(curser, score[1]);
}


// score font
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

function startScreen(){
  //start menu
  fill(180,205);
  rect(0,0,canv,canv)
  fill(0,205);
  textSize(canv*0.1);
  textAlign(CENTER, CENTER);
  text("click to start",canv/2,canv/2);
}
