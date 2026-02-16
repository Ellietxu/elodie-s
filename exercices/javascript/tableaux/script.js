// Consignes : Implémentez les fonctions suivantes :
// Trouver tous les livres d'un auteurice donné ( Aline Martin )
// Calculer la moyenne des pages par genre
// Trouver le livre le plus récent
// Créer une liste unique de tous les auteurices
// Grouper les livres par genre

// const nomArray = [crochet pour ouvrir tableau] ; {pour définir l'objet} ; name: pour définir la clé

const books = [
  {
    id: 1,
    title: "JavaScript for Beginners",
    author: "Alice Martin",
    year: 2020,
    pages: 300,
    genre: "programming",
    rating: 4.2,
  },
  {
    id: 2,
    title: "Advanced React",
    author: "Bob Dupont",
    year: 2021,
    pages: 450,
    genre: "programming",
    rating: 4.5,
  },
  {
    id: 3,
    title: "Art History",
    author: "Claire Leroy",
    year: 2019,
    pages: 280,
    genre: "art",
    rating: 3.8,
  },
  {
    id: 4,
    title: "Python Data Science",
    author: "David Moreau",
    year: 2022,
    pages: 520,
    genre: "programming",
    rating: 4.7,
  },
  {
    id: 5,
    title: "Design Patterns",
    author: "Alice Martin",
    year: 2018,
    pages: 320,
    genre: "programming",
    rating: 4.1,
  },
  {
    id: 6,
    title: "Modern Painting",
    author: "Emma Laurent",
    year: 2020,
    pages: 190,
    genre: "art",
    rating: 3.9,
  },
  {
    id: 7,
    title: "Modern Painting",
    author: "Emma Laurent",
    year: 2020,
    pages: 190,
    genre: "horror",
    rating: 3.9,
  },
];

function findBooksByAuthor(authorName) {
  return books.filter((book) => book.author === authorName);
}

// function findBooksByAuthor(authorName) {
// return pour retourner le résultat
// nomArray.method(nomVariable) ; => fonction fléchée ; . permet de définir la clé ; === strictement égal
//   return books.filter((nomVariable) => nomVariable.author === authorName);
// }

console.log(findBooksByAuthor("Alice Martin"));

function calculateAveragePagesByGenre() {
  const genreStats = {};

  books.forEach((book) => {
    if (!genreStats[book.genre]) {
      genreStats[book.genre] = { totalPages: 0, count: 0 };
      //   programming: { totalPages: 0, count: 0 }
    }
    genreStats[book.genre].totalPages += book.pages; // totalPages = totalPages + book.pages
    genreStats[book.genre].count += 1;
  });

  const averages = {};
  for (const genre in genreStats) {
    averages[genre] = Math.round(
      genreStats[genre].totalPages / genreStats[genre].count,
    );
  }
  return averages;
}

console.log(calculateAveragePagesByGenre());
