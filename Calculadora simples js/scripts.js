function limpar(){
        document.getElementById("number-one").value = '';
        document.getElementById("number-two").value = '';
        document.querySelectorAll('span')[0].innerText = '';

        var inputs = document.querySelectorAll('input[type="radio"]');
        for (var i = 0, l = inputs.length; i < l; i++){
                inputs[i].checked = false;
        }
        
}


function calculator(){
        let numberOne = parseFloat(document.getElementById("number-one").value);
        let numberTwo = parseFloat(document.getElementById("number-two").value);
        let result = 0;
        let span = document.querySelectorAll('span')[0];


        if (isNaN(numberOne) || isNaN(numberTwo)) {
                span.innerText = "Por favor, preencha todos os campos.";
                return; 
        }
        

        if(document.getElementsByName("option")[0].checked){
                result = numberOne + numberTwo;
                span.innerText = result;
        } 
        
        else if(document.getElementsByName("option")[1].checked){
                result = numberOne - numberTwo;
                span.innerText = result;
        } else if(document.getElementsByName("option")[2].checked){
                result = numberOne * numberTwo;
                span.innerText = result;
        } else if(document.getElementsByName("option")[3].checked){
                result = numberOne / numberTwo;
                span.innerText = result;
        } else{
                span.innerText = "inválido";
        }

}
