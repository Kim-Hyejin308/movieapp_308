let a = [1, 2];
let b = [3, 4];
// let c = a.concat(b); //배열 a와 b를 합쳐서 새로운 배열 c를 만듦
let c = [...a, ...b]; //위 수식과 같음

console.log(c);

let d = a;
console.log(d === a); //d와 a는 배열 a의 주소를 가리키고 있기 때문에 true가 나옴
d[0] = 10;
console.log(a, d); //d[0]을 10로 바꿨기 때문에 a[0]도 10로 바뀜

let e = [...a];
console.log(e === a); //e와 a는 각 배열의 주소를 가리키고 있기 때문에 false가 나옴
e[0] = 20;
console.log(a, e); //e[0]을 20으로 바꿨지만 a[0]은 바뀌지 않음

let student = {
  name: "홍길동",
  age: 90,
};

let student1 = { ...student };
student1.score = 100;
console.log(student, student1);
let student2 = student;

let key1 = score;
let key2 = name;
let student3 = { ...student, [key1]: 90 };
let student4 = { ...student, [key2]: "김철수" };
let student5 = { ...student, score: 90 };
console.log(student, student2, student3, student4, student5);
