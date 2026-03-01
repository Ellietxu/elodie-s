/*
   KATA 5 : Objets – "Gestion d'une bibliothèque”
  Objectif pédagogique :
  Manipuler des objets, parcourir leurs propriétés, et modéliser des relations simples.
  Énoncé :
  Tu créees un petit système de gestion de livres. Chaque livre a : titre, auteur, année, genre, nombreDePages.
  Crée une fonction qui :
Ajoute un livre à la bibliothèque
Récupère tous les livres d'un auteur
Filtre les livres par genre
Calcule le nombre total de pages
*/

const library = {
  books: [
    {
      title: "1984",
      author: "Orwell",
      year: 1949,
      genre: "Fiction",
      pages: 328,
    },
    {
      title: "Fondation",
      author: "Asimov",
      year: 1951,
      genre: "SF",
      pages: 255,
    },
  ],
};

// console.log(library.books.length);

// === AJOUT LIVRE ===

// N.B.: On déclare une variable que si on la réutilise derrière
// on met en RETURN dans une fonction quand on veut qu'elle nous retourne quelque chose
// JAMAIS de console.log dans une fonction mais un return
// JAMAIS de console.log dans un code (c'est juste pour nous pour débugger le code)

function addBook(library, book) {
  library.books.push(book);
  // return library
}

addBook(library, {
  title: "Dune",
  author: "Herbert",
  year: 1965,
  genre: "SF",
  pages: 688,
});

console.log(library);

// === RECHERCHE PAR AUTEUR ===

function getBooksByAuthor(library, searchAuthor) {
  return library.books.filter((book) => book.author === searchAuthor);
  // return library.books.filter((book) => {return book.author === searchAuthor});
}

console.log(getBooksByAuthor(library, "Orwell"));
// === RECHERCHE PAR GENRE ===

function getBooksByGenre(library, searchGenre) {
  return library.books.filter((book) => book.genre === searchGenre);
}

console.log(getBooksByGenre(library, "SF"));

// === NOMBRE DE PAGES TOTALES ===

// getTotalPages(library);
// 1271

// sans fonction

const totalPages = library.books.reduce((total, book) => {
  return total + book.pages;
}, 0);
console.log(totalPages);

// itération/boucle .forEach()

totalPageBoucle = 0;
library.books.forEach(
  (book) => (totalPageBoucle = totalPageBoucle + book.pages),
);

console.log(totalPageBoucle);

// avec fonction et méthode itération .reduce()

function totalPages2(library) {
  return library.books.reduce((total, book) => {
    return total + book.pages;
  }, 0);
}

console.log(totalPages2(library));
