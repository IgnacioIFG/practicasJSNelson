const select = document.querySelector('#languageSelect');
const output = document.querySelector('#output');

select.addEventListener('change', function() {
  const selectedOption = select.options[select.selectedIndex].text;
  output.textContent = "El lenguaje elegido es: " + selectedOption;
});