function gerar() {
    var num = document.getElementById('txt1')
    var res = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('[ERRO] Por favor, digite um número!')
    } else {
        var i = Number(num.value)
        res.innerHTML = ''
        res.setAttribute('size', '10')
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${i} x ${c} = ${i * c}`
            res.appendChild(item) 
        }
    }     
}