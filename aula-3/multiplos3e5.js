// multiplos3e5-sync.js
// Lê dois inteiros (primeiro < segundo) e mostra os múltiplos de 3 e 5 no intervalo.

const leia = require("readline-sync");

let primeiro, ultimo, n, achou;

// entrada
primeiro = leia.questionInt("Digite o primeiro numero do intervalo: ");
ultimo   = leia.questionInt("Digite o ultimo numero do intervalo: ");

// validacao do intervalo
if (primeiro >= ultimo) {
  console.log("\nIntervalo invalido!");
  process.exit(0); // encerra o programa
}

// processamento/saida
console.log("\nNo Intervalo entre " + primeiro + " e " + ultimo + ":\n");

achou = false;

for (n = primeiro; n <= ultimo; n++) {
  // multiplo de 3 e 5 (divisivel por 15)
  if (n % 3 === 0 && n % 5 === 0) {
    console.log(n + " e multiplo de 3 e 5");
    achou = true;
  }
}

// mensagem opcional caso nao encontre nenhum
if (!achou) {
  console.log("Nenhum numero multiplo de 3 e 5 foi encontrado nesse intervalo.");
}