function helloWorld() {
    var campoNome = document.getElementById('nome');
    var nome = campoNome.value;
    var mensagem = 'Hello world, ' + nome + '!';
    var paragrafo = document.getElementById('mensagem');
    paragrafo.innerText = mensagem;
}