// Default Params
function registerUser(user) {
    // Old way - before using `=`
    if (!user) {
      user = 'Bot';
    }
  
    return user + ' is registered';
  }
  
  console.log(registerUser());
  
  // Rest Params
  function sum(...numbers) {
    let total = 0;
  
    for (const num of numbers) {
      total += num;
    }
  
    return total;
  }
  
  console.log(sum(1, 2, 3, 4, 5, 6, 100));
  
  // Objects as params
  function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`;
  }
  
  const user = {
    id: 1,
    name: 'John',
  };
  
//   console.log(loginUser(user));
  console.log(
    loginUser({
      id: 2,
      name: 'Sara',
    })
  );
  
  // Arrays as params
  function getRandom(arr) {
    const randomMath = Math.random();
    const randomIndex = Math.floor(randomMath * arr.length);
    console.log(randomMath);
    const item = arr[randomIndex];
    console.log(randomIndex);
    console.log(item);
  }
  
  getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  