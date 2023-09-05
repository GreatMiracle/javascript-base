const clearBtn = document.querySelector('#clear');

function onClear() {
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');
  
    // itemList.innerHTML = '';
  
    // items.forEach((item) => item.remove());
  
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }
  };

clearBtn.onclick = function() {
    alert('Clear Items');
} 

// clearBtn.onclick = function () {
//     console.log('Clear Items');
//   };


  // addEventListener()
// clearBtn.addEventListener('click', () =>alert('Clear Items'));

// // Gắn sự kiện click cho clearBtn để xóa danh sách
// clearBtn.addEventListener('click', onClear());


// clearBtn.addEventListener('click', () => {
//     alert('Clear Items');
//     onClear();
// });


// Gắn sự kiện click khác cho clearBtn để hiển thị thông báo
// setTimeout(() => clearBtn.removeEventListener('click', alert('Clear Items')), 5000);
// setTimeout(() => clearBtn.removeEventListener('click', onClear()), 5000);

// setTimeout(() => clearBtn.click(), 5000);