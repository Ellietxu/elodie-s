// Nous souhaitons créer un décompte.

// Demande à l'utilisateur (à l'aide de prompt) un nombre entre 0 et 10.
// Affiche ensuite tous les nombres sous le nombre indiqué par l'utilisateur (s'il rentre 4, on affichera 4, 3, 2, 1, 0).
// Attention, si l'utilisateur rentre un chiffre erroné il faudra afficher message d'erreur.

let number = prompt("Choose a number between 0 to 10");
number = parseInt(number);

function chooseNumber(number) {
  if (number >= 0 && number <= 10) {
    for (n = number; n >= 0; n--) {
      console.log(n.toFixed(0));
    }
  } else {
    return "Erreur";
  }
}
console.log(chooseNumber(number));
