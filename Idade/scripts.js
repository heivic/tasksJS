function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fnao = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fnao.value.length == 0 || fnao.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //Criança
            } else if (idade < 21){
                //Jovem
            } else if (idade < 50){
                //Adulto
            } else {
                //Idoso
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    } 
}