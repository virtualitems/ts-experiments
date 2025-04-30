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

  public save(): void {
    database.push(this);
  }

  public static all(): Student[] {
    return database.slice();
  }
}
