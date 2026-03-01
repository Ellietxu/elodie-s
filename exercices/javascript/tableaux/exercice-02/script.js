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
  A002: {
    id: "A002",
    name: "Bob Dupont",
    age: 24,
    major: "Mathematics",
    grades: [11, 9, 15, 8, 13],
    absences: 7,
    courses: ["Calculus", "Statistics", "Algebra"],
  },
  A003: {
    id: "A003",
    name: "Claire Leroy",
    age: 21,
    major: "Computer Science",
    grades: [17, 19, 16, 18, 20],
    absences: 1,
    courses: ["JavaScript", "Web Development", "Data Structures"],
  },
  A004: {
    id: "A004",
    name: "David Moreau",
    age: 23,
    major: "Physics",
    grades: [12, 14, 11, 10, 13],
    absences: 5,
    courses: ["Mechanics", "Quantum Physics", "Thermodynamics"],
  },
  A005: {
    id: "A005",
    name: "Emma Bernard",
    age: 22,
    major: "Computer Science",
    grades: [15, 17, 16, 14, 19],
    absences: 2,
    courses: ["JavaScript", "Networks", "Security"],
  },
};

// === Calculer la moyenne de chaque étudiant.e ===

const lst = Object.values(students);

function studentAverage(studentToCalculateAverage) {
  let grade = studentToCalculateAverage.grades;
  return (mean = grade.reduce((total, n) => total + n, 0) / grade.length);
}

for (let student of lst) {
  console.log(` ${student.name} : ${studentAverage(student)}`);
}

// === Trouver les étudiants d'une filière donnée ===

function majorStudent(listeSurLaquelleOnVaTrier, nameOfTheMajor) {
  let result = [];
  for (let studentByMajor of listeSurLaquelleOnVaTrier) {
    if (studentByMajor.major === nameOfTheMajor) {
      result.push(studentByMajor);
    }
  }
  return result;
}

console.log(majorStudent(lst, "Computer Science"));

// === Identifier l'étudiante avec la meilleure moyenne ===

function bestStudent(listStudenToCompare) {
  let bestAverage = 0;
  let nameOfBestStudent = "";

  for (let studentToCompare of listStudenToCompare) {
    const averageOfThisStudent = studentAverage(studentToCompare);
    if (averageOfThisStudent > bestAverage) {
      bestAverage = averageOfThisStudent;
      nameOfBestStudent = studentToCompare.name;
    }
  }
  return `The best student is ${nameOfBestStudent} with an overall average of ${bestAverage}`;
}

console.log(bestStudent(lst));

// === Statistiques par filière ===

function meanOfAverage(studentByAverage) {
  let arrayOfMean = [];
  let sumOfAbsence = 0;
  for (let studentByMean of studentByAverage) {
    arrayOfMean.push(studentAverage(studentByMean));
    sumOfAbsence += studentByMean.absences;
  }
  return [
    (
      arrayOfMean.reduce((total, n) => total + n, 0) / arrayOfMean.length
    ).toFixed(1),
    sumOfAbsence / studentByAverage.length,
  ];
}

console.log(meanOfAverage(majorStudent(lst, "Computer Science")));

// === Ajouter une nouvelle note à une étudiante ===

function addGrade(nameOfStudent, listOfStudent, newGrade) {
  nameOfStudent === lst.name;

  return listOfStudent;
}
