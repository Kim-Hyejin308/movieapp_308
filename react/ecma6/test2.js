let a;
let b = 10;
// let x = a != null && a != undefined ? a : b; //a가 null이거나 undefined가 아니면 a를 쓰고, 그렇지 않으면 b를 쓰겠다
let x = a ?? b; //위 수식과 같음

console.log(x);
