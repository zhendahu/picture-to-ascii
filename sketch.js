const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';

let testimage;

function preload(){
  testimage = loadImage("assets/hoshitest.jpg");
}

// We're using DOM instead of Canvas in order to actually load the text onto the website, as well as for easier adjustments to text size, font, etc.
function setup(){
  noCanvas();
  background(0);
}