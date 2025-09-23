/**
 * Conversiones - Explcit Type Casting
 */

const string = '54'
const integer = parseInt(string)

//console.log(string)
//console.log(integer)

const flotante = parseFloat("3.14159")
//console.log(typeof flotante)//number

const binario = "1010"
const decimal = parseInt(binario, 2)
//console.log(decimal)

const hexa = "CAFE"
const deciamlh = parseInt(hexa, 16)
//console.log(deciamlh)

//Implicit Type Casting
const resultado= "5" + 3 //53 concatenar
//console.log(resultado)
//console.log(typeof resultado)

const sumaBooleana = "3"+true
//console.log(sumaBooleana)
//console.log(typeof sumaBooleana)

const sumaConNumero = true + 2
//console.log(sumaConNumero)
//console.log(typeof sumaConNumero)

const valorString = '29'
const valorNumero = 11
const valorBooleano = true

console.log(valorString + valorString)//Concatenar
console.log(valorString + valorNumero)//Concatenar
console.log(valorString + valorBooleano)//Concatenar

console.log('---')

console.log(valorNumero + valorString)//Concatenar
console.log(valorNumero + valorNumero)//Sumar
console.log(valorNumero + valorBooleano)//Sumar

console.log('---') 

console.log(valorBooleano + valorString)//Concatenar
console.log(valorBooleano + valorNumero)//Sumar
console.log(valorBooleano + valorBooleano)//Sumar