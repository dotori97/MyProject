// const number = Math.random();
// console.log(number);

const prompt = require('prompt-sync')({sigint:true});

let targetNumber = Math.floor(Math.random() * 100) + 1;
let guess = null;

while (guess !== targetNumber){
    guess = parseInt(prompt("Guess a number between 1 and 100:"));

    if (guess < targetNumber){
        console.log(`${guess}보다 큽니다. 다시 시도하세요`);
    }else if (guess > targetNumber){
        console.log(`${guess}보다 작습니다. 다시 시도하세요`);
    }else {
        console.log("정답입니다!");     
        break;
    }
}

