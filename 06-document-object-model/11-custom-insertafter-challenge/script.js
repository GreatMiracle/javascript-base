function insertAfter(newElement, existingElement) {
  const parentElement = existingElement.parentNode;
  if (existingElement.nextSibling) {
    parentElement.insertBefore(newElement, existingElement.nextSibling);
  } else {
    // If there is no next sibling, simply append the new element to the parent
    parentElement.appendChild(newElement);
  }
};

// Tạo một phần tử mới
const newElement = document.createElement('li');
newElement.textContent = 'New Item';

// Lấy phần tử hiện có mà bạn muốn đặt sau
const existingElement = document.querySelector('li:nth-child(1)');
console.log(existingElement);
insertAfter(newElement, existingElement);