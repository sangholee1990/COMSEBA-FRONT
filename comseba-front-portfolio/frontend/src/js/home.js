const header = document.querySelector(".home__header");

header.addEventListener("click", () => {
  window.location.href = "/";
});

const moveComsebaPage = () => {
  window.location.href = "http://www.comseba.co.kr/";
};

const moveComsebaInstagram = () => {
  window.location.href = "https://www.instagram.com/comseba_1992/";
};

const moveComsebaYoutube = () => {
  window.location.href =
    "https://www.youtube.com/channel/UCzSgCAZF86PAE-dk9GAn7kg";
};

const skillDescriptionContent = {
  C: [
    "C언어 환경,C언어 개요 및 특징, 컴파일러 사용법,C언어 기본문법",
    "C언어 연산자와 함수, 제어문, 함수와 변수",
    "포인터와 배열, 소트 알고리즘의 이해",
    "문자배열과 포인터 변수를 이용하는 방법의 이해 및 연습",
    "메모리 동적 할당의 이해 및 연습",
    "구조체 배열의 이해 및 구조체 포인터 변수의 이해와 연습",
  ],
  JAVA: [
    "AWT의 개요 및 작성 요령",
    "layout의 종류와 활용",
    "각 컴포넌트별 사용방법",
    "이벤트의 종류 및 적용 방법",
    "Window, Action, Mouse, MouseMotion 이벤트",
    "Key, Focus, Item 이벤트",
  ],
  Python: [
    "파이썬의 개요, 특징 알아보기",
    "파이썬 자료형, 제어문",
    "프로그램 입력 및 출력 알아보기",
    "파이썬 정규 표현 알아보기",
    "파이썬 함수 알아보기",
    "파이썬 클래스 알아보기",
  ],
  AI: [
    "파이썬 라이브러리 실습",
    "크롤링,데이터분석,API",
    "AI 이론 학습 (인공지능,기계학습,딥러닝)",
    "KNN AI 실습",
    "선형회귀 AI 실습",
    "실제 AI 적용",
  ],
};

const makeSkillDescription = () => {
  const skillBox = document.querySelectorAll(".home__learn-skills__skill-box");

  let currentSkill = ""; //선택한 스킬 과목을 저장할 변수

  for (const box of skillBox) {
    const classList = box.className.split(" ");
    //box의 class명들을 하나의 문자열로 가져온 후, 스페이스바를 기준으로 나누어 배열로 가져옴
    // 과정이 헷갈린다면 console.log(classList를 통해 배열을 확인해보자.)

    if (classList.includes("selected")) {
      //요소의 클래스명에 selected가 있다면 선택된 요소이므로 요소의 text부분을 가져온다.
      //C가 선택되어 있다면 currentSkill이 C가 된다.
      currentSkill = box.textContent;
    }
  }

  //console.log(skillDescriptionContent[currentSkill]);
  //만들어두었던 skillDescriptionContent 객체를 활용해서 각 과목별 content를 가져올 수 있다.

  //forEach함수를 활용해서 배열안의 값과 인덱스를 동시에 활용해볼 수 있다.
  skillDescriptionContent[currentSkill].forEach((comment, idx) => {
    const curStep = document.querySelector(
      `.home__learn-skills__flex-box .step${idx + 1} p:nth-child(2)`
    );
    //css선택자를 활용하여 step안의 p태그 중 2번째를 선택할 수 있도록 한다.
    //백틱(`)으로 인덱스를 활용해서 몇스탭의 태그에 접근할 것인지 정할 수 있다.
    //이때 배열은 0부터 시작하므로 idx에 1을 더해줘서 스탭의 단계를 맞춰준다.

    //console.log(curStep)

    curStep.textContent = comment;
    // textContent의 내용을 배열안의 값으로 대체
  });
};

makeSkillDescription();

const skillBox = document.querySelectorAll(".home__learn-skills__skill-box");
//해당 클래스이름을 가진 요소들을 모두 가져옴

//배열로 가져오기때문에(4개) forEach를 통해서 하나씩 이벤트를 추가
skillBox.forEach((box) => {
  //addEventListener를 활용하면 선택한 요소에 여러가지 이벤트를 추가하는것이 가능하다.

  let skill = ""; //목표로할 skill을 저장

  box.addEventListener("click", (e) => {
    skill = e.target.textContent;
    const boxs = document.querySelectorAll(".home__learn-skills__skill-box");
    //각 과목들의 요소들을 모두 선택
    for (const box of boxs) {
      //박스의 텍스트가 선택된 텍스트와 일치한다면 class이름에 selected를 추가해준다.
      if (box.textContent === skill) {
        box.className = "home__learn-skills__skill-box selected";
      } else {
        box.className = "home__learn-skills__skill-box";
      }
    }

    makeSkillDescription();
    //변경된 내용에 따라 step멘트도 최신화
  });
});
