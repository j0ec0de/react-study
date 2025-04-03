import { toast, Toaster } from 'react-hot-toast';

function MovieCard({movie}) {


    const onFavouriteClick = () => {
        toast.success("Added to favourites");
    }

    return <div className="movie-card">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} height={200} width={150}/>
        <div className="movie-overlay">
            <button className="favourite-btn" onClick={onFavouriteClick}>❤</button>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <h4> {movie.release_date} </h4>
        </div>
    </div>
}

export default MovieCard