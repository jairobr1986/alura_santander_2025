// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

let tituloH1 = document.querySelector('h1');
tituloH1.innerHTML = 'Hora do Desafio';

// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

function verificarClique() {
    console.log("O botão foi clicado.");
}

// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

function exibeAlerta() {
    alert("Eu amo JS");
}

// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

function nomeCidade() {
    let cidade = prompt("Informe o nome de um cidade do Brasil: ");
    alert(`Estive em ${cidade} e lembrei de você.`);
}

// Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

function somarNumeros() {
    let numero1 = parseInt(prompt("Digite um número para Somar a outro: "));
    let numero2 = parseInt(prompt("Digite o outro número para Somar ao primeiro: "));
    let resultadoSoma = numero1 + numero2;
    alert(`A soma entre ${numero1} + ${numero2} = ${resultadoSoma} `);
}