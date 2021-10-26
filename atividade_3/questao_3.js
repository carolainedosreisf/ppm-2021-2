var cont = 0;

class Pessoa {

    static contador = 0
    
    constructor(nome = '', idade = 0, peso =0, altura=0) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        Pessoa.contador++
    }
    
    getNome() {
        return this.nome;
    }

    getIdade() {
        return this.idade;
    }

    getPeso() {
        return this.peso;
    }

    getaltura() {
        return this.altura;
    }

    set setNome(nome){
        this.nome = nome;
    }

    set setIdade(idade){
        this.idade = idade;
    }

    set setPeso(peso){
        this.peso = peso;
    }

    set setAltura(altura){
        this.altura = altura;
    }

    getInformacoes() {
        return `Nome: ${this.nome} \nIdade: ${this.idade}\nPeso: ${this.peso}\nAltura: ${this.altura}`
    }

    static logcontador() {
        console.log(`Pessoas instanciadas: ${this.contador}`)
        return Pessoa.contador
    }
}

let p1 = new Pessoa('João',25,75.4,1.7);
let p2 = new Pessoa('Maria',22,60.6,1.67);
let p3 = new Pessoa('Joaquim',18,86.9,1.9);
let p4 = new Pessoa('Julia',26,67.2,1.59);

// console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(p4);

// console.log(p1.getInformacoes());
// console.log(p2.getInformacoes());
// console.log(p3.getInformacoes());
// console.log(p4.getInformacoes());

Pessoa.logcontador();
