function greet(name){
    return `Hello, ${name}!`;
}   
console.log(greet("Alice"));

var greet ="hello";
var name = 'Jungwon'
console.log(`world ${name}`); //backtick(`) 안의 문자열 안에서 변수를 사용하고 싶을 때 ('world ' + name)의 의미

//익명함수
const square = function(number) {
    return number * number;
   };
   console.log(square(5)); // 25

//기명함수
const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
   };
   console.log(factorial(5)); // 120
   var result = factorial(5);
   console.log(`결과는: ${result} 입니다.`);

//화살표 함수
//화살표 함수는 간결한 문법으로 함수를 정의하는 방식입니다. function 키워드 대신 => 를 사용합니다.
//화살표 함수는 this 바인딩이 다르다는 특징이 있습니다.

const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // 6

const greet1 = name => `Hello, ${name}!`;
console.log(greet1("Bob"));
   
//본문이 한 줄일 때는 중괄호와 return 키워드를 생략할 수 있습니다.

const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

//스코프 블록 안에서만 사용하도록 강제
//블록 스코프는 let과 const 키워드를 사용하여 선언된 변수에 적용 

function localScopeExample() {
    let localVar = "I am a local variable";
    console.log(localVar); // "I am a local variable"
   }
   localScopeExample();
   // console.log(localVar); // 오류: localVar는 지역 변수이므로 함수 밖에서 접근 불가

   if (true) {
    let blockScopedVar = "I am block scoped";
    console.log(blockScopedVar); // "I am block scoped"
   }
   // console.log(blockScopedVar); // 오류: blockScopedVar는 블록 스코프이므로 블록
   // 밖에서 접근 불가


   let isLoggedIn=true;
   // let greeting = isLoggedIn ? "환영합니다" : "로그인해주세요";
   let greeting = '';
   if (isLoggedIn){
        greeting = "환영합니다";
        // console.log(greeting);
   }else{
        greeting = "로그인 해주세요";
        // console.log(greeting);
   }
   console.log(greeting);

   let x = 15;
   let y = 20;
   let max = x > y ? x : y;
   console.log(`최댓값은 ${max}입니다`);

   // 만약에 40시간보다 많이 일했는지
   //40시간보다 많이 일한 시간을 구하고
   // 더 많이 일한 시간만큼만 1.5배를 주고
   //....

    let hoursWorked = 45;
    let hourlyRate = 20;

    if (hoursWorked > 40) {
    let overtime = hoursWorked - 40;
    let overtimePay = overtime * hourlyRate * 1.5;
    let regularPay = 40 * hourlyRate;
    let totalPay = regularPay + overtimePay;
    console.log(`총 급여는 ${totalPay}입니다.`);
    } else {
    let totalPay = hoursWorked * hourlyRate;
    console.log(`총 급여는 ${totalPay}입니다.`);
    }


   let date = new Date();
   let currentHour = date.getHours();
   console.log(currentHour);
   if (currentHour < 12){
        console.log("오전입니다.");
   } else if (currentHour < 18){
        console.log("오후입니다.");
   } else {
        console.log("저녁입니다.");
   }


   const numbers = [1, 2, 3, 4, 5];

   numbers.forEach(function(num){
        console.log(`number=${num}`);
   })
   //함수를 파라미터로 사용. 콜백함수


   
