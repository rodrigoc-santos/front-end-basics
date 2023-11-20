function contar() {
    var inicio = document.getElementById('nun1')
    var fim = document.getElementById('nun2')
    var passo = document.getElementById('nun3')
    var resp = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resp.innerHTML = 'Impossível contar!'
        alert('[ERRO] Faltam dados!')
    } else {
        resp.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando Passo 1')
            p = 1
        }
        if (i < f){
            for (let c = i; c <= f; c += p) {
                resp.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                resp.innerHTML += ` ${c} \u{1F449}`
            }
        }
        resp.innerHTML += `\u{1F3C1}`
    }     
}