var elementoTarefas = document.querySelector('.div-tarefas ul');
var x = 0;

function adicionar(){
    var elementoTarefa = document.querySelector("#tarefa");
    var tarefa = elementoTarefa.value;

    if(!tarefa){
        alert("Campo vazio.");
        elementoTarefa.focus();
    }else{

        var textNodeTarefa = document.createTextNode(tarefa+" ");
        var textNodeRemover = document.createTextNode("Excluir");

        var liTarefas = document.createElement('li');
        var removeTarefa = document.createElement('button');
        liTarefas.setAttribute('id', 'li_'+x);
        liTarefas.className = "fazer";
        

        liTarefas.appendChild(textNodeTarefa);
        removeTarefa.appendChild(textNodeRemover);
        liTarefas.appendChild(removeTarefa);

        elementoTarefas.appendChild(liTarefas);
        removeTarefa.setAttribute('onclick', 'remover('+x+')');
        liTarefas.setAttribute('onclick', 'feito('+x+')');

        elementoTarefa.value = ""
        elementoTarefa.focus();

        x++;
    }
}

function remover(i){
    elementoTarefas.removeChild(document.querySelector("#li_"+i));
}

function feito(i){
    document.querySelector("#li_"+i).className = "feito";
}

document.querySelector("#tarefa").addEventListener('keypress', function(e){
    if(e.which == 13){
        adicionar();
    }
 }, false);