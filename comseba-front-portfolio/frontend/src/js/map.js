//map.js

const header = document.querySelector(".map__header");

header.addEventListener("click", () => {
  window.location.href = "/";
});

//map의 옵션을 정해준다.
const mapOptions = {
  center: new naver.maps.LatLng(37.3980292, 126.6438333),
  zoom: 14,
};

//map을 실제로 생성한다.
const map = new naver.maps.Map("map", mapOptions);

//지도에 마커표시
const marker = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.3980292, 126.6438333),
  map: map,
});
