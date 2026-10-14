//Ejercicios con Arrays, y de paso con algo de Math

//1.Crea un array de 10 elementos, pero sin inicializar. Llamalo Números.
const Numeros = new Array(10);

//2.Inicializa esos elementos con números aleatorios (usa métodos de la clase Math), entre 0 y mil. Redondea los número a dos decimales.
for (let i = 0; i < Numeros.length; i++) {
  const aleatorio = Math.random() * 1000;
  Numeros[i] = Math.round(aleatorio * 100) / 100;
}

//3.Imprime por pantalla todos los elementos del array (con un toString() se puede hacer, pero quiero que recorrais el array con una estructura de control).
console.log("--- Array Numeros ---");
for (let i = 0; i < Numeros.length; i++) {
  console.log(Numeros[i]);
}

//4.Imprime por pantalla el número mayor y el menor (Podéis hacerlo usando las funciones de la clase Math, o bien con un algoritmo de burbuja sencillito. Buscad el algoritmo de la burbuja, que es bonito).
let mayor = Numeros[0];
let menor = Numeros[0];

for (let i = 1; i < Numeros.length; i++) {
  if (Numeros[i] > mayor) {
    mayor = Numeros[i];
  }
  if (Numeros[i] < menor) {
    menor = Numeros[i];
  }
}

console.log("El mayor es: " + mayor);
console.log("El menor es: " + menor);

//Algoritmo de burbuja para ordenar el array y encontrar el mayor y menor
let mayorBurbuja = Math.max(...Numeros);
let menorBurbuja = Math.min(...Numeros);

console.log("El mayor es: " + mayorBurbuja);
console.log("El menor es: " + menorBurbuja);

//5.Imprimir también qué posición ocupan estos números dentro del arrray.
const posMayor = Numeros.indexOf(mayor);
const posMenor = Numeros.indexOf(menor);

console.log("El mayor está en la posición: " + posMayor);
console.log("El menor está en la posición: " + posMenor);

//6.Elimina del array esos elementos, el mayor y el menor, y muestra de nuevo el array.
if (posMayor > posMenor) {
  Numeros.splice(posMayor, 1);
  Numeros.splice(posMenor, 1);
} else {
  Numeros.splice(posMenor, 1);
  Numeros.splice(posMayor, 1);
}

console.log("--- Array Numeros sin el mayor ni el menor ---");
for (let i = 0; i < Numeros.length; i++) {
  console.log(Numeros[i]);
}

//7.Crea un nuevo array, que contenga, la raíz cuadrada (del primero), cúbica (del segundo), cuarta (del tercero) etc de los elementos del array Numeros. Este array se llamará Raíces.
const Raices = [];

for (let i = 0; i < Numeros.length; i++) {
  const indiceRaiz = i + 2;
  Raices[i] = Math.pow(Numeros[i], 1 / indiceRaiz);
}

//8.Añade en Raíces un primer elemento, cuyo valor será 1. Imprime el array entero por consola.
Raices.unshift(1);

console.log("--- Array Raices ---");
for (let i = 0; i < Raices.length; i++) {
  console.log(Raices[i]);
}

//9.Añade al array Números aquellos elementos de Raíces que sean mayores que uno.
for (let i = 0; i < Raices.length; i++) {
  if (Raices[i] > 1) {
    Numeros.push(Raices[i]);
  }
}

//10.Finalmente, ordena Numeros e imprimelo por consola. Tambien puedes hacer un document.write().
Numeros.sort((a, b) => a - b);

console.log("--- Array Numeros ordenado ---");
for (let i = 0; i < Numeros.length; i++) {
  console.log(Numeros[i]);
  document.write(Numeros[i] + "<br>");
}