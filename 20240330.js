// 주석: Ctrl + /

// 콘솔 로그 메시지
// console.log("hello world");

// 경고창 메시지
// alert("hello world");

// html 메시지
// document.write("hello world");

// 변수 선언
let msg;

// 변수 할당
msg = "hello";

document.write(msg);

// 변수 선언 + 할당
let msg2 = " world";
document.write(msg2);


// 상수 선언 + 할당
const PI = 3.141592;
console.log(PI);

// Assignment to constant variable. 에러 발생
// PI = 2.0
// console.log(PI);


// 문제 1 - 변수 가지고 놀기
let admin, name;
name = "John";
admin = name;
// alert(admin);
console.log(admin);



// 숫자형 (정수, 실수)
let n = 123;
console.log(n);

// 큰 숫자형
let bigNum = 1234567890123456789012345678901234567890;
console.log(bigNum);

// 문자형
let str = "Hello";
console.log(str);

// 변수를 문자열 중간에 삽입
console.log( `Hello, ${str}!` );

// 불린형
let isFlag = true;
console.log(isFlag);

let isGreater = 4 > 1;
console.log(isGreater);

// 특수형
let age;
console.log(age);

age = null;
console.log(age);

// 2024.04.06 7주차 JS