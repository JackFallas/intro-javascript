/**
 * Ejercicios combinados y desafios
 */

// EJERCICIO NO.23--------------------------------------------------


function esPalindromo(cadena) {
    const cadenaMinusculas = cadena.toLowerCase();

    let textoLimpio = "";
    for (let i = 0; i < cadenaMinusculas.length; i++) {
        if (cadenaMinusculas[i] !== " ") {
            textoLimpio += cadenaMinusculas[i];
        }
    }

    const textoReverso = textoLimpio.split('').reverse().join('');

    return textoLimpio === textoReverso;
}

const frase1 = "Anita lava la tina";
const palabra2 = "oso"; 
const palabra3 = "javascript";

console.log("--- EJERCICIO 23 ---");
console.log(`"${frase1}" es palindromo:`, esPalindromo(frase1));
console.log(`"${palabra2}" es palindromo:`, esPalindromo(palabra2));
console.log(`"${palabra3}" es palindromo:`, esPalindromo(palabra3));

// EJERCICIO NO.29--------------------------------------------------
const numeros = [5, 1, 4, 2, 8];

const n = numeros.length;
let i;
let j;

console.log("--- EJERCICIO 29 ---");
console.log("Arreglo original:", numeros);

for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - 1 - i; j++) {
        if (numeros[j] > numeros[j + 1]) {
            let temp = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = temp;
        }
    }
}

console.log("Arreglo ordenado:", numeros);