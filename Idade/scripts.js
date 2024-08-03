function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fnao = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fnao.value.length == 0 || fnao.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fnao.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'

            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'img/childmale.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'img/jovemmale.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'img/adultomale.jpg')
            } else {
                img.setAttribute('src', 'img/idosomale.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'img/childfem.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'img/jovemfem.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'img/adultofem.jpg') /////////////////
            } else {
                img.setAttribute('src', 'img/idosafem.jpg') ////////////
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    } 
}