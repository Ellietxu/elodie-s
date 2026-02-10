// Exercice 1 : Apprendre des commandes du terminal

// Corrige le code suivant en supprimant les bugs et en utilisant les bonnes pratiques pour renommer les variables. Note quelque part toutes les erreurs que t’affiche la console et essaie de comprendre comment tu les as corrigées.

// Nous souhaitons faire la somme du prix de plusieurs articles

// Prix de deux articles
let itemPrice1 = 10;
let itemPrice2 = 20;

// Nous calculons le total
let total = itemPrice1 + itemPrice2;

// Prix d'un troisieme article
let itemPrice3 = 50;

// Nous ajoutons a3 au total
total = total + itemPrice3;
console.log("Le prix total avant reduction est de : ", total);

//Nous appliquons 20% de reduction
let discountedPrice = total - total * 0.2;
console.log("Le prix total après reduction est de : ", discountedPrice);
