const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemListUl = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const formBtn = itemForm.querySelector('button');
let isEditMode = false;

function addItem(e) {
  e.preventDefault();
  const newItem = itemInput.value.trim();

  // Validate Input
  if (newItem === '') {
    alert('nhập alert đi bạn ei,');
    return;
  }

  if (isEditMode) {
    const itemEditMode = itemListUl.querySelector('.edit-mode');

    removeItemFromStorage(itemEditMode.textContent);
    itemEditMode.classList.remove('edit-mode');
    itemEditMode.remove();
  } else {
    if (checkIfItemExists(newItem)) {
      alert(`The item "${newItem}" already exists!`);
      return;
    }
  }

  // Create list item
  addItemToDOM(newItem);
  addItemToStorage(newItem);
  checkUI();

  itemInput.value = '';
}

function checkIfItemExists(item) {
  const itemIsExist = getItemsFromStorage();
  return itemIsExist.includes(item);
}

function addItemToDOM(item) {
  // Create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  itemListUl.appendChild(li);
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

function onClickItem(e) {
  //e.target = li vì nó lấy từ  itemListUl của document.

  if (e.target.parentElement.classList.contains('remove-item')) {
    // console.log(e.target);
    removeItem(e.target.parentElement.parentElement);
  } else if (e.target.closest('li')) {
    setItemToEdit(e.target);
    // console.log(e.target);
  }
}

function removeItem(item) {
  if (
    confirm(`Are you sure you want to remove the item "${item.textContent}"?`)
  ) {
    item.remove();
    removeItemFromStorage(item.textContent);
    checkUI();
  }
}

function setItemToEdit(item) {
  isEditMode = true;

  // itemListUl
  //   .querySelectorAll('li')
  //   .forEach((i) => i.classList.remove('edit-mode'));

  item.classList.add('edit-mode');

  formBtn.innerHTML = '<i class="fa-solid fa-pen"></i>   Update Item';
  formBtn.style.backgroundColor = 'green';

  itemInput.value = item.textContent;
}

function clearItems(e) {
  while (itemListUl.firstChild) {
    itemListUl.removeChild(itemListUl.firstChild);
  }
  checkUI();
}

function checkUI() {
  itemInput.value = '';

  const items = itemListUl.querySelectorAll('li');
  // console.log(items);
  if (items.length === 0) {
    // console.log('không có items nào.');
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    // console.log('có items.');
    clearBtn.style.display = 'block';
    itemFilter.style.display = 'block';
  }

  formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
  formBtn.style.backgroundColor = '#333';

  isEditMode = false;
}

function filterItems(e) {
  const items = itemListUl.querySelectorAll('li');
  const text = e.target.value.toLowerCase();

  items.forEach((element) => {
    const itemName = element.firstChild.textContent.toLowerCase();

    if (itemName.indexOf(text) != -1) {
      element.style.display = 'flex';
    } else {
      element.style.display = 'none';
    }
  });
}

function addItemToStorage(item) {
  const itemsFromStorage = getItemsFromStorage();

  itemsFromStorage.push(item);

  localStorage.setItem('addLS', JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage() {
  let itemsFromStorage;
  if (localStorage.getItem('addLS') === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem('addLS'));
  }
  return itemsFromStorage;
}

function displayItems() {
  const itemsFromStorage = getItemsFromStorage();

  itemsFromStorage.forEach((i) => addItemToDOM(i));

  checkUI();
}

function removeItemFromStorage(item) {
  let itemsFromStorage = getItemsFromStorage();
  if (item !== null) {
    itemsFromStorage = itemsFromStorage.filter((i) => i !== item);
    localStorage.setItem('addLS', JSON.stringify(itemsFromStorage));
  }
}

// Initialize app
function init() {
  // Event Listeners
  itemForm.addEventListener('submit', addItem);
  itemListUl.addEventListener('click', onClickItem);
  // itemListUl.addEventListener('click', removeItem);
  clearBtn.addEventListener('click', clearItems);
  itemFilter.addEventListener('input', filterItems);
  document.addEventListener('DOMContentLoaded', displayItems);

  checkUI();
  removeItemFromStorage();
}

init();
