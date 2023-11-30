/* Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 a 100.
Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior númerp sorteado.

Dados de entrada: 5, 50, 10, 98,23 

Saída: 98*/

const {gets, print} = require('./funcoes_auxiliares1')

const numerosSorteados = []
let maiorValor = 0

for (let i = 0  ; i < 5; i++) {
    const numeroSorteado = gets()
    numerosSorteados.push(numeroSorteado)
    const numeroDaVez = numerosSorteados[i]
    if (numeroDaVez > maiorValor) {
        maiorValor = numeroDaVez
    }
}

print(maiorValor)