//exemplo 01
//usando var (escopo global/função)

var nome = "Vinicius"; 
console.log(nome);

if(true){
    var nome = "Maria";
    console.log(nome);
}

nome = 15.8;
console.log(nome);

//usando let(escopo de bloco)

let idade = 19;
console.log(idade);

if(true){
    let idade = 20;
    console.log(idade);
}

idade = "vinicius";
console.log(idade);

//usando const(escopo de bloco e valor constante)

const PI = 3.14;
console.log(PI);

if(true){
    const PI = 3.16;
    console.log(PI);
}

PI = "Akiz";
console.log(PI);
