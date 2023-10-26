'use strict';

// Q1. make a string out of an array (join)
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(', ');
  console.log(result); // apple, banana, orange
}

// Q2. make an array out of a string (split)
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',');
  console.log(result); // ["🍎", " 🥝", " 🍌", " 🍒"]
}

// Q3. make this array look like this: [5, 4, 3, 2, 1] (reverse)
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result); // [5, 4, 3, 2, 1]
  console.log(array); // 배열 자체도 변화시킴 
}

// Q4. make new array without the first two elements (slice)
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5); // index 2부터 4까지
  console.log(result); // [3, 4, 5]
  console.log(array); // [1, 2, 3, 4, 5]
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90 (find)
{
  const result = students.find((student) => students.score === 90);
  console.log(result);
}


// Q6. make an array of enrolled students (filter)
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores (map)
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50 (some, every)
{
  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result); // true

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2); // true
}

// Q9. compute students' average score (reduce)
{
  console.clear();
  const result = students.reduce((prev, curr) => prev + curr.score, 0); // initial: 0부터 시작 
  console.log(result / students.length); // 평균 
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
  .map((student) => student.score)
  .filter((score) => score >= 50)
  .join(', ');
  console.log(result); // 80, 90, 66, 88
}

// Bonus! do Q.10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
  .map((student) => student.score)
  .sort((a, b) => a - b)
  .join(', ');
  console.log(result); // 45, 66, 80, 88, 90
}