var a = 1;
var b = 1;
var c = a;
a++;

console.log(a==b);
console.log(c==a);
console.log(a, c); //값이 복사된 것이므로 a는 바뀌어도 c는 안 바뀜
