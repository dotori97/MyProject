console.log(5=='5'); //true
console.log(true==1); //true
console.log(null==undefined); //true 

console.log(5==='5'); //false
console.log(true===1); //false
console.log(null===undefined); //false 

console.log(0==false); //true
console.log(0===false); //false

console.log(""==false); //true
console.log(""===false); //false

console.log(null==undefined); //true
console.log(null===undefined); //false

console.log('0'==false) // true
console.log('0'===false); //false

console.log("------------");

if (true){
    console.log("실행1");
}

if (null){
    console.log("실행2");
}

if (0){
    console.log("실행3");
}

if ({}){
    console.log("실행4");
}

if ([]){
    console.log("실행5");
}

if (undefined){
    console.log("실행6");
}

if ([0]){
    console.log("실행7");
}


const obj1 = {};
const obj2 = {};
const obj3 = obj1;

console.log(obj1 == obj2);
console.log(obj1 == obj2);
console.log(obj1 == obj3);
console.log(obj1 == obj3);

const arr1 = [];
const arr2 = [];
const arr3 = arr1;

console.log(arr1 == arr2);
console.log(arr1 == arr2);
console.log(arr1 == arr3);
console.log(arr1 == arr3);



