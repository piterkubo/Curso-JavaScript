// numero primos

let numero = 16;
let resp = 0;

for(let i = 1; i <= numero; i++)
{
   
    if(numero / numero == 1 && numero % i == 0){
        console.log(`${numero} divisivel por ${i} `);
        
        resp ++;
    }
       

}

if (resp > 2){
    console.log("Não é primo");
}

else{
    console.log("É numero primo");
}
