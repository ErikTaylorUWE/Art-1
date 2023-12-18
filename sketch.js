let frameCounter = 0;

function setup() {
  let canvas = createCanvas(800, 800);
  canvas.parent('canvas-frame');  // position within HTML 'div' to centre
  canvas.mousePressed(setup); 
  frameCounter = 0;  // reset to allow next 'draw' to create new planet.
}

function draw() {
  
  // Increment frame counter
  frameCounter++;
  // only draw planet on first draw. 
  // note - mousePressed causes a 'setup', so frameCounter is reset to 0.
  if (frameCounter > 1) {
    return;
  }

// Draw a new universe
  
  let planetX = width / 2;
  let planetY = height / 2;
  let planetSize = random(50,200);
    

    // Draw starry background
    background(0); // Black background for space
    drawStars(100);

  // Draw a randomized planet in the center
  drawRandomizedPlanet(planetX, planetY, planetSize);
 
}

// Function to draw stars
function drawStars(numStars) {
  fill(255); // White stars
  noStroke();

  for (let i = 0; i < numStars; i++) {
    let x = random(width);
    let y = random(height);
    ellipse(x, y, 2, 2); // Small circles as stars
  }
}

// Function to draw a randomized planet with a random moon
function drawRandomizedPlanet(x, y, planetSize) {
  // Randomize planet properties(50, 200);
  let planetColor = color(random(255), random(255), random(255));
  let craters = floor(random(5, 15));

  // Draw planet
  fill(planetColor);
  ellipse(x, y, planetSize, planetSize);

  // Draw craters on the planet
  fill(0); // Black craters
  for (let i = 0; i < craters; i++) {
    let craterX = x + random(-planetSize / 2, planetSize / 2);
    let craterY = y + random(-planetSize / 2, planetSize / 2);
    let craterSize = random(5, 20);
    ellipse(craterX, craterY, craterSize, craterSize);
  }

  // Randomly decide whether to draw a moon
  if (random() > 0.5) {
    let moonSize = random(10, 30);
    let moonDistance = planetSize * random(150, 200) / 100;
    drawMoon(x, y, moonDistance, moonSize);
    }
}

// Function to draw a moon
function drawMoon(planetX, planetY, moonDistance, moonSize) {
  // distance from planet to moon is between 1.5 and 2 times planet radius
  
   let moonAngle =  random(PI * 2);   // any angle
   let moonX = planetX + cos(moonAngle) * moonDistance;
   let moonY = planetY + sin(moonAngle) * moonDistance;
  

  fill(200); // Moon colour
  
  ellipse(moonX, moonY, moonSize, moonSize);
}
