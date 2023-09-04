
// replaceChild() Method
function replaceChildHeading() {
  const headerTag = document.querySelector('header');
  const h1Tag = document.querySelector('header h1');

  const h2Tag = document.createElement('h2');
  h2Tag.id = 'app-title';
  h2Tag.textContent = 'Shopping List 2';
  headerTag.replaceChild(h2Tag, h1Tag);
};

replaceChildHeading();



// replaceWith() Method
(function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child');

  const li = document.createElement('li');
  li.textContent = 'Replaced First';

  firstItem.replaceWith(li);
})();

// OuterHTML Property
function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)');

  secondItem.outerHTML = '<li>Replaced Second</li>';
};
replaceSecondItem();


// Replace All Items
function replaceAllItems() {
  const lis = document.querySelectorAll('li');

  // lis.forEach((item, index) => {
  //   // item.outerHTML = '<li>Replace All</li>';
  //   if (index === 1) {
  //     item.innerHTML = 'Second Item';
  //   } else {
  //     item.innerHTML = 'Replace All';
  //   }
  // });

  // lis.forEach(
  //   (item, index) =>
  //     (item.outerHTML = index === 1 ? '<li>Second Item</li>' : '<li>Item</li>')
  // );


  for (let i = 0; i <= lis.length; i++) {
    console.log('Number ' + i);
    const a= i+1;
    lis[i].outerHTML = "<li> Item" + a+ "</li>" ;
    
  }

};
replaceAllItems();


