const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemListUl = document.getElementById('item-list');

function addItem(e) {
  e.preventDefault();
  const newItem = itemInput.value;

  // Validate Input
  if (newItem === '') {
    alert('nhập alert đi bạn ei,');
    return;
  }

  // Create list item
  const newLi = document.createElement('li');
  newLi.appendChild(document.createTextNode(newItem));

  const button = createButton('remove-item btn-link text-red');

  newLi.appendChild(button);

  itemListUl.appendChild(newLi);
  itemInput.value = '';
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;

  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);

  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;

  return icon;
}

// Event Listeners
itemForm.addEventListener('submit', addItem);
