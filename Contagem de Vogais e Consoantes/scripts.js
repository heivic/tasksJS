function contador() {
    var input = document.getElementById('contador').value;
    var span = document.querySelectorAll('span')[0];

    var consoante = 0;
    var vogal = 0;

    var spaces = input.replace(/[.,@\/#!$%\^&\*;:{}=\-_`~()]/g,"") /*O g após a expressão regular indica que a substituição deve ser global*/
    var string = spaces.toLowerCase();


    if(input === ""){
        span.innerText = 'Opção inválida.'
    } 

    for (let i = 0; i < string.length; i++){
        if(/[aeiou-äáàâãéèêíïóôõöú]/.test(string[i])){
            vogal++;
            span.innerText = "A seguinte frase tem "+ vogal + " vogal e "+ consoante + " e consoantes."

        } else if(/[a-z-çñ]/.test(string[i])){
            consoante++;
            span.innerText = "A seguinte frase tem "+ vogal + " vogal e "+ consoante + " e consoantes."
        } else {
            span.innerText = 'Opção inválida, por favor digite algo, e retire os caracteres especiais.'
        }
    }
}
