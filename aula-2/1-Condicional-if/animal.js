// animal.js
// Lê 3 palavras e identifica o animal conforme o diagrama (esquerda -> direita)
// Conteúdos: Entrada e Saída, Operadores, IF

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

console.log('=== IDENTIFICAR ANIMAL (3 características) ===\n');
console.log('1) vertebrado | invertebrado');
console.log('2) ave | mamífero | inseto | anelídeo');
console.log('3) carnívoro | onívoro | herbívoro | hematófago\n');

// helper: deixa minúsculo e remove acentos pra facilitar a comparação
function norm(s) {
  return String(s)
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, ''); // remove acentos
}

rl.question('Primeira palavra (vertebrado/invertebrado): ', p1 => {
  rl.question('Segunda palavra (ave/mamífero/inseto/anelídeo): ', p2 => {
    rl.question('Terceira palavra (carnívoro/onívoro/herbívoro/hematófago): ', p3 => {
      const a = norm(p1);
      const b = norm(p2);
      const c = norm(p3);

      let animal = null;

      // Decisão com IF/ELSE (do jeito do diagrama)
      if (a === 'vertebrado') {
        if (b === 'ave') {
          if (c === 'carnivoro')       animal = 'Águia';
          else if (c === 'onivoro')    animal = 'Pomba';
        } else if (b === 'mamifero') {
          if (c === 'onivoro')         animal = 'Homem';
          else if (c === 'herbivoro')  animal = 'Vaca';
        }
      } else if (a === 'invertebrado') {
        if (b === 'inseto') {
          if (c === 'hematofago')      animal = 'Pulga';
          else if (c === 'herbivoro')  animal = 'Lagarta';
        } else if (b === 'anelideo') {
          if (c === 'hematofago')      animal = 'Sanguessuga';
          else if (c === 'onivoro')    animal = 'Minhoca';
        }
      }

      console.log('\n--- RESULTADO ---');
      if (animal) {
        console.log(`Animal escolhido: ${animal}\n`);
      } else {
        console.log('Combinação não encontrada. Verifique as palavras e a ordem (esquerda → direita).\n');
      }

      rl.close();
    });
  });
});