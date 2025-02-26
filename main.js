const bgSection = document.querySelector('.bgSection');
const bgMobile = document.querySelector('.bgMobile');
const frame = bgSection.querySelector('#frame');
const panels = frame.querySelectorAll('.panels li');


const len = panels.length - 1;
const interval = 4000;
let vsNum = 0;
let timer = null;


window.onload = () => {
  startRolling();
};

//패널 활성화함수
function activation(index) {
  for (const el of panels) el.classList.remove('on');
  panels[index].classList.add('on');
  vsNum = index;
}
//롤링함수
function rolling() {
  vsNum < len ? vsNum++ : (vsNum = 0);
  activation(vsNum);
}
//롤링 시작 함수
function startRolling() {
  activation(vsNum);
  timer = setInterval(rolling, interval);
}

