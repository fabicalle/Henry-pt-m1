'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var resultado = 0;//contador
  num = num.split("").reverse();
  for (var i = 0; i < num.length; i++){ // bucle recorre todo el array
    resultado = resultado + Math.pow (2,i) * parseInt(num[i]); // posicion al cuadrado * valor de la posicion
  }
  return resultado;

}

function DecimalABinario(num) {
  // tu codigo aca 
  var bin= []; // array vacio
  while ( num != 0){ //hacer mientras que el numero sea mayor a cero y luego salir del bucle
    bin.push(num % 2) ; //primero hace el resto y luego lo pasa a array
    num = Math.floor(num/2);// redondea el numero hacia abajo para que no quede real
   
  }
  return bin.reverse().join("");
}



module.exports = {
  BinarioADecimal,
  DecimalABinario,
}