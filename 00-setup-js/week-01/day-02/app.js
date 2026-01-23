console.log("Week 1 - Day 2: Functions + Scope");

// 1) Function Declaration
function sum(a, b) {
  return a + b;
}

// 2) Arrow Function
const isEven = (n) => n % 2 === 0;

// 3) Default parameter
function greet(name = "Guest") {
  return `Hello, ${name}`;
}

// 4) Practice functions
function calcAge(birthYear, currentYear = 2026) {
  return currentYear - birthYear;
}

function cToF(c) {
  return (c * 9) / 5 + 32;
}

// Run tests
console.log("sum(2,3) =", sum(2, 3));
console.log("isEven(10) =", isEven(10));
console.log(greet("Shahd"));
console.log("Age =", calcAge(2000));
console.log("25C -> F =", cToF(25));

// Scope example
const x = 10; // global
function scopeExample() {
  const x = 5; // local
  return x;
}
console.log("global x =", x);
console.log("local x from function =", scopeExample());
