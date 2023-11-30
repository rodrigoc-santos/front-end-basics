// Instanciando objetos a partir de classes com função construtora
class Carro {
    constructor(marca, cor, consumoKmPorLitro) {
        this.marca = marca
        this.cor = cor
        this.consumokmL = consumoKmPorLitro
    }

    valorGasto(KmRodados, precoCombustivel) {
        console.log((KmRodados / this.consumokmL) * precoCombustivel)   
    }
}

const carro01 = new Carro('Camaro', 'Amarelo', 15)

console.log(carro01.valorGasto(500, 5.75))
console.log(`O ${carro01.marca} é ${carro01.cor}`)

// Utilizando objetos instanciados dentro de outras funções
class Pessoa {
    constructor (name, age) {
        this.nome = name
        this.idade = age
        this.anoDeNascimento = 2023 - this.idade
    }

    descrever () {
        console.log(`Meu nome é ${this.nome} e a minha idade é ${this.idade} porque nasci em ${this.anoDeNascimento}`)
    }
}

const p1 = new Pessoa('Rodrigo', 27)
const p2 = new Pessoa('Karina', 30)


function compararIdade(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}`)
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}

compararIdade(p1, p2)


