// Desafios
// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

// let contador = 1;
// while (contador <= 10) {
//     console.log(contador)
//     // alert(contador)
//     contador++;
// }


// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

// let contador_regressivo = 15;

// while (contador_regressivo > -1) {
//     console.log(`contando... ${contador_regressivo}`)
//     contador_regressivo--;
// }

// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

// let regressiva = Number(prompt("Digite o numero que sua contagem regressiva irá se iniciar: "));
// let regressiva = parseInt(prompt("Digite o numero que sua contagem regressiva irá se iniciar: "));
// while ( regressiva > 0) {
//     console.log(regressiva);
//     regressiva--;
// }

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let progressiva = Number(prompt("Digite um número para iniciar a progressão: "));
// let progressiva = parseInt(prompt("Digite um número para iniciar a progressão: "));
let inicio_contagem = 0;
while (inicio_contagem <= progressiva) {
    console.log(inicio_contagem);
    inicio_contagem++;
}
