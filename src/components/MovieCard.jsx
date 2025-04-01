

function MovieCard({movie}) {


    function onFavouriteClick() {
        alert(movie.description)
    }

    return <div className="movie-card">
        <img src={movie.url} alt={movie.title} height={300} width={200}/>
        <div className="movie-overlay">
            <button className="favourite-btn" onClick={onFavouriteClick}>Click here ❤</button>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <h4> {movie.release_date} </h4>
            <p> {movie.description} </p>
        </div>
    </div>
}

export default MovieCard