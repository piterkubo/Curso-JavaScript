function SomaPares(numero){

   let numParEncontrato = 0;

   let somarTodosNumero = 0;

   for(let i = 0; i < numero.length; i++){

        if(numero[i] % 2 === 0){

            numParEncontrato = numero[i];
            somarTodosNumero = somarTodosNumero + numParEncontrato;
            
        }

       
   }

   return somarTodosNumero;

}

console.log(SomaPares([2,3,4,9,10,8,15,16]));