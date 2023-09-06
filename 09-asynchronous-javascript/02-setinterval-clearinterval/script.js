// const intervalID = setInterval(myCallback, 1000, 'Hello');

// function myCallback(a) {
//   console.log(a, Date.now());
// }

let interValID;

function startChange() {
  if (!interValID) {
    interValID = setInterval(changeRandomColor, 1000);
    console.log(interValID);
  }
}

function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}

function stopChange() {
  clearInterval(interValID);
}

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');

startBtn.addEventListener('click', startChange);
stopBtn.addEventListener('click', stopChange);
