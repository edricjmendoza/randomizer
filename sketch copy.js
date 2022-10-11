let cars = [{
  name: "jetta",
  color: "green"
}, {
  name: "mustang",
  color: "grey"
}, {
  name: "glk",
  color: "black"
}, {
  name: "beetle",
  color: "blue"
}, {
  name: "venue",
  color: "cobolt"
}];

let randomIndex;

function setup() {
  createCanvas(600, 600);
  background(220);

  // randomIndex = int(random(dog.length));
  // text(cars[randomIndex].name, 50, 50);
  // cars.splice(randomIndex, 1);

  // console.log(cars[randomIndex].name);
  // console.log(cars);
  // console.log(cars[0].name);

  // console.log("initial arrat is")
  // console.log(cars);
  //
  // cars.splice(2, 2);
  // console.log("array after splice")
  // console.log(cars);

  // cars.unshift("mustang");
  // console.log("array after unshift")
  // console.log(cars);

}

function draw() {

}

function mousePressed() {
  background(random(200,225));
  randomIndex = int(random(dog.length));
  text(cars[randomIndex].name, 50, 50);
  cars.splice(randomIndex, 1);
}
