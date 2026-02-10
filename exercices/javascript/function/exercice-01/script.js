// Ecris une fonction addition3Numbers() qui affichera la somme de 1 + 2 + 3 dans la console.
// Objectif : Voir dans la console : “Le résultat de la somme est 6”

function addition3Numbers() {
  let somme = 1 + 2 + 3;
  console.log("Le résultat de la somme est " + somme);
}
addition3Numbers();

// Ecris une nouvelle fonction addition3NumbersWithArg(…) qui affichera aussi le résultat d’une addition de 3 nombres mais cette fois-ci à partir de 3 arguments.
// Déclarer 3 variables qui prennent chacune une valeur de votre choix.
// Passez ces variables à la fonction addition3NumbersWithArg(…).
// Objectif : Voir dans la console : “Le résultat de la somme est X”.
// X étant le résultat de la somme de vos trois valeurs de variables.

function addition3NumbersWithArg(a, b, c) {
  let somme2 = a + b + c;
  console.log("Le résultat de la somme est " + somme2);
}

let num1 = 4;
let num2 = 6;
let num3 = 8;
addition3NumbersWithArg(num1, num2, num3);

// Appelez addition3NumbersWithArg() 3 fois avec des valeurs d’argument différentes.
// Objectif : Voir dans la console :
// “Le résultat de la somme est X ”
// “Le résultat de la somme est Y”
// “Le résultat de la somme est Z”

addition3NumbersWithArg(7, 8, 9);
addition3NumbersWithArg(10, 11, 12);
addition3NumbersWithArg(13, 14, 15);
