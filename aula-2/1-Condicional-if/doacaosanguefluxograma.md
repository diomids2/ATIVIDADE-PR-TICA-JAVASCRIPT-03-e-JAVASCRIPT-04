flowchart TD
    A([Início]) --> B[Entrada: Nome do doador]
    B --> C[Entrada: Idade (inteiro)]
    C --> D[Entrada: Primeira doação? (true/false)]
    D --> E{Idade < 18<br/>ou Idade > 69?}
    E -- Sim --> NA[Não apto(a) para doar]
    E -- Não --> F{Idade entre 60 e 69?}
    F -- Sim --> G{É a primeira doação?}
    G -- Sim --> NA
    G -- Não --> AP[Apto(a) para doar]
    F -- Não --> AP
    NA --> O[Exibir: "<nome> não está apto(a) para doar sangue!"]
    AP --> P[Exibir: "<nome> está apto(a) para doar sangue!"]
    O --> Z([Fim])
    P --> Z