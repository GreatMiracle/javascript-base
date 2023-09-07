function getData(endpoint, cb) {
  return new Promise((t, f) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', endpoint);
  
    xhr.onreadystatechange = function () { 
      if (this.readyState === 4) {
        if (this.status === 200) {
          t(JSON.parse(this.responseText));
        } else {
          f('Something went wrong');
        }
      }
    };
  
    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  })
}

// getData('./movies.json');
// getData('./actors.json');
// getData('./directors.json');
// getData('./movies.json', (data) => {
//   console.log(data);
//   getData('./actors.json', (data) => {
//     console.log(data);
//     getData('./directors.json', (data) => {
//       console.log(data);
//     });
//   });
// });

getData('./movies.json')
  .then((m) => {
    console.log(m);
    return getData('./actors.json');
  })
  .then((a) => {
    console.log(a);
    return getData('./directors.json');;
  })
  .then((d) => {
    console.log(d);
    return d;
  })
  .catch((error) => console.log(error));