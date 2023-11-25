/* guestBook.js */
const header = document.querySelector(".guest__header");

header.addEventListener("click", () => {
  window.location.href = "/";
});

async function getComment() {
  const response = await fetch("https://comseba.onrender.com/comment");
  const jsonData = await response.json();

  return jsonData;
}

const postComment = async (param) => {
  console.log(param);
  const res = await fetch("https://comseba.onrender.com/createcomment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(param),
  });
  return await res.json();
};

//console.log(getComment())
getComment();

/**
 * 날짜를 ~일전 ~초전 ~분전 등등 포맷에 맞춰 반환해주는 함수
 * @param {*} start 비교할 날짜
 * @param {*} end 오늘 날짜
 * @returns ~일전 , ~분전 등등 포맷에 맞춘 문자열
 */
const elapsedTime = (start, end) => {
  const diff = (end - start) / 1000;

  const times = [
    { name: "년", milliSeconds: 60 * 60 * 24 * 365 },
    { name: "개월", milliSeconds: 60 * 60 * 24 * 30 },
    { name: "일", milliSeconds: 60 * 60 * 24 },
    { name: "시간", milliSeconds: 60 * 60 },
    { name: "분", milliSeconds: 60 },
  ];

  for (const value of times) {
    const betweenTime = Math.floor(diff / value.milliSeconds);

    if (betweenTime > 0) {
      return `${betweenTime}${value.name} 전`;
    }
  }
  return "방금 전";
};

const makeComment = async () => {
  //api를 사용할 예정이기 때문에 async/await 함수 사용
  const db = await getComment();
  // 서버로부터 DB를 받아온다.

  const commentArea = document.querySelector(".guest__comment-area");
  //댓글을 추가하기위해 영역을 선택

  //이전에 배열내장함수인 map과 백틱을 활용하여 html을 문자열 형태로 직접 만들어준다.
  const htmlList = db.commentList.map((info) => {
    const date = info.time.split("-");
    // "-"를 구분자로 년-월-일-시-분-초를 배열에 저장
    const time = new Date(...date);
    //배우진 않았지만 ...(스프레드 연산자)를 활용해서 넣어주면 해당 값들로 date객체를 만들 수 있다.
    const curTime = new Date(); // 현재 시간을 가져온다.

    const timeStr = elapsedTime(time, curTime);
    console.log(time);

    return `<div class="guest__comment">
    <div class="guest__comment__left">
      <div class="guest__comment__left__name">${info.name}</div>
    </div>
    <div class="guest__comment__right">
      <div class="guest__comment__right__text">
        ${info.comment}
      </div>
      <div class="guest__comment__right__time">${timeStr}</div>
    </div>
  </div>`;
  });

  //htmlList는 배열이기 때문에 reduce 내장함수를 활용하여 이를 붙여준다.
  //reduce가 이해하기 어렵다면 for문을 활용해서 만들어보자!
  const html = htmlList.reduce((a, c) => a + c, "");

  commentArea.innerHTML = html;
};

makeComment();

const commentBtn = document.querySelector(".guest__form button");
//버튼을 추가
commentBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  //form 태그안의 버튼은 누르면 새로고침되는 성질이 있어서 이를 막아줌

  const name = document.querySelector(".guest__form input");
  const comment = document.querySelector(".guest__form textarea");
  //input과 text-area부분을 선택

  const time = new Date();
  const timeStr = `${time.getFullYear()}-${time.getMonth()}-${time.getDate()}-${time.getHours()}-${time.getMinutes()}-${time.getSeconds()}`;
  //시간을 Date객체가 아닌, 문자열 형태로 저장하기 위함

  console.log(name.value, comment.value, timeStr);

  const state = await postComment({
    name: name.value,
    comment: comment.value,
    time: timeStr,
  });

  //데이터가 정상적으로 들어왔다면
  console.log(state);
  if (state) {
    window.location.reload();
  }
});
