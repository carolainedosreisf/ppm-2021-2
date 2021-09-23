
function trocarImagem(){
    var elementoEstado = document.querySelector("#estados-brasil-sul");
    var elementoImagem = document.querySelector("#imagem");
    var elementoResultado = document.querySelector("#resultado");

    var estado = elementoEstado.value;
    var resultado = "";
    switch (estado) {
        case 'SC':
            resultado = "Santa Catarina";
            break;
        case 'RS':
            resultado = "Rio Grande do Sul";
            break;
        case 'PR':
            resultado = "Paraná";
            break;
    }
    var textNode = document.createTextNode(resultado);

    if(!elementoImagem){
        elementoImagem = document.createElement('img');
        elementoResultado = document.createElement('p');

        elementoImagem.setAttribute('id', 'imagem');
        elementoResultado.setAttribute('id', 'resultado');

        elementoImagem.src=estado+".jpg"
        elementoResultado.appendChild(textNode);

        document.body.appendChild(elementoResultado);
        document.body.appendChild(elementoImagem);
    }else{
        elementoImagem.src = estado+".jpg"
        elementoResultado.removeChild(elementoResultado.firstChild);
        elementoResultado.appendChild(textNode);
    }


}