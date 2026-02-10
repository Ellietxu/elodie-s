// Exercice 2 : Déclaration et utilisation de variable

// 1) En javascript, déclare 2 variables dans lesquelles tu affecteras respectivement ton nom et prénom (choisis un nom pertinent pour chaque variable !). Avec l’instruction alert(……), tu afficheras "Bonjour, nom prénom".

// 2) En javascript, déclare une variable constante et assigne lui une valeur numérique, c'est-à-dire un nombre, par exemple, 64.

// Déclare une autre variable qui contient ton âge.

// Déclare une autre variable qui contiendra le résultat de la soustraction de 64 moins ton âge en utilisant les deux variables précédentes.

// Avec l’instruction alert(….) , tu afficheras "Résultat soustraction années à travailler avant la retraite ! Courage ! En développant ce sera plus fun ! ".

// Pour coder vous pouvez utiliser la partie javascript de l’outil CodePen :

// https://codepen.io/pen/

let firstName = "Chat";
let lastName = "Malo";
alert("Hello " + firstName + " " + lastName);

const retirementAge = 64;
let myAge = 39;

let yearsLeft = retirementAge - myAge;

alert(
  "Sorry... You still have " +
    yearsLeft +
    " years to work! But it's okay because code is soooooo funnnnn !!!!",
);
