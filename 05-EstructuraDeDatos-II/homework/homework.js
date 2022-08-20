"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (data) {
  let node = new Node(data);
  let current = this.head;// copia this head para no sobreescribir la info
  if (!current) { //si esta vacia
    this.head = node;// ingresa el nodo
    return node;//devuelve el nodo
  }

  while (current.next) { //mientras next esta ocupado
    current = current.next;//pasa al proximo next
  }
  current.next = node;//si esta vacio el next ingresa el nodo 
  return node;// retorna el nodo 
};
LinkedList.prototype.remove = function () {
  let current = this.head;
  if (!current) return null;//si la lista esta vacia
  else if (current && !current.next) {//si la lista tiene 1 elemento
    let aux = current.value;// copia el valor del nodo
    this.head = null;//borra el nodo 
    return aux;// devuelve el valor copiado
  }
  while (current.next.next) {//recorre dos posiciones para ver cual es la ultima
    current = current.next;//avanza una posicion
  }
  let aux = current.next.value;//guardo el valor x ref.
  current.next = null;// borra el nodo 
  return aux;// regresamos el valor x ref
};
LinkedList.prototype.search = function (value) {
  if (this.head === null) return null;//retorna nulo si no hay nada
  let current = this.head;//hace copia de referencia para recorrer la lista
  while (current) {
    if (current.value === value) return current.value;//si el valor del nodo actual es igual q el q pasamos retornarlo
    else if (typeof (value) === 'function') {// si el typeof de value es una funcion 
      if (value(current.value)) {// pasarle a la funcion el valor de value
        return current.value;// si es true regresa el valor
      }
    }
    current = current.next;// sino sigue al siguiente nodo 
  }
  return null;// si es falso o no esta devuelve null

};
/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  //arreglo de obj.
  this.numBuckets = 35;//cantidad de buckets
  this.buckets = [];

}
HashTable.prototype.hash = function (key) {
  let cont = 0; //contador
  for (let i = 0; i < key.length; i++) {// recorre el string
    cont = cont + key.charCodeAt(i); //suma los valores del string
  }
  return cont % this.numBuckets;//devuelve la posicion dentro de las buckets segun el resto
};
HashTable.prototype.set = function (key, value) {
  if (typeof key !== 'string') throw new TypeError('Keys must be strings')// revisa que el key sea un string
  let posArr = this.hash(key);
  //si la posicion en el arr esta vacio debe crear un obj.
  if (this.buckets[posArr] === undefined) {
    this.buckets[posArr] = {};
  }

  this.buckets[posArr][key] = value;//en esa posicion crea una llave con un valor 
};
HashTable.prototype.get = function (key) {
  let posArr = this.hash(key);//busca la posicion
  return this.buckets[posArr][key];// retorna la posicion buscada
};
HashTable.prototype.hasKey = function (key) {
  let posArr = this.hash(key);//busca el key
  return this.buckets[posArr].hasOwnProperty(key);//revisa si es true o no 
};
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
