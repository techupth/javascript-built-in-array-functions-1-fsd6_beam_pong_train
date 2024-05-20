const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  return (
    students.reduce((totalScore, child) => {
      return totalScore + child.score;
    }, 0) / students.length
  );
}

console.log(getAverageStudentScore(students)); // Output: 87.5

/*
const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(totalScore, students) {
  // Start coding here
  return totalScore + students.score;
}

let totalStudents = students.length;
console.log(totalStudents);

let result = students.reduce(getAverageStudentScore, 0); // Output: 87.5
console.log(result / totalStudents);
*/
