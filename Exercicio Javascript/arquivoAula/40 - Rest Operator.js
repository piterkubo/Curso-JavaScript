// Uma forma de uma função receber indefinidos parametros

// operador rest vai virar um array

// parametro é definido por: ...nome



let num = 1;
let num2 = 5;
let num3 = 3;
let num4 = 10;

function ImprimirNumeros(...args){        // args são os argumentos condesando varios elemento
    for(let i = 0; i <args.length; i++){
        console.log(args[i]);
    }
}

ImprimirNumeros(num,num2,num3);
console.log("pause");

ImprimirNumeros(num,num4);
console.log("pause");

ImprimirNumeros(1,3,4,54,10,5,100,14,20);

