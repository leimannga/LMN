let x=0;
//setup只執行一次的程式
function setup() {
  createCanvas(400, 400);
  console.log(x);

}

//draw重覆執行的程式
function draw() {
  //color 0-255
  //background(mouseX, mouseY,255+x);
  //console.log('x='+mouseX+','+'y='+mouseY);
  //arc(mouseX, mouseY, 50, 30, 0, PI + QUARTER_PI);
  //fill(mouseX, mouseY,120);
  if(mouseIsPressed){
    arc(mouseX, mouseY, 50, 30, 0, PI + QUARTER_PI);
   // fill(mouseX, mouseY,120);
  }
  else{
    fill(mouseX, mouseY,20);
    circle(mouseX, mouseY,10);
  }
  x=x+0.1;
}