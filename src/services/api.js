const API_KEY = "9d34f791beaca460a9f23c28fbaf1423";
const BASE_URL = "https://www.themoviedb.org/3"


export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const searchMovies = async(query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
            query
        )}`
    )
    const data = await response.json();
    return data.results;
}