var botaoCalcular = document.querySelector('#calcular');
botaoCalcular.onclick = function() {
    var peso = parseFloat(document.querySelector("#peso").value);
    var planeta = document.querySelector('#planeta').value;

    // if(planeta === '')
    if(!planeta) {
       alert('Selecione um planeta para calcular');
       return; 
    }

    var resultado = (peso / 10) * planeta;
    resultado = 'Peso: ' + resultado.toFixed(2);

    // Manipulação DOM - Data Object Model
    // Criação de elementos HTML de forma dinâmica
    var elementoResultado = document.querySelector('#resultado');
    var textNode = document.createTextNode(resultado);
    
    if(!elementoResultado) {
        elementoResultado = document.createElement('p');
        elementoResultado.appendChild(textNode);
        elementoResultado.setAttribute('id', 'resultado');
        document.body.appendChild(elementoResultado);
    } else {
        elementoResultado.removeChild(elementoResultado.firstChild);
        elementoResultado.appendChild(textNode);
    }
};

var botaoLimpar = document.querySelector('#limpar');
botaoLimpar.addEventListener('click', function() {
    document.querySelector("#peso").value = '';
    document.querySelector('#planeta').value = '';
    document.body.removeChild(document.querySelector('#resultado'));
});