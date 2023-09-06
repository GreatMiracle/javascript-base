const button = document.querySelector('#cancel');

setTimeout(function () {
    console.log('Hello from callback');
  }, 2000);
  
  setTimeout(changeText, 3000);

function changeText() {
  document.querySelector('h1').textContent = 'đây là bài settimeout';
}


const timerId = setTimeout(changeText, 3000);

button.addEventListener('click', () => {
  console.log('vào hàm');
  clearTimeout(timerId)
  console.log('clear');
});


