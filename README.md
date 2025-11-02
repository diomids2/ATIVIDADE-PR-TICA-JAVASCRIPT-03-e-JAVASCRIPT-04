---
config:
  layout: dagre
---
flowchart TD
    A(["Inicio"]) --> B["Entrada: Nome do doador"]
    B --> C["Entrada: Idade - inteiro"]
    C --> D["Entrada: Primeira doacao? - true/false"]
    D --> E{"Idade menor que 18 ou maior que 69?"}
    E -- Sim --> NA["Nao apto para doar"]
    E -- Nao --> F{"Idade entre 60 e 69?"}
    F -- Sim --> G{"E a primeira doacao?"}
    G -- Sim --> NA
    G -- Nao --> AP["Apto para doar"]
    F -- Nao --> AP
    NA --> O@{ label: "Exibir: 'nome nao esta apto para doar sangue!'" }
    AP --> P@{ label: "Exibir: 'nome esta apto para doar sangue!'" }
    O --> Z(["Fim"])
    P --> Z
    O@{ shape: rect}
    P@{ shape: rect}
