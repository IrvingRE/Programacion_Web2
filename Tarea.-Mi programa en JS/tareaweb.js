// Solicita la información al usuario
const nombre = prompt("Ingresa tu nombre:");
const edad = prompt("Ingresa tu edad:");
const peso = prompt("Ingresa tu peso en kilogramos:");
const estatura = prompt("Ingresa tu estatura en metros:");

// Convierte peso y estatura a números
const pesoNum = parseFloat(peso);
const estaturaNum = parseFloat(estatura);

// Calcula el IMC
const imc = pesoNum / (estaturaNum * estaturaNum);

// Imprime la información en la consola
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Peso:", pesoNum + " kg");
console.log("Estatura:", estaturaNum + " m");
console.log("IMC:", imc.toFixed(2)); // Redondea el IMC a dos decimales
