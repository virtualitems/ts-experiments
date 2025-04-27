// los decoradores en typescript tienen una sintaxis especial
// están enfocados en valores, no en funciones
// se aplican a programación orientada a objetos

// para habilitarlos, hay que configar en el tsconfig.json
// {
//   "compilerOptions": {
//     "experimentalDecorators": true
//   }
// }

// para las clases, el decorador se ejecuta al momento de cargar la clase

function logger(...args: unknown[]) {
  console.log('LOGGER:', ...args);
}

@logger
class MyClass {}

(() => {
  console.log('--- main ---');
  new MyClass();
})();

//$ npx ts-node source/02.ts
