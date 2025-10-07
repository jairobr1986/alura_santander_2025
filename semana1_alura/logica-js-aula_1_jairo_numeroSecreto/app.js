alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute ;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = Number(prompt('Escolha um número entre 1 e 10'));
    if (chute == numeroSecreto) {
        alert(`${numeroSecreto} Isso ai! Você descobriu o número secreto! Em ${tentativas} tentativa(s)`);
    } else {
        if (chute > numeroSecreto) {
            alert(` O seu chute ${chute} é MAIOR que o número secreto, TENTE NOVAMENTE!`);
        } else {
            alert(`O seu chute foi ${chute} ele é MENOR que o número secreto, TENTE NOVAMENTE!`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}



// let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
// let soma = 0;
// let contador = qtdNumeros;

// while(contador > 0){
//     let numero = parseInt(prompt('Digite o numero:'));
//     soma += numero;
//     contador --;
// }

// let media = soma / qtdNumeros;

// alert(media);