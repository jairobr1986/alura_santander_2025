// 2. Verifique se um número digitado pelo usuário é positivo ou
// negativo. Mostre um alerta informando.
let numero = prompt("Digite um número: ")
let typeNumero = Number(numero)
if (numero >= 0) {
    alert(`O ${typeNumero} é positvo`)
} else if (typeNumero < 0) {
    alert(`O ${typeNumero} é negativo`)
} else if (isNaN(typeNumero)) {
    alert(`Você digitou -> ${numero} <- Isso não é um número.`)
}
