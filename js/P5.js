var a = parseFloat(prompt("Digite o lada A: "));
var b = parseFloat(prompt("Digite o lada B: "));
var c = parseFloat(prompt("Digite o lada C: "));

if (a == b && b == c) {
  console.log("Equilátero");
} 
else if (a == b || b == c || a == c) {
  console.log("Isósceles");
} 
else {
  console.log("Escaleno");
}
  