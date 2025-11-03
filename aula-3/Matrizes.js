const leia = require("readline-sync");

const QTDE_PARTICIPANTES = 10; // linhas da matriz
const QTDE_BIMESTRES = 4;      // colunas da matriz

// Vetor que guardará as médias (uma posição por participante/linha)
let vetorMedias = Array(QTDE_PARTICIPANTES);

// Matriz de notas (10 x 4)
let matrizNotas = new Array(QTDE_PARTICIPANTES);

// Cria cada linha da matriz com 4 colunas
for (let indiceLinha = 0; indiceLinha < matrizNotas.length; indiceLinha++) {
  matrizNotas[indiceLinha] = Array(QTDE_BIMESTRES);
}

// Função auxiliar para ler nota real (aceita vírgula ou ponto)
function lerNota(mensagem) {
  while (true) {
    const entrada = leia.question(mensagem);
    const numero = parseFloat(entrada.replace(",", "."));
    if (!Number.isNaN(numero) && numero >= 0 && numero <= 10) {
      return numero;
    }
    console.log("Valor inválido! Digite uma nota entre 0 e 10.");
  }
}

console.log("Digite as notas (0 a 10) para cada participante e bimestre.\n");

// ---- Entrada de dados: preenche a matriz 10 x 4 ----
for (let indiceLinha = 0; indiceLinha < matrizNotas.length; indiceLinha++) {
  for (let indiceColuna = 0; indiceColuna < QTDE_BIMESTRES; indiceColuna++) {
    matrizNotas[indiceLinha][indiceColuna] = lerNota(
      `Digite a nota do elemento [${indiceLinha}][${indiceColuna}]: `
    );
  }
}

console.log("\nMatriz de notas digitadas:");
console.table(matrizNotas);

// ---- Processamento: calcula a média de cada linha (participante) ----
for (let indiceLinha = 0; indiceLinha < matrizNotas.length; indiceLinha++) {
  let soma = 0;

  // Soma as 4 notas do participante (linha)
  for (let indiceColuna = 0; indiceColuna < QTDE_BIMESTRES; indiceColuna++) {
    soma += matrizNotas[indiceLinha][indiceColuna];
  }

  // Média com 1 casa decimal (número, não string)
  const media = soma / QTDE_BIMESTRES;
  vetorMedias[indiceLinha] = Number(media.toFixed(1));
}

// ---- Saída: vetor com as médias ----
console.log("\nVetor de médias (1 casa decimal):");
console.table(vetorMedias);np