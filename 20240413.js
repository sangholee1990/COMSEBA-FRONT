// 또는 OR
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

// 예시
let hour = 9;
if (hour < 10 || hour > 18) {
    console.log("영업시간 (10-18)이 아닙니다.");
}

// 그리고 AND
// true 그 외 false
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

// 예시
let hour2 = 12;
let min2 = 30;
if (hour2 === 12 && min2 === 30) {
    console.log("현재 시각은 12시 30분입니다.");
}

// 부정 ! NOT
// false
console.log(! true);
// true
console.log(! 0);

// 문제 1
// 2
console.log(null || 2 || undefined);

// 문제 2
// null
console.log(1 && null && 2);

// 문제 4
let age = 15;
if (14 <= age && age <= 90) {
    console.log("현재 나이는 14~90에 속합니다.");
}


// while 무한 반복
let i = 0;
while (i < 5) {
    i++;
    console.log(i);
}

// do ... while 반복문
i = 0;
do {
    i++;
    console.log(i);
} while (i < 10);

// for 유한 반복
for (let j = 0; j < 5; j++) {
    console.log(j);
}

// for 유한 반복 + 반복문 강제 종료 break
for (let j = 0; j < 5; j++) {
    console.log(j);

    if (j > 2) break;
}

// for 유한 반복 + 반복문 스킵 continue
for (let j = 0; j < 5; j++) {
    if (j > 2) continue;
    console.log(j);
}

// 문제3
for (let j = 2; j < 10; j++) {
    if (j % 2 === 1) continue;
    console.log(j);
}

// switch문
let a = 6;
switch (a) {
    case 3:
        console.log("비교하려는 값보다 작습니다.");
        break;
    case 4:
        console.log("일치");
        break;
    case 5:
        console.log("비교하려는 값보다 크다.");
        break;
    default:
        console.log("어떤 값인지 파악 안됩니다.");
        break;
}