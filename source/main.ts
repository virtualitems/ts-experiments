import { Controller } from './controllers';

import readline from 'node:readline';

export function input(prompt: string): Promise<string> {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(prompt, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function main() {
  const controller = new Controller();

  while (true) {
    controller.showMenu();
    const opt = await input('Selecciona una opción: ');

    if (opt === '1') {
      controller.listStudents();
      continue;
    }

    if (opt === '2') {
      const name = await input('Ingresa el nombre del estudiante: ');
      const grade = await input('Ingresa la nota del estudiante: ');
      controller.createStudent(name, Number(grade));
      continue;
    }

    if (opt === '3') {
      console.log('Saliendo...');
      break;
    }
  }
}

main();
