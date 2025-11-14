// Fila de Clientes (Queue)
// Menu: 0 - sair | 1 - adicionar | 2 - listar | 3 - chamar

import readlineSync from "readline-sync";


class Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    // Retira do início (o primeiro a chegar é o primeiro a sair)
    return this.items.shift();
  }

  peek(): T | undefined {
    return this.items[0];
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
const fila: Queue<string> = new Queue<string>();

function mostrarMenu(): void {
  console.log("\nMenu:");
  console.log("1 - Adicionar um novo Cliente na fila");
  console.log("2 - Listar todos os Clientes na fila");
  console.log("3 - Chamar (retirar) uma pessoa da fila");
  console.log("0 - Finalizar programa");
}

function mostrarFilaAtual(): void {
  console.log("\nFila: \n");
  if (fila.isEmpty()) {
    console.log("(vazia)");
    return;
  }
  for (const nome of fila.toArray()) {
    console.log(nome);
  }
}

function adicionarCliente(): void {
  const nome = readlineSync.question("\nDigite o nome: ").trim();
  if (nome.length === 0) {
    console.log("Nome inválido! Tente novamente.");
    return;
  }
  fila.enqueue(nome);
  mostrarFilaAtual();
  console.log("\nCliente Adicionado!");
}

function listarClientes(): void {
  console.log("\nLista de Clientes na Fila: \n");
  if (fila.isEmpty()) {
    console.log("(vazia)");
    return;
  }
  for (const nome of fila.toArray()) {
    console.log(nome);
  }
}

function chamarCliente(): void {
  if (fila.isEmpty()) {
    console.log("\nA Fila está vazia!");
    return;
  }
  // Se quiser mostrar o nome chamado, descomente a linha abaixo:
  // const chamado = fila.dequeue();
  fila.dequeue();

  mostrarFilaAtual();
  console.log("\nO Cliente foi Chamado!");
}

// Loop principal
while (true) {
  mostrarMenu();
  const entrada = readlineSync.question("\nDigite uma opcao: ").trim();
  const opcao = Number(entrada);

  if (!Number.isInteger(opcao)) {
    console.log("Opção inválida! Digite 0, 1, 2 ou 3.");
    continue;
  }

  switch (opcao) {
    case 1:
      adicionarCliente();
      break;
    case 2:
      listarClientes();
      break;
    case 3:
      chamarCliente();
      break;
    case 0:
      console.log("\nPrograma Finalizado!");
      process.exit(0);
    default:
      console.log("Opção inválida! Digite 0, 1, 2 ou 3.");
  }
}