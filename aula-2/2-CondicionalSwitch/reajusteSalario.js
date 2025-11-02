// reajusteSalario.js
// Lê: Nome (string), Código do Cargo (1..6), Salário (real)
// Mostra: Nome do Colaborador, Cargo e Novo Salário (com reajuste)
// Conteúdos: Entrada/Saída de dados, Operadores, Laço Condicional Switch

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

// Helpers simples
function inteiro(txt) {
  const n = parseInt(String(txt).trim().replace(',', '.'), 10);
  return Number.isNaN(n) ? NaN : n;
}
function real(txt) {
  const n = parseFloat(String(txt).trim().replace(',', '.'));
  return Number.isNaN(n) ? NaN : n;
}

console.log('=== REAJUSTE SALARIAL POR CARGO ===');
console.log('1) Gerente        (+10%)');
console.log('2) Vendedor       (+7%)');
console.log('3) Supervisor     (+9%)');
console.log('4) Motorista      (+6%)');
console.log('5) Estoquista     (+5%)');
console.log('6) Técnico de TI  (+8%)\n');

rl.question('Nome do colaborador: ', (nome) => {
  rl.question('Código do Cargo (1 a 6): ', (codTxt) => {
    rl.question('Salário: ', (salTxt) => {
      const codigo = inteiro(codTxt);
      const salario = real(salTxt);

      if (Number.isNaN(codigo) || codigo < 1 || codigo > 6) {
        console.log('\n Código de cargo inválido. Use um número entre 1 e 6.');
        rl.close();
        return;
      }
      if (Number.isNaN(salario) || salario < 0) {
        console.log('\n Salário inválido. Digite um número (ex.: 2500,00).');
        rl.close();
        return;
      }

      let cargo = '';
      let percentual = 0;

      // Laço condicional SWITCH para mapear cargo e percentual
      switch (codigo) {
        case 1:
          cargo = 'Gerente';
          percentual = 0.10;
          break;
        case 2:
          cargo = 'Vendedor';
          percentual = 0.07;
          break;
        case 3:
          cargo = 'Supervisor';
          percentual = 0.09;
          break;
        case 4:
          cargo = 'Motorista';
          percentual = 0.06;
          break;
        case 5:
          cargo = 'Estoquista';
          percentual = 0.05;
          break;
        case 6:
          cargo = 'Técnico de TI';
          percentual = 0.08;
          break;
        default:
          // já validamos 1..6, então não deve cair aqui
          console.log('\n Código inválido.');
          rl.close();
          return;
      }

      const novoSalario = salario + (percentual * salario);

      console.log('\n--- RESULTADO ---');
      console.log(`Nome do colaborador: ${nome}`);
      console.log(`Cargo: ${cargo}`);
      console.log(`Salário: ${brl.format(novoSalario)}\n`);

      rl.close();
    });
  });
});