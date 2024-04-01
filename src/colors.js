// 빨강, 초록, 검정, 하늘, 노랑, 주황, 분홍, 파랑,보라,
const color = [
  {
    name: "빨강",
    color: "red",
  },
  {
    name: "초록",
    color: "green",
  },
  {
    name: "검정",
    color: "black",
  },
  {
    name: "하늘",
    color: "aqua",
  },
  {
    name: "노랑",
    color: "gold",
  },
  {
    name: "주황",
    color: "orange",
  },
  {
    name: "분홍",
    color: "pink",
  },
  {
    name: "파랑",
    color: "Blue",
  },
  {
    name: "보라",
    color: "Purple",
  },
];

export default color;

export function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}
