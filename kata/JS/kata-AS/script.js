//JS-Kata1-Déclarer et afficher des variables//

const firstName = "Elo";
let myAge = 39;
let likeJS = "Yes";
console.log(firstName);
console.log(myAge);
console.log(likeJS);

//JS-Kata2-Modifier une valeur//

let score = 0;
console.log(score);
score = 10;
console.log(score);

//JS-Kata3-Concaténer un texte//

const firstName2 = "Gaëlle";
let city = "Rezé";
console.log("I'm " + firstName2 + " and I live in " + city);

//JS-Kata4-Opérations sur les nombres//

let price = 20;
let quantity = 3;
total = price * quantity;
console.log(total);

//JS-Kata5-Comprendre les types//

const firstName3 = "Chantal";
let age2 = 39;
let isConnect = true;
console.log("Type de variable1:", typeof firstName3);
console.log("Type de variable1:", typeof age2);
console.log("Type de variable1:", typeof isConnect);

//JS-Kata6-Constantes vs variables//

const birthYear = 1986;
let currentYear = 2026;
age = currentYear - birthYear;
console.log(age);

//JS-Kata7-Réaffectation et erreurs//

const city = "Paris";
city = "Lyon"; // la variable const ne permet pas de changer la valeur de city, il faudrait utiliser let//

let age = 20;
age = 21; //ici c'est ok car la vriable let permet de changer la valeur de age//
