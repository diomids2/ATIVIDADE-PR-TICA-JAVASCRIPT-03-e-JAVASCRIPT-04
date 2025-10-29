// mediaNotas.js
// Calcula a média de 4 notas informadas pelo usuário

const readline = require('readline');

// Cria interface para ler do terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para perguntar e validar número
function perguntarNota(pergunta) {
  return new Promise(resolve => {
    rl.question(pergunta, resposta => {
      const valor = parseFloat(resposta.replace(',', '.'));
      if (!Number.isNaN(valor)) {
        resolve(valor);
      } else {
        console.log('Valor inválido. Digite um número.');
        resolve(perguntarNota(pergunta)); // repete se inválido
      }
    });
  });
}

(async () => {
  console.log('Cálculo da Média Final\n');

  const nota1 = await perguntarNota('Nota 1: ');
  const nota2 = await perguntarNota('Nota 2: ');
  const nota3 = await perguntarNota('Nota 3: ');
  const nota4 = await perguntarNota('Nota 4: ');

  rl.close();

  // Calcula média
  const media = (nota1 + nota2 + nota3 + nota4) / 4;

  console.log('\n Resultado');
  console.log(`Notas: ${nota1}, ${nota2}, ${nota3}, ${nota4}`);
  console.log(`Média final: ${media.toFixed(1)}\n`);
})();