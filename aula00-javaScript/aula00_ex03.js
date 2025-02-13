//Exemplo 03: Classes
class Animal{
    construtor(nome, tipo){
        this.nome = nome;
        this.tipo = tipo;
    }

    exibirInformacoes(){
        return `Este é um ${this.tipo} chamado ${this.nome}`;
    }
}

const cachorro = new Animal("Duck", "cachorro");
const gato = new Animal("Miguel", "gato");
const peixe = new Animal("Maquiavel", "Diabo negro");

console.log(cachorro.exibirInformacoes());
console.log(gato.exibirInformacoes());