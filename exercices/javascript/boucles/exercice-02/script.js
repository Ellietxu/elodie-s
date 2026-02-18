// Exercice 2
// Conditions d’achèvement
// À faire : Remettre un travail
// Nous souhaitons recréer un mot à partir de lettres dans un tableau.

let letters = ["A", "d", "a", "-", "T", "e", "c", "h"];

// Créer une variable appelé “message” de type string.
// Créer une boucle qui va parcourir le tableau letters (choisis la boucle de ton choix)
// Dans le code de la boucle, ajouter chaque élément du tableau letters à message.
// Une fois la boucle terminée, afficher “message” dans la console.

let message = "";

for (let letter of letters) {
  //console.log(letter);
  message += letter;
}

console.log(message);

// Le tableau letters a maintenant changé.
// Fais en sorte que ta boucle soit adaptée à tous les contenus de letters (toute taille).

const letters2 = ["A", "d", "a", "-", "S", "c", "h", "o", "o", "l"];

let message2 = "";

for (let letter = 0; letter < letters2.length; letter++) {
  message2 += letters2[letter];
}

console.log(message2);
