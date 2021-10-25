class ContaCorrente {
    constructor(nome, conta, saldo) {
        this.nome = nome || 'Padrao';
        this.conta = conta || 0;
        this.saldo = saldo || 0;
    }

    sacar(quantidade) {
        this.saldo = this.saldo - quantidade;
    }

    depositar(quantidade) {
        this.saldo = this.saldo + quantidade;
    }

    getInformacoes() {
        return `Nome: ${this.nome} \nConta: ${this.conta }\nSaldo: ${this.saldo}\n\n\n`
    }
}

let c1 = new ContaCorrente('João',2534342,0);

c1.depositar(100)
c1.sacar(40)
console.log(c1.getInformacoes())