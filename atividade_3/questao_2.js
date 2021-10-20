//Questão a
function potencia1(base, potencia) {
    var resultado = base;
    for (let index = 1; index < potencia; index++) {
        resultado = resultado * base;
    }
    return resultado;
}

console.log(potencia1(3,3));

//Questão b
var potencia2 = function(base, potencia) {
    var resultado = base;
    for (let index = 1; index < potencia; index++) {
        resultado = resultado * base;
    }
    return resultado;
}

console.log(potencia2(3,3));

//Questão c
const potencia3 = (base, potencia) => {
    var resultado = base;
    for (let index = 1; index < potencia; index++) {
        resultado = resultado * base;
    }
    return resultado;
}

console.log(potencia3(3,3));

//Questão d
var funcao  = (base, potencia) => {
    var resultado = base;
    for (let index = 1; index < potencia; index++) {
        resultado = potencia4(resultado,base)
    }
    return resultado;
}

const potencia4 = (a,b) => a * b;

console.log(funcao(3,3));

//Questão e
var potencia5  = (base=0, potencia=0) => {
    var resultado = base;
    for (let index = 1; index < potencia; index++) {
        resultado = potencia4(resultado,base)
    }
    return potencia==0?1:resultado;
}

console.log(potencia5());