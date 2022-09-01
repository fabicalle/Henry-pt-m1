'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
    if(array.length<= 1) return array;// si el array solo contienen un elemento, devolverlo
  let pivot =array[0];//pivot en la posicion 0 del array
  let left= [];
  let right = [];
 for (let i = 1; i < array.length; i++) {// recorro el total del array
      if(array[i] > pivot) {// si la posicion i es mayor al pivot
        right.push(array[i]);//pushearla a la derecha
      }else{
        left.push(array[i]);//pushear a la izquierda
      }
      }

  return quickSort(left).concat(pivot).concat(quickSort(right));//devuelvo concatenados los array separados

}
function merge(left,right){ // une dos array separados en uno 
  let arr= [];
  while(left.length && right.length){// mientras esten dentro del rango del array
    if(left[0]<right[0]){ //si la posicion izq es menor a la der
      arr.push(left.shift())//pushea intercambiando valores
    }else{
      arr.push(right.shift())//pushea intercambiando valores
    }
  }
  return[...arr, ...left,...right]//utiliza rest parameters y devuelve los arr mas lo que queda fuera 
}
function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

if (array.length === 1) return array;

let half= Math.floor(array.length / 2);//divide el array en dos
let left = array.slice(0, half);//toma desde la primera posicion hasta la mitad
let right= array.slice(half);//toma desde la mitad hasta el final del array

return  merge(mergeSort(left),mergeSort(right));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
