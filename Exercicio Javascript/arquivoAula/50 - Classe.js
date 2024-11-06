// O prototype do javascript pode ser chamado de classe

// pois na outras linguagens uma class é um molde de um obj

// ou seja, podemos criar diversos obj em cima de um prototype



let cachorro = {
    raca: 'não tem',
    pata: 4,
    late: function(){
        console.log('au au');
    }
}

let pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor alemao";

console.log(pastorAlemao.raca);
console.log(pastorAlemao.pata);
pastorAlemao.late();


console.log(cachorro.raca);