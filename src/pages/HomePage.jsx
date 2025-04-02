import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const loadPopularMovies = async() => {
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies)
            } catch (err) {
                setError("Failed to load movies...")
            }
            finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])

    // state is something where once it's updated,  
    // the component will change and re-render 
    // itself to show the new state

    const handleSearch = () => {
        alert(searchQuery)
        searchQuery("")
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-bar">
                <input type="text" 
                    placeholder="search for movies..." 
                    className="search-input"
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) =>(
                    movie.title.toLowerCase().startsWith(searchQuery) && (
                        <MovieCard movie = {movie} key={movie.id} />
                    )
                ))}
            </div>
        </div>
    );
}

export default Home


