// Objectif attendu : au clic sur le bouton,
// changer le texte du paragraphe #status

const button = document.querySelector("#changeTextBtn"); //correction button en statusText

console.log(button);

button.addEventListener("click", () => {
  const status = document.querySelector("#status");
  status.textContent = "Statut : texte change !";
});
