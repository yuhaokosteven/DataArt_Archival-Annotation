let snow = []
let thunder = []
let fog = []
let rain = []
let sand = []

var sliderSnow;
var sliderThunder;
var sliderFog;
var sliderRain;
var sliderSand;
var downCanvas;

var sliderSnowP;
var sliderThunderP;
var sliderFogP;
var sliderRainP;
var sliderSandP;
var button;
let elements = [snow, thunder, fog, rain, sand]

function setup() {
  createCanvas(windowWidth, windowHeight)
  // background(0, 0, 0)
  noStroke()
  downCanvas = createGraphics(window.width, 100);

  sliderSnowP = createP('snow');
  sliderSnowP.position(windowWidth / 2 - 340, 900);
  sliderSnowP.style('color', 'white')
  sliderSnowP.style('font-size', '20px')
  sliderSnowP.style('font-family', 'Arial, Helvetica, sans-serif')
  sliderSnow = createSlider(0, 255, 0)
  sliderSnow.position(windowWidth / 2 - 380, 950);

  sliderSnowP = createP('thunder');
  sliderSnowP.position(windowWidth / 2 - 185, 900);
  sliderSnowP.style('color', 'white')
  sliderSnowP.style('font-size', '20px')
  sliderSnowP.style('font-family', 'Arial, Helvetica, sans-serif')
  sliderThunder = createSlider(0, 255, 0)
  sliderThunder.position(windowWidth / 2 - 220, 950);

  sliderSnowP = createP('fog');
  sliderSnowP.position(windowWidth / 2, 900);
  sliderSnowP.style('color', 'white')
  sliderSnowP.style('font-size', '20px')
  sliderSnowP.style('font-family', 'Arial, Helvetica, sans-serif')
  sliderFog = createSlider(0, 255, 0)
  sliderFog.position(windowWidth / 2 - 50, 950);

  sliderSnowP = createP('rain');
  sliderSnowP.position(windowWidth / 2 + 165, 900);
  sliderSnowP.style('color', 'white')
  sliderSnowP.style('font-size', '20px')
  sliderSnowP.style('font-family', 'Arial, Helvetica, sans-serif')
  sliderRain = createSlider(0, 255, 0)
  sliderRain.position(windowWidth / 2 + 120, 950);

  sliderSnowP = createP('sand');
  sliderSnowP.position(windowWidth / 2 + 330, 900);
  sliderSnowP.style('color', 'white')
  sliderSnowP.style('font-size', '20px')
  sliderSnowP.style('font-family', 'Arial, Helvetica, sans-serif')
  sliderSand = createSlider(0, 255, 0)
  sliderSand.position(windowWidth / 2 + 285, 950);

  button = createButton('Visualize');
  button.position(windowWidth / 2 - windowWidth / 2, 1010);
  button.mousePressed(
    getweather
  );

  var txt = "20px " + windowWidth / 2 + "px";
  var a = txt.toString();
  // console.log(a);
  button.style('background-color', 'black')
  button.style('color', 'white')
  button.style('padding', a);
  button.style('cursor', ' pointer');
  button.mouseOver(onTop).mouseOut(outside);
  // getWeathers(20, 100, 50, 300, 200)
}

function onTop() {
  button.style('background-color', '#555555')
  button.style('color', 'white')
}

function outside() {
  button.style('background-color', 'black')
  button.style('color', 'white')
}

function getweather() {
  getWeathers(sliderSnow.value(), sliderThunder.value(), sliderFog.value(), sliderRain.value(), sliderSand.value())
}

function drawDownCanvas() {
  downCanvas.background(0, 0, 0);
}

function draw() {


  background(0)
  // getWeathers(sliderSnow.value(), sliderThunder.value(), sliderFog.value(), sliderRain.value(), sliderSand.value())
  // console.log(sliderSnow.value());

  elements.forEach((element, index) => {
    element.forEach((particle, number) => {
      particle.move()
      if (index == 1) {
        particle.thunder()
      } else {
        particle.display()
      }
    })
  })

  // getWeathers(sliderSnow.value(), sliderThunder.value(), sliderFog.value(), sliderRain.value(), sliderSand.value())



  drawDownCanvas();
  image(downCanvas, 0, 900);
}

function getWeathers(sizeOfSnow, sizeOfThunder, sizeOfFog, sizeofRain, sizeOfSand) {

  let total = [sizeOfSnow, sizeOfThunder, sizeOfFog, sizeofRain, sizeOfSand]
  total.forEach((size, type) => {
    elements[type] = []
    for (let i = 0; i < size; i++) {
      let element = new Particle(size, type)
      elements[type].push(element)
    }
  })

  background(0, 0, 0)
}
