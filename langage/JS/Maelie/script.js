const age = 18;

if (age === 18) {
  // console.log("Tu es enfin majeur");
} else if (age > 18) {
  // console.log("Tu peux voter");
} else {
  // console.log("Tu es trop jeune");
}

const array = [12, 21, 72, 45, 14];
//   0    1   2   3   4

array.forEach((number) => {
  // console.log(number + 1)
});

const newArray = array.map((number) => {
  return number + 1;
});
// newArray -> [13, 22, 73, 46, 15]

const filterArray = array.filter((number) => {
  return number > 20;
});
// filterArray -> [21, 72, 45]

console.log(filterArray);

Object.keys(nomObject); // retourne toutes les clés d'un objet
