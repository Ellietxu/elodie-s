// variables initialisées au chargement de la page
const title = document.querySelector(".title1");
const button = document.querySelector(".button1");
const ul = document.getElementById("list1");

button.addEventListener("click", () => {
  //   console.log("Bouton cliqué");
  title.textContent = "Piou piou";
  title.style.color = "orange";
  const addLi = document.createElement("li");
  addLi.textContent = "poule";
  ul.appendChild(addLi);
  // const li = document.querySelectorAll("li"); // placé ici pour prendre en compte les 3 éléments initiaux plus celui qu'on ajoute
  // li.forEach((maLigne) => {
  //   maLigne.style.color = "blue";
  // });
});
