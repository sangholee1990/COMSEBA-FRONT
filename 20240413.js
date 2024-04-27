// // 또는 OR
// console.log(true || true);
// console.log(false || true);
// console.log(true || false);
// console.log(false || false);

// // 예시
// let hour = 9;
// if (hour < 10 || hour > 18) {
//     console.log("영업시간 (10-18)이 아닙니다.");
// }

// // 그리고 AND
// // true 그 외 false
// console.log(true && true);
// console.log(false && true);
// console.log(true && false);
// console.log(false && false);

// // 예시
// let hour2 = 12;
// let min2 = 30;
// if (hour2 === 12 && min2 === 30) {
//     console.log("현재 시각은 12시 30분입니다.");
// }

// // 부정 ! NOT
// // false
// console.log(! true);
// // true
// console.log(! 0);

// // 문제 1
// // 2
// console.log(null || 2 || undefined);

// // 문제 2
// // null
// console.log(1 && null && 2);

// // 문제 4
// let age = 15;
// if (14 <= age && age <= 90) {
//     console.log("현재 나이는 14~90에 속합니다.");
// }


// // while 무한 반복
// let i = 0;
// while (i < 5) {
//     i++;
//     console.log(i);
// }

// // do ... while 반복문
// i = 0;
// do {
//     i++;
//     console.log(i);
// } while (i < 10);

// // for 유한 반복
// for (let j = 0; j < 5; j++) {
//     console.log(j);
// }

// // for 유한 반복 + 반복문 강제 종료 break
// for (let j = 0; j < 5; j++) {
//     console.log(j);

//     if (j > 2) break;
// }

// // for 유한 반복 + 반복문 스킵 continue
// for (let j = 0; j < 5; j++) {
//     if (j > 2) continue;
//     console.log(j);
// }

// // 문제3
// for (let j = 2; j < 10; j++) {
//     if (j % 2 === 1) continue;
//     console.log(j);
// }

// // switch문
// let a = 6;
// switch (a) {
//     case 3:
//         console.log("비교하려는 값보다 작습니다.");
//         break;
//     case 4:
//         console.log("일치");
//         break;
//     case 5:
//         console.log("비교하려는 값보다 크다.");
//         break;
//     default:
//         console.log("어떤 값인지 파악 안됩니다.");
//         break;
// }

// ==============================================
// 2024.04.20 (학습) R 배열, 반복문 활용
// ==============================================
// let arr = new Array();
let arr = [];
console.log(arr);

// JS 배열 기초 (1차원/다차원 배열)
let fruits = ["사과", "오렌지", "자두"];
console.log(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 배열 내 요소 변경
fruits[2] = "배"
console.log(fruits);

// 배열 내 요소 개수
console.log(fruits.length);


// 배열 내 다양한 자료형 지원
let arr2 = ['사과', {name: '이보라'}, true, function() {alert("안녕하세요");}];

console.log(arr2);
console.log(arr2[1].name);

// arr2[3]();

// JS 배열 활용 (추가/삭제/조건 선택/정렬)
// 배열 끝 요소 삭제
let fruitList = ["사과", "오렌지", "자두"];
console.log(fruitList);
console.log(fruitList.pop());
console.log(fruitList);

// 배열 끝 요소 추가
fruitList.push("배");
console.log(fruitList);

// 배열 앞 요소 제거
fruitList.shift();
console.log(fruitList);

// 배열 앞 요소 추가
fruitList.unshift("사과");
console.log(fruitList);


// 배열 여러개 추가 
fruitList.push("망고", "애플망고", "사피이어 포도");
console.log(fruitList);

// 배열 여러개 삭제
fruitList.unshift("망고");
console.log(fruitList);

// for 반복문
for (let i=0; i < fruitList.length; i++) {
    console.log(i, fruitList[i]);
}

// for of 반복문
for (let fruit of fruitList) {
    console.log(fruit);
}

// 다차원 배열
let mat = [
    [1, 2, 3]
    , [4, 5, 6]
    , [7, 8, 9]
]

console.log(mat);
console.log(mat[0][0]);
console.log(mat[1][1]);
console.log(mat[2][2]);


// 배열 요소 삭제
console.log(fruitList);
delete fruitList[0];
console.log(fruitList);


// JS 반복문 활용 (for in/forEach 반복문)
fruitList.forEach(function(item, index, array){
    // console.log(item, index, array);
    console.log(item, index);
});
