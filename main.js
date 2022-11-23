// IF Statements

function main() {
var inputMaxSpeed = document.getElementById("maxSpeed");
var inputSpeed = document.getElementById("speed");
var inputDir = document.getElementById("dir");

var maxSpeed = parseInt(inputMaxSpeed.value);
var speed = parseInt(inputSpeed.value);
var isFacing = inputDir.checked;
 
var tolerance = maxSpeed + ((maxSpeed/100)*10);

console.log(speed);
console.log(tolerance);
console.log(speed-tolerance);


if(speed > tolerance && isFacing == true) {
   alert("Du wurdest geblitzt");
};

};



