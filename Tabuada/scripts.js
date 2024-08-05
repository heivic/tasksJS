function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let msg = document.getElementById('msg')

    if(num.value.length == 0){
        alert('Opção Inválida! Digite um número')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerText = ''
        msg.innerHTML = `Essa é a tabuado do número ${n}: `
        tab.append(msg)
        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    


}