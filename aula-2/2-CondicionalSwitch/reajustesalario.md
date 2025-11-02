flowchart TB
  A([Início]) --> B[Entrada: Nome]
  B --> C[Entrada: Código do Cargo (1..6)]
  C --> D[Entrada: Salário (real)]
  D --> V1{Código válido?}
  V1 -- Não --> E1[Exibir erro e encerrar]
  V1 -- Sim --> SW{switch(código)}

  SW -- 1 --> P1[Cargo=Gerente • % = 10%]
  SW -- 2 --> P2[Cargo=Vendedor • % = 7%]
  SW -- 3 --> P3[Cargo=Supervisor • % = 9%]
  SW -- 4 --> P4[Cargo=Motorista • % = 6%]
  SW -- 5 --> P5[Cargo=Estoquista • % = 5%]
  SW -- 6 --> P6[Cargo=Técnico de TI • % = 8%]

  P1 --> CALC[novo = salário + (percentual * salário)]
  P2 --> CALC
  P3 --> CALC
  P4 --> CALC
  P5 --> CALC
  P6 --> CALC

  CALC --> OUT[Exibir: Nome, Cargo, Salário reajustado]
  OUT --> Z([Fim])