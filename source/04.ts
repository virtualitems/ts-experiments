// para los atributos y métodos
// el decorador se ejecuta al momento de agregar la propiedad al prototipo de la clase

function logger(...args: unknown[]) {
  console.log('LOGGER:', ...args);
}

class MyClass {

  // nota: no se puede usar el decorador en el constructor

  @logger
  public prop: string = 'value';

  @logger
  public static staticProp: string = 'value';

  @logger
  // nota: sólo se puede usar el decorador en el getter o en el setter, no en ambos
  public get data(): Array<unknown> {
    return [];
  }

  @logger
  public method(arg: unknown): string {
    return String(arg);
  }
}

(() => {
  console.log('--- main ---');
  new MyClass().method(null);
})();

//$ npx ts-node source/04.ts
