// 1. Pergunte ao usuário qual é o dia da semana. 
let dia = prompt("Qual o dia da Semana").trim().toLowerCase();
// Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!".
if (dia == "sábado" || dia == "sabado" || dia == "domingo" ) {
    alert("Bom fim de semana!");
} else {
// Caso contrário, mostre "Boa semana!".
    alert("Boa semana!");
}
