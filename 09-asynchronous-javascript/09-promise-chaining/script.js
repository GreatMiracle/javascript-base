function promiseFunc(anyABC) {
  return new Promise((t, f) => {
    setTimeout(() => {
      if (true) {
        
        if(anyABC === 'kien'){
          console.log('gọi tiêp hàm promise: ==> ');
          t({ name: 'ABC', age: 25 });
        }else{
         
          t({ name: 'John', age: 30 });
        }
      } else {
        f('Err: đây là reject');
      }

      
    }, 2000);
  });
}

promiseFunc()
  .then((info) => {
    console.log(info);
    return info;
  })
  .then((getName) => {
    console.log(getName);
    return getName.name;
  })
  .then((nameLength) => {
    
    promiseFunc('kien')
      .then((abc)=> {
        console.log(abc);
        return abc;
      })
      .then((nameInfo) => {
        console.log(nameInfo.name);
        return nameInfo.name;
      })
      .then((nameABCLength) => {
        console.log(`độ dài của tên:  ${nameABCLength.length} `);
      })
  
    console.log(nameLength.length);
    return nameLength.length;
  })
  .then((nameLength) => {
    return `độ dài của tên:  ${nameLength} `;
  })
  .catch((e) => {
    console.log(e);
    return 123;
  })
  .then((x) => console.log('This will run no matter what', x));
