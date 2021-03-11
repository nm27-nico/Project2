let rSlider, gSlider, bSlider;
let capture;
let song1;
let song2;
let song3
let song4
var button1;
var button2;
var button3;
var button4;


let img;
var input;

let s1 = '1. Look at yourself and your surrounding environment. Feel your emotions.';
let s2 = '2. Use the color sliders to find a background color that aligns with your current feelings.';
let s3 = '3. Choose one of the four available instrumental beats that best fit your current feelings.';
let s4 = '4. Write a sentence about why you think you are feeling the specific emotions you are feeling in the white box.';
let s5 = 'This private digital space serves as an opportunity for self-documentation. Liberate yourself from the stress of public perception and connect with your emotions privately.';
let s6 = 'Instructions:';

function setup() {
  createCanvas(800, 670);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
  textSize(15);
  noStroke();
  rSlider = createSlider(0, 255, 200);
  rSlider.position(460, 320);
  gSlider = createSlider(0, 255, 220);
  gSlider.position(460, 350);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(460, 380);
  
  img = loadImage('image1.png');
  
  song1 = loadSound('happy.mp3');
  button1 = createButton("Music Vibe: 😁");
  button1.position(460, 455);
  
  song2 = loadSound('sad.mp3');
  button2 = createButton("Music Vibe: 😭");
  button2.position(595, 455);
  
  song3 = loadSound('calm.mp3');
  button3 = createButton("Music Vibe: 😌");
  button3.position(595, 500);
  
  song4 = loadSound('angry.mp3');
  button4 = createButton("Music Vibe: 😤");
  button4.position(460, 500);
  

 input = createInput('Write Here')
  input.position(90, 575,);
   input.size(600, 20,);
  input.text
  textAlign(LEFT);
  
}

function draw() {
  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  background(r, g, b);
  text('red', rSlider.x * 1.175 + rSlider.width, 335);
  text('green', gSlider.x * 1.14 + gSlider.width, 365);
  text('blue', bSlider.x * 1.16 + bSlider.width, 395);
  ellipse(mouseX,mouseY,45,45);
  
  
  image(img, 90, 60,125,35);
  
  image(capture,90, 310, 320, 240);

  text(s1, 90, 190, 570, 80); // Text wraps within text box
  text(s2, 90, 210, 590, 80); // Text wraps within text box
  text(s3, 90, 230, 570, 80); // Text wraps within text box
  text(s4, 90, 250, 570, 80); // Text wraps within text box
  text(s5, 90, 110, 590, 80); // Text wraps within text box
  text(s6, 90, 170, 590, 80); // Text wraps within text box
  
  function mousePressed() {
  if (song1.isPlaying()) {
    // .isPlaying() returns a boolean
    song1.stop();
    background(255, 0, 0);
  } else {
    song1.play();
    background(0, 255, 0);
  }
  }
    
button1.mousePressed(music1);
}

function music1() {
  if (song1.isPlaying()) {
    song1.stop();
  } else {
    song1.play();
  }
  
  function mousePressed() {
  if (song2.isPlaying()) {
    // .isPlaying() returns a boolean
    song2.stop();
    background(255, 0, 0);
  } else {
    song2.play();
    background(0, 255, 0);
  }
  }
    
button2.mousePressed(music2);
}

function music2() {
  if (song2.isPlaying()) {
    song2.stop();
  } else {
    song2.play();
  }
  
  
  function mousePressed() {
  if (song3.isPlaying()) {
    // .isPlaying() returns a boolean
    song3.stop();
    background(255, 0, 0);
  } else {
    song3.play();
    background(0, 255, 0);
  }
  }
    
button3.mousePressed(music3);
}

function music3() {
  if (song3.isPlaying()) {
    song3.stop();
  } else {
    song3.play();
  }
  
  function mousePressed() {
  if (song4.isPlaying()) {
    // .isPlaying() returns a boolean
    song4.stop();
    background(255, 0, 0);
  } else {
    song4.play();
    background(0, 255, 0);
  }
  }
    
button4.mousePressed(music4);
}

function music4() {
  if (song4.isPlaying()) {
    song4.stop();
  } else {
    song4.play();
  }
  

  
}
