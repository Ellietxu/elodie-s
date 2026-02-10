// Écris une fonction qui prend en argument un nombre entier et retourne son carré.
// Affiche le résultat dans la console.

// Objectif : Je donne 3 à ma fonction, j’obtiens 9. Je donne 2 à ma fonction, j’obtiens 4.

function carre(n) {
  return n * n;
}

console.log(carre(3));
console.log(carre(2));

// Stocke le résultat de la fonction dans une variable
// C’est-à-dire, créé une variable qui sera égale à l’appel de la fonction.
// Nous allons utiliser cette variable pour la donner à une autre fonction .
// Ecris une autre fonction qui va multiplier par 10, la variable précédente.
// Affiche le résultat dans la console.

// Objectif : Je donne 9 à ma fonction de multiplication, j’obtiens 90.

let carreResult = carre(3);

function multiTen(n) {
  return n * 10;
}
let multiResult = multiTen(carreResult);

// Modifie le code existant et demande à l’utilisateur via une fonction existante (que tu dois rechercher).
// Le nombre qui sera en entrée de la première fonction.

// Objectif : L’utilisateur rentre un nombre, disons 4. Dans la console, je dois voir successivement 16 et 160.

let userNumber = prompt(
  "Choisir un nombre entier pour obtenir son carré puis sa multiplication par 10",
);
userNumber = parseInt(userNumber);

function carre(n) {
  return n * n;
}
let carreResult = carre(userNumber);
console.log(carreResult);

function multiTen(n) {
  return n * 10;
}
let multiResult = multiTen(carreResult);
console.log(multiResult);
