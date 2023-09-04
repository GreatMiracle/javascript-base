let output;

// Get child elements from a parent

const parent = document.querySelector('.parent');
output = parent.children;
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[0].nodeName;

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';
// parent.style.border = '1px solid #ccc';

parent.firstElementChild.innerText = 'kien';
parent.lastElementChild.innerText = 'last';


const child = document.querySelector('.child');
childOutput = child.parentElement;
childOutput.parentElement.style.border = '1px solid #ccc';
childOutput.parentElement.style.padding = '10px';

const secondItem = document.querySelector('.child:nth-child(2)');
output2 = secondItem;
secondItem.nextElementSibling.innerText = 'kien3';
secondItem.nextElementSibling.style.color = 'green';
secondItem.previousElementSibling.style.color = 'orange';

console.log( output);
console.log(parent);
console.log(childOutput);
console.log(output2);
