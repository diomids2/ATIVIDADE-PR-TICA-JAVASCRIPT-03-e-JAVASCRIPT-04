// Objetivo: calcular SALÁRIO LÍQUIDO
// Fórmula: Líquido = Salário Bruto + Adicional Noturno + (Horas Extras * 5) - Descontos

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('=== CÁLCULO DO SALÁRIO LÍQUIDO ===');
console.log('(pode usar vírgula ou ponto nas casas decimais)\n');

// Função simples pra transformar o que foi digitado em número.
// Se não der certo, vira 0 (pra não quebrar).
function num(valor) {
  const v = parseFloat(String(valor).trim().replace(',', '.'));
  return isNaN(v) ? 0 : v;
}

// Só pra deixar o resultado bonitinho em reais.
function real(v) {
  return 'R$ ' + v.toFixed(2).replace('.', ',');
}

// Fiz no estilo "pergunta-resposta" mesmo, em sequência.
rl.question('Salário Bruto: ', (brutoTxt) => {
  rl.question('Adicional Noturno: ', (adiTxt) => {
    rl.question('Horas Extras: ', (horasTxt) => {
      rl.question('Descontos: ', (descTxt) => {
        const bruto  = num(brutoTxt);
        const adi    = num(adiTxt);
        const horas  = num(horasTxt);
        const desc   = num(descTxt);

        // Cálculo direto
        const liquido = bruto + adi + (horas * 5) - desc;

        console.log('\n--- RESULTADO ---');
        console.log('Salário Bruto:     ', real(bruto));
        console.log('Adicional Noturno: ', real(adi));
        console.log('Horas Extras * 5:  ', real(horas * 5));
        console.log('Descontos:         ', real(desc));
        console.log('---------------------------');
        console.log('Salário Líquido:   ', real(liquido));
        console.log('');

        rl.close();
      });
    });
  });
});