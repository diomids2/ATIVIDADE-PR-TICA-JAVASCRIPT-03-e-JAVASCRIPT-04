
// Objetivo: Ler 4 números e calcular a diferença entre (n1 * n2) e (n3 * n4)

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('=== CALCULAR DIFERENÇA ===');
console.log('Fórmula: (n1 * n2) - (n3 * n4)\n');

// Função simples para converter texto em número (aceita vírgula)
function num(valor) {
  const v = parseFloat(String(valor).trim().replace(',', '.'));
  return isNaN(v) ? 0 : v;
}

rl.question('Número 1: ', (n1txt) => {
  rl.question('Número 2: ', (n2txt) => {
    rl.question('Número 3: ', (n3txt) => {
      rl.question('Número 4: ', (n4txt) => {
        const n1 = num(n1txt);
        const n2 = num(n2txt);
        const n3 = num(n3txt);
        const n4 = num(n4txt);

        const diferenca = (n1 * n2) - (n3 * n4);

        console.log('\n--- RESULTADO ---');
        console.log(`(${n1} * ${n2}) - (${n3} * ${n4}) = ${diferenca.toFixed(1)}`);
        console.log(`Diferença: ${diferenca.toFixed(1)}\n`);

        rl.close();
      });
    });
  });
});
