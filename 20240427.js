console.log("2024.04.27");

// JS 함수 기초 (선언, 할당, 지역/외부 변수, 매개 변수)
// 함수 선언
function showMeg() {
    console.log("안녕하세요");
}

// 함수 실행
showMeg();
showMeg();

// 지역 변수
function showMeg2() {
    // 지역변수
    let msg = "안녕하세요2";
    console.log(msg + "내부");
}

showMeg2();

// 에러 발생 
// console.log(msg + "외부");


// 외부 변수
let userName = "John";
function showMeg3() {
    let msg = "Hello, " + userName
    console.log(msg + "내부+외부");
}

showMeg3();

// 매개변수 (인자)
function showMeg4(from, text) {
    console.log(from + " : " + text);
}

showMeg4("Ann", "Hello");
showMeg4("from", "Hello");

// JS 함수 활용 (매개변수 기본값/반환값)
// 매개변수 기본값 설정
function showMeg5(from, text = "no text given") {
    console.log(from + " : " + text);
}

showMeg5("Ann");
showMeg5("from", "Hello");

// 매개변수 반환값
function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
console.log(result);


console.log(sum(sum(1, 2), 5));

// // 매개변수 반환값 활용
// function chkAge(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return confirm("보호자의 동의를 받으셨나요?");
//     }
// }

// let age = prompt("나이를 알려주세요.", 18);
// if (chkAge(age)) {
//     console.log("접속 허용");
// } else {
//     console.log("접속 차단");
// }

// // 문제 1
// function chkAge2(age) {
//     if (age >= 18) return true;
//     return confirm("보호자의 동의를 받으셨나요?");
// }

// let age2 = prompt("나이를 알려주세요.", 18);
// if (chkAge2(age2)) {
//     console.log("접속 허용");
// } else {
//     console.log("접속 차단");
// }

// 문제3
function min(a, b) {
    return a > b ? b : a;
}
console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

// 문제4
function pow(a, b) {
    mul = 1;
    for (let i = 0; i < b; i++) {
        mul = mul * (a)
    }

    return mul;
}

console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));

// JS 함수 활용2 (화살표/축약 함수, 콜백 함수)
// 기본 문법
function sayHi() {
    console.log("Hello");
}

sayHi();

// 기본 문법2
let sayHi2 = function() {
    console.log("Hello");
}

sayHi2();

// 함수 생성
// 함수 복사
let func = sayHi

// 복사한 함수 실행
func();


// 콜백함수
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

function showYes() {
    console.log("동의하셨습니다.");
}

function showNo() {
    console.log("취소 버튼을 누르셨습니다.");
}

// ask("동의하십니까?", showYes, showNo);

// 화살표함수
function sum4 (a, b) {
    return a + b;
}
console.log(sum4(1, 199));

let sum2 = function(a, b) {
    return a + b;
}

console.log(sum2(1, 199));

let sum3 = (a, b) => a + b;
console.log(sum3(1, 199));

// 문제 1
const ask2 = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
}

const showYes2 = () => {
    console.log("동의하셨습니다.");
}

const showNo2 = () => {
    console.log("취소 버튼을 누르셨습니다.");
}

ask2("동의하십니까?", showYes2, showNo2);
