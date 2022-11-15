// String of ASCII characters we'll use to replace each pixel
const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';
let len = density.length;

let image;


// Load image you want to convert to ASCII art
function preload() {
  image = loadImage("assets/hoshitest50.jpg");
}

function setup() {
  createCanvas(400, 400); 
  background(0);
}

// Repeatedly called
function draw() {
  let w = width / image.width;
  let h = height / image.height;
  image.loadPixels();

  // Iterates through each pixel of the image, row by row
  for (let i = 0; i < image.width; i++) {
    for (let j = 0; j < image.height; j++) {
      // Find which ASCII character to use based on the brightness of the corresponding pixel in the image
      const pixelIndex = (i + j * image.width) * 4;
      const r = image.pixels[pixelIndex + 0];
      const g = image.pixels[pixelIndex + 1];
      const b = image.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      
      noStroke();
      fill(255);
      
      const charIndex = floor(map(avg,0,255,len,0));
      
      // Write letter onto canvas
      textSize(w);
      textAlign(CENTER, CENTER);
      text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);
    }
  }
  
  
}