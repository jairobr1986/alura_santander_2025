let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //para navegador google chrome
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}); 
    //  ---para navegador windows
//     if ('speechSynthesis' in window) {
//         let utterance = new SpeechSynthesisUtterance(texto);
//         utterance.lang = 'pt-BR'; 
//         utterance.rate = 1.2; 
//         window.speechSynthesis.speak(utterance); 
//     } else {
//         console.log("Web Speech API não suportada neste navegador.");
//     }
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!!!!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Acertou com ${tentativas} ${palavraTentativas}!!! ${chute} é O número SECRETO. `;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')

    } else {
        if (chute < numeroSecreto) {
            exibirTextoNaTela('p', chute + ' é menor que o número SECRETO.');
        } else {
            exibirTextoNaTela('p', chute + ' é MAIOR que o número SECRETO.');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLilsta = listaDeNumerosSorteados.length;
    
    if ( quantidadeDeElementosNaLilsta == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();

}