console.log("Week 1 - Day 6: Mini Project - Student Manager");

const students = [];

function addStudent(name, age) {
  if (!name || typeof name !== "string" || name.trim().length < 2) {
    console.log("Invalid name");
    return;
  }
  if (typeof age !== "number" || Number.isNaN(age) || age <= 0) {
    console.log("Invalid age");
    return;
  }
  students.push({ name: name.trim(), age });
  console.log("Added:", name);
}

function listStudents() {
  if (students.length === 0) {
    console.log("No students yet.");
    return;
  }
  console.log("Students list:");
  students.forEach((s, i) => console.log(`${i + 1}) ${s.name} - ${s.age}`));
}

function findStudent(name) {
  const s = students.find((st) => st.name.toLowerCase() === name.toLowerCase());
  console.log("Found:", s ?? "Not found");
  return s;
}

function removeStudent(name) {
  const idx = students.findIndex(
    (st) => st.name.toLowerCase() === name.toLowerCase()
  );
  if (idx === -1) {
    console.log("Not found");
    return;
  }
  const removed = students.splice(idx, 1);
  console.log("Removed:", removed[0]);
}

// Demo
addStudent("Mona", 22);
addStudent("Ali", 17);
listStudents();
findStudent("mona");
removeStudent("Ali");
listStudents();
