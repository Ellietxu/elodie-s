// Objet est une collection de paires clé-valeur
// -objet déclaré avec variable : variable objet {clé: valeur,...}
// -on peut utiliser la variable const pour déclarer un objet
// --du coup malgré const, l'objet est modifiable

const person = {
  name: "Alice",
  age: 20,
  city: "New York",
};

// console.log(person)

// dot notation (pour accéder à la clé)

console.log(person.name);

// bracket notation (pour clé avec espace. ex : clé -> city name)

console.log(person["city"]);

// modification valeur clé

person.name = "Elodie";

console.log(person.name);

// ajouter une clé

person.country = "USA";

console.log(person);

// retirer une clé

delete person.country;

console.log(person);

// Méthodes : fonction dans objet (programmation orienté objet ???)

const calculator = {
  add(a, b) {
    return a + b;
  },
  substract(a, b) {
    return a - b;
  },
};

console.log(calculator.add(2, 10));

const calculator2 = {
  add: function (a, b) {
    return a + b;
  },
  substract: function (a, b) {
    return a - b;
  },
};

console.log(calculator2.substract(2, 10));

// "this" -> opérateur

const person2 = {
  firstName: "Pierette",
  lastName: "Dupont",
  age: 68,
  // fonction dans clé = méthode
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  greet() {
    console.log(
      `Hello, I'm ${this.getFullName()} and I'm ${this.age} years old.`,
    );
  },
};

console.log(person2.getFullName());
person2.greet();

// objet imbriqués

const student = {
  name: "Emma",
  address: { city: "Nantes", zip: "44000" },
};

console.log(student.address.city);

// Tableaux d'objets

const products = [
  { id: 1, name: "laptop", price: 999, inStock: true },
  { id: 2, name: "mouse", price: 25, inStock: true },
  { id: 3, name: "keyboard", price: 75, inStock: false },
];

// -itération sur un [tableau] avec une boucle

// for (const product of products) {
//   console.log(`${product.name} ${product.price}`);
//   console.log(`${product.name}: $${product.price}`);
// }

// fonction : function nomFonction (paramètre){corps de la fonction};

const users = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 30 },
];

function findUserById(users, id) {
  for (const user of users) {
    if (user.id === id) {
      return user.name;
    }
  }
  return "L'ID n'existe pas";
}

const filteredUser = findUserById(users, 2);
console.log(filteredUser);

// console.log quand je veux voir le résultat
// return si je veux sortir la valeur
