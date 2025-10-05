// 3. Crie um sistema de pontuação para um jogo. Se a
// pontuação for maior ou igual a 100, mostre "Parabéns, você
// venceu!". Caso contrário, mostre "Tente novamente para
// ganhar.".

let score1 = prompt("pontos da partida 1")
let score2 = prompt("pontos da partida 2")
let score3 = prompt("pontos da partida 3")

let totalScore = Number(score1) + Number(score2) + Number(score3)

if (totalScore >= 100) {
    alert(`${totalScore} pontos. Parabéns, você venceu!`)
} else {
    alert(`${totalScore}, Tente Novamente`)
}







