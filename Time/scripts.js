function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var p = document.querySelector('p')

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        p.innerText = 'Manhã'
        img.src = "img/img 1.jpg"
        document.body.style.background = 'bisque'
    } else if(hora >= 12 && hora <= 18) {
        img.src = 'img/img 2.jpg'
        document.body.style.background = 'rgb(161, 123, 75)'
        p.innerText = "Tarde"
    } else{
        img.src = 'img/img 3.jpg'
        document.body.style.background = 'rgb(161, 123, 75)'
        p.innerText = "Noite"
    }
}