// doacaoSangue.js
// Regras:
// - 18 a 69 anos: pode doar
// - 60 a 69 anos: só pode se NÃO for a primeira doação

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

console.log('=== VERIFICAR APTIDÃO PARA DOAÇÃO DE SANGUE ===\n');

function inteiro(txt) {
  const n = parseInt(String(txt).trim().replace(',', '.'), 10);
  return Number.isNaN(n) ? 0 : n;
}

// Aceita: true/false, sim/não, s/n, 1/0, yes/no
function parseBool(str) {
  const t = String(str).trim().toLowerCase();
  if (['true','sim','s','yes','1'].includes(t)) return true;
  if (['false','nao','não','n','no','0'].includes(t)) return false;
  return null; // não entendi
}

function perguntarBool(pergunta, cb) {
  rl.question(pergunta, (resp) => {
    const b = parseBool(resp);
    if (b === null) {
      console.log("Digite 'true' ou 'false' (ou 'sim'/'não').");
      return perguntarBool(pergunta, cb);
    }
    cb(b);
  });
}

rl.question('Digite o Nome do doador: ', (nome) => {
  rl.question('Digite a Idade do doador: ', (idadeTxt) => {
    const idade = inteiro(idadeTxt);

    perguntarBool('Primeira doação de sangue? (true/false): ', (primeiraDoacao) => {
      // LÓGICA COM IF
      let apto = false;

      if (idade < 18 || idade > 69) {
        apto = false;
      } else if (idade >= 60 && idade <= 69) {
        // Entre 60 e 69, só pode se NÃO for a primeira doação
        apto = !primeiraDoacao;
      } else {
        // 18 a 59: pode doar, independentemente de ser a primeira
        apto = true;
      }

      console.log('\n--- RESULTADO ---');
      if (apto) {
        console.log(`${nome} está apto(a) para doar sangue!`);
      } else {
        console.log(`${nome} não está apto(a) para doar sangue!`);
      }
      console.log('');

      rl.close();
    });
  });
});