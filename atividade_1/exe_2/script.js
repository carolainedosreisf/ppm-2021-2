function calcular()
{
    var campo_peso = document.querySelector("#peso");
    var peso = parseFloat(campo_peso.value);

    if(isNaN(peso) || peso <= 0) {
        alert('Peso inválido!');
        return;
    }
}