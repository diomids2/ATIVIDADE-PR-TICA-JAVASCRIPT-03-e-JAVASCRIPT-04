// parImpar.js
// Objetivo: ler um número inteiro e dizer se é par/ímpar e positivo/negativo (zero é neutro)

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

console.log('=== PAR OU ÍMPAR • POSITIVO OU NEGATIVO ===\n');

rl.question('Digite um número: ', (txt) => {
  // tenta transformar o que foi digitado em inteiro
  const n = parseInt(String(txt).trim().replace(',', '.'), 10);

  if (Number.isNaN(n)) {
    console.log('\n Valor inválido. Digite um número inteiro (ex.: -3, 0, 2).');
    rl.close();
    return;
  }

  // paridade
  const paridade = (n % 2 === 0) ? 'par' : 'ímpar';

  // sinal
  let sinal;
  if (n > 0) {
    sinal = 'positivo';
  } else if (n < 0) {
    sinal = 'negativo';
  } else {
    sinal = 'neutro'; // zero: nem positivo nem negativo
  }

  // mensagem final (se zero, fala "neutro")
  if (n === 0) {
    console.log(`\nO Número ${n} é ${paridade} e ${sinal}!`);
  } else {
    console.log(`\nO Número ${n} é ${paridade} e ${sinal}!`);
  }

  rl.close();
});