const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
const todoList = document.getElementById('todo-list');

const getTask = () => {
  fetch(apiUrl + '?_limit=10')
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        addTaskToDOM(element);
      });
    });
};

const addTaskToDOM = (element) => {
  const divTag = document.createElement('div');
  divTag.classList.add('todo');
  divTag.appendChild(document.createTextNode(element.title));
  divTag.setAttribute('data-id', element.id);

  if (element.completed) {
    divTag.classList.add('done');
  }

  todoList.appendChild(divTag);
};

const createTodo = (e) => {
  e.preventDefault();

  console.log(e.target.firstElementChild.value);

  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false,
  };

  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTodo),
  };

  fetch(apiUrl, option)
    .then((res) => res.json())
    .then((data) => addTaskToDOM(data));
};

const toggleCompleted = (e) => {
  // console.log(e.target.dataset.id);
  if (e.target.classList.contains('todo')) {
    e.target.classList.toggle('done');

    const idPost = e.target.dataset.id;
    const updatePost = e.target.classList.contains('todo');
    //   console.log(updatePost);
    updateTask(idPost, updatePost);
  }
};

const updateTask = (id, completedUpdate) => {
  const urlDetail = `${apiUrl}/${id}`;
  const optionUpdate = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ completed: completedUpdate }),
  };
  fetch(urlDetail, optionUpdate);
};

const deleteTodo = (e) => {
  if (e.target.classList.contains('todo')) {
    const idPost = e.target.dataset.id;
    const urlDetail = `${apiUrl}/${idPost}`;
    fetch(urlDetail, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => e.target.remove());
  }
};

const init = () => {
  document.addEventListener('DOMContentLoaded', getTask);

  document.querySelector('#todo-form').addEventListener('submit', createTodo);
  // document.addEventListener('DOMContentLoaded', createTodo);

  document
    .querySelector('#todo-list')
    .addEventListener('click', toggleCompleted);

  document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo);
};

init();
