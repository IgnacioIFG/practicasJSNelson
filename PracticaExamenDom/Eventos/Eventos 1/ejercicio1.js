const form = document.querySelector('#myForm');
const input = document.querySelector('#textInput');
const output = document.querySelector('#output');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe

  const text = input.value.trim();

  if (text.length < 5) {
    output.classList.add('error');
  } else {
    output.classList.remove('error');
  }

  output.textContent = text;
  input.value = '';
});