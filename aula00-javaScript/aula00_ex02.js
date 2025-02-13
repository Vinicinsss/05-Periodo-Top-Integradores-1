//exemplo 2
//função simples

function saudacao(nome){
    return "Olá," + nome +"!";
}
console.log(saudacao("12"));

//função anonima
const soma = function(a,b){
    return a + b;
}

console.log(soma("vinicius " , "Eu"));

//arrow function (Função de seta)
const multiplicacao = (x,y) => x * y;
console.log(multiplicacao(2,2))

//objeto em javascript
const pessoa = {
    nomeUsuario: "Vinicius Santos",
    idade: 19,
    email: "viniciusss@unipam.edu.br",
    usuario: "Aluno",
    saudar: function(){
        return "Oi, meu nome é " +this.nomeUsuario + "e eu sou um " + this.usuario + "."
    }
}

console.log(pessoa.nomeUsuario);
console.log(pessoa.saudar());

