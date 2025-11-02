// lanchonete.js
// Lê código e quantidade. Mostra produto e valor total.
// Conteúdos: Entrada/Saída, Operadores, Laço condicional SWITCH.

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// formatador de moeda BRL
const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

// helper pra converter pra inteiro (aceita vírgula e ponto)
function inteiro(txt) {
  const n = parseInt(String(txt).trim().replace(',', '.'), 10);
  return Number.isNaN(n) ? NaN : n;
}

console.log('=== CARDÁPIO ===');
console.log('1) Cachorro Quente  - R$ 10.00');
console.log('2) X-Salada         - R$ 15.00');
console.log('3) X-Bacon          - R$ 18.00');
console.log('4) Bauru            - R$ 12.00');
console.log('5) Refrigerante     - R$  8.00');
console.log('6) Suco de laranja  - R$ 13.00\n');

rl.question('Código do Produto (1 a 6): ', (codTxt) => {
  rl.question('Quantidade: ', (qtdTxt) => {
    const codigo = inteiro(codTxt);
    const quantidade = inteiro(qtdTxt);

    if (Number.isNaN(codigo) || Number.isNaN(quantidade)) {
      console.log('\n Digite números inteiros válidos para código e quantidade.');
      rl.close();
      return;
    }
    if (quantidade <= 0) {
      console.log('\n Quantidade deve ser maior que zero.');
      rl.close();
      return;
    }

    // define produto e preço com switch
    let produto = null;
    let precoUnit = 0;

    switch (codigo) {
      case 1:
        produto = 'Cachorro Quente';
        precoUnit = 10.00;
        break;
      case 2:
        produto = 'X-Salada';
        precoUnit = 15.00;
        break;
      case 3:
        produto = 'X-Bacon';
        precoUnit = 18.00;
        break;
      case 4:
        produto = 'Bauru';
        precoUnit = 12.00;
        break;
      case 5:
        produto = 'Refrigerante';
        precoUnit = 8.00;
        break;
      case 6:
        produto = 'Suco de laranja';
        precoUnit = 13.00;
        break;
      default:
        console.log('\n Código inválido. Use um número entre 1 e 6.');
        rl.close();
        return;
    }

    const total = quantidade * precoUnit;

    console.log('\n--- RESULTADO ---');
    console.log(`Produto: ${produto}`);
    console.log(`Valor total: ${brl.format(total)}\n`);

    rl.close();
  });
});