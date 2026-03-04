/*
Exercice 1
Crée une page HTML contenant :

un titre
un bouton
Avec JavaScript :

sélectionne le titre
change son texte au clic sur le bouton
*/

const bodyTitle = document.querySelector("h1");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  alert("Changement de titre");
  bodyTitle.textContent = "Welcome Elodie !";
});
