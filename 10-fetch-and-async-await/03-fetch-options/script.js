const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

function createPost(post) {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // "Authorization": "Bearer ABC123" // Token xác thực (trong thực tế)
      token: 'abc123',
    },
    body: JSON.stringify(
      // post.title,
      // post.body,
      post
      ),
  };

  return fetch(url, option)
    .then((res) => res.json())
    .then((data) => {
      return console.log(data);
    });
}

createPost(posts);
// createPost({ title: 'My Post', body: 'This is my Post' });


