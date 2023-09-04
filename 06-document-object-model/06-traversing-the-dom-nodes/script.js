let output;

const parent = document.querySelector('.parent');

output1 = parent.childNodes;
output  = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;
output = parent.childNodes[3].innerText = 'Child One';
output = parent.childNodes[5].style.color = 'red';
output = parent.firstChild;
output = parent.lastChild;

parent.lastChild.textContent = 'Hello';


const child = document.querySelector('.child');

outputChild = child.parentNode;
outputChild = child.parentElement;

child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

const secondItem = document.querySelector('.child:nth-child(2)');

// output2 = secondItem.nextSibling;
output2 = secondItem.nextElementSibling;
// output2 = secondItem.previousSibling;

console.log(output1);
console.log(output);
console.log(outputChild);
console.log(output2);
