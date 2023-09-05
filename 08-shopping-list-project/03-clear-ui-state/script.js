const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemListUl = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');

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

// Event Listeners
checkUI();


