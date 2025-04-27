// en términos generales, un decorador es una función
// que recibe una función como argumento y devuelve otra función.
// esto permite extender el comportamiento de la función original sin modificarla directamente.

// https://refactoring.guru/es/design-patterns/decorator

/**
 * @param {Function} fn
 * @returns {Function}
 */
function decorator(fn) {
  return function(...args) {
    console.log('decorador: antes de ejecutar la función', fn.name);
    const result = fn(...args);
    console.log('decorador: después de ejecutar la función', fn.name);
    return result;
  }
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sum(a, b) {
    return a + b;
}

console.log('resultado de sum', sum(1, 2));

const decoratedSum = decorator(sum);
console.log('resultado de decoratedSum', decoratedSum(1, 2));

//$ node source/01.js