function addPoints(currentPoints, newPoints) {
  return currentPoints + newPoints; // signe + est un opérateur
}

// opérateur binaire : * > + /
// opérateur unaire : typeof -

console.log(addPoints(50, 50));

function addPoints(currentPoints, newPoints) {
  let total = currentPoints + newPoints;
  return total;
}

console.log(addPoints(50, 60));

function presentation(firstName, city) {
  console.log("I am " + firstName + " and I live in " + city);
}

presentation("Elodie", "Rezé");
