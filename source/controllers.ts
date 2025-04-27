import { Student } from './models';
import { View } from './views';

export class Controller {
  public view: View;

  public constructor() {
    this.view = new View();
  }

  public showMenu(): void {
    this.view.list([
      '1. Listar estudiantes',
      '2. Agregar estudiante',
      '3. Salir',
    ]);
    this.view.line();
  }

  public listStudents(): void {
    this.view.clear();
    this.view.message('Lista de estudiantes:');
    this.view.list(Student.list().map(String));
    this.view.line();
  }

  public createStudent(name: string, grade: number): void {
    this.view.clear();

    if (Number.isInteger(grade) === false || grade < 0) {
      this.view.error('La nota debe ser un número entero positivo.');
      this.view.line();
      return;
    }

    const student = new Student(name, grade);
    Student.save(student);

    this.view.line();
  }
}
