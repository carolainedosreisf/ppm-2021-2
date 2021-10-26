class ContaCorrente {
    constructor(nome, conta, saldo) {
        this.nome = nome || 'Padrao';
        this.conta = conta || 0;
        this.saldo = saldo || 0;
    }

    getNome() {
        return this.nome;
    }

    getConta() {
        return this.conta;
    }

    
    getSaldo() {
        return this.saldo;
    }

    set setNome(nome){
        this.nome = nome;
    }

    set setConta(conta){
        this.conta = conta;
    }

    set setSaldo(saldo){
        this.saldo = saldo;
    }

    sacar(quantidade) {
        quantidade = quantidade < 0?1:quantidade;
        this.saldo =  this.saldo - quantidade;
    }

    depositar(quantidade) {
        quantidade = quantidade < 0?1:quantidade;
        this.saldo = this.saldo + quantidade;
    }

    getInformacoes() {
        return `Nome: ${this.nome} \nConta: ${this.conta }\nSaldo: ${this.saldo}\n\n\n`
    }
}

let c1 = new ContaCorrente('João',2534342,0);
let c2 = new ContaCorrente('Maria',4566778,350);
let c3 = new ContaCorrente('Marta',45678889,30);

c1.depositar(100)
c1.sacar(40)

c2.depositar(300)
c2.sacar(10)

c3.depositar(100)
c3.sacar(100)

console.log(c1.getInformacoes());
console.log(c2.getInformacoes());
console.log(c3.getInformacoes());