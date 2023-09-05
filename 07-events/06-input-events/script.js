const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const headingTag = document.querySelector('h1');

function onInput(e) {
    headingTag.textContent = e.target.value;
  // const inputValue = e.target.value;
  // console.log('IV:', inputValue);
  console.log('Input value:', heading.textContent);
}

function onFocus() {
  console.log('Input is focused');
  itemInput.style.outlineStyle = 'solid';
  itemInput.style.outlineWidth = '1px';
  itemInput.style.outlineColor = 'red';
}

function onBlur() {
  console.log('Input is not focused');
  itemInput.style.outlineStyle = 'none';
}

function onChecked(e) {
    const isChecked = e.target.checked;
    headingTag.textContent = isChecked ? 'Checked' : 'Not Checked';
}


// input, change, focus and blur events
itemInput.addEventListener('input', onInput);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
priorityInput.addEventListener('change', onInput);
checkbox.addEventListener('input', onChecked);