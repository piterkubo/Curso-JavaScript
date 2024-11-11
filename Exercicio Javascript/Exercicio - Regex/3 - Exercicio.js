/* Crie uma regex que aceite a seguinte expressao "Marca: nomeDaMarca

    Onde nomeDaMarca pode variar para Nike, Adidas, Puma, Asics.


"*/



const marcas = /\Marca: (Nike|Adidas|Puma|Asics)/;

console.log(marcas.test("Marca: Fila"));
console.log(marcas.test("Marca: Nike"));
console.log(marcas.test("Marca: Kappa"));
console.log(marcas.test("Marca: Adidas"));
console.log(marcas.test("Marca: Asics"));
console.log(marcas.test("Marca: Oakley"));