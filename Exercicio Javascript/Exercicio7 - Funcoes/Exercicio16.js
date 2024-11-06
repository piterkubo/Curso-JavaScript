function contVogais(string){
    
    let separaPalavra = string.toUpperCase().split('');
    let vogalA = 0, vogalE = 0, vogalI = 0, vogalO = 0, vogalU = 0;
    
    
    for(let i = 0; i < separaPalavra.length; i++){
        if(separaPalavra[i] === 'A'){
            vogalA++;
        }

        else if(separaPalavra[i] === 'E'){
            vogalE++;
        }

        else if(separaPalavra[i] === 'I'){
           vogalI++;
        }

        else if(separaPalavra[i] === 'O'){
           vogalO++;
        }

        else if(separaPalavra[i] === 'U'){
           vogalU++;
        }

        
    }
   let  somaVogal = vogalA + vogalE + vogalI + vogalO + vogalU;
   return somaVogal;

}


console.log(contVogais("Viviana"));