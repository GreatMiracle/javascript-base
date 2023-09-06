// function toggle(e) {
//   e.target.classList.toggle('danger');
// }

// document.querySelector('button').addEventListener('click', getPosts);

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

const posts1 = [
  { title: 'Post 3', body: 'This is post 3' },
  { title: 'Post 4', body: 'This is post 4' },
];

const divParent = document.querySelector('#posts');

function getPosts() {
  setTimeout(createPostEverySecond(posts), 1000);
}

function createPostEverySecond(posts) {
  posts.forEach((element) => {
   

    const div = document.createElement('div');

    const strong = document.createElement('strong');
    const strongText = document.createTextNode(`${element.title} - ${element.body}`);
    strong.appendChild(strongText);

    div.appendChild(strong);
    divParent.appendChild(div);
  });
}

// document.querySelector('button').addEventListener('click', getPosts);

// getPosts();


function createPost(p, callBackFunc) {
  setTimeout(() => {
    p.forEach((element) => {
       posts.push(element);
    })
   
    console.log(posts);

    callBackFunc();
  }, 2000);
}


createPost(posts1, getPosts);