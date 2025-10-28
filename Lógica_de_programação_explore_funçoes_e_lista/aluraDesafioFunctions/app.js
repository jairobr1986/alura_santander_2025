// Desafios
// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
// A fórmula é: IMC = peso / (altura x altura)

// function calculoIMC(peso, altura) {

//     let imc = peso / (altura * altura);
//     return imc;
// }

// let resultado = calculoIMC(75, 1.70);
// console.log(resultado);

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.


// function calculoFatorial(numero) {
//      if ( typeof numero !== 'number') {
//         return 'Isso não é um número.';
//     }
//     else if (numero < 0) {
//         return 'Você informou um número negativo.';
//     }
//     else if ( numero === 0 ) {
//         return 1;
//     }

//     let resultado = 1;

//     for (let c = 1; c <= numero; c++) {
//         resultado = resultado * c;        
//     }
//     return resultado;
// }

// console.log(calculoFatorial(7));

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

// function realConvert(real) {
//     let dolar = parseFloat(4.80);
//     let convert = real * dolar;
//     return convert.toFixed(2);
// }
// console.log(realConvert(7.33));


// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
// • Fórmula: Perímetro = 2 * (Altura + Largura)
// • Fórmula: Area = Altura * Largura

// function medidas(a, l) {
//     let area = a * l;
//     let perimetro = 2 * (a + l);
//     return `A área enre ${a} e ${l}, é ${area}\nE o perimetro entre ${a} e ${l}, é ${perimetro}.`;
// }
// alert(medidas(10,5));

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
// • Fórmula: Area = z X raio .
// • Fórmula: Perímetro = 2 X z X raio.

// function perimetroCircular(z) {
//     let area = z * 3.14;
//     let perimentro2 = 2 * z * 3.14;
//     return `A aréa é ${area.toFixed(2)}, \nE o perimetro é ${perimentro2.toFixed(2)}.`;
// }
// alert(perimetroCircular(7));


// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.


console.log(tabuada(5));

function tabuada(tab) {
    let resultado = `A Tabuada do ${tab}:\n`;
    for (let c = 1; c <= 10; c++) {
        resultado += (`${tab} x ${c} = ${c * tab}\n`);
    }
    return resultado;
}

console.log(tabuada(5));
