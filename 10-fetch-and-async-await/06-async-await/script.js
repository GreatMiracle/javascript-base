const promiseFunc = new Promise((rv, rj) => {
  setTimeout(() => {
    rv({ name: 'John', age: 20 })
  }, 2000);
})

promiseFunc.then((data) => console.log(data));