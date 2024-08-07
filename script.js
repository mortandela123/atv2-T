const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "neymar e um bom jogador?",
        alternativas: [
            {
                texto: "nao ele so cai!",
                afirmacao: "ele so pede falta"
            },
            {
                texto: "sim dribla demais!" ,
                afirmacao: "ele e liso" 
            }

        ]
    },
    {
        enunciado: "cristiano e melhor que o messi?",
        alternativas: [
            {
                texto: "nunca.",
                afirmacao: "messi e mill vezes melhor"
            },
            {
                texto: "cristiano e sim.",
                afirmacao: "ele tem 7 bola de ouro"
            }
        ]
    },
    {
        pergunta: "e se eu for pai novo?",
        alternativas: [
            {
                texto: "meu pai manda me manda embora.",
                afirmacao: "eu começo morar na rua"
            },
            {
                texto: "meu pai me ajuda a cuidar da criança.",
                afirmacao: "e vivemos felizes para sempre"
            }

        ]
    },
    {
        enunciado: "e se eu for corno?",
        alternativas: [
            {
                texto: "eu mato minha mulher e o cara.",
                afirmacao: "eu vou preso e morro na cadeia"
            },
            {
                texto: "eu nao ligo.",
                afirmacao: "eu sigo minha vida tranquilo"
            }


        ]
    },
    {
        enunciado: "eu decidir virar jogagador de futebol?",
        alternativas: [
            {
                texto: "eu consigo.",
                afirmacao: "e consigo ajudar minha familia e tirar eles da pobreza"
            },
            {
                texto:"eu nao consigo.",
                afirmacao: "e minha familia continua pobre"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();