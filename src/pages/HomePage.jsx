import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import { Toaster } from 'react-hot-toast';

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

    const handleSearch = async (e) => {
        e.preventDefault();
        if(!searchQuery.trim()) return
        if(loading) return

        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to search movies")
        } finally {
            setLoading(false)
        }

        searchQuery("");
    }

    return (
        <div className="home">
            <Toaster position='bottom-center' reverseOrder={false} />
            <form onSubmit={handleSearch} className="search-bar">
                <input type="text" 
                    placeholder="search for movies..." 
                    className="search-input"
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-message"> {error} </div>}

            {loading ? (<div className="loading">loading...</div>
        
            ) : (<div className="movies-grid">
                    {movies.map((movie) =>(
                        movie.title.toLowerCase().startsWith(searchQuery) && (
                            <MovieCard movie = {movie} key={movie.id} />
                        )
                    ))}
                </div>)}

        </div>
    );
}

export default Home


