//ctrl+j 눌러서 터미널을 열고
//현재 파일의 경로로 이동 cd C:\khj\techstory\js
// node .\destructcure.js 을 입력하여 배열변수 student에 들어있는 정보 출력

let student = {
  name: "홍길동",
  age: 20,
  score: 100,
};
let { name, age, score } = student;

// let name =student.name;
// let age =student.age;
// let score =student.score;

console.log(name, age, score);

let arr = [1, 2, 3, 4, 5];

// let a = arr[0];
// let b = arr[1];

let [a, b, ...rest] = arr;

console.log(a, b, rest);
