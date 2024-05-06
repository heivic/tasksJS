function somar() {
    var input = document.getElementById("input").value;
    var spaces = input.replace(/[\s.,@\/#!$%\^&\+-/*;:{}=\-_`~()]/g,"")

    var resultado = 0;


    
    if(input === ""){
        document.querySelectorAll("span")[0].innerText = "Por favor, digite alguma coisa";
    } 
    
    else if (!/^\d+$/.test(input)) {
        document.querySelectorAll("span")[0].innerText = "Por favor, insira apenas números!";
    }
    
    for(let i = 0; i < spaces.length; i++){
        resultado += parseInt(spaces[i]);
        document.querySelectorAll("span")[0].innerText = "A soma de "+ spaces +" é igual há "+ resultado;
    }

}
