function setup() {
  
  // COLORS
  let CLR_BLUE = color(50, 111, 168);
  let CLR_BLACK = color(0, 0, 0);
  let CLR_WHITE = color(255, 255, 255)
  let CLR_LIGHT_BLUE = color(83, 229, 245)
  
  // SET UP
  max_size = 500
  createCanvas(max_size, max_size);
  background(CLR_WHITE);
  
  
  // CORNERS
  fill(CLR_BLACK);
  stroke(CLR_BLACK);
  strokeWeight(4);
  let diameter = 100
  let radius = diameter / 2
  circle(radius, radius, diameter); // top left
  circle(radius, max_size - radius, diameter); // bottom left
  circle(max_size - radius, radius, diameter); // top right
  circle(max_size - radius, max_size - radius, diameter); // top left
  
  for (var x = 0; x <= 500; x += 50) {
    //Same but for along the y axis.
    for (var y = 0; y <= 500; y += 50) {
      circle(x, y, 25);
    }
  }
  
  
  // CENTER CIRCLE
  noFill();
  strokeWeight(1);
  circle(250,250,450); // center

    
  fill(CLR_BLUE);
  stroke(CLR_BLUE);
  strokeWeight(4);
  let r2 = 225
  let n = 25
  for (var i = 0; i <= n; i += 1) {
    
      var angle = ((360/n) * i) * (Math.PI/180);
      var x = 250 + r2 * cos(angle)
      var y = 250 + r2 * sin(angle)
      circle(x, y, 5);

  }
  
  
  
  
//   fill(50, 111, 168); // blue
//   circle(50, 450, 100); // bottom left
//   fill(50, 111, 168); // blue
//   circle(450, 50, 100); // top right
//   fill(168, 50, 117); // red
//   circle(450, 450, 100); // top left
//   fill(0,0,0); // gray
//   circle(250,250 , 465); // center
//   fill(50, 111, 168); // blue
//   circle(120, 120, 100);
//   fill(50, 111, 168); // blue
//   circle(210, 75, 100);
//   fill(50, 111, 168); // blue
//   circle(210, 75, 100);
//   fill(50, 111, 168); // blue
//   circle(310, 80, 100);
//   fill(50, 111, 168); // blue
//   circle(390, 140, 100);
//   fill(50, 111, 168); // blue
//   circle(430, 235, 100);
  

}


function draw() {

  

}
