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

// FONCTIONS
// function nomFonction() { ...code de la fonction }

function whoIam() {
  console.log(firstName);
  console.log(age);
}

// appel fonction avec nomFonction();

whoIam();

// POP-UP

// alert()

alert(whoIam);
alert("Hello");
