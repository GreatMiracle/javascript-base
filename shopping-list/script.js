const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemListUl = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');

function addItem(e) {
  e.preventDefault();
  const newItem = itemInput.value.trim();

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

  checkUI();
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

function removeItem(e) {
  console.log(e.target.parentElement.classList);
  if (e.target.parentElement.classList.contains('remove-item')) {
    confirm(`Are you sure you want to remove the item "${e.target.parentElement.parentElement.textContent}"?`);
    e.target.parentElement.parentElement.remove();
    checkUI()
  }
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
  console.log(items);
  if (items.length === 0) {
    console.log('không có items nào.');
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    console.log('có items.');
    clearBtn.style.display = 'block';
    itemFilter.style.display = 'block';
  }
}


function filterItems(e) {
  const items = itemListUl.querySelectorAll('li');
  const text = e.target.value.toLowerCase();

  items.forEach(element => {
    const itemName = element.firstChild.textContent.toLowerCase();

    if(itemName.indexOf(text) != -1){
      element.style.display = 'flex';
    }else{
      element.style.display = 'none';
    }
    
  });

}



// Initialize app
function init() {
  // Event Listeners
  itemForm.addEventListener('submit', addItem);
  itemListUl.addEventListener('click', removeItem);
  clearBtn.addEventListener('click', clearItems);
  itemFilter.addEventListener('input', filterItems);

  checkUI();
}

init();
