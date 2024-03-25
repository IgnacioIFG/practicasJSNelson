const colorContainer = document.querySelector('.color-container');
const colorCode = document.querySelector('.color-code');
const button = document.querySelector('.btn');

button.addEventListener('click', function() {
  const randomColor = getRandomColor();
  colorContainer.style.backgroundColor = randomColor;
  colorCode.textContent = randomColor;
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}