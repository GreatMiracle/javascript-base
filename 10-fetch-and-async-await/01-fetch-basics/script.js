// Fetching a JSON file
fetch('./movies.json')
  .then((response) => {
    return response.json();
  })
  .then((obj) => {
    console.log(obj);
  });

// Fetching a text file
fetch('./test.txt')
  .then((response) => response.text())
  .then((data) => console.log(data));

// Fetching from an API
fetch('https://api.github.com/users/GreatMiracle')
  .then((response) => response.json())
  .then((data) => {
    document.querySelector('h1').textContent = data.login;
    const imgTag = document.createElement('img');
    imgTag.setAttribute('src', data.avatar_url);
    imgTag.setAttribute('alt', '');
    document.querySelector('div').appendChild(imgTag);
  });
