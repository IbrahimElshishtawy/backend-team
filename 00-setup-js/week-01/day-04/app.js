console.log("Week 1 - Day 4: Objects");

const student = {
  name: "Shahd",
  age: 20,
  grades: [90, 75, 88, 92],
  address: { city: "Cairo", street: "Main" },
};

// Destructuring
const { name, grades } = student;
console.log("name =", name);
console.log("grades =", grades);

// Optional chaining
console.log("zipcode =", student.address?.zipcode); // undefined (no crash)

function gradesSummary(s) {
  const total = s.grades.reduce((acc, g) => acc + g, 0);
  const average = total / s.grades.length;
  const max = Math.max(...s.grades);
  return { total, average, max };
}

console.log("summary =", gradesSummary(student));
