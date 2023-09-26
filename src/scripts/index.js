
const form = document.forms.search;
const input = form.input;
const searchBtn = form.submit;
const tableItems = document.querySelectorAll('tr td:nth-child(1)');

input.addEventListener('input', removeSelection);
searchBtn.addEventListener('click', find);

function find(e) {
  removeSelection();
  e.preventDefault();

  let count = 0;
  const substr = input.value.toLowerCase();
  if (!substr) return;

  for (item of tableItems) {

    const text = item.textContent.toLowerCase();

    if (text.includes(substr)) {
      item.classList.add('selected');
      count++;
    }
  }

  input.value = '';
  outputInfo(count);
}

function removeSelection() {
  for (item of tableItems) {item.classList.remove('selected');}
  form.output.classList.remove('visible');
}

function outputInfo(count) {
  form.output.textContent = count ? `Найдено совпадений: ${count}` : 'Ничего не найдено'
  form.output.classList.add('visible');
}