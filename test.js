let greeting = "Hello, World";
let name = 'Alice';

console.log(greeting);
console.log(name);

let age=30;
let pi = 3.14;

console.log(age);
console.log(pi);

let isStudent = true;
let hasGraduated = false;

console.log(isStudent);
console.log(hasGraduated);


//undifined는 변수가 선언되었지만 값이 할당되지 않은 상태를 나타낸다.
//undifined는 자바스크립트에만 있는 일종의 자료형(?)

let address;
console.log(address);

//null은 의도적으로 값이 없음을 나타내기 위해 사용

let phoneNumber  = null;
console.log(phoneNumber);

//스코프 : 블록 안에서만 생성된 변수는 블록 안에서만 사용할 수 있다.

let message = "hello";
message = "welcome";

if (true) {
    let localMessage = "This is local";
    console.log(localMessage); // "This is local"
}
// console.log(localMessage); // 오류: 블록 스코프 내에서만 접근 가능

//json 
const person = {
    name: "Alice",
    age: 25
}
console.log(person);
//json

person.age = 26;
console.log(person);

//배열
let fruits = ["apple", "banana"];

let mixedArray = [1, "hello", true, null];
console.log(mixedArray);

//배열 매서드
fruits.push("cherry");
console.log(fruits);

let dynamicVar ="hello";  
console.log(dynamicVar.push); //push는 string에게는 없는 속성. 배열이 갖고 있는 속성. 

let lastFruits = fruits.pop();
console.log(fruits);

fruits = ["apple", "banana", "cherry"];
let firstFruit = fruits.shift();  //que 개념??
console.log(firstFruit); // "apple"
console.log(fruits); // ["banana", "cherry"]

fruits = ["banana", "cherry"];
fruits.unshift("apple"); 
console.log(fruits); // ["apple", "banana", "cherry"]

let numbers = [1, 2, 3];
let doubled = numbers.map(function(number) {
    return number * 2;
});
console.log(doubled); // [2, 4, 6]


