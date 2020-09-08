let = colorBtn = document.querySelector('.colorBtn');
let = bodyBkg = document.querySelector('body');

const colors = ['yellow', 'red', 'green', '#fefefe'];

colorBtn.addEventListener('click',changeColor);

function changeColor() {
  // bodyBkg.style.backgroundColor = colors[2];
  let random = Math.floor(Math.random() * colors.length)
  bodyBkg.style.backgroundColor = colors[random];
}
