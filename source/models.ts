const database: Student[] = [];

export class Student {
  public name: string;
  public grade: number;

  public constructor(name: string, grade: number) {
    this.name = name;
    this.grade = grade;
  }

  public toString(): string {
    return `${this.name}: ${this.grade}`;
  }

  public static list(): Student[] {
    return database;
  }

  public static save(student: Student): void {
    database.push(student);
  }
}
