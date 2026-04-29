// falsy한 값
let value = "hello";
// if (value) {
//   console.log(value.length);
// }
console.log(value && value.length);
// if(value ==""||value==undefined||value==0||value==null||value==false){
// if (!value) {
//   console.log(value, "falsy한 값입니다");
// } else {
//   console.log(value, "truthy한 값입니다");
// }

// let x=0;
// let y=0;
// let z=0;

//이렇게 선언할 수도 있음
let x = (y = z = 0); //괄호 자동으로 붙음 x=y=z=0;
let a,
  b,
  c = 0;
console.log(x, y, z);
console.log(a, b, c);

// let f = () => 10;
// console.log(f());
let f = () => {
  let c = 10;
  return c;
}; //괄호를 쓰게 되면 반드시 return 10 이렇게 써야함;
console.log(f());

const i = 1,
  j = 1;
const obj = { i: i, j: j };
console.log(obj.i, obj.j);

const name = "홍길동",
  age = 20;
// const person = { name: name, age: age };
const person = { name, age }; //key와 value가 같으면 하나로 줄여서 쓸 수 있음
console.log(person.name, person.age);
