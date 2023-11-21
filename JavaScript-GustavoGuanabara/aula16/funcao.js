function parimpar(n) {
    if (n%2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

let res = parimpar(6)

console.log(res)

function soma (n1=0, n2=0) {  // variáveis opcionais pré-definidas
    return n1 + n2
}

console.log(soma(1))

// jogando uma função dentro de uma variável

let x = function(y) {
    return y*2
}

console.log(x(25))

// RECRUSIVIDADE
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1) // realiza uma chamada da própria função dentro dela mesmo
    }
}

console.log(fatorial(5))