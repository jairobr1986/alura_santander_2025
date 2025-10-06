alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute 

while (chute != numeroSecreto) {
    chute = Number(prompt('Escolha um número entre 1 e 10'));
    if (chute == numeroSecreto) {
        alert('Isso ai! Você descobriu o número secreto (5)');
    } else {
        if (chute > numeroSecreto) {
            alert(` O seu chute ${chute} é MAIOR que o número secreto, TENTE NOVAMENTE!`)
        } else {
            alert(`O seu chute foi ${chute} ele é MENOR que o número secreto, TENTE NOVAMENTE!`)
        }
    }
}
