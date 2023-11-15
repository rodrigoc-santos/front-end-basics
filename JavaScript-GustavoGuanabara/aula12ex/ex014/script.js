function carregar () {
    var data = new Date()
    var hora = data.getHours()
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#EFE0D9'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#F1A738'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#13417A'
    }
}
