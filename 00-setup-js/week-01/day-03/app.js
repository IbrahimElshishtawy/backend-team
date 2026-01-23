console.log("Week 1 - Day 3: Arrays + Methods");

const users = [
  { name: "Ali", age: 17 },
  { name: "Mona", age: 22 },
  { name: "Omar", age: 35 },
  { name: "Sara", age: 15 },
];

const adults = users.filter((u) => u.age >= 18);
const names = users.map((u) => u.name);
const firstOver30 = users.find((u) => u.age > 30);

const avgAge =
  users.reduce((sum, u) => sum + u.age, 0) / users.length;

console.log("adults =", adults);
console.log("names =", names);
console.log("firstOver30 =", firstOver30);
console.log("avgAge =", avgAge);
