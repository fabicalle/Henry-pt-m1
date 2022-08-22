"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
//nodo principal con ramificacion izq y der.
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function () {
  if (this.value === null) return 0;
  if (this.left === null && this.right === null) return 1;
  if (this.left === null && this.right !== null) return 1 + this.right.size();
  if (this.left !== null && this.right === null) return 1 + this.left.size();
  if (this.left !== null && this.right !== null) return 1 + this.left.size() + this.right.size();


};

BinarySearchTree.prototype.insert = function (value) {
  if (value > this.value) { //si el valor es mayor al valor del nodo inicial
    if (this.right === null) {// y el nodo derecho es igual a null
      this.right = new BinarySearchTree(value);//crea nodo en la derecha con el value
    } else {
      this.right.insert(value);// sino inserta un nuevo nodo a la derecha del ultimo nodo 
    }
  } else if (value < this.value) {//si el  valor es menor al valor del nodo inicial
    if (this.left === null) { // y el nodo izquierdo es igual a null
      this.left = new BinarySearchTree(value);// crea un nuevo nodo a la izquierda con el value
    } else {
      this.left.insert(value);// sino insterta un nuevo nodo a la izquierda del ultimo nodo 
    }
  }
};

BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) return true;// busca si el valor esta en la memory
  if (value > this.value) {
    if (this.right === null) return false;// si el valor de la derecha es mayor retorna falso y el valor
    return this.right.contains(value)
  }

  if (value < this.value) {
    if (this.left === null) return false;// si el valor de la derecha es mayor retorna falso y el valor
    return this.left.contains(value)
  }
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  if (order === 'post-order') { //post order izq -> der -> root 
    if (this.left !== null) this.left.depthFirstForEach(cb, order);
    if (this.right !== null) this.right.depthFirstForEach(cb, order);
    cb(this.value);
  } else if (order === 'pre-order') { //pre order root -> izq -> der
    cb(this.value);
    if (this.left !== null) this.left.depthFirstForEach(cb, order);
    if (this.right !== null) this.right.depthFirstForEach(cb, order);

  } else { // in order izq -> root -> der
    if (this.left !== null) this.left.depthFirstForEach(cb, order);
    cb(this.value);
    if (this.right !== null) this.right.depthFirstForEach(cb, order);
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, queue = []) { 
  if(this.left !== null) queue.push(this.left);// todo lo que esta en la izq lo suma a la queue
  if(this.right !== null) queue.push(this.right);// todo lo que esta a la der lo suma a la queue
  cb(this.value); // ejecuta el root

  if(queue.length > 0){
    queue.shift().breadthFirstForEach(cb,queue);// busca si hay elementos en la queue
  }
};
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
