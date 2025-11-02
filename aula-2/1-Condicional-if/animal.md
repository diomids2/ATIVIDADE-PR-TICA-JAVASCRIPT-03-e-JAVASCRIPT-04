flowchart TB
    A([Início]) --> B{1ª palavra}
    B -- "vertebrado" --> C{2ª palavra}
    B -- "invertebrado" --> D{2ª palavra}

    %% Vertebrado
    C -- "ave" --> E{3ª palavra}
    C -- "mamífero" --> F{3ª palavra}
    E -- "carnívoro" --> A1[Águia]
    E -- "onívoro" --> A2[Pomba]
    F -- "onívoro" --> A3[Homem]
    F -- "herbívoro" --> A4[Vaca]

    %% Invertebrado
    D -- "inseto" --> G{3ª palavra}
    D -- "anelídeo" --> H{3ª palavra}
    G -- "hematófago" --> A5[Pulga]
    G -- "herbívoro" --> A6[Lagarta]
    H -- "hematófago" --> A7[Sanguessuga]
    H -- "onívoro" --> A8[Minhoca]

    A1 --> Z([Fim])
    A2 --> Z
    A3 --> Z
    A4 --> Z
    A5 --> Z
    A6 --> Z
    A7 --> Z
    A8 --> Z