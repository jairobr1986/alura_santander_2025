// 4. Crie uma mensagem que informa o usuário sobre o saldo
// da conta, usando uma template string para incluir o valor
// do saldo.

let saldo = 7000;
Number(saldo);
let saque = prompt("Quanto você irá sacar?");
Number(saque);
if (saldo < saque){
    alert("Saque não é possivel, revise o valor da sua conta")
    alert("Valor excede o seu saldo")
} else if ( saldo >= saque) {
    saldo = saldo - saque
alert(`O seu saldo atual é ${saldo}`)
} else if (isNaN(saque)) {
    alert("Digite um valor valido.")
}






