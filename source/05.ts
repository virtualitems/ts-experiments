// para los argumentos de los métodos
// el decorador se ejecuta al momento de agregar la propiedad al prototipo de la clase

// nótese que el decorador no recibe el valor del argumento, sino el nombre del método y el índice del argumento
// esto es debido a que las funciones reciben los argumentos en un array llamdo "arguments"

// nótese que se ejecuta de derecha a izquierda

function logger(...args: unknown[]) {
  console.log('LOGGER:', ...args);
}

class MyClass {

  public linear(@logger m: number, @logger x: number, @logger b: number): number {
    return m * x + b;
  }
}

(() => {
  console.log('--- main ---');
  new MyClass().linear(2, 1, 0);
})();

//$ npx ts-node source/05.ts
