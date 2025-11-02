// idades.js
// Contagem <21 e >50

const rl = require('readline-sync');

console.log('Digite as idades. Para encerrar, digite um número negativo.\n');

let menores21 = 0;
let maiores50 = 0;

while (true) {
  // \n antes do texto do prompt dá a “quebra” que aparece no exemplo
  const idade = rl.questionInt('\nDigite uma idade: ');

  if (idade < 0) {
    // idade negativa encerra a leitura (sentinela)
    break;
  }

  if (idade < 21) {
    menores21++;
  }
  if (idade > 50) {
    maiores50++;
  }
}

// Saída exatamente como no enunciado
console.log(`\nTotal de pessoas menores de 21 anos: ${menores21}`);
console.log(`\nTotal de pessoas maiores de 50 anos: ${maiores50}`);
``