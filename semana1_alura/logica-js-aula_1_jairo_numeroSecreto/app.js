alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 7000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = Number(prompt(`Escolha um número entre 1 e ${numeroMaximo}`));
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(` O seu chute ${chute} é MAIOR que o número secreto, TENTE NOVAMENTE!`);
        } else {
            alert(`O seu chute foi ${chute}, ele é MENOR que o número secreto, TENTE NOVAMENTE!`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? "Tentativas" : "Tentativa";
alert(`Isso aí você descobriu o  número secreto que era ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);


// if (tentativas > 1 ) {
//     alert(`${numeroSecreto} Isso ai! Você descobriu o número secreto! Em ${tentativas} tentativas`);

// } else {
//     alert(`${numeroSecreto} Isso ai! Você descobriu o número secreto! Em ${tentativas} tentativa`);

// }


