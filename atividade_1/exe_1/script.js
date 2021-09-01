var descricao = "";
var classe = "";
var classe_aux = "";
function calcular()
{
    classe_aux = classe;
    var campo_peso = document.querySelector("#peso");
    var campo_altura = document.querySelector("#altura");

    var peso = parseFloat(campo_peso.value);
    var altura = parseFloat(campo_altura.value);

    if(isNaN(peso) || peso <= 0) {
        alert('Peso inválido!');
        return;
    }

    if(isNaN(altura)  || altura <= 0) {
        alert('Altura inválida!');
        return;
    }
    
    var imc = peso/(altura*altura);
    if(imc < 16){
        descricao = "Magreza grave";
        classe = "magreza-grave";
    }else if(imc  >= 16 && imc < 17){
        descricao = "Magreza moderada";
        classe = "magreza-moderada";
    }else if(imc  >= 17 && imc < 18.5){
        descricao = "Magreza leve";
        classe = "magreza-leve";
    }else if(imc  >= 18.5 && imc < 25){
        descricao = "Saudável";
        classe = "saudavel";
    }else if(imc  >= 25 && imc < 30){
        descricao = "Sobrepeso";
        classe = "sobrepeso";
    }else if(imc  >= 30 && imc < 35){
        descricao = "Obesidade Grau I";
        classe = "obesidade-grau-1";
    }else if(imc  >= 35 && imc < 40){
        descricao = "Obesidade Grau II (severa)";
        classe = "obesidade-grau-2";
    }else{
        descricao = "Obesidade Grau III (mórbida)";
        classe = "obesidade-grau-3";
    }
    var campo_paragrafo_resultado = document.querySelector("#resultado_imc");
    var campo_paragrafo_resultado_desc = document.querySelector("#resultado_imc_descricao");

    campo_paragrafo_resultado.innerHTML = "Seu IMC: "+imc.toFixed(2);
    campo_paragrafo_resultado_desc.innerHTML = "Classificação do seu IMC: "+descricao;
    if(classe_aux !=""){
        campo_paragrafo_resultado_desc.classList.remove(classe_aux);
    }
    campo_paragrafo_resultado_desc.classList.add(classe);
}

function limpar()
{
    document.querySelector("#peso").value = "";
    document.querySelector("#altura").value = "";
    document.querySelector("#resultado_imc").innerHTML = "";
    document.querySelector("#resultado_imc_descricao").innerHTML = "";
}