// Consignes : Implémentez les fonctions suivantes :

// - Calculer la moyenne de chaque étudiant·e
// - récupérer les notes de chaque étudiant
// - Trouver les étudiant·es d'une filière donnée
// - Identifier l'étudiante avec la meilleure moyenne
// - Statistiques par filière (moyenne des moyennes, taux d'absentéisme)
// - Ajouter une nouvelle note à un étudiante

const students = {
  A001: {
    id: "A001",
    name: "Alice Martin",
    age: 22,
    major: "Computer Science",
    grades: [14, 16, 12, 18, 15],
    absences: 3,
    courses: ["JavaScript", "Algorithms", "Database"],
  },
};

console.log(students);

//   A002: {
//     id: "A002",
//     name: "Bob Dupont",
//     age: 24,
//     major: "Mathematics",
//     grades: [11, 9, 15, 8, 13],
//     absences: 7,
//     courses: ["Calculus", "Statistics", "Algebra"],
//   },
//   A003: {
//     id: "A003",
//     name: "Claire Leroy",
//     age: 21,
//     major: "Computer Science",
//     grades: [17, 19, 16, 18, 20],
//     absences: 1,
//     courses: ["JavaScript", "Web Development", "Data Structures"],
//   },
//   A004: {
//     id: "A004",
//     name: "David Moreau",
//     age: 23,
//     major: "Physics",
//     grades: [12, 14, 11, 10, 13],
//     absences: 5,
//     courses: ["Mechanics", "Quantum Physics", "Thermodynamics"],
//   },
//   A005: {
//     id: "A005",
//     name: "Emma Bernard",
//     age: 22,
//     major: "Computer Science",
//     grades: [15, 17, 16, 14, 19],
//     absences: 2,
//     courses: ["JavaScript", "Networks", "Security"],
//   },
// };
