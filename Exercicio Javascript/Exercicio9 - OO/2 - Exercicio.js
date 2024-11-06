// crie uma classe que simule um carrinho de compras ecommerce

// Propriedade Item, quantidade total e valor total.

// crie os metodos para adicionar e remover itens.


class Produto{
    constructor(item, quantidade, valorTotal){
        this.item = item;
        this.quantidade = quantidade;
        this.valorTotal = valorTotal;
    }

   adicionarProduto(itens){
    let contador = 0;

       for(let i in this.item){
            if(this.item[i].id == itens.id){
                this.item[i].quantidade += itens.quantidade;
                contador = 1;
            }   
       }

       if(contador == 0){
        this.item.push(itens)
       }


       this.quantidade += itens.quantidade;
       this.valorTotal += itens.preco * itens.quantidade;
   }


   removerProduto(itens){
    let contador = 0;

       for(let i in this.item){
            if(this.item[i].id == itens.id){
                let obj = this.item[i];
                let index = this.item.findIndex(function(obj){return obj.id == itens.id})

                this.quantidade -= this.item[i].quantidade;
                this.valorTotal -= this.item[i].preco * this.item[i].quantidade;

                this.item.splice(index, 1)

                
            }   
       }    
   }



   

    
}


let carrinho = new Produto([

    {
        id:1,
        nome:"Camisa",
        quantidade:1,
        preco:20
    },
    {
        id:2,
        nome:"Calça",
        quantidade:2,
        preco:50
    }

],3,120);

console.log(carrinho);


carrinho.adicionarProduto({id:1, nome:"Camisa", quantidade:2, preco:20})

console.log(carrinho);

carrinho.adicionarProduto({id:3, nome:"bone", quantidade:2, preco:10})


console.log(carrinho)


carrinho.removerProduto({id:1, nome:"Camisa",quantidade:2, preco:20 });

console.log(carrinho);