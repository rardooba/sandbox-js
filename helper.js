import readline from 'readline';

export function prompt(question) {
  // Creation d'une interface de lecture
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Retourne une promise
  return new Promise((resolve) => {
    // Pose la question
    rl.question(question, (answer) => {
      // Ferme l'interface de lecture quand on a la réponse
      rl.close();
      // Renvoie la réponse
      resolve(answer);
    });
  });
}
