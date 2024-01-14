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
// let i = -999;
// while (i < 3) {
//     console.log(i);

//     i = i + 1;
//     // i++;
// }


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
// let day = new Date().getDay();

// switch (day) {
//   case 0:
//     console.log("오늘은 일요일입니다.");
//     break;
//   case 1:
//     console.log("오늘은 월요일입니다.");
//     break;
//   case 2:
//     console.log("오늘은 화요일입니다.");
//     break;
//   case 3:
//     console.log("오늘은 수요일입니다.");
//     break;
//   case 4:
//     console.log("오늘은 목요일입니다.");
//     break;
//   case 5:
//     console.log("오늘은 금요일입니다.");
//     break;
//   case 6:
//     console.log("오늘은 토요일입니다.");
//     break;
//   default:
//     console.log("알 수 없는 요일입니다.");
// }



// 과일 이름에 따른 가격 출력
// let fruit = "사과";

// switch (fruit) {
//   case "바나나":
//     console.log("바나나는 1000원입니다.");
//     break;
//   case "사과":
//     console.log("사과는 2000원입니다.");
//     break;
//   case "오렌지":
//     console.log("오렌지는 1500원입니다.");
//     break;
//   case "포도":
//     console.log("포도는 3000원입니다.");
//     break;
//   default:
//     console.log("죄송합니다, 우리 가게에는 그 과일이 없습니다.");
// }


// ==============================================
// 2023.12.30
// ==============================================
// // 배열 선언
// let arr = new Array();
// console.log(arr);

// let arr2 = [];
// console.log(arr2);

// // 배열 할당
// let fruits = ["사과", "오렌지", "자두"];
// console.log(fruits);

// // 배열 내 인덱스 항목 선택
// // 사과
// console.log(fruits[0]);

// // 오렌지
// console.log(fruits[1]);

// // 자두 TODO
// // alert(fruits[2])

// // 배열 개수
// console.log(fruits.length);

// // 배열 내 마지막 인덱스에서 "자두" 삭제
// console.log(fruits.pop());
// console.log(fruits);

// // 배열 내 마지막 인덱스에서 "배" 추가
// console.log(fruits.push("배"));
// console.log(fruits);


// // 배열 내 처음 인덱스에서 "사과" 삭제
// console.log(fruits.shift());
// console.log(fruits);

// // 배열 내 처음 인덱스에서 "귤" 추가
// console.log(fruits.unshift("귤"));
// console.log(fruits);

// // fruits에 대한 for 반복문
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// // fruits에 대한 for in 반복문
// for (let idx in fruits) {
//     console.log(fruits[idx]);
// }

// // fruits에 대한 forEach 반복문
// fruits.forEach(function(item, index, array) {
//     console.log(item, index, array);
// });


// // fruits에 대한 forEach 축약 반복문
// fruits.forEach(fruit => console.log(fruit));


// // let errfruits = null;
// // // (에러) errfruits에 대한 for 반복문
// // for (let i = 0; i < errfruits.length; i++) {
// //     console.log(errfruits[i]);
// // }

// // // (에러) errfruits에 대한 forEach 반복문
// // errfruits.forEach(function(item, index, array) {
// //     console.log(item, index, array);
// // });

// // 문제 1
// let fruitList = ["사과", "배", "오렌지"];

// let shoppingCart = fruitList;
// shoppingCart.push("바나나");

// console.log(shoppingCart);
// console.log(shoppingCart.length);

// // 문제2
// let arrs = ["Jazz", "Blues"];
// console.log(arrs);

// console.log(arrs.push("Rock-n-Roll"));
// console.log(arrs);

// arrs[1] = "Classics";
// console.log(arrs);

// console.log(arrs.shift());
// console.log(arrs);

// console.log(arrs.unshift("Rap", "Reggae"));
// // console.log(fruits.unshift("Reggae"));
// // console.log(fruits.unshift("Rap"));
// console.log(arrs);


// // concat 배열 추가
// let arr3 = [1, 2];
// console.log(arr3);

// // arr3 배열을 기준으로 배열 1차원 추가
// console.log(arr3.concat([3, 4]));

// // arr3 배열을 기준으로 배열 1차원 추가
// console.log(arr3.concat([3, 4], [5, 6]));


// // 바나나 키워드를 통해 찾기
// let fruits4 = ["사과", "배", "오렌지", "바나나", "바나나2"];

// fruits4.forEach(function(fruit) {
//     if (fruit.includes("바나나")) {
//         console.log(fruit);
//     }
// });


// // 바나나와 동일한 항목 추출
// let fruits5 = fruits4.filter(item => item === "바나나");console.log(fruits5);


// // 배열 정렬
// console.log(fruits4);
// fruits4.sort();
// console.log(fruits4);

// // 문제 2
// let arr8 = [5, 3, 8, 1];
// console.log(arr8);

// let ret = arr8.filter(item => 1 <= item && item <= 4);
// console.log(ret);


