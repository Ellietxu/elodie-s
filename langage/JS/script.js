// VARIABLE

// variable nomVariable = valeur;

const firstName = "Elodie"; // const = variable constante
let age = 39; // let = variable modifiable

// appel variable avec console.log(nomVariable);

console.log(firstName);
console.log(age);

// modifier une valeur

let score = 0;
console.log(score);
score = 10;
console.log(score);

// concaténer un texte

const firstName2 = "Gaëlle";
let city = "Rezé";
console.log("I'm " + firstName2 + " and I live in " + city);

// opérations sur les nombres

let price = 20;
let quantity = 3;
total = price * quantity;
console.log(total);

// comprendre les types

const firstName3 = "Chantal";
let age2 = 39;
let isConnect = true;
console.log("Type de variable1:", typeof firstName3);
console.log("Type de variable1:", typeof age2);
console.log("Type de variable1:", typeof isConnect);

// constantes vs variables

const birthYear = 1986;
let currentYear = 2026;
age3 = currentYear - birthYear;
console.log(age3);

// réaffectation et erreurs

// const city = "Paris";
// city = "Lyon"; // la variable const ne permet pas de changer la valeur de city, il faudrait utiliser let

let age4 = 20;
age4 = 21; // ici c'est ok car la vriable let permet de changer la valeur de age
console.log(age4);

// FONCTIONS
// function nomFonction() { ...code de la fonction }

function whoIam() {
  console.log(firstName);
  console.log(age);
}

// appel fonction avec nomFonction();

whoIam();

// utiliser des paramètres

// -déclaration des paramètres : ici prenom

function maFonction(prenom) {
  // let prenom = "argument"
  console.log("Bienvenue " + prenom + " !");
}

// -valeur codée en dur
// --la fonction appelée affecte l'argument "Elo" au paraM prenom
maFonction("Elo");

// -valeur passée via une variable
// --la fonction appelée utilise la variable monPrenom comme argument et l'affecte au paraM prenom
let monPrenom = "Gaelle";
maFonction(monPrenom);

// -default parameters : utilisé quand aucun n'argument n'est fourni pendant l'appel de la fonction
// --If no value is passed, the function automatically uses the default value.

function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet();
greet("Aman");

// -return Statement
// --the return statement is used to send a result back from a function.
// --when return executes, the function stops running at that point.
// --the returned value can be stored in a variable or used directly.

function add(a, b) {
  return a + b; // returns the sum
}

let result = add(5, 10);
console.log(result);

// -anonymous functions
// function(){
// alert('Alerte exécutée par une fonction anonyme');
// };

// --appeler function()
// ---avec une variable :

let alerte = function () {
  alert("Alerte exécutée par une fonction Anonyme appelée par une variable");
};

alerte();

// ---auto-invoquée
(function () {
  alert("Alerte exécutée par une fonction ANONYME auto-invoquée");
})();

(function nomée() {
  alert("Alerte exécutée par une fonction NOMEE auto-invoquée");
})();

// ---lors du déclenchement d'un évènement : fonction callback
// ----JS AVANCE : LATER

// function num(n, callback) {
//   return callback(n);
// }
// const double = (n) => n * 2;
// console.log(num(5, double));

// POP-UP

// alert()

// alert(whoIam);
// alert("Hello");
