function calcularTempo() {

  // variaveis
    var valorDepositado = parseFloat(document.getElementById("inMoedas").value); //parse float utilizado para aceitar a entradas de numeros com virgula.
    var tempoPermanencia = 0; // 0 utilizado porque no htm nao tem nenhuma referencia e tambem para nao deixar o espaco vazio

      console.log("A é") //teste para clique do botao

      //conversao 
    valorDepositado = Number(inMoedas.value);
    
    //condicoes 
    if (valorDepositado >= 3) {
      tempoPermanencia = 120;
    } else if (valorDepositado >= 1.75) {
      tempoPermanencia = 60;
    } else if (valorDepositado >= 1) {
      tempoPermanencia = 30;
    } else {
      document.getElementById('resultado').innerHTML = 'Valor Insuficiente';
      return;
    }

    //calculo do valor e o tempo passando p variavel troco
  
    var troco = valorDepositado - TempoDisponivel(tempoPermanencia);
    
    document.getElementById('resultado').innerHTML = 'Tempo de permanência: ' + tempoPermanencia + ' minutos <br> Troco: R$ ' + troco.toFixed(2); //<br> serve para fazer uma quebra de linha
  }
  
  function TempoDisponivel(tempo) {

    //condicoes do tempo
    if (tempo === 120) {
      return 3;
    } else if (tempo === 60) {
      return 1.75;
    } else if (tempo === 30) {
      return 1;
    } else {
      return 0;
    }

  }

  //funcao ao botao
  var btVerificar = document.getElementById("btVerificar");
  btVerificar.addEventListener("click", calcularTempo)
  