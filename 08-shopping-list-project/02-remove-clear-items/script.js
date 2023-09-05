const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemListUl = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');

function removeItem(e) {
  console.log(e.target.parentElement.classList);
  if (e.target.parentElement.classList.contains('remove-item')) {
    e.target.parentElement.parentElement.remove();
  }
}

function clearItems(e) {
  while (itemListUl.firstChild) {
    itemListUl.removeChild(itemListUl.firstChild);
  }
}

// Event Listeners
itemListUl.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
