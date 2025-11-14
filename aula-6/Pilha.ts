// pilha.ts
// Menu: 0 - sair | 1 - adicionar | 2 - listar | 3 - retirar

import readlineSync from "readline-sync";

/**
 * Classe Stack (Pilha).
 * Estrutura LIFO (Last In, First Out): o último a entrar é o primeiro a sair.
 */
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  toArray(): T[] {
    // Retorna uma cópia para exibição
    return [...this.items];
  }
}

// ---------- Programa principal ----------
const pilha: Stack<string> = new Stack<string>();

function mostrarMenu(): void {
  console.log("\nMenu:");
  console.log("1 - Adicionar um novo livro na pilha");
  console.log("2 - Listar todos os livros da Pilha");
  console.log("3 - Retirar um livro da pilha");
  console.log("0 - Finalizar programa");
}

function mostrarPilhaAtual(): void {
  console.log("\nPilha: \n");
  if (pilha.isEmpty()) {
    console.log("(vazia)");
    return;
  }

  // Exibir do fundo para o topo (ordem natural de empilhamento)
  for (const livro of pilha.toArray()) {
    console.log(livro);
  }
}

function adicionarLivro(): void {
  const nome = readlineSync.question("\nDigite o nome: ").trim();
  if (nome.length === 0) {
    console.log("Nome inválido! Tente novamente.");
    return;
  }
  pilha.push(nome);
  mostrarPilhaAtual();
  console.log("\nLivro adicionado!");
}

function listarLivros(): void {
  console.log("\nLista de Livros na Pilha:\n");
  if (pilha.isEmpty()) {
    console.log("(vazia)");
    return;
  }
  for (const livro of pilha.toArray()) {
    console.log(livro);
  }
}

function retirarLivro(): void {
  if (pilha.isEmpty()) {
    console.log("\nA Pilha está vazia!");
    return;
  }
  // Se quiser mostrar qual foi retirado, descomente:
  // const retirado = pilha.pop();
  pilha.pop();

  mostrarPilhaAtual();
  console.log("\nUm Livro foi retirado da pilha!");
}

// Loop principal
while (true) {
  mostrarMenu();
  const entrada = readlineSync.question("\nDigite uma opcao: ").trim();
  const opcao = Number(entrada);

  if (!Number.isInteger(opcao)) {
    console.log("Opçao invalida! Digite 0, 1, 2 ou 3.");
    continue;
  }

  switch (opcao) {
    case 1:
      adicionarLivro();
      break;
    case 2:
      listarLivros();
      break;
    case 3:
      retirarLivro();
      break;
    case 0:
      console.log("\nPrograma Finalizado!");
      process.exit(0);
    default:
      console.log("Opçao invalida! Digite 0, 1, 2 ou 3.");
  }
}
