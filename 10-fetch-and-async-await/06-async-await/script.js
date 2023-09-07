const promiseFunc = new Promise((rv, rj) => {
  setTimeout(() => {
    rv({ name: 'John', age: 20 });
  }, 2000);
});

// promiseFunc.then((data) => console.log(data));

async function getPromise() {
  const res = promiseFunc;
  console.log(res);
}

// getPromise();

async function getUser() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  console.log(data);
}

// getUser();

async function getPost() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    throw new Error('lồi rồi................');
  } catch (error) {
    console.log(error);
  }
}

// getPost();

const getPostArrowFunc = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  throw new Error('ArrowFunc Lỗi rồi................');
  console.log(data);
};
getPostArrowFunc().catch((err) => console.log(err));