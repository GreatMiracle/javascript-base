
// Khởi tạo đối tượng XMLHttpRequest
const xhr = new XMLHttpRequest();

// Sepcify method and endpoint/URL
// xhr.open('GET', './movies.json');
xhr.open('GET', 'https://api.github.com/users/bradtraversy/repos');

// readyState has 5 possible values
// - 0: request not initialized
// - 1: server connection established
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready

// Thiết lập sự kiện onreadystatechange để theo dõi trạng thái của yêu cầu
xhr.onreadystatechange = function () {

   // Kiểm tra xem yêu cầu đã hoàn tất và trạng thái là 4 (hoàn thành)
  if (this.readyState === 4 && this.status === 200) {
      console.log(JSON.parse(this.readyState));
      const data = JSON.parse(this.responseText);

      data.forEach((repo) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
        // li.innerHTML = `<strong>${repo.title}</strong> - ${repo.year}`;
        document.querySelector('#results').appendChild(li);
      });
    }
  };


  
// Send request
xhr.send();

