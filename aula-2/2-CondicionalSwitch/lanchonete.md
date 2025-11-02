flowchart TB
    A([Início]) --> B[Entrada: Código do Produto (1..6)]
    B --> C[Entrada: Quantidade (> 0)]
    C --> Q{Quantidade > 0?}
    Q -- Não --> QE[Exibir: "Quantidade inválida"\nEncerrar]
    Q -- Sim --> D{Código válido? (1..6)}
    D -- Não --> E[Exibir: "Código inválido"\nEncerrar]
    D -- Sim --> SW{Escolha (switch código)}

    %% Casos do switch
    SW -- "1" --> P1[Produto = Cachorro Quente\nPreço = 10.00]
    SW -- "2" --> P2[Produto = X-Salada\nPreço = 15.00]
    SW -- "3" --> P3[Produto = X-Bacon\nPreço = 18.00]
    SW -- "4" --> P4[Produto = Bauru\nPreço = 12.00]
    SW -- "5" --> P5[Produto = Refrigerante\nPreço = 8.00]
    SW -- "6" --> P6[Produto = Suco de laranja\nPreço = 13.00]

    %% Cálculo comum a todos os casos
    P1 --> T[total = quantidade * preço]
    P2 --> T
    P3 --> T
    P4 --> T
    P5 --> T
    P6 --> T

    T --> O[Exibir: "Produto: <nome>"\n"Valor total: <BRL>"]
    O --> Z([Fim])