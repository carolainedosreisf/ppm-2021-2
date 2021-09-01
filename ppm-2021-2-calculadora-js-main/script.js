function calcular() {
   /*
   * parseFloat - converte uma string em número
   * variavelNumero.toFixed(2) - mantém apenas dois números após a vírgula
   */
   // 1° pegar os números do campo de texto
   var campo1 = document.querySelector("#numero1");
   var campo2 = document.querySelector("#numero2");
   var numero1 = parseFloat(campo1.value);
   var numero2 = parseFloat(campo2.value);
   if (isNaN(numero1)) {
      alert('Número 1 inválido!');
      return;
   }
   if (isNaN(numero2)) {
      alert('Número 2 inválido!');
      return;
   }
   // 2° pegar a operação
   var campoOperacao = document.querySelector('#operacao');
   var operacao = parseInt(campoOperacao.value);
   // if(isNaN(operacao) || operacao < 1 || operacao > 4) {
   //    alert('Operação inválida!');
   //    return;
   // }
   // 3° calcular o resultado
   var resultado;
   switch (operacao) {
      case 0:
         alert('Selecione uma operação!');
         return;
      case 1: resultado = numero1 + numero2; break;
      case 2: resultado = numero1 - numero2; break;
      case 3: resultado = numero1 * numero2; break;
      case 4:
         if (numero2 === 0) {
            alert('O divisor não pode ser 0');
            return;
         }
         resultado = numero1 / numero2;
         break;
      default: alert('Operação inválida!'); return;
   }
   // 4° mostrar o resultado na tela
   var paragrafo = document.querySelector('#resultado');
   paragrafo.innerHTML = 'Resultado: ' + resultado;
}

function limpar() {
   var campo1 = document.querySelector("#numero1");
   var campo2 = document.querySelector("#numero2");
   var campoOperacao = document.querySelector('#operacao');
   var paragrafo = document.querySelector('#resultado');
   campo1.value = '';
   campo2.value = '';
   campoOperacao.value = 0;
   paragrafo.innerHTML = '';
}