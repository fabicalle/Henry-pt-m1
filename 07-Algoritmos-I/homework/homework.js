'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arr = [1];// array comienza en 1
  let i = 2;// primer numero factoreable
  while (num !== 1) { //mientras que num sea distinto de 1
    if (num % i === 0) { // si el resto de num e i es igual a 0 
      arr.push(i);// pushear al array
      num = num / i; // dividir num x i
    } else {
      i++;//sino incrementa i
    }
  }

  return arr;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let check = true;// boolean condicional para cortar el bucle
  while (check) {
    check = false;// se declara false para q no entren en loop infinito
    for (let i = 0; i < array.length; i++) { // recorre el array
      if (array[i] > array[i + 1]) { // si i es mayor a la sgte posicion
        let aux = array[i];// usamos una variable aux para copiar el valor de i
        array[i] = array[i + 1];// i pasa a tener el valor de i+
        array[i + 1] = aux;// i+ pasa a tener el valor del aux 
        check = true// devolvemos la condicion a true 
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {// recorre el array desde la segunda posicion del array para comparar con el de la izquierda

    let aux = array[i];// copia de la posicion 
    let j = i - 1;// valor previo

    while (j >= 0 && aux < array[j]) { //mientras que j sea mayor a 0 y el current menor a array de j 
      array[j + 1] = array[j];// j+1 va a ocupar la posicion de j
      j--;// j chequea hacia atras
    }
    array[j + 1] = aux;// cambia el valor a la copia de i
  }
  return array;

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) { //empieza una posicion adelante de i
      if (array[j] < array[min]) {
        min = j; //actualiza el numero mas chico
      }
    }
    if (min !== i) { //si min es distinto de i
     // empezar a cambiar posiciones
      let aux = array[i];
      array[i] = array[min];
      array[min] = aux;
    }
  }
  return array;



}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
