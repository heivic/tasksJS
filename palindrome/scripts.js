function verify(){
    let sentence =  document.getElementById("sentence").value;
    let lower = sentence.toLowerCase();
    let spaces = lower.trim();
    let split = spaces.split("");
    let reverse = split.reverse();
    let join = reverse.join("");
    

    if(sentence === ''){
        document.querySelectorAll('span')[0].innerText = "Opção inválida";
        document.querySelectorAll('span')[1].innerText = "";
    }

    else if(spaces === join){
        document.querySelectorAll('span')[0].innerText = 'A palavra '+ '"' + spaces +'"' + ' é ' + '"' + join + '"' + ' ao contrário.';
        document.querySelectorAll('span')[1].innerText = "Logo é Polidrómo.";
    } 
    
    else if(spaces !== join){
        document.querySelectorAll('span')[0].innerText = 'A palavra '+ '"' + spaces +'"' + ' é ' + '"' + join + '"' + ' ao contrário.';
        document.querySelectorAll('span')[1].innerText = "Logo não é Polidrómo.";
    } 

    else {
        document.querySelectorAll('span')[0].innerText = "Opção inválida";
    }
    //resultSpan.innerText = join;
}