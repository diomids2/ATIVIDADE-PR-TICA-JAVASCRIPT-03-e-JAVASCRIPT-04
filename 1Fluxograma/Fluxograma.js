//Importando biblioteca
const leia = require('readline-sync')


// Início do algoritmo
// Lê salário e abono pelo terminal e exibe o novo salário
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function perguntar(pergunta) {
  return new Promise(resolve => rl.question(pergunta, resposta => resolve(resposta)));
}

(async () => {
  try {
    // Digite o Salário:
    const salarioStr = await perguntar("Digite o salário: ");
    // Digite o Abono:
    const abonoStr = await perguntar("Digite o abono: ");
    rl.close();

    // Aceita vírgula como separador decimal
    const salario = parseFloat(salarioStr.replace(',', '.'));
    const abono = parseFloat(abonoStr.replace(',', '.'));

    if (Number.isNaN(salario) || Number.isNaN(abono)) {
      console.error("❌ Por favor, digite números válidos para salário e abono.");
      process.exit(1);
    }

    // NovoSalário = Salário + Abono
    const novoSalario = salario + abono;

    // Exibe o NovoSalário formatado em REAL
    const formatBRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    console.log(`✅ O novo salário é: ${formatBRL.format(novoSalario)}`);
  } catch (err) {
    rl.close();
    console.error("Ocorreu um erro:", err);
  }
})();