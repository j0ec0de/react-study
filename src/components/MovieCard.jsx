

function MovieCard({movie}) {


    function onFavouriteClick() {
        alert("Clicked button")
    }

    return <div className="movie-card">
        <img src={movie.url} alt={movie.title} height={300} width={200}/>
        <div className="movie-overlay">
            <button className="favourite-btn" onClick={onFavouriteClick}>Click here ❤</button>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p> {movie.description} </p>
        </div>
    </div>
}

export default MovieCard