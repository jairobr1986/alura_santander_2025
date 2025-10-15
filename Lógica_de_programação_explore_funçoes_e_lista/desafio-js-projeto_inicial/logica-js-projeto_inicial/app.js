// 1. Criar uma função que exibe "Olá, mundo!" no console.

function olaMundo() {
    console.log("Ola Mundo!");
}
olaMundo();

// 2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function saudacao(nome) {
    console.log(`Olá ${nome}`);
}
saudacao("Jairo");

// 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function dobro(numero) {
    return numero * 2;
}
console.log(dobro(21));

// 4. Criar uma função que recebe três números como parâmetros e retorna a média deles.

function media(a,b,c) {
    return (a+b+c) / 3;
    
}
console.log(media(5,40,15));

// 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function maiorNumero(a,b) {
    return  a > b ? a : b;
}
console.log(maiorNumero(14,56));

// 6. Criar uma função que recebe um número como parâmetro e retorna o resultado da
// multiplicação desse número por ele mesmo

function quadrado(a) {
    return a * a;
    
}
console.log(quadrado(7));