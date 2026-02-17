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
  const result = panier.reduce(
    (total, { quantity, price }) => total + quantity * price,
    0,
  );
  if (result !== 0) {
    return result.toFixed(2);
  } else {
    return result;
  }
}

console.log(totalCalculated(basket));
