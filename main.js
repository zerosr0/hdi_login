let otpRegBtn = document.querySelector('.otpRegBtn');
let otpRegForm = document.querySelector('#otpReg');
let otpNumBtn = document.querySelector('.otpNumBtn');
let otpNumInput = document.querySelector('input.otpNum');
let notice = document.querySelector('.notice');
let imgQrCode = document.querySelector('#imgQrCode');
let btnCreateOtp = document.querySelector('#btnCreateOtp')
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

// window.addEventListener("resize", () => {
//   if (window.innerWidth >= 1200) {
//     bgSection.classList.add('on');
//     bgMobile.classList.remove('on');
//   } else {
//     bgMobile.classList.add('on');
//     bgSection.classList.remove('on');
//   }
// })

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

//OTP입력 버튼 클릭 시 OTP 입력 input창 토글& login 클래스 높이 자동 조정
otpNumBtn.addEventListener("click", () => {
  otpNumInput.classList.toggle("on");
  if (otpNumInput.classList.contains("on")) {
    otpNumBtn.style.color = '#eb2a31';
  } else {
    otpNumBtn.style.color = 'black';
  }
})

//OTP등록 버튼 클릭 시 OTP등록창 생성
otpRegBtn.addEventListener("click", () => {
  notice.classList.toggle("on");
  otpRegForm.classList.toggle("on");
  if (otpRegForm.classList.contains("on")) {
    otpRegBtn.style.color = '#eb2a31';
  } else {
    otpRegBtn.style.color = 'black';
  }
})

//OTP등록창에서 CREATE 버튼 클릭 시 이미지창 생성
btnCreateOtp.addEventListener("click", () => {
  imgQrCode.classList.add("on");
})