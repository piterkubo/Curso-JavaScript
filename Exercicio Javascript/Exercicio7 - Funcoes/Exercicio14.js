

function calcularMedia(media){
    let soma = 0;

    for(let i = 0; i < media.length; i++){

        soma = soma + media[i];       
    }

    let mediaFinal = soma / media.length;
    console.log(mediaFinal);
}


let media = calcularMedia([10,9,10]);