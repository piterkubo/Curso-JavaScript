// Conjunto de caracteres 


/*

Podemos definir um conjunto de caracteres para encontrar por regex;

Basta por enter[];

Com um traço podemos definir um intervalo tambem,veja

Não é muito legal usar isso, pois o regex vai buscar e os numero e até combinar os proprio numero.

*/


console.log(/[123]/.test("Existe 123 aqui?"));

console.log(/[0-9]/.test("O numero 69 esta presente aqui?"))