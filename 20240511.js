// 2024.05.11
// JS 객체 자료형 (선언, 할당, 접근, 삭제, 반복문)

// 선언
let user = {};
console.log(user);

// 할당
user = {
    name: 'John'
    , age: 30
}
console.log(user);

// 접근
console.log(user.name);
console.log(user.age);

// 프로퍼티 추가
user.isAdmin = true;
console.log(user);

// 프로퍼티 삭제
delete user.age;
console.log(user);

// 대괄호 접근
user["likes birds"] = true;
console.log(user);

delete user["likes birds"];
console.log(user);

// 반복문 for in
for (let key in user) {
    console.log(key, user[key]);
}

// 문제1
let user2 = {}
user2.name = "John";
user2.surname = "Smith";
user2['name'] = "Pete"
delete user2['name'];
console.log(user2);

// 문제4
let salaries = {
    John: 100
    , Ann: 160
    , Pete: 130
}

sum = 0;
for (let key in salaries) {
    sum = sum + salaries[key];
}
console.log(sum);


// JS 동적 이벤트 (마우스 클릭 이벤트, id 접근, class 접근)
