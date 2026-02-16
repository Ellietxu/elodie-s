// Problème : Crée une fonction qui calcule le montant total d'un panier d'achats (prix × quantité pour chaque article).

// Utiliser reduce() pour calculer une valeur unique à partir d'un tableau.

// Crée une fonction qui calcule le montant total d'un panier d'achats (prix × quantité pour chaque article).

// Critères de réussite :

//     Utilise reduce()
//     Retourne un nombre arrondi à 2 décimales
//     Retourne 0 si le panier est vide

const basket = [
  { name: "Pain", price: 1.5, quantity: 2 },
  { name: "Lait", price: 0.99, quantity: 1 },
  { name: "Œufs", price: 3.2, quantity: 3 },
];

function totalCalculated(panier) {
  //ici panier est le paramètre de la fonction
  // .reduce(accumulateur, variableAccumule) -> si {variableAccumule} : utilise des clés d'objet à accumuler en les séparant par une ,
  // => fonction fléchée
  return panier.reduce(
    (total, { quantity, price }) => total + quantity * price,
    0,
  );
  let result = Math.round();
}

console.log(totalCalculated(basket)); // → 13.59
// basket qui est l'array devienbt l'argument du paraM panier de la fonction totalCalculated
// c'est en indiquant basket comme argument qu'on précise à la fonction où aller chercher les infos
