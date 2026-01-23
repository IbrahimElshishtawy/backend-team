console.log("Week 1 - Day 5: Strings + Loops");

function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;
  const s = str.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) count++;
  }
  return count;
}

function reverseString(str) {
  let out = "";
  for (let i = str.length - 1; i >= 0; i--) {
    out += str[i];
  }
  return out;
}

function fizzBuzz(n = 50) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}

console.log("vowels in 'Backend Node' =", countVowels("Backend Node"));
console.log("reverse('hello') =", reverseString("hello"));
fizzBuzz(20);
