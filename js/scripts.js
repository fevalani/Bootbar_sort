const mensagens = [];

function mandaAVer(){
    const perguntas = axios.get('https://bootbar.maroto.dev/questions');
    perguntas.then(aceito);
    perguntas.catch(erro);
}

function aceito(valor){
    const promessa = valor.data;
    sorteio(promessa);
}

function erro(){
    alert("Deu Ruim!");
}

function sorteio(arrayPerguntas){
    for (let i = 0; i < arrayPerguntas.length; i++) {
        mensagens.push(arrayPerguntas[i].text);
    }

    const palavraSorteada = mensagens[Math.floor((Math.random() * mensagens.length))];
    console.log(mensagens);

    const esconder = document.querySelector(".aba-pergunta");
    esconder.classList.add('escondido');
    const mostrar = document.querySelector(".pergunta");
    mostrar.classList.remove('escondido');
    mostrar.innerHTML = palavraSorteada;
}

function voltar(){
    const esconder = document.querySelector(".aba-pergunta");
    esconder.classList.remove('escondido');
    const mostrar = document.querySelector(".pergunta");
    mostrar.classList.add('escondido');
}