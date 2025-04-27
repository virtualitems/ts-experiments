export class View {
  public menu(): void {
    console.log('1. Listar estudiantes');
    console.log('2. Agregar estudiante');
    console.log('3. Salir');
  }

  public list(texts: string[]): void {
    for (const text of texts) {
      console.log(text);
    }
  }

  public message(text: string): void {
    console.log(text);
  }

  public error(text: string): void {
    console.error(text);
  }

  public line(): void {
    console.log('----------');
  }

  public clear(): void {
    console.clear();
  }
}
