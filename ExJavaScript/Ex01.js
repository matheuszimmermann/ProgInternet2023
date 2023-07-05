function verificarTriangulo (){

    //variaveis
    var inLadoA = document.getElementById("inLadoA");
    var inLadoB = document.getElementById("inLadoB");
    var inLadoC = document.getElementById("inLadoC");
    var outSimNao = document.getElementById("outSimNao");
    var outTipo = document.getElementById("outTipo");

     console.log("A é") //teste para clique do botao

     //conversoes
    ladoA = Number(inLadoA.value);
    ladoB = Number(inLadoB.value);
    ladoC = Number(inLadoC.value);

    //condicoes
    if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB  ){
            outSimNao.textContent = "Com essas medidas, não sera possivel formar um Triangulo"
    } else {
        outSimNao.textContent = "Essas medidas formam-se um Triangulo"
        
        if (ladoA == ladoB && ladoA == ladoC) {
            outTipo.textContent = "Tipo Equilátero"
            outTipo.style.color = "red";
        } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
            outTipo.textContent = "Tipo Isoceles"
            outTipo.style.color = "blue";
        } else {
            outTipo.textContent = "Tipo Escaleno"
            outTipo.style.color = "green";
        
        }
    }

    }
    //funcao ao botao
    var btVerificar = document.getElementById("btVerificar");
    btVerificar.addEventListener("click", verificarTriangulo);