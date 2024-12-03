const dadosTema = {
    titulo: "Meu Desenho Favorito: Rick and Morty ",
    conteudo: [
        {
            subtitulo: "O que é Rick and Morty?",
            texto: `
           Rick and Morty é uma série animada norte-americana criada por Justin Roiland e Dan Harmon, que estreou em 2013. A trama acompanha as aventuras bizarras e muitas vezes caóticas de Rick Sanchez, um cientista brilhante, mas alcoólatra, egoísta e moralmente ambíguo, e seu neto adolescente, Morty Smith, que muitas vezes serve como sua voz de consciência (e ocasionalmente como cobaia).

Rick utiliza sua inteligência extrema e invenções, como a icônica "arma de portais", para viajar por dimensões alternativas e explorar os mistérios do multiverso. Essas viagens frequentemente os colocam em situações hilárias, perigosas e filosoficamente desafiadoras.

O desenho mistura temas de ficção científica, como realidades paralelas, inteligência artificial, clones e viagens no tempo, com momentos de drama familiar e reflexões existenciais profundas. Apesar de suas travessuras, os episódios frequentemente exploram os impactos emocionais e éticos das ações dos personagens.

Além disso, o universo expandido da série é rico, com personagens icônicos como:

Beth Smith: A filha de Rick, que lida com as inseguranças de sua vida e casamento.
Jerry Smith: O genro de Rick, frequentemente visto como incompetente, mas com momentos cômicos.
Summer Smith: A neta mais velha, que muitas vezes se junta às aventuras com sua atitude sarcástica.
`
        },
        {
            subtitulo: "Por que é tão bom?",
            texto: `
            Rick and Morty conquistou fãs ao redor do mundo por várias razões:

Humor Inteligente e Ácido
A série é conhecida por seu humor negro e piadas que desafiam o espectador a pensar além do óbvio. Ela brinca com convenções de ficção científica, subverte clichês e mistura momentos absurdos com comentários sociais profundos.

Exploração Científica e Criatividade
A criatividade nos roteiros é um ponto alto. De conceitos como a existência de infinitas dimensões paralelas (e infinitas versões dos personagens) até tecnologias impossíveis e planetas bizarros, a série traz ideias inovadoras que estimulam a imaginação.

Reflexões Filosóficas e Temas Profundos
Apesar do tom leve e cômico, a série não se esquiva de discutir temas complexos como:

A insignificância da humanidade no universo (niilismo).
O peso das escolhas e suas consequências.
Relações familiares e conflitos emocionais.
Esses elementos são apresentados de forma acessível, mas deixam espaço para que o espectador reflita sobre sua própria existência.

Personagens Multidimensionais
Os personagens de Rick and Morty são complexos e cheios de nuances. Rick, por exemplo, é ao mesmo tempo uma mente brilhante e um ser humano emocionalmente quebrado. Isso torna a série não apenas engraçada, mas também comovente e intrigante.

Versatilidade no Tom e no Estilo
A série transita entre gêneros como comédia, drama e ficção científica sem perder sua identidade. Episódios como Pickle Rick (Rick transformado em um picles para evitar terapia) mostram a habilidade dos roteiristas em equilibrar absurdos cômicos com narrativas emocionais.`
        },
        {
            subtitulo: "Curiosidades Sobre a Série",
            texto: `
            O desenho nasceu como uma paródia de De Volta para o Futuro feita por Justin Roiland.
Rick's catchphrase “Wubba Lubba Dub-Dub” significa “Estou em grande dor” no idioma dos Pássaros Pessoas.
A série já ganhou vários prêmios, incluindo um Emmy de Melhor Série Animada.
Rick and Morty não é apenas um desenho animado, mas uma obra que consegue ser divertida, irreverente e profunda ao mesmo tempo. É essa combinação que a torna tão cativante e diferente de qualquer outra coisa na televisão..`
        }
    ],
    imagens: [
        { src: "images/IMAGEM1.jpg", alt: "imagem 1" },
        { src: "images/IMAGEM2.jpg", alt: "imagem 2" }
    ]
};

// Função para gerar conteúdo dinamicamente com base nos dados
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("header h1").textContent = dadosTema.titulo;
    document.querySelector("header p").textContent = "A melhor obra já criada!!";

    const contentContainer = document.getElementById("content-container");

    // Adicionando conteúdo
    dadosTema.conteudo.forEach(item => {
        let section = document.createElement("section");
        let subtitle = document.createElement("h2");
        subtitle.textContent = item.subtitulo;
        let text = document.createElement("p");
        text.innerHTML = item.texto;

        section.appendChild(subtitle);
        section.appendChild(text);
        contentContainer.appendChild(section);
    });

    // Adicionando imagens
    const imagesContainer = document.createElement("div");
    imagesContainer.classList.add("images");
    dadosTema.imagens.forEach(image => {
        let img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;
        img.classList.add(image.src.includes("1") ? "large-image" : "small-image");
        imagesContainer.appendChild(img);
    });
    contentContainer.appendChild(imagesContainer);
});
