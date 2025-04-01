import MovieCard from "../components/MovieCard"
import { useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState('');

    const movies = [
        {id: 1, title: "John Wick", release_date: "2020", url: "", description: "good movie "},
        {id: 2, title: "Inception", release_date: "2019", url: ""},
        {id: 3, title: "Seven", release_date: "2015", url: ""},
        {id: 4, title: "Iron Man", release_date: "2024", url: ""}        
    ];

    // state is something where once it's updated,  
    // the component will change and re-render 
    // itself to show the new state

    const handleSearch = () => {

    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-bar">
                <input type="text" 
                    placeholder="search for movies..." 
                    className="search-input" 
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) =>(
                    <MovieCard movie = {movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Home


