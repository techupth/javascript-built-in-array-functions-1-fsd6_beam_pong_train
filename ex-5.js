const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(accumulator, array) {
  return accumulator + array.score;
}

let result = students.reduce(getAverageStudentScore, 0) / students.length;
console.log(result);
getAverageStudentScore(students); // Output: 87.5
