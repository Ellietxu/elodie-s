// Exercice 03

// Que vaudront chacune des variables

// firstLanguage, secondLanguage  et thirdLanguage  à la fin du code suivant :
let firstLanguage = "HTML";
let secondLanguage = "PHP";
let thirdLanguage = firstLanguage;
firstLanguage = "Javascript";
secondLanguage = firstLanguage;

// 1er cas
// firstLanguage = Javascript
// secondLanguage = Javascript
// thirdLanguage = HTML

// Et dans ce cas-ci :
let firstLanguage = "HTML";
let secondLanguage = "PHP";
firstLanguage = "Javascript";
let thirdLanguage = firstLanguage;
secondLanguage = firstLanguage;

// 2nd cas
// firstLanguage = Javascript
// secondLanguage = Javascript
// thirdLanguage = Javascript
