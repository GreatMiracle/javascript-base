const global = {
  currentPage: window.location.pathname,
  search: {
    term: '',
    type: '',
    page: 1,
    totalPages: 1,
  },
  api: {
    apiKey: '1cb840b0b4e6fdc6119f8f90363f18ff',
    apiUrl: 'https://api.themoviedb.org/3/',
  },
};
console.log(global.currentPage);

// Kiểm tra xem đường dẫn có tiền tố '/flixx-app/' hay không
if (global.currentPage.startsWith('/javascript-base/flixx-app/')) {
  // Cắt bỏ tiền tố '/flixx-app/'
  const newPath = global.currentPage.slice('/javascript-base/flixx-app'.length);
  global.currentPage = newPath;
  console.log(global.currentPage);
}

function hightLightActiveLink() {
  const links = document.querySelectorAll('.nav-link');

  links.forEach((link) => {
    let path = link.getAttribute('href');
    const newPath = path.slice('/javascript-base/flixx-app'.length);

    if (newPath === global.currentPage) {
      link.classList.add('active');
    }
  });
}

function showSpinner() {
  document.querySelector('.spinner').classList.add('show');
}

function hideSpinner() {
  document.querySelector('.spinner').classList.remove('show');
}

async function fetchAPIData(endpoint) {
  // const API_KEY = '1cb840b0b4e6fdc6119f8f90363f18ff';
  // const API_URL = 'https://api.themoviedb.org/3/';

  const API_KEY = global.api.apiKey;
  const API_URL = global.api.apiUrl;

  showSpinner();
  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
    // `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US`
  );

  const dataFromThemovie = await response.json();
  hideSpinner();
  console.log(dataFromThemovie);
  return dataFromThemovie;
}

function addCommasToNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Display 20 most popular movies
async function displayPopularMovies() {
  const { results } = await fetchAPIData('movie/popular');
  results.forEach((movie) => {
    const divTag = document.createElement('div');
    divTag.classList.add('card');
    divTag.innerHTML = `
          <a href="movie-details.html?id=${movie.id}">
            ${
              movie.poster_path
                ? `<img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />`
                : `<img
            src="../images/no-image.jpg"
            class="card-img-top"
            alt="${movie.title}"
          />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
          </div>
        `;

    document.querySelector('#popular-movies').appendChild(divTag);
  });
}

async function displayPopularTVShows() {
  const { results } = await fetchAPIData('tv/popular');
  results.forEach((show) => {
    const divTag = document.createElement('div');
    divTag.classList.add('card');
    divTag.innerHTML = `
          <a href="tv-details.html?id=${show.id}">
            ${
              show.poster_path
                ? `<img
              src="https://image.tmdb.org/t/p/w500${show.poster_path}"
              class="card-img-top"
              alt="${show.name}"
            />`
                : `<img
            src="../images/no-image.jpg"
            class="card-img-top"
            alt="${show.name}"
          />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${show.name}</h5>
            <p class="card-text">
              <small class="text-muted">Air Date: ${show.first_air_date}</small>
            </p>
          </div>
        `;

    document.querySelector('#popular-shows').appendChild(divTag);
  });
}

// Display Movie Details
async function displayMovieDetails() {
  const movieId = window.location.search.split('=')[1];
  console.log(movieId);

  const detail = await fetchAPIData(`movie/${movieId}`);
  console.log(detail);
  // Overlay for background image
  displayBackgroundImage('movie', detail.backdrop_path);
  const divTag = document.createElement('div');

  divTag.innerHTML = ` 
    <div class="details-top">
          <div>
         ${
           detail.poster_path
             ? `<img
         src="https://image.tmdb.org/t/p/w500${detail.poster_path}"
         class="card-img-top"
         alt="${detail.title}"
       />`
             : `<img
            src="../images/no-image.jpg"
            class="card-img-top"
            alt="${detail.title}"
          />`
         }
          </div>
          <div>
            <h2>${detail.title}</h2>
            <p>
              <i class="fas fa-star text-primary"></i>
              ${detail.vote_average.toFixed(1)} / 10 
            </p>
            <p class="text-muted">Release Date: ${detail.release_date}</p>
            <p>
            ${detail.overview}
            </p>
            <h5>Genres</h5>
            <ul class="list-group">
            ${detail.genres
              .map(
                (gen) =>
                  `<li><i class="fa fa-caret-right"></i> ${gen.name}</li>`
              )
              .join('')}
            </ul>
            <a href="${
              detail.homepage
            }" target="_blank" class="btn">Visit Movie Homepage</a>
          </div>
        </div>
        <div class="details-bottom">
          <h2>Movie Info</h2>
          <ul>
            <li><span class="text-secondary">Budget:</span> $${addCommasToNumber(
              detail.budget
            )}</li>
            <li><span class="text-secondary">Revenue:</span> $${detail.revenue.toLocaleString(
              detail.original_language
            )}</li>
            <li><span class="text-secondary">Runtime:</span> ${
              detail.runtime
            } minutes</li>
            <li><span class="text-secondary">Status:</span> ${
              detail.status
            }</li>
          </ul>
          <h4>Production Companies</h4>
          <div class="list-group">
          ${detail.production_companies
            .map((company) => `<span>${company.name}</span>`)
            .join(', ')}
          </div>
        </div>
    `;

  document.querySelector('#movie-details').appendChild(divTag);
}

// Display Show Details
async function displayShowDetails() {}

// Display Backdrop On Details Pages
function displayBackgroundImage(type, backgroundPath) {
  const overlayDiv = document.createElement('div');
  overlayDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${backgroundPath})`;
  overlayDiv.style.backgroundSize = 'cover';
  overlayDiv.style.backgroundPosition = 'center';
  overlayDiv.style.backgroundRepeat = 'no-repeat';
  overlayDiv.style.height = '100vh';
  overlayDiv.style.width = '100vw';
  overlayDiv.style.position = 'absolute';
  overlayDiv.style.top = '0';
  overlayDiv.style.left = '0';
  overlayDiv.style.zIndex = '-1';
  overlayDiv.style.opacity = '0.1';

  if (type === 'movie') {
    document.querySelector('#movie-details').appendChild(overlayDiv);
  } else {
    document.querySelector('#show-details').appendChild(overlayDiv);
  }
}

async function displayTVDetails() {
  const tvId = window.location.search.split('=')[1];

  const show = await fetchAPIData(`tv/${tvId}`);
  console.log(show);
  // Overlay for background image
  displayBackgroundImage('tv', show.backdrop_path);
  const divTag = document.createElement('div');

  divTag.innerHTML = ` 
  <div class="details-top">
  <div>
  ${
    show.poster_path
      ? `<img
    src="https://image.tmdb.org/t/p/w500${show.poster_path}"
    class="card-img-top"
    alt="${show.name}"
    />`
      : `<img
    src="../images/no-image.jpg"
    class="card-img-top"
    alt="${show.name}"
    />`
  }
      </div>
      <div>
        <h2>${show.name}</h2>
        <p>
          <i class="fas fa-star text-primary"></i>
          ${show.vote_average.toFixed(1)} / 10
        </p>
        <p class="text-muted">Last Air Date: ${show.last_air_date}</p>
        <p>
          ${show.overview}
        </p>
        <h5>Genres</h5>
        <ul class="list-group">
          ${show.genres
            .map(
              (genre) =>
                `<li><i class="fa fa-caret-right"></i> ${genre.name}</li>`
            )
            .join('')}
        </ul>
        <a href="${
          show.homepage
        }" target="_blank" class="btn">Visit show Homepage</a>
      </div>
    </div>
    <div class="details-bottom">
      <h2>Show Info</h2>
      <ul>
        <li><span class="text-secondary">Number of Episodes:</span> ${
          show.number_of_episodes
        }</li>
        <li><span class="text-secondary">Last Episode To Air:</span> ${
          show.last_episode_to_air.name
        }</li>
        <li><span class="text-secondary">Status:</span> ${show.status}</li>
      </ul>
      <h4>Production Companies</h4>
      <div class="list-group">
        ${show.production_companies
          .map((company) => `<span>${company.name}</span>`)
          .join(', ')}
      </div>
    </div>
      `;

  document.querySelector('#show-details').appendChild(divTag);
}

// Display Slider Movies
async function displaySlider() {
  const { results } = await fetchAPIData('movie/now_playing');
  console.log(results);

  results.forEach((movie) => {
    const div = document.createElement('div');
    div.classList.add('swiper-slide');

    div.innerHTML = `
      <a href="movie-details.html?id=${movie.id}">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
      </a>
      <h4 class="swiper-rating">
        <i class="fas fa-star text-secondary"></i> ${movie.vote_average} / 10
      </h4>
    `;

    document.querySelector('.swiper-wrapper').appendChild(div);
    initSwiper();
  });
}

function initSwiper() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      700: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
}

// Search Movies/Shows
async function search() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  global.search.type = urlParams.get('type');
  global.search.term = urlParams.get('search-term');

  console.log(global);
  if (global.search.term !== '' && global.search.term !== null) {
    const { results, total_pages, page } = await searchAPIData();


    console.log(results);

    if(results.length ===0){
      showAlert('No results found');
      return;
    }

    displaySearchResults(results);

    document.querySelector('#search-term').value='';

  } else {
    showAlert('Please enter a search term');
  }
}


function displaySearchResults(results) {
  results.forEach((result) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
          <a href="${global.search.type}-details.html?id=${result.id}">
            ${
              result.poster_path
                ? `<img
              src="https://image.tmdb.org/t/p/w500/${result.poster_path}"
              class="card-img-top"
              alt="${
                global.search.type === 'movie' ? result.title : result.name
              }"
            />`
                : `<img
            src="../images/no-image.jpg"
            class="card-img-top"
             alt="${
               global.search.type === 'movie' ? result.title : result.name
             }"
          />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${
              global.search.type === 'movie' ? result.title : result.name
            }</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${
                global.search.type === 'movie'
                  ? result.release_date
                  : result.first_air_date
              }</small>
            </p>
          </div>
        `;

    document.querySelector('#search-results').appendChild(div);
  });

}


// Show Alert
function showAlert(message, className) {
  const alertEl = document.createElement('div');
  alertEl.classList.add('alert', className);
  alertEl.appendChild(document.createTextNode(message));
  document.querySelector('#alert').appendChild(alertEl);

  setTimeout(() => alertEl.remove(), 3000);
}

// Make Request To Search
async function searchAPIData() {
  const API_KEY = global.api.apiKey;
  const API_URL = global.api.apiUrl;

  showSpinner();
  const response = await fetch(
    `${API_URL}/search/${global.search.type}?api_key=${API_KEY}&language=en-US&query=${global.search.term}`
    // `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US`
  );
  const dataFromThemovie = await response.json();
  // hideSpinner();
  console.log(dataFromThemovie);
  hideSpinner();
  return dataFromThemovie;
}

function init() {
  switch (global.currentPage) {
    case '/':
    case '/index.html':
      displaySlider();
      displayPopularMovies();
      break;
    case '/movie-details.html':
      displayMovieDetails();
      break;
    case '/search.html':
      search();
      break;
    case '/shows.html':
      displayPopularTVShows();
      break;
    case '/tv-details.html':
      displayTVDetails();
      break;
  }
  hightLightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);
