function AlgarismoRomano() {

    var algarismo = document.getElementById("inAlgarismo").value.toUpperCase();
    var numeroDecimal = 0;
  
    function charNumDecimal(algEntrada) {

        if (algEntrada == 'I') {
          return 1;
        }else if(algEntrada == 'V') {
          return 5;
        }else if(algEntrada == 'X') {
          return 10;
        }else if(algEntrada == 'L') {
          return 50;
        }else if(algEntrada == 'C') {
          return 100;
        }else if(algEntrada == 'D') {
          return 500;
        }else if(algEntrada == 'M') {
          return 1000;
        }else{
          return 0; 
        }
      }
  
    for (var index = 0; index < algarismo.length; index++) {
      var numDigitado = charNumDecimal(algarismo.charAt(index));
      var proxCaractere = charNumDecimal(algarismo.charAt(index + 1));
  
      if (proxCaractere) {
        if (numDigitado >= proxCaractere) {
          numeroDecimal += numDigitado;
        } else {
          numeroDecimal += (proxCaractere - numDigitado);
          index++;
        }
      } else {
        numeroDecimal += numDigitado;
      }
    }
  
    document.getElementById("outResultado").innerHTML = numeroDecimal;
  }
  
  // Evento de clique do botão "Converter"
  document.getElementById("btConverter").addEventListener("click", AlgarismoRomano);
  