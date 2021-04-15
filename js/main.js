var nome = "José Carlos";
var idade = "27";

var n1 = 10;
var n2 = 5;
var frase = "Japão é o melhor time do mundo";
//alert("Bem Vindo " +  nome + " Tem " + idade + " Anos");
//alert(idade + idade2);

console.log(frase);
console.log(frase.replace("Japão", "Brasil")); //Função replace substitui uma palavra dentro da variavel string

console.log(frase.toLowerCase()); // Transforma tudo em minúscula
console.log(frase.toUpperCase()); // Transforma tudo em maiúscula
 
//Operações matemáticas básicas
console.log(n1 + n2);  //Adição
console.log(n1 - n2);  //Subtração
console.log(n1 * n2);  //Multiplicação
console.log(n1 / n2);  //Divisão


//Manipulação de Arrays
var lista = ["Maça", "Péra", "Laranja"];        //Define um Array
lista.push("Uva");                              // Acrecenta um intem na ultima posição da lista    
lista.pop();                                    // Retira o ultimo item da lista
console.log(lista);
console.log(lista[0]);                          //Acessa o item na posição 0 da lista
console.log(lista[1]);                          //Acessa o item na posição 1 da lista
console.log(lista[2]);                          //Acessa o item na posição 2 da lista


console.log(lista.length);                      //Retorna a quantidade de elementos dentro da lista
console.log(lista.reverse());                   //Coloca os elementos na ordem decrecente
console.log(lista.toString()[0]);               //Transforma o contéudo do array em string
console.log(lista.join(" - "));                 //Transforma em string e formata o sepradador dos itens


var fruta = {                                   //Um dicionário
    nome:"Maça", 
    cor:"Vermelha",
}

console.log(fruta)                              //Imprime todo o dicionário
console.log(fruta.nome);                        //Retorna apenas o valor do nome da fruta

var frutas = [{                                 //Um array de dicionários
    nome:"Maça",
    cor:"Vermelha"
},
{
    nome:"Melão",
    cor:"Amarelo"
},
{
    nome:"Uva",
    cor:"Roxa"
}]

console.log(frutas[0].nome);                   //Retorna o item da 0 da lista frutas e seu atributo nome
console.log(frutas[0].cor);                    //Retorna o item da 0 da lista frutas e seu atributo cor
console.log(frutas[1].nome);                   //Retorna o item da 1 da lista frutas e seu atributo nome
console.log(frutas[1].cor);                    //Retorna o item da 1 da lista frutas e seu atributo cor



function soma(x, y){                            //Cria uma função  que pode ser chamada em seguida
    return x + y;
}

console.log(soma(1,2));

function validarIdade(idade){
    var validar;
    if (idade>=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

console.log(validarIdade(idade));

//console.log(validar);                           //Neste caso a variavel validar funcina apenas do escopo da função definido por {}

function botao(){                               //Função javascript
    alert("Obrigado por clicar");
}

function obrigado(){                            // funcção que seleciona um elemento pelo id e injeta um texto dentro da tag HTML
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
}


function redirecionar(){                        //função que redireciona para uma página espessifica
    window.open("www.youtube.com");             // para abrir em nova aba
    //window.location.href = "www.youtube.com.br";    //para abrir na mesma aba
}

function trocar(){                              //função que troca um texto de uma tag
    document.getElementById("mouse").innerHTML = "Obrigado por passar o mouse";
}


function voltar(){                              //função que troca texto de uma tag
    document.getElementById("mouse").innerHTML = "Passe o mouose aqui";

}

function foo(elemento){                         //Função que troca texto sem utilizar o getElementById
    elemento.innerHTML = "Troca realizada com sucesso";
}

function boo(elemento){
    elemento.innerHTML = "Passe o mouse para trocar";
}

function load(){
    window.open("www.youtube.com.br")
}

function funChange(elemento){
    console.log(elemento.value);
}