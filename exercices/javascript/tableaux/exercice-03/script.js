// Exercice 3 : Constructeur de profil utilisateur

// Objectif pédagogique : Créer et manipuler des objets, accéder à leurs propriétés.

// Crée une fonction qui construit un objet profil à partir d'informations utilisateur.
// Si l'email n'est pas fourni, génère-le automatiquement au format : prenom.nom@exemple.com

// Exemples :

// createProfil("Marie", "Durand", 28)
// → { lastname: "Marie", name: "Durand", age: 28, mail: "marie.durand@exemple.com" }

// createProfil("Jean", "Martin", 35, "jm@perso.fr")
// → { lastname: "Jean", name: "Martin", age: 35, mail: "jm@perso.fr" }

// Critères de réussite :
// [x] retourne un objet avec 4 propriétés
// [x] génère l'email en minuscules si non fourni
// [x] gère les noms composés (remplace les espaces par des points)

function createProfil(prenom, nom, age, email) {
  // Si email non fourni
  if (!email) {
    let prenomMail = prenom.toLowerCase().split(" ").join(".");
    let nomMail = nom.toLowerCase().split(" ").join(".");
    email = prenomMail + "." + nomMail + "@exemple.com";
  }
  let user = new Object({
    prenom: prenom,
    nom: nom,
    age: age,
    email: email,
  });
  return user;
}

console.log(
  createProfil("Elodie", "Sevestre", 39, "elodie.sevestre@google.fr"),
);

console.log(createProfil("Gaël", "Ré", 42));
console.log(createProfil("Marie Lou", "Lafitte", 18));
