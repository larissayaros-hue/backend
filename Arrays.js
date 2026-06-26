// ARRAY DE PRODUTOS

let produtos = [

{id:1, nome:"Teclado", preco:120},

{id:2, nome:"Mouse", preco:50},

{id:3, nome:"Monitor", preco:800},

{id:4, nome:"Headset", preco:200},

{id:5, nome:"Notebook", preco:3000}

];


// LISTAR PRODUTOS

function listar(){

console.log("Produtos:");

produtos.forEach(produto => {

console.log(
produto.id,
produto.nome,
"R$"+produto.preco
);

});

}



// INSERTION SORT
// ordenar pelo preço

function ordenar(){

for(let i=1;i<produtos.length;i++){

let atual = produtos[i];

let j=i-1;


while(j>=0 && produtos[j].preco > atual.preco){

produtos[j+1]=produtos[j];

j--;

}


produtos[j+1]=atual;

}


console.log("\nProdutos ordenados:");

listar();

}



// BUSCA BINÁRIA

function buscar(id){

let inicio=0;

let fim=produtos.length-1;


while(inicio<=fim){

let meio=Math.floor((inicio+fim)/2);


if(produtos[meio].id === id){

console.log(
"Encontrado:",
produtos[meio]
);

return;

}


if(produtos[meio].id < id){

inicio=meio+1;

}

else{

fim=meio-1;

}


}


console.log("Produto não encontrado");

}



// EXECUÇÃO

listar();

ordenar();

buscar(3);