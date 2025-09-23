/**
 * Condicionales
 */

// Determinar si es mayor de edad o no
const edad = parseInt(prompt("Ingrese su edad: "));

if  (edad >= 18) {
    console.log("Ute e mayor de edad")
} else {
    console.log("Ute e menor de edad")
}

//Determinar que numero es mayor

const num1 = parseInt(prompt("Ingrese un numero:"));
const num2 = parseInt(prompt("Ingrese un numero:"));

if (num1 == num2) {
    console.log("El numero: ", num1, " es igual que el: ", num2);
    console.log("Son iguales");
} else if (num1 >= num2) {
    console.log("El numero: ", num1, " es mayor que el: ", num2);
    console.log("El num 1: ",num1, " es el mayor");
} else if (num1 <= num2) {
    console.log("El numero: ", num1, " es menor que: ", num2);
    console.log("El num 2: ",num2, " es el mayor");
}