/*
Exercice 2
Crée une liste HTML (ul).

Avec JavaScript :

sélectionne la liste
ajoute un nouvel élément (li) au clic sur un bouton
*/

const item = document.getElementById("itemList"); // sélection <ul> par id
const btn = document.querySelector(".btn-li"); // sélection bouton

// event sur bouton
btn.addEventListener("click", () => {
  alert("Ajout item!");
  const addItem = document.createElement("li"); // ajoute un élément <li>
  addItem.textContent = "Item 3"; // contenu du nouveau <li>
  item.appendChild(addItem); // rattache <li> à <ul>
  alert("Item ajouté !");
});
