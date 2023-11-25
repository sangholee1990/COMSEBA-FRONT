import express from "express";
//express 라이브러리를 가져옴
import path from "path";
import fs from "fs";
//fs 모듈을 통해서 파일들을 읽어오는것이 가능하다.

const __dirname = path.resolve();
//현재 파일 경로를 가져옴

const app = express();
//서버를 생성

app.use(express.static("frontend"));
//html파일들 안의 기본경로가 frontend로 설정되게 된다.
app.use(express.json());
// 서버에서 json을 해석할 수 있게해줌
app.use(express.urlencoded({ extended: true }));
//post요청 시 request.body를 가져올 수 있게 하는 옵션

const port = 80;
//url의 포트를 설정

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/frontend/src/html/home.html");
  //메인 페이지가 들어오는 경우 home과 연결
});

app.get("/guest", (req, res) => {
  res.sendFile(__dirname + "/frontend/src/html/guestBook.html");
  //서버 페이지가 들어오는 경우 guestBook에 연결
});

app.get("/map", (req, res) => {
  res.sendFile(__dirname + "/frontend/src/html/map.html");
  //서버 페이지가 들어오는 경우 guestBook에 연결
});

app.get("/comment", (req, res) => {
  const db = JSON.parse(fs.readFileSync("DB.json"));
  //readFile을 활용하면 버퍼 형태로 값을 가져오는데, JSON.parse로 감싸주면서 이를 json형태로 바꿔준다.
  res.json(db);
  //받아온 json을 그대로 전송해준다.
});

app.get("/map");

app.post("/createcomment", (req, res) => {
  const data = req.body;
  console.log(data);

  const db = JSON.parse(fs.readFileSync("DB.json"));
  //db를 읽어옴

  db.commentList.unshift(data);
  //db의 commentList에 data를 추가
  fs.writeFileSync("DB.json", JSON.stringify(db));
  //추가한 데이터를 db에 반영

  res.json(data);
  //받아온 json을 그대로 전송해준다.
  //큰 의미는 없고, 정상적으로 API를 반환했다는 표시
});

app.listen(port, () => {
  console.log(`server is listening at localhost: 80`);
});
//서버가 처음 생성되었을때 실행되는 함수
