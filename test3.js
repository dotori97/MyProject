let car = {
    brand: "Toyota",
    model: "Corolla",
    start: function() {
        console.log(`Starting the ${this.brand} ${this.model}`);
    }
};

car.start(); 

// const jsonString = '{"name":"Alice","age":25,"isStudent":false}'; // json 아님. string. 하지만 통신할 때는 텍스트로 만들어서 보냄. 
// console.log(jsonString.name);

const jsonString = {"name":"Alice","age":25,"isStudent":false}; // 이제야 json 파서가 작동해서 실행
console.log(jsonString.name);

const obj = { name: "Alice", age: 25, isStudent: false };
const jsonString2 = JSON.stringify(obj);
console.log(jsonString2); 

const person = {
    name: 'Alice',
    age: 25,
    occupation: 'Engineer'
  };
  
  const { name: fullName, age: years } = person;  // person을 변수에 담아서 사용(person.name 처럼 사용하지 않고 별칭 사용)

console.log(fullName); // 'Alice'
console.log(years); // 25


