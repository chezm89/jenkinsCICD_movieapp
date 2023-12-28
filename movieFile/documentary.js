const apiKey = "625a71e3573f2ad27738f7b6ccd532ed";
const baseUrl = "https://api.themoviedb.org/3";
const apiURL = baseUrl + "/discover/movie?" + `api_key=${apiKey}&with_genres=99`;
const imgPosterUrl = "https://image.tmdb.org/t/p/original";
const mainTag = document.getElementById("moviemaincontainer");
const searchH1 = document.getElementById("mainh1")
const form = document.getElementById("form");
const search = document.getElementById("search")
const searchURL = baseUrl + "/search/movie?";

console.log(apiURL)

getMovies(apiURL);

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        showMovies(data.results);
    });
}

function showMovies(data) {
    moviemaincontainer.innerHTML = "";
    data.forEach(movie => {
        const {title, poster_path, release_date, overview} = movie;
        const movieE1 = document.createElement('div');
        movieE1.classList.add("movie");
        movieE1.innerHTML = `
        <div class="moviemain">
            <img src="${imgPosterUrl + poster_path}" alt="${title}">
            <div class="title">
                <h3>${title}</h3>
                <p class="year">Release Date: <strong>${release_date.substr(0,4)}</strong></p>
            </div>
            <div class="movie-overview">
                <p>${overview}</p>
            </div>
        `
        moviemaincontainer.appendChild(movieE1);
    })
}

//event listener for when button clicked
form.addEventListener("submit", (e) => {
    e.preventDefault();

    mainh1.innerHTML ="";

    let searchTerm = search.value;
    const newH1 = document.createElement('div');

    if(searchTerm) {
        getMovies(searchURL+"query="+searchTerm + `&api_key=${apiKey}`);
        mainh1.innerHTML =`
        <div class ="mainh1">
            <h1>You Searched For: ${searchTerm}</h1>
        </div>
        `
        mainh1.appendChild(newH1)

    }
})
