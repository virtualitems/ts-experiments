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
    this.view.list(Student.all().map(String));
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

    student.save()

    this.view.message('Estudiante creado: ' + student.name);
    this.view.line();
  }

  public error(message: string): void {
    this.view.clear();
    this.view.error(message);
    this.view.line();
  }
}
