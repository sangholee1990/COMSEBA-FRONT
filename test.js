// ==============================================
// 2023.12.09
// ==============================================
// 개발자도구에서 콘솔 확인
console.log("Hello World2");

// HTML 영역 확인
document.write("Hello Wolrd3");

// 경고창 메시지
// alert("경고 메시지");

// 변수 선언
let msg = "Hellow Meg";
// var msg = "Hellow Meg";

console.log(msg);
document.write(msg);
// alert(msg);

// 상수 선언
const BIRTH_DAY = "1990.11.19";
console.log(BIRTH_DAY);


// 문제 1
let admin = "John";
let name = admin;
// alert(admin);


// 숫자형
let num = 123;
console.log(num);

let num2 = 123.45;
console.log(num2);

// 문자형
let str = "str";
let str2 = 'single';
console.log(str2);

let phrase = `can another ${str}`;
console.log(phrase);

// 논리형
let isCheck = true;
console.log(isCheck);

let isFlag = false;
console.log(isFlag);

let isGrater = 4 > 1;
console.log(isGrater);

// 변수 선언
let age;
console.log(age);

// null 자료형 할당
age = null;
// console.log(age);

// 숫자형 할당
age = 10;
// console.log(age);

name = "Ilya";
// console.log( `hello ${1}` );
// console.log( `hello 1` );
// console.log( `hello ${"name"}` );
// console.log( `hello name` );

// console.log( `hello ${name}` );

// ==============================================
// 2023.12.16
// ==============================================
// alert창
// alert("Hello");

// let age = prompt('나이를 입력해주세요.', 100);
// alert(`당신의 나이는 ${age}살 입니다.`);

// prompt창
// let age2 = prompt('나이를 입력해주세요.', 100);
// alert(`당신의 나이는 ${age2}살 입니다.`);

// confirm창
// let isBoss = confirm("당신이 주인 인가요?");
// alert(isBoss);

// 기본 연산자
// 덧셈 +, 뺼셈 -, 곱셈 *, 나눗셈 /, 나머지 %, 거듭제곱 ** 
let a2 = 2;
let a4 = 4;

// console.log(a2 + a4);
// console.log(a2 - a4);
// console.log(a2 * a4);
// console.log(a2 / a4);
// console.log(a2 % a4);
// console.log(a2 ** a4);

// 문자 연산자
let s1 = "my";
let s2 = "string";

// 변수를 통해 연산
// alert(s1 + s2);

// 하드코딩을 통해 연산
// alert("my" + "string");

// 복합 (문자 + 숫자) 연산자
// "12" 예상
// alert( '1' + 2 );

// '221'이 아니라 '41'이 출력
// alert(2 + 2 + '1' );

// 복합 (문자 + 숫자) 연산자 --> 문자화
// alert( '1' + String(2) );
// alert( '1' + (2).toString() );


// 증가/감소 연산자
let cnt = 2;
cnt = cnt + 1;
// console.log(cnt);


let cnt2 = 2;
// 1씩 증가
cnt2++;
// console.log(cnt2);

// 1씩 감소
cnt2--;
// console.log(cnt2);


// 비교 연산자
// 크다 >, 작다 <, 일치 ===, 불일치 !==

// true
// console.log( 2 > 1 );

// false
// console.log( 2 === 1 );

// true
// console.log( 2 !== 1 );

// true
// console.log( 1 === 1 );

// true
let result = 5 > 4;
// console.log(result);

// 자료형이 다른 값들끼리의 비교
// 자료형을 일치
// 문자열 <> 문자열, 숫자형 <> 숫자형
// 문자열, 숫자형 비교

// false
// console.log(0 === "0");

// true 문자열 변환
// console.log(String(0) === "0");

// true 숫자형 변환
// console.log(0 === Number("0"));


// 조건문
// let year = prompt('올해는 몇년도일까요???', '');

// if문
// if (year === '2023') {
//     alert('정답');
// } 

// if-else문
// if (year === '2023') {
//     alert('정답');
// } else {
//     alert('오답');
// }

// 조건부 연산자 (삼항 연산자)
// let year2 = prompt('올해는 몇년도일까요???', '');
// let resMsg = (year2 === '2023') ? '정답' : '오답';
// alert(resMsg);

