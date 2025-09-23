/**
 *  Operados de Comparacion
 */

// == : Igualdad
// === : Para comparar igualdad en valor Y en tipo de dato
// != : es diferente a, true o false
// !== : es diferente en valor Y tipo de dato 

// <    : mayor que
// >    : menor que
// <=   : mayor e igual que
// >=   : menor e igual que

const a = 10;
const b = 20;
const c = "10";

console.log(a == b) //false
console.log(a === c) //false
console.log(a == c)//true
console.log(a != c)//false -> si se interpreta que son iguales
console.log(a !== c)//true

