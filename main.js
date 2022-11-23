// IF Statements

function main() {
var input = document.getElementById("inputColor");

var color = input.value;
var lowerColorName = color.toLocaleLowerCase();

if(lowerColorName == "grün") {
    alert("Du darfst fahren");
} else if(lowerColorName == "orange") {
    alert("Du darfs anfahren oder bremsen");
} else if(lowerColorName == "rot") {
    alert("Du musst halten");
} else {
    alert("Keine gültige Ampel-Farbe");
}

console.log(alert);
}



