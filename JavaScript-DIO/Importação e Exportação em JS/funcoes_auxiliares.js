class Pessoa02 {
    constructor(nome, peso, altura) {
        this.nome = nome
        this.peso = peso
        this.altura = altura    
    }

    calcularIMC () {
        return this.peso / (this.altura * this.altura)
    }

    classificarIMC () {
        var imc = this.calcularIMC()
        if (imc < 18.5) {
            return "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            return "Peso normal";
        } else if (imc >= 25 && imc < 29.9) {
            return "Sobrepeso";
        } else if (imc >= 30 && imc < 34.9) {
            return "Obesidade Grau I";
        } else if (imc >= 35 && imc < 39.9) {
            return "Obesidade Grau II";
        } else {
            return "Obesidade Grau III";
        }
    }
    
}

const jose = new Pessoa02('José', 99, 1.87)

module.exports = {jose}