//프로토 타입을 이용해 객체 생성
function Student(name, score) {
  this.name = name;
  this.score = score;
}
let std1 = new Student("홍길동", 100);
let std2 = new Student("손흥민", 100);
console.log(std1, std2);
console.log("----------------------------------------------------");
//생성자를 포함한 ECMA6문법
class Student1 {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}
let std3 = new Student1("김연아", 90);
let std4 = new Student1("장미란", 90);
console.log(std3, std4);
console.log("----------------------------------------------------");
//객체를 배열에 저장한 후 배열의 원소인 객체의 모든 속성을 반복문으로 전부 읽어오기
//for of / for in
let students = [std1, std2];
for (const student of students) {
  for (const key in student) {
    console.log(student[key]);
  }
}
console.log("----------------------------------------------------");
//property, method 를 포함한 객체 생성
let account = {
  owner: "홍길동",
  account_no: "1111",
  balanse: 10000,
  widthdraw: () => {
    console.log("출금");
  },
  deposit: () => {
    console.log("입금"); //deposit이 가지고 있는 "입금"출력
  },
  inquiry: () => {
    console.log("조회");
  },
};
console.log(account.owner); //owner가 가지고 있는 "홍길동"출력
account.deposit(); //deposit이 가지고 있는 "입금"출력
console.log(account.deposit); //수식 자체를 출력
console.log(account); //account가 가지고 있는 모든 값 출력

console.log("----------------------------------------------------");

class Account {
  constructor(owner, account_no, balanse) {
    this.owner = owner;
    this.account_no = account_no;
    this.balanse = balanse;
  }
  deposit(money) {
    console.log("입금");
    this.balanse += money;
  }
  inquiry() {
    console.log("조회", this.balanse);
  }
  widthdraw(money) {
    console.log("출금");
    if (this.balanse >= money) {
      this.balanse -= money;
    } else {
      console.log("출금불가");
    }
  }
}
let acc1 = new Account("홍길동", "1111", 10000);
let acc2 = new Account("손흥민", "2222", 20000);
acc1.deposit(10000);
acc1.inquiry();
acc1.widthdraw(20000);
acc1.inquiry();
