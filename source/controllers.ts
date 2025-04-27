import { Student } from './models';
import { View } from './views';

export class Controller {
  public view: View;

  public constructor() {
    this.view = new View();
  }

  public showMenu(): void {
    this.view.menu();
    this.view.line();
  }

  public listStudents(): void {
    this.view.clear();
    this.view.message('Lista de estudiantes:');
    this.view.list(Student.list().map(String));
    this.view.line();
  }

  public async createStudent(name: string, grade: number): Promise<void> {
    this.view.clear();

    if (Number.isInteger(grade) === false) {
      this.view.error('La nota debe ser un número entero.');
      this.view.line();
      return;
    }

    const student = new Student(name, grade);
    Student.save(student);

    this.view.line();
  }
}
