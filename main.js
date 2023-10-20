const api_key = `8206b490bb080c4a5d3dfd083e2b914d`;
const apiUrl = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=' + api_key;

const fetchMovies = async () => {
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${api_key}`, 
      }
    });
    
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    const data = await response.json();

    const movieContainer = document.getElementById('movie-card-container');
    
    data.results.forEach(movie => {
      const card = document.createElement('div');
      card.classList.add('movie-card');
      card.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
        <h2>${movie.title}</h2>
        <p>${movie.overview}</p>
        <p>Rating: ${movie.vote_average}</p>`;
      
      card.setAttribute('data-movie-id', movie.id);
      
      card.addEventListener('click', () => {
        const movieId = card.getAttribute('data-movie-id');
        alert(`Clicked on movie with ID: ${movieId}`);
      });

      movieContainer.appendChild(card);
    });
  } catch (error) {
    console.error(error);
  }
};

fetchMovies();

//test


/*const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjA2YjQ5MGJiMDgwYzRhNWQzZGZkMDgzZTJiOTE0ZCIsInN1YiI6IjY1MzBlMDM3YzQzOWMwMDBmZThjMDEyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S3jqHMoGzbJnyIAeZoIRTLgdCWscCagPJIzZs-Ehl1U'
    }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

const movieContainer = document.getElementById("movie-card-container");
*/




/*
api-key 8206b490bb080c4a5d3dfd083e2b914d
API 읽기 액세스 토큰 eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjA2YjQ5MGJiMDgwYzRhNWQzZGZkMDgzZTJiOTE0ZCIsInN1YiI6IjY1MzBlMDM3YzQzOWMwMDBmZThjMDEyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S3jqHMoGzbJnyIAeZoIRTLgdCWscCagPJIzZs-Ehl1U
*/

/*

movies.forEach(movie => {
    const card = `
        <div class="movie-card">
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
      <h2>${movie.title}</h2>
      <p>${movie.overview}</p>
      <p>Rating: ${movie.vote_average}</p>
    </div>
  `;
    movieContainer.innerHTML += card;
});

const movieCards = document.querySelectorAll(".movie-card");

movieCards.forEach((card) => {
  card.addEventListener("click", () => {
    const movieId = card.getAttribute("data-movie-id"); // You can set a custom attribute for the movie ID
    alert(`Clicked on movie with ID: ${movieId}`);
  });
});

*/ 

/*
 <section>
        <h1>금주의 인기 영화 TOP7</h1>
        <div class="slide-container">
            <div class="slide_item1">1</div>
            <div class="slide_item2">2</div>
            <div class="slide_item3">3</div>
            <div class="slide_item4">4</div>
            <div class="slide_item5">5</div>
            <div class="slide_item6">6</div>
            <div class="slide_item7">7</div>
            <div class="slide-buttons">
                <div class="slide_prev_button slide_button">◀</div>
                <div class="slide_next_button slide_button">▶</div>
            </div>
        </div>
        <ul class="slide_pagination"></ul>
    </section>

    <section>
        <h1>실시간 채팅</h1>
        <div class="comment_block">
            <div class="comment_head">
                <input type="text" class="comment_name" placeholder="닉네임">
                <input type="password" class="comment_password" placeholder="암호">
            </div>

            <div class="comment_body">
                <div class="comment_content">
                    <textarea type="text" class="comment_text" placeholder="내용을 입력하세요."></textarea>
                </div>
                <div class="comment_submit">
                    <button type="button" id="commentSubmitButton">등록</button>
                </div>
            </div>
        </div>

        <div class="comment_list_block">
            댓글리스트
            <ul class="comment_list">
            </ul>
        </div>
    </section>

*/ 