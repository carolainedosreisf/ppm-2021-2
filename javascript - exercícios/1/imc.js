function calcular() {
  var altura = parseFloat(document.querySelector("#altura").value);
  var peso = parseFloat(document.querySelector("#peso").value);

  if (isNaN(altura) || isNaN(peso)) {
    alert("Valores inválidos! Por favor insira apenas números");
    return;
  }

  if (altura === 0 || peso === 0) {
    alert("Valores inválidos! Os campos não aceitam valores nulos.");
    return;
  }

  if (altura < 0 || peso < 0) {
    alert("Valores inválidos! Os campos não aceitam valores negativos.");
    return;
  }

  // var resultado = peso / (altura * altura);
  var resultado = peso / Math.pow(altura, 2);
  document.querySelector("#imc").innerHTML = "IMC: " + resultado.toFixed(2);

  var classificacao;
  var classeClassificacao;

  if (resultado < 16) {
    classificacao = "Magreza grave";
    classeClassificacao = "gravissimo";
  } else if (resultado >= 16 && resultado < 17) {
    classificacao = "Magreza moderada";
    classeClassificacao = "grave";
  } else if (resultado >= 17 && resultado < 18.5) {
    classificacao = "Magreza leve";
    classeClassificacao = "atencao";
  } else if (resultado >= 18.5 && resultado < 25) {
    classificacao = "Saudável";
    classeClassificacao = "saudavel";
  } else if (resultado >= 25 && resultado < 30) {
    classificacao = "Sobrepeso";
    classeClassificacao = "atencao";
  } else if (resultado >= 30 && resultado < 35) {
    classificacao = "Obesidade Grau I";
    classeClassificacao = "grave";
  } else if (resultado >= 35 && resultado < 40) {
    classificacao = "Obesidade Grau II";
    classeClassificacao = "gravissimo";
  } else if (resultado >= 40) {
    classificacao = "Obesidade Grau III";
    classeClassificacao = "gravissimo";
  }

  var paragrafoClassificacao = document.querySelector("#classificacao");
  paragrafoClassificacao.innerHTML = "Classificação: " + classificacao;
  paragrafoClassificacao.className = classeClassificacao;
}

function limpar() {
    document.querySelector("#altura").value = '';
    document.querySelector("#peso").value = '';
    document.querySelector("#imc").innerHTML = '';
    document.querySelector("#classificacao").innerHTML = '';
}
