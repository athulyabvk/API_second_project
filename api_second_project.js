var search = document.getElementById("search");
search.addEventListener("keyup", e=>{
    //console.log(e.target.value);
    var searchText=e.target.value;  
    getMovies(searchText);
});
function getMovies(searchText){
    const imdbApi=`http://www.omdbapi.com/?s=${searchText}&apikey=6c248d2f`;
    window
    .fetch(imdbApi)
    .then(movies => {
        movies.json()
        .then(data =>{
            const MovieData=data.Search;
            var output =[];
            for(let movie of MovieData){
                output += `
                <div class="container">
                    <section id="movies">
                        <h1>${movie.Title}</h1>
                        <span class="badge badge-success">${movie.Year}</span>
                        
                        <p>
                            <img src="${movie.Poster}" class="img-poster></img>
                            
                            <p>
                            <button type="button" class="btn btn-dark btn-block">Go To Movie</button>
                            </p>
                        </p>
                    </section>
                </div>
                `;
                document.getElementById("template").innerHTML = output;
            }
            //console.log(data.Search);
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
    //console.log(searchText);
}











