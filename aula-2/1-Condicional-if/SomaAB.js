// somaAB.js

// Objetivo: ler A, B, C e dizer se A + B é maior, menor ou igual a C
// Conteúdos: Entrada/Saída, Operadores, IF
//Importando biblioteca
const leia = require('readline-sync')

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

console.log('=== SOMA DE A + B COMPARADA A C ===\n');

// Converte texto em inteiro (aceita vírgula ou ponto). Se não for número, vira 0.
function inteiro(txt) {
  const n = parseInt(String(txt).trim().replace(',', '.'), 10);
  return Number.isNaN(n) ? 0 : n;
}

rl.question('Digite o número A: ', (aTxt) => {
  rl.question('Digite o número B: ', (bTxt) => {
    rl.question('Digite o número C: ', (cTxt) => {
      const A = inteiro(aTxt);
      const B = inteiro(bTxt);
      const C = inteiro(cTxt);

      const soma = A + B;

      // Monta o sinal e a frase final usando IF
      let sinal, frase;
      if (soma > C) {
        sinal = '>';
        frase = 'A Soma de A + B é Maior do que C';
      } else if (soma < C) {
        sinal = '<';
        frase = 'A Soma de A + B é Menor do que C';
      } else {
        sinal = '=';
        frase = 'A Soma de A + B é Igual a C';
      }

      console.log('\n--- RESULTADO ---');
      console.log(`${A} + ${B} = ${soma} ${sinal} ${C}`);
      console.log(frase + '\n');

      rl.close();
    });
  });
});
