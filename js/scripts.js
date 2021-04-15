const mensagens = [];

const perguntasData = [{text: churros},{text: sábado},{text: cerveja},{text: okok}];

function mandaAVer(){
    /*const perguntas = axios.get('#').data;
    perguntas.then(sorteio);
    perguntas.catch(babou);*/

    sorteio(perguntasData);
}

function babou(){
    alert("Deu Ruim!");
}

function sorteio(arrayPerguntas){
    for (let i = 0; i < arrayPerguntas.length; i++) {
        mensagens.push(arrayPerguntas[i].text);
    }

    console.log(mensagens);

    const sorteio = mensagens[Math.floor((Math.random() * mensagens.length))];
    console.log(sorteio);

    const esconder = document.querySelector(".aba-pergunta");
    esconder.classList.add('escondido');
    const mostrar = document.querySelector(".pergunta");
    mostrar.classList.remove('escondido');
    //mostrar.innerHTML = ;
}

function voltar(){
    const esconder = document.querySelector(".aba-pergunta");
    esconder.classList.remove('escondido');
    const mostrar = document.querySelector(".pergunta");
    mostrar.classList.add('escondido');
}