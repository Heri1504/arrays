/ Forma 1
let miArray1 = [];

// Forma 2
let miArray2 = new Array();

// Forma 3 con elementos iniciales
let miArray3 = [1, 2, 3, 4, 5];
let longitud = miArray3.length;
console.log(longitud);  // Imprime 5
for (let i = 0; i < miArray3.length; i++) {
    console.log(miArray3[i]);
}
for (let i = 0; i < miArray3.length; i++) {
    console.log(miArray3[i]);
}
miArray3.push(6);
let ultimoElemento = miArray3.pop();
miArray3.unshift(0);
let primerElemento = miArray3.shift();
// Agregar
miArray3.splice(2, 0, 2.5);  // Insertar 2.5 en la posición 2

// Eliminar
miArray3.splice(2, 1);  // Eliminar 1 elemento en la posición 2
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let newArray = array1.concat(array2);
console.log(newArray);  // Imprime [1, 2, 3, 4, 5, 6]
