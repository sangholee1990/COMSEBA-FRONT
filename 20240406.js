// 2024.04.06 7주차
// JS 모달창 (alert, prompt, confirm)
// alert("Hello");

// let age = prompt("나이를 입력해주세요.", 100);
// alert(`당신의 나이는 ${age}살 입니다.`);

// let isBoss = confirm("당신이 주인 인가요?");
// alert(isBoss);

// JS 기본 연산자 (덧셈/뺄셈/곱셈/나눗셈/나머지/거듭제곱)
let x = 1;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// 문자열 + 문자열 연결
let s = "my" + "string";
console.log(s);

// 문자열 + 숫자형 -> 문자열
console.log('1' + 2);
console.log(2 + '1');

// 복합 할당 연산자
let n = 2;
console.log(n);

n = n + 5;
console.log(n);

// n = n + 5
n += 5
console.log(n);

// n = n * 5
n *= 5
console.log(n);

// JS 비교 연산자 (일치/불일치)
console.log(2 > 1);
console.log(2 == 1);
console.log(2 != 1);

// true, false
console.log(true  == 1);
console.log(false  == 0);

// 자료형/값도 비교 (추천 !)
console.log(2 === 1);
console.log(2 !== 1);

// JS 조건문 기초 (if/else, 삼항연산자)
let year = prompt("올해는 몇년도일까요?", '');
// if (year == 2024) {
if (year === "2024") {
    console.log("정답입니다.");
} else {
    console.log("오답입니다.");
}

// 삼항연산자
let msg = (year === "2024") ? "정답입니다." : "오답입니다";
console.log(msg);
