function fatorial() {
    var numberValue = document.querySelectorAll('input')[0].value; 
    var span = document.querySelectorAll('span')[0];


    if(numberValue === "" ){
        span.innerText = 'Opção inválida, por favor digite um valor.';
    }

    else if(numberValue > 1){
        let result = numberValue;
        for (var i = result - 1; i >= 1; i--) {
            result *= i;
        } span.innerText = "O Fatorial é "+ numberValue +" é "+ result
    }

    else if(numberValue < 0){
        span.innerText = 'O fatorial de '+ numberValue +', NÃO existe fatorial de número negativo';
    }

    else if(numberValue === 0  || 1){
        span.innerText = 'O fatorial de '+ numberValue +' é 1';
    }

    
}

function limpar(){
    var numberValue = document.querySelectorAll('input')[0].value = ''; 
    var span = document.querySelectorAll('span')[0];
    span.innerText = '';
} 