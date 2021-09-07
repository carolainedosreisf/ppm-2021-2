function calcular()
{
    var campo_peso = document.querySelector("#peso");
    var campoPalneta = document.querySelector('#planeta');
    var campoResultado = document.querySelector("#resultado");

    var peso = parseFloat(campo_peso.value);
    var gravidadePlaneta = parseFloat(campoPalneta.value);

    if(gravidadePlaneta==0){
        alert('Selecione um planeta!');
        return;
    }

    if(isNaN(peso) || peso <= 0) {
        alert('Peso inválido!');
        return;
    }

    var resultado = ((peso/10)*gravidadePlaneta).toFixed(2);
    campoResultado.innerHTML = "<b>Resultado: </b>"+ resultado;
}

//Não foi especificado o que o botão cancelar deveria fazer, mas julgo que seria o mesmo que limpar.
function cancelar(){
    document.querySelector("#planeta").value = "0";
    document.querySelector("#peso").value = "";
    document.querySelector("#resultado").innerHTML = "";

}