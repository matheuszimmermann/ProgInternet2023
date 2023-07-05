// Criar referências aos elementos da página
const form = document.querySelector("form");
const resultado = document.querySelector("h3");

form.addEventListener("submit", (event) => {

  // Evita o envio do formulário
  event.preventDefault();

  // valor das entradas
  const frase = form.inFrase.value;
  const itemInserir = form.inItem.value;
  const indicesString = form.inIndice.value;

  var indicesArray = indicesString.split(","); // Separar as entradas da posicao por vírgula
  var indices = indicesArray.map(Number); // Converter os elementos para números

  let novaFrase = inserirItem(frase, itemInserir, indices);
  resultado.textContent += novaFrase;
});

function inserirItem(frase, item, indices) {
  const charArray = frase.split("");
  let insertCount = 0;

  for (let i = 0; i <= frase.length; i++) {
    if (indices.includes(i)) {
      charArray.splice(i + insertCount, 0, item);
      insertCount++;
    }
  }

  return charArray.join("");
}
