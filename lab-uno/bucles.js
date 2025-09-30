/**
 * Bucles
 */

// EJERCICIO NO.16--------------------------------------------------
//Funcion numero mas grande
function encontrarNumeroMasGrande(arreglo) {
    // Si es vacio retorna nulo o bien undefined
    if (arreglo.length === 0) {
        return undefined;
    }

    let mayor = arreglo[0];

    // Un for para comprarar
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }

    return mayor;
}

// Definimos el arreglo de numeros
const numerosMayor = [5, 12, 3, 20, 8, 15];
const resultado = encontrarNumeroMasGrande(numerosMayor);

console.log("--- EJERCICIO 16: ---");
console.log("El arreglo es:", numeros);
console.log("El numero mas grande es:", resultado);

// EJERCICIO NO.17--------------------------------------------------
//Numeros pares para el arreglo
const numerosPares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let contadorPares = 0;
let i = 0;

// Bucle 'while' para recorrer y contar
while (i < numerosPares.length) {
    const numeroActual = numerosPares[i];

    if (numeroActual % 2 === 0) {
        contadorPares++;
    }

    i++;
}

console.log("--- EJERCICIO 17---");
console.log("El arreglo es:", numerosPares);
console.log("La cantidad de numeros pares es:", contadorPares);