// 문제3
// let number = prompt('숫자를 입력해주세요.');
// console.log(number);

// 방법 1
// if (number > 0) console.log(1);
// if (number < 0) console.log(1);
// if (number === 0) console.log(0);


// 방법 2
// if (number > 0) {
//     console.log(1);
// } else if (number < 0) {
//     console.log(1);
// } else {
//     console.log(0);
// }

// 방법 3
// let resNum = (number == 0) ? 0 : 1;
// console.log(resNum);


// ==============================================
// 2023.12.23
// ==============================================
// AND 연산자
// let hour = 12;
// let min = 30;
// let min = 29;

// if (hour === 12 && min === 30) {
//     alert("현재 시각은 12시 30분입니다.");
// } else {
//     alert("현재 시간은 12시 30분 아닙니다.")
// }


// OR 연산자
// let hour2 = 9;
// let hour2 = 11;
// if (hour2 < 10 || hour2 > 18) {
//     alert(`영업 시간 ${hour2}이 아닙니다.`);
// } else {
//     alert(`영업 시간 ${hour2}입니다.`);
// }

// // NOT 연산자
// let hour3 = 12;
// // let min3 = 30;
// let min3 = 29;

// if (! (hour3 === 12 && min3 === 30)) {
//     alert("현재 시간은 12시 30분 아닙니다.");
// } else {
//     alert("현재 시각은 12시 30분입니다.");
// }

// 문제 4
// let age2 = 29;
// let age2 = 100;

// if (14 <= age2 && age2 <= 90) {
//     alert(`현재 나이 ${age2}는 14~90 포함된다.`);
// } else {
//     alert(`현재 나이 ${age2}는 14~90 포함되지 않는다.`);
// }

// while문
// let i = 0;
let i = -999;
while (i < 3) {
    console.log(i);

    i = i + 1;
    // i++;
}


// for문
// for (let j = 0; j < 3; j++) {
//     console.log(`j : ${j}`);
// }


// for문
// for (let j = 0; j < 3; j++) {
//     if (j === 0) continue;
//     console.log(`j : ${j}`);

//     if (j === 1) break;
// }

// 문제3
// for (let j = 2; j <= 10; j++) {
//     // 홀수인 경우
//     // if ((j % 2) === 1) continue;
//     if (! ((j % 2) === 0)) continue;

//     console.log(`j : ${j}`);
// }

// switch문
// let a = 2 + 2;
// let a = 2 + 3;
// switch(a) {
//     case 3:
//         alert(`비교값 ${a}보다 작음`);
//         break;
//     case 4:
//         alert(`비교값 ${a}과 일치`);
//         break;
//     case 5:
//         alert(`비교값 ${a}과 큼`);
//         break;
//     default:
//         alert("비교값 없음");
// }

// 요일에 따른 메시지 출력
// 현재 요일을 숫자로 반환 (0 = 일요일, 1 = 월요일, ..., 6 = 토요일)
let day = new Date().getDay();

switch (day) {
  case 0:
    console.log("오늘은 일요일입니다.");
    break;
  case 1:
    console.log("오늘은 월요일입니다.");
    break;
  case 2:
    console.log("오늘은 화요일입니다.");
    break;
  case 3:
    console.log("오늘은 수요일입니다.");
    break;
  case 4:
    console.log("오늘은 목요일입니다.");
    break;
  case 5:
    console.log("오늘은 금요일입니다.");
    break;
  case 6:
    console.log("오늘은 토요일입니다.");
    break;
  default:
    console.log("알 수 없는 요일입니다.");
}



// 과일 이름에 따른 가격 출력
let fruit = "사과";

switch (fruit) {
  case "바나나":
    console.log("바나나는 1000원입니다.");
    break;
  case "사과":
    console.log("사과는 2000원입니다.");
    break;
  case "오렌지":
    console.log("오렌지는 1500원입니다.");
    break;
  case "포도":
    console.log("포도는 3000원입니다.");
    break;
  default:
    console.log("죄송합니다, 우리 가게에는 그 과일이 없습니다.");
}
