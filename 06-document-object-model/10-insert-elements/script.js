/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/


// insertAdjacentElement Example
(function insertElement() {
  const filter = document.querySelector('.filter');

  const h1 = document.createElement('h1');
  h1.textContent = 'thêm phần tử beforebegin filter';

  filter.insertAdjacentElement('beforebegin', h1);
})();


// insertAdjacentText Example
(function insertText() {
  const item = document.querySelector('li:first-child');

  item.insertAdjacentText('beforebegin', 'thêm phần tử beforebegin li:first-child');
}
)();


// insertAdjacentHTML example
(function insertHTML() {
  const clearBtn = document.querySelector('#clear');

  clearBtn.insertAdjacentHTML('afterend', '<h2>thêm phần tử afterend clear</h2>');
})();

// insertBefore Example
(function insertBeforeItem() {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  li.textContent = 'insertBefore';

  const thirdItem = document.querySelector('li:nth-child(3)');

  ul.insertBefore(li, thirdItem);
})();
