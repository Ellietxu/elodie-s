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

const studentList = Object.values(students);

function calculateStudentAverage(student) {
  const grades = student.grades;
  return grades.reduce((total, n) => total + n, 0) / grades.length;
}

for (let student of studentList) {
  console.log(` ${student.name} : ${calculateStudentAverage(student)}`);
}

// === Trouver les étudiants d'une filière donnée ===

function getStudentByMajor(studentList, majorName) {
  let studentsInMajor = [];
  for (let student of studentList) {
    if (student.major === majorName) {
      studentsInMajor.push(student);
    }
  }
  return studentsInMajor;
}

console.log(getStudentByMajor(studentList, "Computer Science"));

// === Identifier l'étudiante avec la meilleure moyenne ===

function getTopStudent(studentList) {
  let bestAverage = 0;
  let topStudentName = "";

  for (let student of studentList) {
    const average = calculateStudentAverage(student);
    if (average > bestAverage) {
      bestAverage = average;
      topStudentName = student.name;
    }
  }
  return `The best student is ${topStudentName} with an overall average of ${bestAverage.toFixed(1)}`;
}

console.log(getTopStudent(studentList));

// === Statistiques par filière et absentéisme ===

function getMajorStatistics(studentsInMajor) {
  const averages = [];
  let totalAbsences = 0;
  for (let student of studentsInMajor) {
    averages.push(calculateStudentAverage(student));
    totalAbsences += student.absences;
  }
  const majorAverage =
    averages.reduce((sum, avg) => sum + avg, 0) / averages.length;
  const averageAbsences = totalAbsences / studentsInMajor.length;
  return `${majorAverage.toFixed(1)}, ${averageAbsences}`;
}

console.log(
  getMajorStatistics(getStudentByMajor(studentList, "Computer Science")),
);

// === Ajouter une nouvelle note à un.e étudiant.e ===

function addGrade(ID, newGrade) {
  for (let student of studentList) {
    if (student.id === ID) {
      student.grades.push(newGrade);
      return `${student.name} : ${newGrade}`;
    }
  }
  return `Student with ID ${ID} not found`;
}

console.log(addGrade("A003", 4));
console.log(addGrade("A013", 12));
