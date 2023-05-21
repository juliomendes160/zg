import './jquery-v3.6.4-development.js';

$(document).ready(async function(){
    $(document).on('click', 'button', Submit);
})

function Submit(event){
    event.preventDefault();
    const method = 'POST';
    let nome = $('[name="nome"]').val();
    let email = $('[name="email"]').val();
    let cpf = $('[name="cpf"]').val();
    const url = 'https://cosmic-backbone-386318.rj.r.appspot.com/hashCodeServer?nome='+nome+'&email='+email+'&cpf='+cpf;
    $.ajax({
        method: method,
        url: url,
        success:function(result){
            console.log(result);
        }
    })

    // {
    //     "hashCode":"195da88e0d813eca4f81e501b2ee1bc8e1d4239f",
    //     "status":200,
    //     "mensagem":"Hash code já existente, referente ao cpf: 098.551.404-35 ou ao e-mail: juliomendes160@hotmail.com",
    //     "pergunta":"P5 - Escreva um algoritmo (sequência de passos) que receba as medidas de um triangulo e identifique se é equilátero, isósceles ou escaleno."
    // }
}