// // 문제4
// let arr9 = [5, 2, 1, -10, 8];
// console.log(arr9.sort());
// console.log(arr9.sort().reverse());


// ==============================================
// 2024.01.06
// ==============================================
// *****************************
// 함수 선언
// *****************************
// 매개변수 X
// 반환값 return X
function showMsg() {
    alert("안녕하세요");
}

// *****************************
// 함수 호출/할당
// *****************************
// showMsg();

// *****************************
// 내부 변수 
// *****************************
function showMsg2() {
    // 함수 내 지역변수
    let msg = "안녕하세요2";
    alert(msg);
}

// 함수 호출
// showMsg2();

// console.log(msg)

// *****************************
// 외부 변수
// *****************************
let userName = 'John';

function showMsg3() {
    // 함수 내 지역변수
    let msg = "안녕하세요3";
    alert(msg + userName);
}

// showMsg3();


// *****************************
// 매개 변수
// *****************************
// function showMsg4(from, text) {
//     // 함수 내 지역변수
//     let msg = from + " : "+ text;
//     alert(msg);
// }

// showMsg4("Ann", "Hello");
// showMsg4("Ann", "What's up?");


// *****************************
// 함수 기본값 
// *****************************
// function showMsg5(from = "Ann", text = "Hello") {
//     // 함수 내 지역변수
//     let msg = from + " : "+ text;
//     alert(msg);
// }

// // 기본값으로 함수 호출
// showMsg5();

// // 매개변수를 통해 함수 호출
// showMsg5("Ann", "What's up?");


// *****************************
// 함수 반환값
// *****************************
// function calc(a, b) {
//     let sum = a + b;
//     return sum;
// }

// let sumVal = calc(1, 2);
// console.log(sumVal);

// console.log(calc(100, 200));


// *****************************
// 함수 반환값2
// *****************************
// function checkAge(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return confirm("보호자의 동의를 받으셨나요?");
//     }
// }

// let age2 = prompt("나이를 알려주세요", 18);

// if (checkAge(age2)) {
//     alert("접속 허용");
// } else {
//     alert("접속 차단")
// }

// *****************************
// 문제1
// *****************************
// function checkAge3(age) {
//     if (age >= 18) {
//         return true;
//     } 
        
//     return confirm("보호자의 동의를 받으셨나요?");
// }

// let age3 = prompt("나이를 알려주세요", 18);

// if (checkAge3(age3)) {
//     alert("접속 허용");
// } else {
//     alert("접속 차단")
// }

// *****************************
// 문제2
// *****************************
// function checkAge4(age) {
//     return (age >= 18) ? true : confirm("보호자의 동의를 받으셨나요?");
// }

// let age4 = prompt("나이를 알려주세요", 18);

// if (checkAge4(age4)) {
//     alert("접속 허용");
// } else {
//     alert("접속 차단")
// }


// *****************************
// 문제3
// *****************************
// function min4(a, b) {
//     return (a >= b) ? b : a;
// }

// console.log(min4(2, 5));
// console.log(min4(3, -1));
// console.log(min4(1, 1));

// *****************************
// 축약/화살표 함수
// *****************************
// let sum3 = (a, b) => a + b;
// console.log( sum3(1, 2) );
// console.log( sum3(100, 200) );


// let sum4 = function(a, b) {
//     return a + b;
// }
// console.log( sum4(1, 2) );
// console.log( sum4(100, 200) );


// ==========================================
// 2024.01.13
// ==========================================
// 객체 선언
let user = {};
let user2 = new Object();

console.log(user);

// 객체 할당
user = {
    name: "John"
    , age: 30
}
console.log(user);

// 객체 접근 (속성값 가져오기)
// key-value (name-John)
console.log(user.name);
console.log(user.age);

console.log(user["name"]);
console.log(user["age"]);

// 객체 추가
// 관리자 여부
user.isAdmin = true;
console.log(user);

// 객체 삭제 (age 속성)
delete user.age; 
console.log(user);

// 객체 반복문
for (let key in user) {

    // 키 name, age, isAdmin
    console.log("key : " + key);

    // 키에 해당하는 값 John, 30, true
    console.log("value : " + user[key]);
};


// 문제 1
user = {};
console.log(user);

user.name = "John";
console.log(user);

user.surname = "Smith";
console.log(user);

user.name = "Pete";
console.log(user);

delete user.name;
console.log(user);

// 문제 4
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
    let value = salaries[key]
    sum = sum + value;
};

console.log(sum);

// test.js 영역
document.getElementById('id-mouseClick').addEventListener('click', function() {
    console.log('id태그-마우스 클릭 버튼이 클릭되었습니다!');
});

// test.js 영역
let eleList = document.getElementsByClassName('class-mouseClick');
Array.from(eleList).forEach(function(element) {
    element.addEventListener('click', function() {
      console.log('class태그-마우스 클릭 버튼이 클릭되었습니다!');
    });
});
