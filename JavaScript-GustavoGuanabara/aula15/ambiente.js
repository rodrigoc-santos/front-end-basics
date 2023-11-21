// Aprendendo sobre Arrays

let num = [1,2,3,4,5] // criando vetor, ja atribuindo valores
num.push(0) // adiciona automáticamente um valor a um elemento criando o index 
num.sort() // organiza o vetor em ordem crescente
console.log(num)
console.log(`O vetor possui ${num.length} posições`)

// Percuso em vetores (Exibição dos valores)
for (let c = 0; c < num.length; c++) {
    console.log(num[c])
}

for (let i in num) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

// Buscar valores dentro de um vetor
let info = num.indexOf(4)
console.log(info)