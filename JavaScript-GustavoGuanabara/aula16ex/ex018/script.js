var num = document.getElementById('txtn')
var dis = document.getElementById('display')
var res = document.getElementById('res')
let vetor = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList (n, v) {
    if (v.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    // verificar se o número está entre 1 e 100 ou se está vazio ou se já foi digitado evitando repetições
    if (isNumber(num.value) && !inList(num.value, vetor)) {
        // Adicionar tanto ao select quanto ao array
        let item = document.createElement('option')
        item.textContent += `Valor ${num.value} adicionado.`
        dis.setAttribute('size', '10')
        dis.appendChild(item)
        vetor.push(Number(num.value)) 
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}


function finalizar() {
    if (vetor.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let menor = vetor[0]
        let maior = vetor[0]
        let soma = 0
        let media = 0
        for (let i in vetor) {
            soma += vetor[i]
            if (vetor[i] > maior)
            maior = vetor[i]
            if (vetor[i] < menor)
            menor = vetor[i]
        }
        res.innerHTML = `<p>Temos ao todo ${vetor.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}.`
        res.innerHTML += `<p> A média dos valores digitados é ${soma / vetor.length}`

    }
}    