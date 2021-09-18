function adicionar(){
    var tarefa = document.querySelector("#tarefa").value;

    if(!tarefa){
        alert("Campo vazio.")
    }else{
        var elementoTarefas = document.querySelector('.div-tarefas ul');
        var textNode = document.createTextNode(tarefa);
        
        var liTarefas = document.createElement('li');
        liTarefas.appendChild(textNode);
        elementoTarefas.appendChild(liTarefas);
        document.elementoTarefas.appendChild(liTarefas);
    }
}