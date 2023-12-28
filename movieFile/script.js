const apiKey = "625a71e3573f2ad27738f7b6ccd532ed";
const baseUrl = "https://api.themoviedb.org/3";
const apiURL = baseUrl + "/discover/movie?" + `api_key=${apiKey}`;
const imgPosterUrl = "https://image.tmdb.org/t/p/original";
const mainTag = document.getElementById("moviemaincontainer");
const searchH1 = document.getElementById("mainh1")
const form = document.getElementById("form");
const search = document.getElementById("search")
const searchURL = baseUrl + "/search/movie?";
const searchInput = document.getElementById("searchInput");


function getGenre() {
    



    switch(apiURL){
        case "action":
            apiURL = baseUrl + "/discover/movie?" + `api_key=${apiKey}&with_genres=28`;
            break;
        case "adventure" :
            apiURL = baseUrl + "/discover/movie?" + `api_key=${apiKey}&with_genres=12`;
            break;
        case "animation":
            apiURL = baseUrl + "/discover/movie?" + `api_key=${apiKey}&with_genres=16`;
            break;
        case "comedy":
            apiURL = baseUrl + "/discover/movie?" + `api_key=${apiKey}&with_genres=35`;
            break;
        case "crime":
            apiURL = baseUrl + "/discover/movie?" + `api_key=${apiKey}&with_genres=80`;
            break;
        case "documentary":
            apiURL = baseUrl + "/discover/movie?" + `api_key=${apiKey}&with_genres=99`;
            break;
        case "drama":
            apiURL = baseUrl + "/discover/movie?" + `api_key=${apiKey}&with_genres=18`;
            break;
        case "family":
            apiURL = baseUrl + "/discover/movie?" + `api_key=${apiKey}&with_genres=10751`;
            break;
        case "fantasy":
            apiURL = baseUrl + "/discover/movie?" + `api_key=${apiKey}&with_genres=14`;
            break;
        case "history":
            apiURL = baseUrl + "/discover/movie?" + `api_key=${apiKey}&with_genres=36`;
            break;
        case "horror":
            apiURL = baseUrl + "/discover/movie?" + `api_key=${apiKey}&with_genres=27`;
            break;
        case "music":
            apiURL = baseUrl + "/discover/movie?" + `api_key=${apiKey}&with_genres=10402`;
            break;
        case "mystery":
            apiURL = baseUrl + "/discover/movie?" + `api_key=${apiKey}&with_genres=9648`;
            break;
        case "romance":
            apiURL = baseUrl + "/discover/movie?" + `api_key=${apiKey}&with_genres=10749`;
            break;
        case "sciencefiction":
            apiURL = baseUrl + "/discover/movie?" + `api_key=${apiKey}&with_genres=878`;
            break;
        case "thriller":
            apiURL = baseUrl + "/discover/movie?" + `api_key=${apiKey}&with_genres=53`;
            break;
        case "tvmovie":
            apiURL = baseUrl + "/discover/movie?" + `api_key=${apiKey}&with_genres=10770`;
            break;
        case "war":
            apiURL = baseUrl + "/discover/movie?" + `api_key=${apiKey}&with_genres=10752`;
            break;
        case "western":
            apiURL = baseUrl + "/discover/movie?" + `api_key=${apiKey}&with_genres=37`;
            break;
        default: apiURL = baseUrl + "/discover/movie?" + `api_key=${apiKey}`;
    }
    
}





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

