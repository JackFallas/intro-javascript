/**
*   FOR ciclo Para
*/

// for | for-of | for-in
console.log("------------------")
let lista = ["eat","sleep","code","repeat"];

for (let i = 0; i < lista.length; i++){
    console.log(lista[i]);
}
console.log("------------------")
//for-of [{(FOR EACH)}]
let canasta = ["manzana", "pera", "naranja", "uva"]
for (fruta of canasta) {
    console.log(fruta);
}

// for-in: iterar sobre las propiedades de un objeto

const listaDeCompras = {
    nombre: "manzana",
    costo: 3.4,
    cantiad: 32,
    marca: "manzanita feliz"
}

console.log("------------------")
for (fruta in listaDeCompras){
    console.log(fruta);
}

for(fruta in listaDeCompras){
    console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}
console.log("------------------")
for (fruta of listaDeCompras){
    console.log(fruta);
}
