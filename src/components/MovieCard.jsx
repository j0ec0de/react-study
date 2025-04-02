

function MovieCard({movie}) {


    function onFavouriteClick() {
        alert('clicked')
    }

    return <div className="movie-card">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} height={300} width={200}/>
        <div className="movie-overlay">
            <button className="favourite-btn" onClick={onFavouriteClick}>Click here ❤</button>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <h4> {movie.release_date} </h4>
        </div>
    </div>
}

export default MovieCard