// se pueden stackear varios decoradores

function logger(...args: unknown[]) {
  console.log('LOGGER:', ...args);
}

@logger
@logger
@logger
class MyClass {}

(() => {
  console.log('--- main ---');
  new MyClass();
})();

//$ npx ts-node source/03.ts
