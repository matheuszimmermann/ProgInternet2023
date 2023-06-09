const nameList = ["Aline", "Otavio", "Camila", "Paula", "Jean", "Julio", "Cezar", "Matheus", "Eduardo"]


const listEl = document.getElementById("list");
const searchField = document.getElementById("searchField");
searchField.addEventListener("input", inputHandler)

this.fillList();

function adicionar() {
    var searchField = document.getElementById("searchField");
    var nome = searchField.value; 
    nameList.push(nome);

    fillList();

    searchField.value = "";
    searchField.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionar);


function fillList(list = nameList) {
   listEl.innerHTML = "";
   for(let i=0; i < list.length; i++) {
       let listItems = document.createElement("li");
       listItems.innerHTML = list[i];
       listEl.appendChild(listItems);
   }
}


function inputHandler() {
   const filteredList = nameList.filter(el => {
       const listItems = el.toLocaleLowerCase();
       const searchWorld = searchField.value.toLowerCase();
       return listItems.includes(searchWorld)
   });
   
   fillList(filteredList);
}
